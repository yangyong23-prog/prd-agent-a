# 服务注册（平台一次性操作）

本文是接入 sandbox 部署时的平台操作参考。当前仓库暂未内置 `deploy/k8s`、Forgejo Actions 或 sandbox 日志脚本；执行本文步骤前应先补齐对应实现。

## 1. 创建 per-service Secret（每服务独立，最小权限）

为该服务创建独立的 MySQL 账号/库（或独立 schema），并创建对应 Secret：

```bash
kubectl -n sandbox create secret generic <service>-mysql-secret \
  --from-literal=SANDBOX_MYSQL_HOST=... \
  --from-literal=SANDBOX_MYSQL_PORT=3306 \
  --from-literal=SANDBOX_MYSQL_DATABASE=<service的独立库或schema> \
  --from-literal=SANDBOX_MYSQL_USERNAME=<仅授权该库的账号> \
  --from-literal=SANDBOX_MYSQL_PASSWORD=...

kubectl -n sandbox create secret generic <service>-product-api-secret \
  --from-literal=PRODUCT_API_BASE_URL=<外部业务线测试网关地址> \
  --from-literal=PRODUCT_API_TOKEN=<sandbox 测试 token>
```

要点：Secret 的 key 名必须与应用读取的环境变量名一致（见下方“Secret key 契约”）。
不同服务用不同库/schema 和不同账号，避免互相读写。

## 2. 应用网络策略与配额（首次）

如果后续补齐 `deploy/k8s/networkpolicy.sample.yaml`，可按真实网段应用网络策略，使 sandbox 默认拒绝出站，只放行 DNS、sandbox MySQL、外部业务线测试 API 网关；并应用 ResourceQuota 防止服务暴增。

## 3. 下发只读 kube 权限给业务（用于本地日志脚本）

如果后续补齐 `deploy/k8s/rbac-readonly.sample.yaml`，可生成受限 ServiceAccount kubeconfig 下发给业务开发者。
**不要**把集群管理员级 kubeconfig 发给业务。

## 4. 配置仓库 Secrets（Forgejo Actions）

在该服务仓库的 Settings → Actions → Secrets 配置：
`SANDBOX_REGISTRY`、`SANDBOX_REGISTRY_USER`、`SANDBOX_REGISTRY_PASSWORD`（Harbor robot 账号）、`DINGTALK_WEBHOOK`、`SANDBOX_KUBECONFIG`（部署用，权限仅限 sandbox 命名空间的 apply/rollout）。

## 5. 业务线接口同步基线（可选但推荐）

各业务线 OpenAPI Spec 通过 `bash docs/product-apis/sync.sh <业务线> <Apifox 项目 ID>` 从 Apifox 拉取，生成 `docs/product-apis/<业务线>/openapi.json` 与 `api-list.md`。

如需 CI 校验同步基线，可生成校验文件：

```bash
cd docs/product-apis/<业务线> && sha256sum openapi.json > .openapi.sha256
```

CI 据此可发现业务擅自篡改已同步的接口契约。

## Secret key 契约（应用读取的环境变量名）

- MySQL：`SANDBOX_MYSQL_HOST`、`SANDBOX_MYSQL_PORT`、`SANDBOX_MYSQL_DATABASE`、`SANDBOX_MYSQL_USERNAME`、`SANDBOX_MYSQL_PASSWORD`
- 外部业务线测试接口：`PRODUCT_API_BASE_URL`、`PRODUCT_API_TOKEN`
