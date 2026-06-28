import fp from "fastify-plugin";
import { readFileSync } from "node:fs";
import { fileURLToPath, URL } from "node:url";
import { requireTenantId, TENANT_HEADER } from "@app/shared";

const rootPackage = JSON.parse(
  readFileSync(fileURLToPath(new URL("../../../../package.json", import.meta.url)), "utf8"),
) as { name: string };
const prefixedApiBasePath = `/${rootPackage.name}-server`;

/**
 * 解析租户请求头并写入 Fastify request 上下文。
 *
 * 健康检查、文档和登录路由保持公开，其余业务路由必须携带租户头。
 */
export const tenantPlugin = fp(async (app) => {
  app.addHook("preHandler", async (request) => {
    const publicRoutes = ["/health", "/docs", "/docs/json", "/auth/login"];
    const publicRoutePrefixes = [
      ...publicRoutes,
      ...publicRoutes.map((path) => `${prefixedApiBasePath}${path}`),
    ];

    if (publicRoutePrefixes.some((path) => request.url.startsWith(path))) {
      return;
    }

    const rawTenantId = request.headers[TENANT_HEADER];
    const tenantId = requireTenantId(
      Array.isArray(rawTenantId) ? rawTenantId[0] : rawTenantId,
    );

    request.tenantContext = {
      tenantId,
      roles: [],
    };
  });
});
