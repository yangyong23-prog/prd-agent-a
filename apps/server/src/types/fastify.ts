import type { TenantContext } from "@app/shared";

declare module "fastify" {
  interface FastifyRequest {
    tenantContext?: TenantContext;
  }
}

export {};
