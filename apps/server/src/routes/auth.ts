import type { FastifyInstance } from "fastify";
import {
  loginRequestSchema,
  loginResponseSchema,
} from "@app/api-contract";

/**
 * 注册开发态认证路由。
 *
 * 当前实现用于脚手架演示，会根据请求租户生成可预测的开发 token。
 */
export async function registerAuthRoutes(app: FastifyInstance) {
  app.post("/auth/login", async (request, reply) => {
    const payload = loginRequestSchema.parse(request.body);

    const user = {
      id: "demo-user",
      name: payload.username,
      roles: ["admin"],
      tenantId: payload.tenantId,
    };

    return reply.send(
      loginResponseSchema.parse({
        accessToken: `dev-access-token:${user.tenantId}:${user.id}`,
        refreshToken: `dev-refresh-token:${user.tenantId}:${user.id}`,
        user,
      }),
    );
  });
}
