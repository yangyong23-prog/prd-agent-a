import type { GatewayHeadersInit } from "../gateway.js";

/**
 * JSON 基础值类型，用于描述 OpenAPI 中未细化 schema 的字段。
 */
export type JsonPrimitive = string | number | boolean | null;

/**
 * JSON 对象类型，用于描述可序列化的结构化对象。
 */
export type JsonObject = { [key: string]: JsonValue };

/**
 * JSON 值类型，用于作为 product API 默认响应类型。
 */
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];

/**
 * product API 单次调用的可选配置。
 */
export type ProductApiCallOptions = {
  /** 追加请求头；相同 key 会覆盖默认网关鉴权请求头。 */
  headers?: GatewayHeadersInit;
};
