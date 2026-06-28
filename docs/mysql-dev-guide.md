# Sandbox MySQL 开发指南

当前项目使用 Prisma 管理 MySQL schema，本地基础设施通过 Docker Compose 启动 MySQL 和 Redis。本文是 sandbox 数据库操作补充说明，不替代 `apps/server/prisma/schema.prisma` 和 `rules/server.md`。

注意：

1. 仅允许操作 sandbox 数据库（每服务独立库/schema）。
2. 数据库密码不得提交到 Git；本地放 `.env.sandbox.local`，集群里放 per-service Secret。
3. 当前项目建表/改表优先修改 `apps/server/prisma/schema.prisma`，并执行 `pnpm --filter @app/server prisma:migrate`。
4. 当前仓库未提供 `sql/` 目录和 `scripts/mysql-migrate.sh`；不要在未补齐流程前把它们作为强制入口。
5. 执行 SQL 前说明影响范围；DROP、TRUNCATE、大范围 DELETE 需用户确认。

Secret key 必须与应用读取的环境变量名一致：
`SANDBOX_MYSQL_HOST/PORT/DATABASE/USERNAME/PASSWORD`。
