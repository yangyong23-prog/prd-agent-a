# 业务线接口文档（product-apis）

本目录维护**外部业务线**提供给本服务调用的接口清单。每条业务线一个子目录，目录结构由 Apifox 同步生成。

> 历史背景：本目录原名 `product-apis`，曾用于维护「老产品接口白名单」。当前已升级为 Apifox 自动同步机制，统一管理所有外部业务线接口（包括老产品本身在内的任何业务线，都按一个业务线接入）。

## 目录结构

```text
docs/product-apis/
├── README.md                     ← 总入口（本文件）
├── sync.sh                       ← Apifox 同步脚本
├── data-service/                 ← 数据服务（持久化数据查询/订阅/计算）
│   ├── api-list.md               接口清单（人读）
│   └── openapi.json              原始 OpenAPI Spec（机器读）
├── risk-data-service/            ← 风险数据服务
│   ├── api-list.md
│   └── openapi.json
├── work-order-service/           ← 工程事务服务（工单事务查询/创建/反馈）
│   ├── api-list.md
│   └── openapi.json
├── physical-world-service/        ← 准静态物理世界（对象实例/三维数据/关系路由查询）
│   ├── api-list.md
│   └── openapi.json
└── <other-business-line>/        ← 后续接入的其他业务线
```

## 已接入的业务线

| 业务线 | 目录 | Apifox 项目 ID | 接口数 | 最后同步 |
|--------|------|----------------|--------|----------|
| 数据服务 | [`data-service/`](./data-service/api-list.md) | `5878457` | 73 | 2026-06-22 |
| 风险数据服务 | [`risk-data-service/`](./risk-data-service/api-list.md) | `5914030` | 134 (OpenApi 模块) | 2026-06-23 |
| 工程事务服务 | [`work-order-service/`](./work-order-service/api-list.md) | `5913789` | 27 | 2026-06-23 |
| 准静态物理世界 | [`physical-world-service/`](./physical-world-service/api-list.md) | `5881314` | 156 | 2026-06-23 |

> **physical-world-service 调用提示**：Apifox 中部分分组被标记为「**老接口，不建议使用**」（如 `对象实例查询[老接口...]`）与「**暂时不可用**」（如 `关系路由查询-APM 专用-暂时不可用`）。AI 选接口时需优先选择未被标记的分组，避免调用废弃/未就绪接口。

## 接入新业务线

### 1. 准备工作

- 拿到该业务线在 Apifox 的**项目 ID**（项目 URL 中 `/project/<id>` 的数字）
- 确认本地 `~/.apifox-token` 已配置个人访问令牌（参见 `sync.sh`）

### 2. 同步接口数据

```bash
# 在仓库根目录执行
bash docs/product-apis/sync.sh <业务线英文名> <Apifox 项目 ID>

# 示例：接入"资产服务"
bash docs/product-apis/sync.sh asset-service 1234567
```

脚本会：

1. 通过 Apifox Open API 拉取该项目 OpenAPI Spec
2. 落地到 `docs/product-apis/<业务线英文名>/openapi.json`
3. 自动生成 `api-list.md` 接口清单

### 3. 更新本文件

把新业务线追加到上面的「已接入的业务线」表格。

## 维护说明

部分业务线在 Apifox 上同时维护对外契约接口与内部协作接口（如版本批次、策略合并、OPS-IOT 配置等 tag），「sync.sh」默认拉全量。这类业务线同步后需手动过滤为对外模块，否则会把不该调用的内部接口也录入仓库。

| 业务线 | 过滤规则 |
|--------|----------|
| risk-data-service | 仅保留 tag 数组包含 `OpenApi` 的接口 |

过滤命令示例（在业务线目录下执行，只过滤 paths，不动 components/tags）：

```bash
cd docs/product-apis/risk-data-service
jq '
  .paths |= with_entries(
    .value |= with_entries(
      select(
        (.key | IN("get","post","put","delete","patch","options","head","trace") | not)
        or (.value.tags // [] | index("OpenApi"))
      )
    )
    | select(.value | to_entries | map(select(.key | IN("get","post","put","delete","patch","options","head","trace"))) | length > 0)
  )
' openapi.json > openapi.filtered.json && mv openapi.filtered.json openapi.json
```

过滤后需重新生成 「api-list.md」（不能重跑 sync.sh，否则会拉回全量）。如后续过滤频率高，可考虑给 sync.sh 增加 tag 过滤参数。

## 使用约束

调用业务线接口时，**必须遵守**：

- ❗ **只能调用测试环境**，禁止调用生产环境
- ❗ 接口 BaseURL 通过环境变量注入（如 `DATA_SERVICE_BASE_URL`），**不在代码中硬编码**
- ❗ 鉴权 Token 从环境变量读取，**不得提交到 git**
- ❗ 多租户场景下，调用前确认 `groupCode`/`projectId` 等租户字段已正确传递
- ❗ 调用前查阅本目录下的 `api-list.md`，确认目标接口存在；不要凭印象调用
- ❗ 不在本目录登记的业务线接口**不允许调用**

## 两份文档的分工（重要）

每个业务线子目录下有两份文件，**职责不同**，AI 与人类各看一份：

| 文件 | 受众 | 内容 | AI 开发时是否必读 |
|------|------|------|------------------|
| `openapi.json` | AI / 工具链 | 完整 schema、参数、响应、字段类型 | ✅ **必读，单一事实来源** |
| `api-list.md` | 非研发人员 / 人类速查 | 仅方法 + 路径 + 摘要 | ⚠️ 仅作索引，不含 schema |

**AI 开发规则**：

- 写代码时**必须**通过 `openapi.json` 获取请求体、响应体、字段约束
- **禁止**仅凭 `api-list.md` 编造请求字段或响应类型
- `api-list.md` 仅用于：人类挑接口、确认目标接口已登记

## 注意事项

- `openapi.json` 是机器可读的完整 schema，**禁止手动编辑**。需要更新时重新跑 `sync.sh`。
- `api-list.md` 由 `sync.sh` 自动生成，可以手动补充「调用约束」「字段说明」等业务上下文，但**接口列表本身**应通过重新同步保持一致。
- 同步前后请用 `git diff` 查看接口变化，关注**新增/删除**的接口，及时通知相关业务方。
