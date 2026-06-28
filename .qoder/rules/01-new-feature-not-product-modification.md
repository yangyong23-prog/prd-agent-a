# 新功能开发，不直接改老产品

所有客户需求均按当前 Monorepo 内的新功能开发处理。即使老产品通过小改即可实现，也不要直接改老产品代码；需要老产品能力时，通过已登记的测试环境接口调用。

必须明确：
- 新功能落点：`apps/web`、`apps/server`、`packages/api-contract`、`packages/config` 或 `packages/shared`；
- 新功能访问路径或接口路径；
- 调用哪些老产品测试接口；
- 是否需要调整 Prisma schema；
- 不直接读取老产品数据库。
