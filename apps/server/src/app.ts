import sensible from "@fastify/sensible";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import Fastify, { type FastifyInstance, type FastifyRequest } from "fastify";
import { readFileSync } from "node:fs";
import { fileURLToPath, URL } from "node:url";
import "./types/fastify.js";
import { loadServerConfig, type ServerConfig } from "./config/env.js";
import { tenantPlugin } from "./plugins/tenant.js";
import { registerAuthRoutes } from "./routes/auth.js";
import { registerHealthRoutes } from "./routes/health.js";
import { registerTenantRoutes } from "./routes/tenant.js";
import { registerTodoRoutes } from "./routes/todos.js";
import {
  createTodoService,
  type TodoService,
} from "./services/todoService.js";

const rootPackage = JSON.parse(
  readFileSync(fileURLToPath(new URL("../../../package.json", import.meta.url)), "utf8"),
) as { name: string };
const prefixedApiBasePath = `/${rootPackage.name}-server`;

/**
 * Fastify 应用可替换依赖，主要用于测试时注入 mock 服务。
 */
export type AppDependencies = {
  todoService?: TodoService;
};

/**
 * 注册 API 路由及其前缀版本。
 */
async function registerApiRoutes(
  app: FastifyInstance,
  dependencies: Required<AppDependencies>,
) {
  await registerHealthRoutes(app);
  await registerAuthRoutes(app);
  await registerTenantRoutes(app);
  await registerTodoRoutes(app, dependencies.todoService);
}

/**
 * 创建 Fastify 服务实例并注入共享依赖。
 */
export async function buildApp(
  config: ServerConfig = loadServerConfig(),
  dependencies: AppDependencies = {},
) {
  const resolvedDependencies: Required<AppDependencies> = {
    todoService: dependencies.todoService ?? createTodoService(config.database.url),
  };
  const requestStartedAt = new WeakMap<FastifyRequest, bigint>();
  const app = Fastify({
    logger: {
      level: config.NODE_ENV === "test" ? "silent" : "info",
    },
  });

  app.addHook("onRequest", (request, _reply, done) => {
    requestStartedAt.set(request, process.hrtime.bigint());
    done();
  });
  app.addHook("onResponse", (request, reply, done) => {
    const startedAt = requestStartedAt.get(request);
    const durationMs = startedAt
      ? Number(process.hrtime.bigint() - startedAt) / 1_000_000
      : undefined;

    request.log.info(
      {
        durationMs: durationMs ? Number(durationMs.toFixed(2)) : undefined,
        method: request.method,
        remoteAddress: request.ip,
        reqId: request.id,
        statusCode: reply.statusCode,
        url: request.url,
      },
      "access log",
    );
    done();
  });

  await app.register(sensible);
  await app.register(swagger, {
    openapi: {
      info: {
        title: "Admin API",
        version: "0.1.0",
      },
    },
  });
  await app.register(swaggerUi, {
    routePrefix: "/docs",
  });
  await app.register(tenantPlugin);

  await registerApiRoutes(app, resolvedDependencies);
  await app.register(
    async (prefixedApp) => {
      await registerApiRoutes(prefixedApp, resolvedDependencies);
    },
    {
      prefix: prefixedApiBasePath,
    },
  );

  return app;
}
