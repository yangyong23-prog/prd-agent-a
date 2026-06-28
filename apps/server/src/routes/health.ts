import type { FastifyInstance } from "fastify";
import { healthResponseSchema } from "@app/api-contract";

/**
 * 注册健康检查路由，供本地开发、网关和部署探针检测服务状态。
 */
export async function registerHealthRoutes(app: FastifyInstance) {
  app.get("/health", async () => {
    return healthResponseSchema.parse({
      status: "ok",
      service: "server",
      timestamp: new Date().toISOString(),
    });
  });
}
