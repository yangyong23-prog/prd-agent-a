# Sandbox 补充开发边界

本文件是当前 Vue + Fastify Monorepo 的 sandbox 补充规则。若本文件与 `AGENTS.md`、`rules/web.md`、`rules/server.md` 或当前代码实现冲突，以当前项目实现为准。

允许：
- 在 `apps/web` 开发 Vue3 页面和前端交互；
- 在 `apps/server` 开发 Fastify 路由、插件和服务端逻辑；
- 通过 Prisma 维护当前项目数据库 schema；
- 使用当前项目已存在的本地 MySQL 和 Redis 基础设施；
- 在明确需要老产品能力时，调用 `docs/product-apis/allowed-api-list.md` 中登记的老产品测试环境接口。

禁止：
- 直接修改老产品核心代码；
- 直接读取或写入老产品数据库；
- 调用老产品生产环境接口；
- 提交数据库密码、Token、Secret 到 Git；
- 在未补齐实现前，把 Forgejo Actions、K8S 部署、sandbox 日志脚本、`/version` 接口当作当前项目已具备能力。
