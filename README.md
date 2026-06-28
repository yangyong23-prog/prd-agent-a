# Fastify Vue 管理后台 Monorepo

> 如果你是**非研发人员**，请直接阅读 [《使用手册-非研发人员.md》](./使用手册-非研发人员.md)，不必从本 README 入手。

这是一个面向企业后台业务的全栈脚手架，采用 `pnpm workspace` + `turbo` 管理 Monorepo。

技术栈包括：

- 后端：`Fastify` + `TypeScript`
- 前端：`Vue3` + `Vite` + `Vue Router`
- UI：`meri-plus` + `Tailwind CSS`
- 数据库：`MySQL 8` + `Prisma`
- 接口契约：`Zod`
- 测试：`Vitest`

## 目录结构

```txt
apps/
  web/         Vue 管理后台
  server/      Fastify API 服务
packages/
  api-contract/  前后端共享接口 schema、DTO、类型
  shared/        通用常量、类型、纯函数
  eslint-config/ 统一 ESLint 配置
  tsconfig/      统一 TypeScript 配置
infra/
  docker/      MySQL、Redis 本地开发环境
  nginx/       Nginx 反向代理示例
docs/          架构说明和运行手册
```

## 快速开始

```bash
pnpm install
cp apps/server/.env.example apps/server/.env
pnpm --filter @app/server prisma:generate
pnpm dev
```

默认地址：

- 前端：`http://127.0.0.1:3200`
- 后端：`http://127.0.0.1:3201`
- Swagger：`http://127.0.0.1:3201/docs`

## 本地基础设施

启动 MySQL 和 Redis：

```bash
pnpm db:up
```

或者直接使用 Docker Compose：

```bash
docker compose -f infra/docker/docker-compose.yml up -d
```

数据库相关命令：

```bash
pnpm --filter @app/server prisma:generate
pnpm --filter @app/server prisma:migrate
```

## 常用命令

```bash
pnpm dev          # 同时启动 web 和 server
pnpm dev:web      # 只启动前端
pnpm dev:server   # 只启动后端
pnpm build        # 构建所有应用和包
pnpm typecheck    # 类型检查
pnpm lint         # ESLint 检查
pnpm test         # 运行测试
```

## 测试策略

`apps/server` 放服务端自身测试，优先使用 `Fastify.inject()` 做快速半集成测试。

`apps/web` 放前端自身测试，当前使用 `Vitest` 验证路由和前端基础逻辑。

## 多租户约定

当前脚手架按“共享库共享表”模型设计：

- 业务表默认包含 `tenant_id`
- 后端通过请求上下文解析当前租户
- 查询逻辑应通过 service 或 repository 统一注入租户条件
- 高频查询和唯一约束优先设计为 `(tenant_id, 业务字段)`
- 前端不应直接决定核心数据查询使用哪个租户

`packages/shared` 中提供了租户请求头常量和基础租户上下文类型。

## 参考文档

更多说明见：

- [架构说明](docs/architecture.md)
- [运行手册](docs/runbook.md)

## Sandbox / Qoder 补充资料

仓库中包含从 sandbox 服务模板同步来的 `.qoder/`、`templates/` 和部分 `docs/` 资料，用于约束需要调用外部业务线接口、编写研发 Review 交接说明、自测报告或 sandbox 部署说明的场景。

这些资料是当前 Monorepo 的补充约束，不替代本 README、`AGENTS.md`、`rules/web.md`、`rules/server.md` 中定义的项目事实。若补充资料与当前实现不一致，以当前实现为准：

- 当前项目是 `apps/web` + `apps/server` 的 pnpm/turbo Monorepo，不是单服务初始化模板。
- 当前项目本地基础设施包含 MySQL；Redis 容器仍保留，但**业务代码禁止依赖 Redis**（详见 `.qoder/rules/03-mysql-only.md` 与 `AI-DEVELOPMENT-SPEC.md` § 3.15）。
- 当前项目数据库迁移入口是 Prisma：`pnpm --filter @app/server prisma:migrate`。
- Forgejo Actions（`.gitea/workflows/build_deploy.yml`）与 K8s 部署文件（`k8s/k8s_env_config.yml`、`k8s/ci-infra/templates/k8s_deploy.yaml`）已实装；sandbox 日志脚本与 `/version` 接口仍未内置，需要时再补齐。
