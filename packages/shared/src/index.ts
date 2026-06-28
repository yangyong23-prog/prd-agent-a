/**
 * 租户请求头名称，前后端和测试代码必须复用该常量，避免硬编码不一致。
 */
export const TENANT_HEADER = "x-tenant-id";

/**
 * 请求上下文中的租户身份信息。
 */
export type TenantContext = {
  tenantId: string;
  userId?: string;
  roles: string[];
};

/**
 * 校验并规范化租户 ID。
 *
 * @param value 待校验的租户 ID。
 * @returns 去除首尾空白后的租户 ID。
 * @throws 当租户 ID 为空时抛出错误。
 */
export function requireTenantId(value: string | undefined): string {
  if (!value || value.trim().length === 0) {
    throw new Error("Tenant id is required");
  }

  return value.trim();
}

export {
  requestGateway,
} from "./gateway.js";
export type {
  GatewayConfig,
  GatewayHeadersInit,
  GatewayQuery,
  GatewayQueryValue,
  GatewayRequestOptions,
} from "./gateway.js";
export {
  createDataServiceApi,
} from "./product-apis/data-service.js";
export {
  createPhysicalWorldServiceApi,
} from "./product-apis/physical-world-service.js";
export {
  createRiskDataServiceApi,
} from "./product-apis/risk-data-service.js";
export {
  createWorkOrderServiceApi,
} from "./product-apis/work-order-service.js";
export type {
  JsonObject,
  JsonPrimitive,
  JsonValue,
  ProductApiCallOptions,
} from "./product-apis/types.js";
export type {
  DataServiceApi,
} from "./product-apis/data-service.js";
export type {
  PhysicalWorldServiceApi,
} from "./product-apis/physical-world-service.js";
export type {
  RiskDataServiceApi,
} from "./product-apis/risk-data-service.js";
export type {
  WorkOrderServiceApi,
} from "./product-apis/work-order-service.js";
