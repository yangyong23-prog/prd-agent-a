import {
  type CreateTodoRequest,
  type HealthResponse,
  type LoginRequest,
  type LoginResponse,
  type TodoItem,
  type TodoListResponse,
  type UpdateTodoRequest,
  todoItemSchema,
  todoListResponseSchema,
  createTodoRequestSchema,
  healthResponseSchema,
  loginResponseSchema,
  updateTodoRequestSchema,
} from "@app/api-contract";
import {
  createDataServiceApi,
  requestGateway as requestSharedGateway,
  TENANT_HEADER,
  type GatewayRequestOptions,
} from "@app/shared";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? __API_BASE_URL__;
const gatewayBaseUrl = __GW_BASE_URL__;

type RequestHeaderRecord = Record<string, string>;
const gatewayInfoPointPeriodExampleObjectIds = [
  "Eq3204020001fe652d74590542e5bf2b111ed905c922",
];

/**
 * 合并开发环境头、调用方头和默认 JSON content-type。
 */
function devRequestHeaders(): RequestHeaderRecord {
  if (!import.meta.env.DEV) return {};

  return (globalThis as typeof globalThis & {
    __DEV_REQUEST_HEADERS__?: RequestHeaderRecord;
  }).__DEV_REQUEST_HEADERS__ ?? {};
}

/**
 * 合并请求头，调用方同名 header 会覆盖默认值。
 */
export function mergeRequestHeaders(
  headers?: HeadersInit,
  developmentHeaders: RequestHeaderRecord = devRequestHeaders(),
  includeJsonContentType = true,
): Headers {
  const mergedHeaders = new Headers(developmentHeaders);

  if (includeJsonContentType) {
    mergedHeaders.set("content-type", "application/json");
  }

  new Headers(headers).forEach((value, key) => {
    mergedHeaders.set(key, value);
  });

  return mergedHeaders;
}

/**
 * 发起前端到后端应用的标准请求。
 */
async function request<T>(
  path: string,
  init: RequestInit,
  parse: (value: unknown) => T,
): Promise<T> {
  const includeJsonContentType = init.body !== undefined;
  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...init,
    headers: mergeRequestHeaders(
      init.headers,
      devRequestHeaders(),
      includeJsonContentType,
    ),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return parse(await response.json());
}

/**
 * 发起无响应体的前端到后端应用请求。
 */
async function requestNoContent(path: string, init: RequestInit): Promise<void> {
  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...init,
    headers: mergeRequestHeaders(init.headers, devRequestHeaders(), false),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
}

function gatewayRequestHeaders(): RequestHeaderRecord {
  return __GW_REQUEST_HEADERS__;
}

function gatewayConfig() {
  if (!gatewayBaseUrl) {
    throw new Error("GW_BASE_URL is required.");
  }

  const headers = gatewayRequestHeaders();

  return {
    baseUrl: gatewayBaseUrl,
    token: headers.token ?? "",
    groupCode: headers["group-code"] ?? "",
    projectId: headers["project-id"] ?? "",
  };
}

/**
 * 通过共享网关请求器向产品网关发起请求。
 */
export async function requestGateway<T = unknown>(
  options: GatewayRequestOptions,
): Promise<T> {
  return requestSharedGateway<T>(gatewayConfig(), options);
}

/**
 * 调用 data-service 的 queryInfoPointPeroid 接口。
 *
 * 示例页面固定提供一组测试设备 ID，不再暴露手动输入框。
 */
export function queryGatewayInfoPointPeriod(): Promise<unknown> {
  return createDataServiceApi(gatewayConfig()).rwdIpcalPointQueryInfoPointPeroid(
    gatewayInfoPointPeriodExampleObjectIds,
  );
}

/**
 * 请求后端健康检查接口。
 */
export function getHealth(): Promise<HealthResponse> {
  return request("/health", { method: "GET" }, (value) =>
    healthResponseSchema.parse(value),
  );
}

/**
 * 请求后端登录接口，并将租户 ID 同步写入租户请求头。
 */
export function login(payload: LoginRequest): Promise<LoginResponse> {
  return request(
    "/auth/login",
    {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        [TENANT_HEADER]: payload.tenantId,
      },
    },
    (value) => loginResponseSchema.parse(value),
  );
}

/**
 * 查询当前租户下的 Todo 列表。
 */
export function listTodos(): Promise<TodoListResponse> {
  return request("/todos", { method: "GET" }, (value) =>
    todoListResponseSchema.parse(value),
  );
}

/**
 * 创建当前租户下的 Todo。
 */
export function createTodo(payload: CreateTodoRequest): Promise<TodoItem> {
  const parsedPayload = createTodoRequestSchema.parse(payload);

  return request(
    "/todos",
    {
      method: "POST",
      body: JSON.stringify(parsedPayload),
    },
    (value) => todoItemSchema.parse(value),
  );
}

/**
 * 更新当前租户下指定 Todo 的标题或完成状态。
 */
export function updateTodo(
  id: number,
  payload: UpdateTodoRequest,
): Promise<TodoItem> {
  const parsedPayload = updateTodoRequestSchema.parse(payload);

  return request(
    `/todos/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify(parsedPayload),
    },
    (value) => todoItemSchema.parse(value),
  );
}

/**
 * 删除当前租户下指定 Todo。
 */
export function deleteTodo(id: number): Promise<void> {
  return requestNoContent(`/todos/${id}`, { method: "DELETE" });
}
