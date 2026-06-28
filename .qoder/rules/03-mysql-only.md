# 数据库与中间件使用规则

当前项目已实现 MySQL + Prisma，并在本地基础设施中包含 Redis。不要把从 sandbox 单服务模板复制来的“仅开放 MySQL”理解为当前仓库事实。

允许：
- 使用 Prisma schema 和 `pnpm --filter @app/server prisma:migrate` 管理当前项目数据库结构；
- 使用 `pnpm db:up` 启动本地 MySQL 和 Redis；
- 在明确获得用户授权时，连接当前项目允许的本地或 sandbox 数据库执行验证。

禁止：
- 访问老产品数据库；
- 访问生产数据库；
- 将 MySQL 密码提交到 Git、文档、日志、通知中；
- 未经确认执行 DROP、TRUNCATE、大范围 DELETE。

执行数据库变更前应输出影响范围。涉及 destructive SQL 时必须先获得用户确认。执行后应输出结果和回滚建议。
