# 配置管理说明

## Summary

当前项目运行时配置统一使用环境变量管理，不再使用 `packages/config/configs/*.yaml`。
产品网关配置也通过环境变量注入，符合 `docs/product-apis/data-service` 对 BaseURL、Token 和租户字段的约束。

## 配置分层

| 范围 | 位置 | 用途 | 是否提交 |
| --- | --- | --- | --- |
| 本地真实运行配置 | `.env.sandbox.local` | 本地开发连接远程 MySQL、Redis，以及前端开发请求头 | 否 |
| 本地通用覆盖 | `.env` | 可选的本机通用覆盖配置 | 否 |
| 统一示例 | `.env.example` | MySQL、服务端基础运行参数、产品网关与前端开发请求头示例 | 是 |
| 部署配置模板 | `k8s/**`、`infra/**` | 部署、容器、环境模板 | 是 |
| 工程配置 | `tsconfig.json`、`eslint.config.js`、`vite.config.ts` 等 | 构建、类型检查、Lint、开发服务器 | 是 |

## 加载顺序

`packages/config` 的运行时配置加载顺序为：

1. 仓库根目录 `.env`
2. 仓库根目录 `.env.sandbox.local`
3. 当前进程 `process.env`

后加载的值覆盖先加载的值，因此命令行或 CI 注入的 `process.env` 优先级最高。

服务端通过 `apps/server/src/config/env.ts` 读取 `@app/config`，并派生：

- `database.url`：由 `MYSQL_HOST`、`MYSQL_PORT`、`MYSQL_USERNAME`、`MYSQL_PASSWORD`、`MYSQL_DATABASE` 拼接。
- `application.gateway`：由 `GW_BASE_URL`、`GW_TOKEN`、`GW_GROUP_CODE`、`GW_PROJECT_ID` 组成，用于服务端调用产品网关。

前端开发服务器通过 `apps/web/vite.config.ts` 读取：

1. 仓库根目录 `.env`
2. 仓库根目录 `.env.sandbox.local`
3. 当前进程 `process.env`

并在开发模式通过 `/dev-config.js` 注入请求头。

## 当前数据库配置

本地开发使用远程 MySQL：

```env
MYSQL_HOST=172.19.0.123
MYSQL_PORT=9934
MYSQL_USERNAME=root
MYSQL_DATABASE=sandbox
```

`MYSQL_PASSWORD` 属于敏感信息，只能放在本地 `.env.sandbox.local` 或安全的运行环境变量中，不得提交。

## 当前产品网关配置

本地开发使用测试网关：

```env
GW_BASE_URL=https://qa-gw.meos.net.cn
GW_GROUP_CODE=XNJT
GW_PROJECT_ID=Pj1101050060
```

`GW_TOKEN` 属于敏感信息，只能放在本地 `.env.sandbox.local` 或安全的运行环境变量中，不得提交。调用 `docs/product-apis/data-service` 下的接口时，只允许请求测试环境。前端和后端都应复用 `@app/shared` 导出的 `requestGateway` 发起网关请求，各自从环境变量加载并传入网关配置。

`docs/product-apis` 下已登记的业务线已封装为 `@app/shared` 中的请求对象：

```ts
import {
  createDataServiceApi,
  createPhysicalWorldServiceApi,
  createRiskDataServiceApi,
  createWorkOrderServiceApi,
} from "@app/shared";

const dataServiceApi = createDataServiceApi(gatewayConfig);
await dataServiceApi.rwdIpcalPointQueryInfoPointPeroid([
  "Eq3204020001fe652d74590542e5bf2b111ed905c922",
]);
```

后续新增或同步其他 `docs/product-apis/*` 目录后，执行以下命令重新生成请求对象，避免在业务代码中分散维护接口路径和网关请求头：

```bash
pnpm product-apis:generate
```

## 命名规则

- 数据库、服务端基础运行参数使用普通环境变量名，例如 `MYSQL_HOST`、`HOST`、`PORT`。
- 产品网关配置使用 `GW_` 前缀，例如 `GW_BASE_URL`、`GW_TOKEN`、`GW_GROUP_CODE`、`GW_PROJECT_ID`。
- 前端构建期暴露给浏览器的变量必须使用 `VITE_` 前缀。
- 仅用于本地调试请求头的变量使用 `DEV_` 前缀，例如 `DEV_REQUEST_TOKEN`、`DEV_TENANT_ID`。
- 敏感信息不得写入 YAML、文档、示例真实值、Git 提交或截图。

## 变更流程

新增运行时配置时按以下顺序修改：

1. 在 `packages/config/src/schema.ts` 增加 schema、默认值和类型。
2. 在 `packages/config/src/loader.ts` 映射到结构化配置。
3. 如果服务端需要派生 URL 或运行参数，在 `apps/server/src/config/env.ts` 统一处理。
4. 更新根目录 `.env.example`。
5. 更新相关测试。

推荐验证命令：

```bash
pnpm --filter @app/config test
pnpm --filter @app/config typecheck
pnpm --filter @app/server test
pnpm --filter @app/server typecheck
pnpm --filter @app/web test
pnpm --filter @app/web typecheck
```

## 禁止事项

- 不再向 `packages/config/configs` 添加 YAML 配置。
- 不把数据库密码、Token、Redis 密码等敏感信息提交到仓库。
- 不在业务代码中分散读取同一个环境变量；优先通过统一配置入口读取。
- 不恢复 Nacos 配置、访问或注册逻辑。
