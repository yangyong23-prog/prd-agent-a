# Forgejo 模板仓库创建与更新说明

> 当前项目是 Vue + Fastify pnpm/turbo Monorepo，不是 `sandbox-service-template` 单服务模板。本文仅作为后续将当前项目改造成 Forgejo 模板或接入 sandbox 模板流程时的参考，不代表当前仓库已具备对应脚本、Actions 或部署能力。

## 模板仓库地址

`https://gitea.meos.plus/sandbox/sandbox-service-template`

## 平台维护者初始化模板仓库

```bash
git clone https://gitea.meos.plus/sandbox/sandbox-service-template.git
cd sandbox-service-template
# 将本模板包中的文件复制到该目录
git add .
git commit -m "init sandbox service template"
git push origin main
```

## 将仓库标记为模板，并关闭其 Actions

1. 打开 `sandbox/sandbox-service-template` → Settings。
2. 勾选 Template Repository。
3. **关闭该模板仓库的 Actions**（Settings → Actions → Disable），避免模板自身 main 带占位符触发部署。
   （即便误开，workflow 也有 “Guard uninitialized template” 步骤拦截。）
4. 保存。

## 业务开发者从模板创建新服务

1. 登录 Forgejo → New Repository。
2. Template 选择 `sandbox/sandbox-service-template`。
3. Repository name 填写新服务名（小写字母开头，仅 [a-z0-9-]）。
4. 创建后 Clone 到本地，用 Qoder 打开。若当前仓库未提供 init 脚本，不要执行 `scripts/init-new-service.*`。
5. 该服务仓库需由平台完成“服务注册”（见 service-registration.md），包括配置 Actions Secrets。

## 凭据要求

不要把 sandbox MySQL 密码、外部业务线测试接口 Token、钉钉 Webhook、Kubeconfig 写入模板仓库或任何业务仓库。
它们只能存在于：开发者本地 `.env.sandbox.local`、Forgejo Actions Secrets、K8S Secret。
