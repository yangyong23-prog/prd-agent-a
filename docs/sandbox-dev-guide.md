# Sandbox 开发指南

> 当前项目是 Vue + Fastify pnpm/turbo Monorepo。本文仅作为接入 sandbox 流程时的参考；如果本文与当前 README、AGENTS.md 或代码实现冲突，以当前项目实现为准。

## 创建新服务

1. 如需创建新的 sandbox 单服务仓库，可从 Forgejo 模板仓库 `sandbox-service-template` 创建新仓库（独立仓库）。
2. Clone 新仓库。
3. 用 Qoder 打开项目根目录。
4. 如果目标仓库提供初始化脚本，再执行 `scripts/init-new-service.sh <service> <owner> [需求名]` 或 PowerShell 脚本初始化；当前仓库未提供该脚本。
5. 配置 `.env.sandbox.local`（不要提交）。
6. 请平台完成“服务注册”（见 service-registration.md）。
7. 使用 Quest 专家团 + Spec-driven 输入需求开发。
8. 若已接入 Forgejo Actions，Push 到 `main` 可触发自动构建部署；当前仓库暂未内置该流程。

## 访问地址

- 页面：`https://sandbox.meos.center/<service>`
- 版本：`https://sandbox.meos.center/<service>/version`
- 健康：`https://sandbox.meos.center/<service>/health`

## 版本查看

页面底部版本信息、`/version` 接口、钉钉上线通知、K8S Label/Annotation 仅在当前项目已实现或明确接入 sandbox 部署时要求。
