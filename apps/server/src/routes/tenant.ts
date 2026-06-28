import type { FastifyInstance } from "fastify";

/**
 * 注册当前租户查询路由，返回租户插件解析出的请求上下文。
 */
export async function registerTenantRoutes(app: FastifyInstance) {
  app.get("/tenants/current", async (request) => {
    return {
      tenantId: request.tenantContext?.tenantId,
      scope: "shared-table",
    };
  });
}
