import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const workspaceRoot = new URL("..", import.meta.url).pathname;
const productApisRoot = join(workspaceRoot, "docs/product-apis");
const outputRoot = join(workspaceRoot, "packages/shared/src/product-apis");
const httpMethods = new Set(["get", "post", "put", "patch", "delete"]);

/** 将 kebab-case、路径片段或 schema 名称转换为 PascalCase。 */
function toPascalCase(value) {
  const result = String(value)
    .replace(/[{}]/g, " empty object ")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  return result || "Value";
}

/** 将路径转换为稳定的方法名。 */
function toMethodName(apiPath) {
  const pascalName = apiPath.split("/").filter(Boolean).map(toPascalCase).join("");
  const methodName = pascalName.charAt(0).toLowerCase() + pascalName.slice(1);

  return /^[a-zA-Z_$]/.test(methodName) ? methodName : `request${methodName}`;
}

/** 清理 OpenAPI 注释文本，保证生成结果仍是合法 JSDoc。 */
function sanitizeComment(value) {
  return String(value || "")
    .replace(/\*\//g, "* /")
    .replace(/<[^>]*>/g, "")
    .trim();
}

/** 缩进多行类型定义，保持生成代码可读。 */
function indentLines(value, indent) {
  return value
    .split("\n")
    .map((line) => (line ? `${" ".repeat(indent)}${line}` : line))
    .join("\n");
}

/** 读取 OpenAPI operation 描述中的网关服务名前缀。 */
function getServicePrefix(operation) {
  const description = sanitizeComment(operation.description || "");
  const match = description.match(/服务名:([^\s]+)/);

  return match ? `/${match[1].replace(/<.*$/, "")}` : "";
}

/** 从 api-list.md 读取已经补齐网关服务名前缀的接口路径。 */
function readDocumentedGatewayPaths(serviceDir) {
  const apiListPath = join(productApisRoot, serviceDir, "api-list.md");
  if (!existsSync(apiListPath)) return new Map();

  const content = readFileSync(apiListPath, "utf8");
  const gatewayPaths = new Map();
  const apiListRowPattern = /\| `([A-Z]+)` \| `([^`]+)` \|/g;

  for (const match of content.matchAll(apiListRowPattern)) {
    const [, method, documentedPath] = match;
    const candidates = gatewayPaths.get(method) || [];
    candidates.push(documentedPath);
    gatewayPaths.set(method, candidates);
  }

  return gatewayPaths;
}

/** 优先使用接口清单中的完整路径，清单缺失时回退到 OpenAPI 描述中的服务名前缀。 */
function resolveGatewayPath(documentedGatewayPaths, method, apiPath, operation) {
  const documentedMatches = (documentedGatewayPaths.get(method) || [])
    .filter((documentedPath) => documentedPath.endsWith(apiPath));

  if (documentedMatches.length === 1) return documentedMatches[0];

  return `${getServicePrefix(operation)}${apiPath}`;
}

/** 创建单个 OpenAPI 文件的生成上下文。 */
function createGeneratorContext(serviceDir, openapi) {
  const servicePascalName = toPascalCase(serviceDir);
  const schemaNameMap = new Map();
  const referencedSchemaNames = new Set();

  function safeTypeName(name) {
    if (!schemaNameMap.has(name)) {
      let baseName = `${servicePascalName}${toPascalCase(name)}`;
      if (!/^[A-Za-z_$]/.test(baseName)) baseName = `${servicePascalName}Schema${baseName}`;

      let candidate = baseName;
      let index = 2;
      const usedNames = new Set(schemaNameMap.values());
      while (usedNames.has(candidate)) {
        candidate = `${baseName}${index++}`;
      }

      schemaNameMap.set(name, candidate);
    }

    return schemaNameMap.get(name);
  }

  Object.keys(openapi.components?.schemas || {}).forEach(safeTypeName);

  function refType(ref) {
    const schemaName = decodeURIComponent(ref.split("/").pop());
    referencedSchemaNames.add(schemaName);
    return safeTypeName(schemaName);
  }

  function typeFromSchema(schema, indent = 0, fallback = "JsonValue") {
    if (!schema) return fallback;
    if (schema.$ref) return refType(schema.$ref);
    if (schema.oneOf?.length) return schema.oneOf.map((item) => typeFromSchema(item, indent)).join(" | ");
    if (schema.anyOf?.length) return schema.anyOf.map((item) => typeFromSchema(item, indent)).join(" | ");
    if (schema.allOf?.length) return schema.allOf.map((item) => typeFromSchema(item, indent)).join(" & ");
    if (schema.enum?.length) return schema.enum.map((value) => JSON.stringify(value)).join(" | ");

    const schemaType = Array.isArray(schema.type)
      ? schema.type.find((item) => item !== "null")
      : schema.type;

    switch (schemaType) {
      case "string":
        return "string";
      case "integer":
      case "number":
        return "number";
      case "boolean":
        return "boolean";
      case "array":
        return `${typeFromSchema(schema.items, indent, "JsonValue")}[]`;
      case "object":
        return objectType(schema, indent);
      default:
        if (schema.properties) return objectType({ ...schema, type: "object" }, indent);
        return fallback;
    }
  }

  function objectType(schema, indent = 0) {
    const properties = Object.entries(schema.properties || {});
    const requiredFields = new Set(schema.required || []);
    const additionalProperties = schema.additionalProperties;
    const childIndent = indent + 2;

    if (properties.length === 0) {
      if (additionalProperties && typeof additionalProperties === "object") {
        return `Record<string, ${typeFromSchema(additionalProperties, indent, "JsonValue")}>`;
      }
      if (additionalProperties === true) return "JsonObject";
      return "Record<string, never>";
    }

    const propertyLines = properties.flatMap(([key, propertySchema]) => {
      const propertyName = /^[A-Za-z_$][\w$]*$/.test(key) ? key : JSON.stringify(key);
      const optionalFlag = requiredFields.has(key) ? "" : "?";
      const description = sanitizeComment(propertySchema.description || "");
      const type = typeFromSchema(propertySchema, childIndent, "JsonValue");
      const lines = [];

      if (description) {
        lines.push(`${" ".repeat(childIndent)}/** ${description} */`);
      }

      lines.push(`${" ".repeat(childIndent)}${propertyName}${optionalFlag}: ${type};`);
      return lines;
    });

    if (additionalProperties && typeof additionalProperties === "object" && properties.length === 0) {
      propertyLines.push(
        `${" ".repeat(childIndent)}[key: string]: ${typeFromSchema(additionalProperties, childIndent, "JsonValue")};`,
      );
    }

    return `{\n${propertyLines.join("\n")}\n${" ".repeat(indent)}}`;
  }

  return {
    servicePascalName,
    referencedSchemaNames,
    safeTypeName,
    typeFromSchema,
  };
}

/** 获取 operation 的 JSON requestBody schema。 */
function requestBodySchema(operation) {
  return operation.requestBody?.content?.["application/json"]?.schema;
}

/** 获取需要由调用方传入的 query 参数，groupCode/projectId 由 GatewayConfig 自动注入。 */
function userQueryParameters(operation) {
  return (operation.parameters || [])
    .filter((parameter) => parameter.in === "query")
    .filter((parameter) => !["groupCode", "projectId"].includes(parameter.name));
}

/** 生成由 GatewayConfig 自动注入的 query 表达式。 */
function autoQueryExpression(operation) {
  const queryParts = [];
  const queryParameters = (operation.parameters || []).filter((parameter) => parameter.in === "query");

  if (queryParameters.some((parameter) => parameter.name === "groupCode")) {
    queryParts.push("groupCode: config.groupCode");
  }
  if (queryParameters.some((parameter) => parameter.name === "projectId")) {
    queryParts.push("projectId: config.projectId");
  }

  return queryParts.length ? `{ ${queryParts.join(", ")} }` : null;
}

/** 将 query 参数列表转换为命名类型。 */
function queryTypeFromParameters(context, typeName, parameters) {
  const lines = parameters.map((parameter) => {
    const propertyName = /^[A-Za-z_$][\w$]*$/.test(parameter.name)
      ? parameter.name
      : JSON.stringify(parameter.name);
    const optionalFlag = parameter.required ? "" : "?";
    const description = sanitizeComment(parameter.description || parameter.name);
    const type = context.typeFromSchema(parameter.schema, 2, "JsonValue");

    return `  /** ${description} */\n  ${propertyName}${optionalFlag}: ${type};`;
  });

  return `/**\n * ${typeName} 查询参数。\n */\nexport type ${typeName} = {\n${lines.join("\n")}\n};`;
}

/** 生成单个方法实现。 */
function methodCode(endpoint) {
  const optionalUserQuery = endpoint.userQueryParams.length > 0
    && endpoint.userQueryParams.every((parameter) => !parameter.required);
  const queryExpression = endpoint.userQueryType
    ? endpoint.autoQueryExpression
      ? `{ ...${endpoint.autoQueryExpression}, ...query }`
      : "query"
    : endpoint.autoQueryExpression;

  const requestProperties = [
    `path: ${JSON.stringify(endpoint.gatewayPath)}`,
    `method: ${JSON.stringify(endpoint.method)}`,
  ];

  if (queryExpression) requestProperties.push(`query: ${queryExpression}`);
  if (endpoint.bodyType) requestProperties.push("body");
  requestProperties.push("headers: options.headers");

  const requestBlock = requestProperties.map((line) => `      ${line},`).join("\n");
  const commentLines = [
    "  /**",
    `   * 接口说明：${endpoint.summary}`,
    "   *",
  ];

  if (endpoint.autoQueryExpression) {
    commentLines.push("   * groupCode 和 projectId 会从 GatewayConfig 自动注入到 query。");
    commentLines.push("   *");
  }

  commentLines.push("   * 来源：docs/product-apis/" + endpoint.serviceDir + "/openapi.json");
  commentLines.push(`   * HTTP：${endpoint.method} ${endpoint.apiPath}`);
  commentLines.push("   */");

  const parameters = [];
  if (endpoint.bodyType) parameters.push(`body: ${endpoint.bodyType}`);
  if (endpoint.userQueryType) {
    parameters.push(
      optionalUserQuery
        ? `query: ${endpoint.userQueryType} = {}`
        : `query: ${endpoint.userQueryType}`,
    );
  }
  parameters.push("options: ProductApiCallOptions = {}");

  return `${commentLines.join("\n")}\n  ${endpoint.methodName}<T = JsonValue>(\n${parameters
    .map((parameter) => `    ${parameter},`)
    .join("\n")}\n  ): Promise<T> {\n    return requestGateway<T>(config, {\n${requestBlock}\n    });\n  }`;
}

/** 生成一个业务线目录对应的共享请求对象。 */
function generateServiceClient(serviceDir) {
  const openapiPath = join(productApisRoot, serviceDir, "openapi.json");
  const openapi = JSON.parse(readFileSync(openapiPath, "utf8"));
  const documentedGatewayPaths = readDocumentedGatewayPaths(serviceDir);
  const context = createGeneratorContext(serviceDir, openapi);
  const endpoints = [];
  const usedMethodNames = new Set();

  for (const [apiPath, pathItem] of Object.entries(openapi.paths || {})) {
    for (const [rawMethod, operation] of Object.entries(pathItem || {})) {
      if (!httpMethods.has(rawMethod)) continue;

      const method = rawMethod.toUpperCase();
      let methodName = toMethodName(apiPath);
      if (usedMethodNames.has(methodName)) methodName = `${methodName}${method}`;
      usedMethodNames.add(methodName);

      const bodySchema = requestBodySchema(operation);
      const userQueryParams = userQueryParameters(operation);
      const methodPascalName = toPascalCase(methodName);
      const bodyType = bodySchema
        ? `${context.servicePascalName}${methodPascalName}Body`
        : null;
      const userQueryType = userQueryParams.length
        ? `${context.servicePascalName}${methodPascalName}Query`
        : null;

      endpoints.push({
        serviceDir,
        methodName,
        method,
        apiPath,
        gatewayPath: resolveGatewayPath(documentedGatewayPaths, method, apiPath, operation),
        summary: sanitizeComment(operation.summary || operation.description || `${method} ${apiPath}`),
        bodySchema,
        bodyType,
        userQueryParams,
        userQueryType,
        autoQueryExpression: autoQueryExpression(operation),
      });
    }
  }

  endpoints.sort((first, second) => first.methodName.localeCompare(second.methodName));

  const componentTypes = Object.entries(openapi.components?.schemas || {})
    .map(([schemaName, schema]) => {
      const typeName = context.safeTypeName(schemaName);
      const description = sanitizeComment(schema.description || schemaName);
      return `/**\n * OpenAPI 组件类型：${description}\n *\n * 来源：docs/product-apis/${serviceDir}/openapi.json#/components/schemas/${schemaName}\n */\nexport type ${typeName} = ${context.typeFromSchema(schema)};`;
    })
    .join("\n\n");
  const declaredSchemaNames = new Set(Object.keys(openapi.components?.schemas || {}));
  const fallbackRefTypes = [...context.referencedSchemaNames]
    .filter((schemaName) => !declaredSchemaNames.has(schemaName))
    .sort()
    .map((schemaName) => `/**\n * OpenAPI 缺失组件的兜底类型：${schemaName}\n *\n * 来源：docs/product-apis/${serviceDir}/openapi.json#/components/schemas/${schemaName}\n */\nexport type ${context.safeTypeName(schemaName)} = JsonValue;`)
    .join("\n\n");

  const queryTypes = endpoints
    .filter((endpoint) => endpoint.userQueryType)
    .map((endpoint) => queryTypeFromParameters(context, endpoint.userQueryType, endpoint.userQueryParams))
    .join("\n\n");

  const bodyTypes = endpoints
    .filter((endpoint) => endpoint.bodyType)
    .map((endpoint) => `/**\n * ${endpoint.method} ${endpoint.apiPath} 的请求体。\n */\nexport type ${endpoint.bodyType} = ${context.typeFromSchema(endpoint.bodySchema)};`)
    .join("\n\n");

  const factoryName = `create${context.servicePascalName}Api`;
  const apiTypeName = `${context.servicePascalName}Api`;
  const methods = endpoints.map(methodCode).join(",\n\n");
  const content = `import {\n  requestGateway,\n  type GatewayConfig,\n} from \"../gateway.js\";\nimport type {\n  JsonValue,\n  ProductApiCallOptions,\n} from \"./types.js\";\n\n${componentTypes}\n${fallbackRefTypes ? `\n${fallbackRefTypes}\n` : ""}${queryTypes ? `\n${queryTypes}\n` : ""}${bodyTypes ? `\n${bodyTypes}\n` : ""}\n/**\n * docs/product-apis/${serviceDir} 对应的请求对象类型。\n */\nexport type ${apiTypeName} = ReturnType<typeof ${factoryName}>;\n\n/**\n * 创建 ${serviceDir} 请求对象，所有方法都会复用统一网关配置和鉴权请求头。\n */\nexport function ${factoryName}(config: GatewayConfig) {\n  return {\n${methods}\n  };\n}\n`;

  writeFileSync(join(outputRoot, `${serviceDir}.ts`), content);

  return {
    serviceDir,
    factoryName,
    apiTypeName,
    methods: endpoints.length,
  };
}

mkdirSync(outputRoot, { recursive: true });

const services = readdirSync(productApisRoot)
  .filter((entry) => existsSync(join(productApisRoot, entry, "openapi.json")))
  .sort();

const results = services.map(generateServiceClient);
for (const result of results) {
  console.log(`${result.serviceDir}: ${result.methods} methods -> ${result.factoryName}`);
}
