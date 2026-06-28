/**
 * 产品网关连接配置，由各运行时从环境变量加载后传入。
 */
export type GatewayConfig = {
  /** 产品网关基础地址，例如 https://qa-gw.meos.net.cn。 */
  baseUrl: string;
  /** 产品网关鉴权 token，必须来自本地或部署环境变量。 */
  token: string;
  /** 租户集团编码，会作为 group-code 请求头发送。 */
  groupCode: string;
  /** 租户项目 ID，会作为 project-id 请求头发送。 */
  projectId: string;
};

type GatewayMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

/**
 * 共享网关客户端支持的请求头入参，避免直接依赖 DOM 的 HeadersInit 类型别名。
 */
export type GatewayHeadersInit =
  | Headers
  | [string, string][]
  | Record<string, string>;

/**
 * product API query 参数支持的基础值类型。
 */
export type GatewayQueryValue = string | number | boolean | null | undefined;

/**
 * 会被序列化为 URL search params 的 query 对象。
 */
export type GatewayQuery = Record<
  string,
  GatewayQueryValue | GatewayQueryValue[]
>;

/**
 * 跨浏览器与 Node 运行时复用的网关请求参数。
 */
export type GatewayRequestOptions = {
  path: string;
  method?: GatewayMethod;
  body?: unknown;
  query?: GatewayQuery;
  headers?: GatewayHeadersInit;
};

function gatewayUrl(
  baseUrl: string,
  path: string,
  query?: GatewayQuery,
): string {
  const url = new URL(path, baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`);

  Object.entries(query ?? {}).forEach(([key, rawValue]) => {
    const values = Array.isArray(rawValue) ? rawValue : [rawValue];

    values.forEach((value) => {
      if (value === null || value === undefined) return;

      url.searchParams.append(key, String(value));
    });
  });

  return url.toString();
}

function gatewayHeaders(
  config: GatewayConfig,
  headers?: GatewayHeadersInit,
  includeJsonContentType = true,
): Headers {
  const mergedHeaders = new Headers({
    token: config.token,
    "group-code": config.groupCode,
    "project-id": config.projectId,
  });

  if (includeJsonContentType) {
    mergedHeaders.set("content-type", "application/json");
  }

  new Headers(headers).forEach((value, key) => {
    mergedHeaders.set(key, value);
  });

  return mergedHeaders;
}

/**
 * 使用环境变量派生的网关配置发送产品接口请求。
 *
 * 该方法不依赖 Vue、Fastify 等运行时框架，可同时被浏览器端和 Node 服务端复用。
 */
export async function requestGateway<T = unknown>(
  config: GatewayConfig,
  options: GatewayRequestOptions,
): Promise<T> {
  const method = options.method ?? "POST";
  const body = options.body === undefined ? undefined : JSON.stringify(options.body);
  const response = await fetch(gatewayUrl(config.baseUrl, options.path, options.query), {
    method,
    body,
    headers: gatewayHeaders(config, options.headers, body !== undefined),
  });

  if (!response.ok) {
    throw new Error(`Gateway request failed with status ${response.status}`);
  }

  return await response.json() as T;
}
