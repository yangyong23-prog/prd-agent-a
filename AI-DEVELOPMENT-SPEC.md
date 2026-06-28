# AI 开发 Spec — 基于模板创建与开发新服务

## 文档说明

**适用范围**：本文档适用于基于 `sandbox-service-template` 模板仓库创建的所有新服务项目。

**受众划分**：

- **Part 2**：面向非研发人员（或 AI 代劳）的操作步骤指南，描述从模板创建新服务直到 CI/CD 部署的完整流程。
- **Part 3**：面向 AI 工具（如 Qoder）的完整技术规范，AI 读取本节后可自主完成服务开发。
- **Part 4**：端到端开发示例，兼顾人和 AI 参考。

**优先级声明**：本文档内容与实际代码冲突时，以代码为准。

**仓库地址**：`https://gitea.meos.plus/sandbox/sandbox-service-template`

---

## Part 0: 规则、技能与最高优先级原则

> [面向 AI 与开发者的顶层约束 — 阅读 Part 1/2/3 之前先确认本节]

### 0.1 规则与技能体系

本仓库的开发约束分布在四个层面，AI 与开发者应按优先级依次确认。

#### 0.1.1 顶层规范（仓库根）

- `AGENTS.md`：公共开发规范与跨服务约束（治理层）
- `AI-DEVELOPMENT-SPEC.md`（**本文件**）：AI 开发本工程的单文件自包含技术规范

冲突时以本文件、`AGENTS.md` 与仓库当前实现共同为准；当三者冲突时，以仓库当前实现为准。

#### 0.1.2 工程级规则（`rules/`）

涉及具体服务实现时，**除遵守本文件外，还必须同时遵守**：

- `apps/web` 改动：`rules/web.md`
- `apps/server` 改动：`rules/server.md`

如果一次改动同时涉及多个服务，则应同时查阅并遵守多份规则文档。

#### 0.1.3 IDE 级 always-on 规则（`.qoder/rules/`）

`.qoder/rules/` 下 9 条规则会被 Qoder 在每次会话中自动注入上下文，定义本仓库 sandbox 工作模式的硬约束：

| 文件 | 主题 |
|------|------|
| `00-sandbox-development-boundary.md` | Sandbox 补充开发边界 |
| `01-new-feature-not-product-modification.md` | 新功能开发，不直接改老产品 |
| `02-product-api-only-no-db-access.md` | 调用外部业务线只能走 product-apis 登记接口，禁止直连数据库 |
| `03-mysql-only.md` | 数据库与中间件：仅 MySQL，禁用 Redis 等其他中间件 |
| `04-version-visibility.md` | 版本可见性 |
| `05-ci-cd-notification.md` | Forgejo Actions 与钉钉通知 |
| `06-sandbox-log-diagnosis.md` | Sandbox 日志诊断 |
| `07-review-handoff.md` | 研发 Review 交接 |
| `08-requirement-grading.md` | 需求分级 L1/L2/L3/L4 |

冲突时以本文件与仓库当前实现为准。

#### 0.1.4 IDE 级技能（`.qoder/skills/`）

`.qoder/skills/` 下 16 个 Skill 在用户调用或匹配触发时按需加载，分两类：

- **Sandbox 工程类（6 个）**：`expert-quest-controller`、`mysql-schema-designer`、`product-api-researcher`、`review-handoff-writer`、`sandbox-debugger`、`self-test-writer`
- **Vue / 组件库类（10 个）**：`vue-best-practices`、`vue-debug-guides`、`vue-jsx-best-practices`、`vue-options-api-best-practices`、`vue-pinia-best-practices`、`vue-router-best-practices`、`vue-testing-best-practices`、`create-adaptable-composable`、`meri-plus`

调用约束：

- Skill 是工具能力清单，**不替代**本文件的工程规范。
- 不要把 Skill 行为写进强制条款；它们随安装升级可能变化。

### 0.2 最高优先级原则

#### 0.2.1 确定性优先

- 相同输入应尽量得到相同输出。
- 优先选择稳定方案，不引入无必要的隐式行为。
- 没有证据时不做推断式修改。

#### 0.2.2 最小假设

- 信息不足时，应先补上下文，再做变更。
- 不得臆测接口字段、数据库结构、运行方式或业务规则。
- 不明确时，优先查仓库内文档、代码与既有约定。

#### 0.2.3 显式执行

- 复杂任务按 `PLAN → EXECUTE → VERIFY → DONE` 推进（详见 § 3.4）。
- 修改前先确认改动落点与影响范围（决策方法见 § 3.18）。
- 修改后必须按范围执行验证（参见 § 3.11），不能跳过验证直接宣称完成。

#### 0.2.4 安全失败

- 不确定时明确说明不确定。
- 禁止编造不存在的脚本、接口、字段、目录或流程。
- 不做隐式副作用操作，所有关键操作都应有明确目的。

---

## Part 2: 基于模板创建新服务

> [操作指南 — 面向非研发人员 + AI 行为准则]

### 完整流程概览（非研发人员只需看这里）

**非研发人员**只需在 Qoder 中发一次提示词，AI 自动完成所有后续操作：

| 步骤 | 执行者 | 操作 |
|------|--------|------|
| 发提示词 | **非研发人员** | 在 Qoder 发送创建新服务提示词（填服务名 + 业务需求） |
| 同步模板 | AI 自动 | 拉取 `sandbox-service-template` 最新代码 |
| 创建仓库 | AI 自动 | 通过 Forgejo API 在 sandbox 组织下建仓 |
| 初始化工程 | AI 自动 | 克隆模板、修改服务名、复制运行配置（含 MySQL/网关等） |
| 开发业务需求 | AI 自动 | 按需求实现功能（如无业务需求则跳过） |
| 推送代码 | AI 自动 | push 到 Forgejo，触发 CI |
| 构建部署 | CI/ArgoCD 自动 | 构建镜像 → GitOps → K8s 部署（约 3–5 分钟） |
| 访问服务 | **非研发人员** | 打开 `https://sandbox.meos.center/{服务名}-web/` |

> **运行配置（MySQL 连接、网关地址、Token 等）已记录在本文档「基础设施配置」章节，AI 创建新服务时直接从本文档读取写入，无需外部文件。**

---

### 基础设施配置（AI 直接使用，无需读取外部文件）

> AI 创建新服务时，直接使用以下配置初始化新工程的 `.env` 文件，无需依赖外部 `.env.sandbox.local`。
>
> ℹ️ **安全说明**：下表中标注 `enc:` 前缀的字段已做混淆处理，防止明文截屏曝光。AI 使用时对 `enc:` 字段执行解码得到实际值再写入配置文件。

#### Git 平台

| 配置项 | 值 |
|-------|-----|
| Forgejo 组织地址 | `https://gitea.meos.center/sandbox/` |
| 新服务仓库地址格式 | `https://gitea.meos.center/sandbox/{服务名}.git` |
| Forgejo 建仓 Token | `enc:MDk2NmJkMmZiZGVjODFhZDk2MjlkYjQ1NDdjMTE0MDUwYTJiNWVmMg==` |

#### K8s 访问地址

| 配置项 | 值 |
|-------|-----|
| 统一访问域名 | `sandbox.meos.center` |
| 前端访问格式 | `https://sandbox.meos.center/{服务名}-web/` |
| 后端 API 格式 | `https://sandbox.meos.center/{服务名}-server/` |

#### MySQL 数据库

| 配置项 | 值 |
|-------|-----|
| `MYSQL_HOST` | `172.19.0.123` |
| `MYSQL_PORT` | `9934` |
| `MYSQL_USERNAME` | `root` |
| `MYSQL_PASSWORD` | `enc:Z1dLNW85V21DQkY1TGlXQDA5MjY=` |
| `MYSQL_DATABASE` | `sandbox` |

#### 产品网关

| 配置项 | 值 |
|-------|-----|
| `GW_BASE_URL` | `https://qa-gw.meos.net.cn` |
| `GW_TOKEN` | `enc:ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKa1pYWnBZMlZVZVhCbElqb3hMQ0poZFdRaU9pSmliWE10YzJGaGN5MWpiR2xsYm5RaUxDSnpkV0lpT2lKbGJYTXRkWE5sY2lJc0ltRmpZMjkxYm5SSlpDSTZJbVprWmpaa05URmlObU0zT1RRMk1HVTRZbUZrWlRZMk5HTXlaVEV5TXpnd0lpd2lZV05qYjNWdWRFNWhiV1VpT2lMbnZaZmx1Yl9tcjRVaUxDSndhRzl1WlNJNklqRTRORE0xTVRNNE56RTJJaXdpYVhOeklqb2laVzF6SWl3aWFuUnBJam9pTVdSak1qWXlaR1l0TVdRNU1pMDBZbVU0TFdKaU56SXRNVGMyTVRrM09UaGxNVE5rSW4wLmJPUnZQS01pcWlSVnlvZVgtaHdtOENVZVhHLVBVaUhBSG8yOWo4TFVIQ2s=` |
| `GW_GROUP_CODE` | `XNJT` |
| `GW_PROJECT_ID` | `Pj1101050060` |

#### 本地开发鉴权（前端 dev-config.js 注入，仅开发环境生效）

| 配置项 | 值 |
|-------|-----|
| `DEV_REQUEST_TOKEN` | `enc:ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKa1pYWnBZMlZVZVhCbElqb3hMQ0poZFdRaU9pSmliWE10YzJGaGN5MWpiR2xsYm5RaUxDSnpkV0lpT2lKbGJYTXRkWE5sY2lJc0ltRmpZMjkxYm5SSlpDSTZJbVprWmpaa05URmlObU0zT1RRMk1HVTRZbUZrWlRZMk5HTXlaVEV5TXpnd0lpd2lZV05qYjNWdWRFNWhiV1VpT2lMbnZaZmx1Yl9tcjRVaUxDSndhRzl1WlNJNklqRTRORE0xTVRNNE56RTJJaXdpYVhOeklqb2laVzF6SWl3aWFuUnBJam9pTVdSak1qWXlaR1l0TVdRNU1pMDBZbVU0TFdKaU56SXRNVGMyTVRrM09UaGxNVE5rSW4wLmJPUnZQS01pcWlSVnlvZVgtaHdtOENVZVhHLVBVaUhBSG8yOWo4TFVIQ2s=` |
| `DEV_GROUP_CODE` | `XNJT` |
| `DEV_PROJECT_ID` | `Pj1101050060` |
| `DEV_TENANT_ID` | `default` |

---

### AI 自动同步模板规则（必须优先执行）

> 非研发人员通常不会主动更新本地模板代码。当用户请求“基于模板创建新服务”时，AI **必须**在创建任何新工程前，先将本地模板仓库同步到远程最新状态。

#### 同步流程

**冲突处理原则**：远程为唯一事实源，本地任何未提交改动、分叉提交、临时文件**全部以远程为准进行覆盖**。

```bash
# 1. 定位本地模板目录（通常是同级或上级目录中的 sandbox-service-template）
cd /path/to/sandbox-service-template

# 2. 拉取远程最新提交信息
git fetch origin

# 3. 强制重置本地到远程 main 最新提交（覆盖本地所有冲突）
git reset --hard origin/main

# 4. 清理未跟踪的临时文件和目录
git clean -fd

# 5. 验证同步状态
git log --oneline -1
git status
```

#### AI 执行检查清单

在进入后续“创建新服务”步骤前，AI 需确认：

- [ ] `git fetch origin` 成功拉取远程信息
- [ ] `git reset --hard origin/main` 执行后本地 HEAD 与 `origin/main` 一致
- [ ] `git status` 输出为“工作区干净”
- [ ] 未在模板目录内制造任何新文件或修改

> ⚠｜AI **不得**对用户现有业务工程（如 `dfz-sandbox`）执行此强制重置，仅限于模板目录 `sandbox-service-template`。

### 步骤一：通过 Forgejo API 自动创建仓库

AI **自动执行**，无需用户手动操作。`FORGEJO_TOKEN` 已内置在本文档「基础设施配置 → Git 平台」章节，AI 直接从本文档读取，无需任何本地文件。

```bash
# FORGEJO_TOKEN 直接使用本文档「基础设施配置」中的值：enc:MDk2NmJkMmZiZGVjODFhZDk2MjlkYjQ1NDdjMTE0MDUwYTJiNWVmMg==
# 对 enc: 前缀值执行解码得到实际 token
FORGEJO_TOKEN="$(echo 'MDk2NmJkMmZiZGVjODFhZDk2MjlkYjQ1NDdjMTE0MDUwYTJiNWVmMg==' | base64 --decode)"

# 在 sandbox 组织下自动创建新仓库（若已存在则跳过）
curl -s -o /dev/null -w "%{http_code}" \
  -X POST "https://gitea.meos.center/api/v1/orgs/sandbox/repos" \
  -H "Authorization: token ${FORGEJO_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"name": "'"${SERVICE_NAME}"'", "private": false, "auto_init": false}'
# 返回 201 = 创建成功；409 = 仓库已存在，均可继续后续步骤
```

> ✅ FORGEJO_TOKEN 已固化在本文档，AI 无需读取任何本地配置文件，可在任意工作目录下执行。

### 步骤二：克隆到本地

```bash
# 将新仓库克隆到「基础设施配置」中指定的工作目录
git clone https://gitea.meos.center/sandbox/你的服务名.git

# 进入目录
cd 你的服务名

# 安装依赖
pnpm install

# 初始化运行配置：将本文档「基础设施配置」中的所有配置项写入 .env 文件
# （包含 MySQL、网关、前端鉴权等全部配置，直接从本文档读取，无需外部文件）
pnpm --filter @app/server prisma:generate
```

> ⚠️ **必须同时修改以下两处**，否则 CI 构建的镜像和 GitOps 目录将与模板重叠，无法正常部署：
>
> **① 根目录 `package.json`**：CI 优先从此文件的 `name` 字段读取 `IMAGE_NAME`，会覆盖 k8s_env_config.yml 的设置
> ```json
> { "name": "你的服务名" }   // 例：dzf-sanbox-test
> ```
>
> **② `k8s/k8s_env_config.yml`**：需与 `package.json` 中的服务名保持一致
> ```yaml
> IMAGE_NAME=你的服务名
> WEB_SERVICE_NAME=你的服务名-web
> SERVER_SERVICE_NAME=你的服务名-server
> INGRESS_PATHS=/你的服务名-server:你的服务名:3201,/你的服务名-web:你的服务名:80
> ```

> ✅ **业务线接口文档已默认携带**：Forgejo 模板机制会把模板仓库的 `docs/product-apis/` 原样复制到新工程，包含以下 3 个业务线的完整接口清单。AI 可直接基于这些接口开发功能，无需重新同步。
>
> | 业务线目录 | 业务范围 |
> |-----------|----------|
> | `docs/product-apis/data-service/` | BDTP 数据服务接口 |
> | `docs/product-apis/risk-data-service/` | 风险事件接口 |
> | `docs/product-apis/work-order-service/` | 工程事务接口 |
> | `docs/product-apis/physical-world-service/` | 准静态物理世界接口 |
>
> 如需更新某业务线接口或接入新业务线，参见 3.13 节。

### 步骤三：用 Qoder 开始开发

1. 用 Qoder 打开项目根目录
2. 向 AI 提供业务需求描述，推荐使用以下格式：

```
本任务将在 sandbox 环境中执行。
请先读取 AI-DEVELOPMENT-SPEC.md，然后按照规范开发以下需求：

【在这里粘贴你的业务需求，不填则自动创建最小可运行骨架】
```

> **不填业务需求也可以**：AI 会自动创建一个包含登录、首页、常用布局的最小可运行骨架，可直接部署访问。

3. AI 会自动完成：需求分析 → 代码开发 → 自测验证 → 输出交付文档
4. 开发完成后，检查 AI 输出的自测报告和 Review 交接说明

### 步骤四：激活 CI/CD 与 K8s 部署（联系平台）

新服务本地开发完成后，需联系平台完成以下注册，才能触发自动构建并部署到 K8s。

#### 4.1 CI Secrets（组织级已预置，无需手动配置）

`sandbox` 组织级已预置以下所有 CI 所需 Secrets，基于该组织创建的新仓库**自动继承**，无需手动操作：

| Secret 名称 | 用途 |
|-------------|------|
| `HARBOR_USER` / `HARBOR_PWD` | 推送 Harbor 镜像 |
| `CONFIG_REPO_TOKEN` | 写入 GitOps 中央配置仓库 |
| `GW_BASE_URL` / `GW_TOKEN` / `GW_GROUP_CODE` / `GW_PROJECT_ID` | 网关地址与鉴权 |
| `MYSQL_HOST` / `MYSQL_PORT` / `MYSQL_USERNAME` / `MYSQL_PASSWORD` / `MYSQL_DATABASE` | MySQL 连接信息 |
| `DINGTALK_WEBHOOK` / `DINGTALK_SECRET` | 部署完成后推送钉钉通知 |

> ✅ 新仓库无需配置任何 Secret，直接 push 代码即可触发完整 CI → 镜像构建 → K8s 部署链路。

#### 4.2 ArgoCD 自动发现（无需手动操作）

`sandbox-infra-config` 仓库已配置三套 **ArgoCD ApplicationSet**，会自动扫描对应分支下所有 `{\u670d\u52a1\u540d}/{\u73af\u5883}/` 目录，**无需手动为新服务创建 ArgoCD Application**。

| ArgoCD 监听分支 | 路径模式 | 部署命名空间 |
|---|---|---|
| `dev` 分支 | `*/dev` | `persagy-ai-dev` |
| `qa` 分支 | `*/qa` | `persagy-ai-qa` |
| `main` 分支 | `*/prod` | `persagy-ai-prod` |

CI 流水线会自动将配置渲染后推到对应分支：`develop` 分支触发推到 `dev`，`qa` 分支推到 `qa`，`main` 分支推到 `main`。ArgoCD 在数秒内自动发现新目录并完成部署。

> ✅ CI Secrets 配置好后，向 `develop` 分支推送代码即可触发完整的 CI → 镜像构建 → GitOps 回写 → ArgoCD 自动部署链路。

#### 4.3 数据库权限（如需）

新服务首次运行需确认 MySQL 用户对目标 database 有权限，详见 `docs/service-registration.md`。

#### 4.4 部署后访问地址

> 以下地址在 CI 完成且 ArgoCD 同步后即可访问，无需任何额外操作。

| 环境 | 触发分支 | 访问地址格式 |
|------|---------|-------------|
| dev  | `develop` | `https://sandbox.meos.center/{服务名}-web/` |
| qa   | `qa` | `https://sandbox.meos.center/{服务名}-web/` |
| prod | `main` | `https://sandbox.meos.center/{服务名}-web/` |

示例（服务名 `my-service`）：

- 前端：`https://sandbox.meos.center/my-service-web/`
- 后端 API：`https://sandbox.meos.center/my-service-server/`（Swagger：`/my-service-server/docs`）

> 三个环境共用同一域名 `sandbox.meos.center`，通过路径前缀区分不同服务。

---

## Part 3: AI 开发技术规范

> [技术规范 — 面向 AI]
>
> 以下内容供 AI 工具读取后自主完成服务开发。本节包含完整的项目规范，无需跳转到其他文件。

### 3.1 项目概览与技术栈

本项目是一个企业后台业务脚手架，采用 `pnpm workspace` + `turbo` 管理 Monorepo。

| 层 | 技术栈 |
|----|--------|
| 前端 | Vue 3.5 + Vite 6 + Vue Router 4 + TanStack Vue Query 5 + meri-plus 4 + Tailwind CSS 3 + Pinia 2 |
| 后端 | Fastify 5 + TypeScript 5.7 + Prisma 6 + MySQL 8.4 + JWT + Swagger（⚠️ Redis 暂不启用，业务代码禁止依赖） |
| 契约 | Zod 3.24+（前后端共享 schema 与 TypeScript 类型） |
| 包管理 | pnpm 9.15.4 + turbo 2.3 |
| 模块系统 | ESM（所有包 `"type": "module"`） |
| 格式化 | Prettier（semi: true, singleQuote: false, trailingComma: "all"） |

**端口约定**：

- 前端开发服务器：`http://127.0.0.1:3200`
- 后端 API 服务器：`http://127.0.0.1:3201`
- Swagger 文档：`http://127.0.0.1:3201/docs`
- MySQL：`127.0.0.1:3306`（**当前唯一允许使用的中间件**）
- ~~Redis：`127.0.0.1:6379`~~（基础设施保留但**业务代码暂不启用**，详见 3.15 禁止事项）

**路径前缀约定**（代码中从根 `package.json.name` 动态生成）：

| 场景 | 前缀 | 来源 |
|------|------|------|
| 前端 Vite `base` | `/<package.name>-web/` | `apps/web/vite.config.ts` |
| 前端调用后端的基址 | `/<package.name>-server` | `apps/web/vite.config.ts` 注入 `__API_BASE_URL__` + `/server` 代理 |
| 后端路由双路径注册 | 同时挂在 `/` 和 `/<package.name>-server/` | `apps/server/src/app.ts` |

> 该机制使同一 K8s Ingress 可同时路由多个服务到同一入口；本地开发与部署环境在路径形式上保持一致，避免为环境别书写不同调用代码。

### 3.2 Monorepo 目录结构与包职责

```
├── apps/
│   ├── web/          (@app/web)       Vue 管理后台前端应用
│   └── server/       (@app/server)    Fastify API 服务
├── packages/
│   ├── api-contract/ (@app/api-contract) 前后端共享 Zod schema、DTO、类型
│   ├── config/       (@app/config)       共享 YAML 配置、加载与 schema 校验
│   ├── shared/       (@app/shared)       共享常量、基础类型、纯函数
│   ├── eslint-config/(@app/eslint-config) 统一 ESLint 配置
│   └── tsconfig/     (@app/tsconfig)     统一 TypeScript 配置
├── infra/
│   ├── docker/       本地开发基础设施（MySQL 8.4；Redis 7.4 暂保留但业务不使用）
│   └── nginx/        Nginx 反代配置
├── k8s/              CI/CD 部署配置
├── docs/             架构说明、运行手册、外部业务线接口（product-apis：数据服务/风险数据服务/工程事务服务/准静态物理世界）
├── templates/        自测报告、Review 交接、需求提示词模板
└── rules/            服务级开发规则（server.md、web.md）
```

**变更落点决策**（新增代码应放在哪里）：

1. 仅属于某个 app 的页面、接口或流程 → 放对应 `apps/*`
2. 前后端共享接口结构 → 放 `packages/api-contract`
3. 多应用共享配置文件与配置加载逻辑 → 放 `packages/config`
4. 通用常量、基础类型、纯函数 → 放 `packages/shared`
5. 不确定是否值得抽共享时，优先留在 app 内

### 3.3 代码组织与分层规范

#### 后端分层（apps/server/src/）

| 层 | 目录 | 职责 |
|----|------|------|
| 入口 | `app.ts` + `index.ts` | 应用构建、插件注册、路由注册、服务启动与优雅关闭 |
| 路由 | `routes/*.ts` | 参数接收、请求校验（Zod）、响应组织 |
| 服务 | `services/*.ts`（按需创建） | 核心业务逻辑（禁止堆在路由处理器中） |
| 插件 | `plugins/*.ts` | Fastify 插件（如 tenantPlugin） |
| 库/工具 | `lib/*.ts` | 基础设施封装（Prisma Client、Nacos） |
| 配置 | `config/env.ts` | 环境变量加载、ServerConfig 聚合 |
| 类型 | `types/*.ts` | Fastify 类型扩展 |

#### 前端分层（apps/web/src/）

| 层 | 目录 | 职责 |
|----|------|------|
| 入口 | `main.ts` | 应用创建、插件挂载（Pinia、VueQuery、MeriPlus、Router） |
| 路由 | `router.ts` | 路由配置（`createAppRouter(base)`） |
| 页面 | `routes/*.vue` | 页面级组件 |
| 请求 | `lib/api.ts` | 统一 fetch 请求入口 + Zod 响应校验 + 租户头注入 |
| 工具 | `lib/utils.ts` | 前端工具函数 |
| 样式 | `styles/` | 主题变量、全局样式 |
| 组件 | `components/`（按需创建） | 业务组合组件 |

### 3.4 新功能开发流程

严格按 **PLAN → EXECUTE → VERIFY → DONE** 四阶段推进：

**PLAN 阶段**：

1. 阅读需求，明确业务边界和涉及模块
2. 确认变更落点（文件属于哪个包/app）
3. 确认是否需要新增 Prisma 模型、新路由、新页面、新契约
4. 若需外部业务线接口，确认在 `docs/product-apis/<业务线>/api-list.md` 中已登记
5. 输出结构化变更计划（不直接动代码）

**EXECUTE 阶段**（按此顺序执行）：

1. **契约层**：在 `packages/api-contract` 定义新增的 request/response schema
2. **数据库层**：修改 `apps/server/prisma/schema.prisma`，运行 migrate + generate
3. **后端层**：在 `apps/server/src/routes/` 新增路由，在 `app.ts` 注册
4. **前端层**：在 `apps/web/src/lib/api.ts` 新增请求函数，新增页面组件，注册路由

**VERIFY 阶段**：

```bash
pnpm typecheck          # 全量类型检查
pnpm lint              # 代码规范检查
pnpm test              # 全量测试
pnpm build             # 全量构建
```

**DONE 阶段**：

1. 输出自测报告（参考 `templates/self-test-template.md`）
2. 输出 Review 交接说明（参考 `templates/review-handoff-template.md`）
3. 说明剩余风险和未执行的验证项

### 3.5 后端开发规范

#### 新增路由的标准模式

在 `apps/server/src/routes/` 新建文件，导出注册函数：

```typescript
import type { FastifyInstance } from "fastify";
import { xxxRequestSchema, xxxResponseSchema } from "@app/api-contract";

export async function registerXxxRoutes(app: FastifyInstance) {
  app.post("/xxx", async (request, reply) => {
    const payload = xxxRequestSchema.parse(request.body);
    const tenantId = request.tenantContext!.tenantId;

    // 业务逻辑应放在 service 层
    const result = await xxxService.create(tenantId, payload);

    return reply.send(xxxResponseSchema.parse(result));
  });
}
```

然后在 `apps/server/src/app.ts` 的 `buildApp` 函数中注册：

```typescript
import { registerXxxRoutes } from "./routes/xxx.js";
// ...
await registerXxxRoutes(app);
```

#### 关键约束

- 全局插件在 `buildApp` 中统一 register
- **路由双路径注册**：`buildApp` 同时调用 `await registerApiRoutes(app)` 和 `await app.register(registerApiRoutes, { prefix: "/<package.name>-server" })`，为同一组路由同时提供 `/foo` 和 `/<name>-server/foo` 两种访问路径。新增路由**只需**加入 `registerApiRoutes`，不要手工重复 register。
- 公开路由白名单：`/health`、`/docs`、`/docs/json`、`/auth/login`（`tenantPlugin` 自动同时兼容带前缀版本，无需重复填）
- 新增公开路由需显式加入 `plugins/tenant.ts` 的 `publicRoutes` 数组
- 配置读取通过 `loadServerConfig()` 统一入口，不在业务代码中直接 `process.env`
- 服务注册逻辑复用 `src/lib/nacos.ts`
- 导出函数、插件、配置入口必须补充 JSDoc 注释（统一注释规范见 § 3.17）

### 3.6 前端开发规范

#### 新增请求函数

在 `apps/web/src/lib/api.ts` 中新增：

```typescript
import { xxxResponseSchema, type XxxResponse } from "@app/api-contract";
import { TENANT_HEADER } from "@app/shared";

export function getXxx(tenantId: string): Promise<XxxResponse> {
  return request(
    "/xxx",
    {
      method: "GET",
      headers: { [TENANT_HEADER]: tenantId },
    },
    (value) => xxxResponseSchema.parse(value),
  );
}
```

#### 新增页面

在 `apps/web/src/routes/` 新建 `.vue` 文件：

```vue
<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { getXxx } from "@/lib/api";

const xxxQuery = useQuery({
  queryKey: ["xxx"],
  queryFn: () => getXxx("tenant-id"),
});
</script>

<template>
  <section class="space-y-6">
    <!-- 使用 meri-plus 组件 + Tailwind CSS -->
    <MButton type="primary">操作</MButton>
  </section>
</template>
```

在 `apps/web/src/router.ts` 的 `routeDefinitions` 中注册路由。

#### 关键约束

- 组件优先使用 `meri-plus`（已全局注册，直接用 `<MButton>` 等）
- 图标使用 `lucide-vue-next`
- 样式使用 Tailwind CSS
- 请求统一通过 `src/lib/api.ts`，不在页面中直接 fetch
- 响应必须用 Zod schema parse，不直接信任后端返回
- API 基址优先取 `import.meta.env.VITE_API_BASE_URL`，为空时回退到编译期注入的 `__API_BASE_URL__`（`vite.config.ts` 从 `package.json.name` 生成，默认 `/<package.name>-server`）
- 开发环境路径代理：Vite `server.proxy` 把 `/<package.name>-server` 转发到 `http://127.0.0.1:3201` 并去前缀
- 开发调用鉴权请求头通过 `apps/web/.env.local`（或仓库根 `.env.sandbox.local`）配置：`DEV_REQUEST_TOKEN`、`DEV_GROUP_CODE`、`DEV_PROJECT_ID`，由 Vite 注入 `/dev-config.js`，仅开发环境生效；**真实 Token 不得提交**
- 状态管理使用 Pinia + TanStack Vue Query

### 3.7 接口契约规范

`packages/api-contract` 是前后端接口字段的**唯一定义位置**。

#### 新增契约的标准模式

在 `packages/api-contract/src/index.ts` 中添加：

```typescript
import { z } from "zod";

// 1. 定义 Zod schema
export const createXxxRequestSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
});

export const xxxResponseSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  createdAt: z.string().datetime(),
});

// 2. 导出 TypeScript 类型
export type CreateXxxRequest = z.infer<typeof createXxxRequestSchema>;
export type XxxResponse = z.infer<typeof xxxResponseSchema>;
```

#### 关键约束

- 前后端不得各自维护同义类型
- Zod schema 与 TypeScript 类型必须同步更新
- 接口变更时先更新契约，再同步前后端实现

### 3.8 多租户数据访问规范

当前采用**共享库共享表**模型。

| 要素 | 实现 |
|------|------|
| 租户标识 | 请求头 `x-tenant-id`（常量 `TENANT_HEADER` 来自 `@app/shared`） |
| 后端解析 | `tenantPlugin` 自动从请求头解析，挂载到 `request.tenantContext` |
| 数据库 | 业务表必须包含 `tenant_id` 字段 |
| 查询约束 | 所有业务查询必须附带 `tenantId` 条件 |

#### 标准数据访问模式

```typescript
// 查询时必须附带租户条件
const items = await prisma.todo.findMany({
  where: {
    tenantId: request.tenantContext!.tenantId,
    // ... 其他业务条件
  },
});

// 创建时必须写入租户 ID
const item = await prisma.todo.create({
  data: {
    tenantId: request.tenantContext!.tenantId,
    title: payload.title,
  },
});
```

#### 禁止事项

- 绕过租户上下文直接按业务主键查询
- 前端伪造租户切换作为安全边界
- 在共享包中写入依赖具体租户实现细节的业务逻辑

### 3.9 配置管理规范

#### 配置层次

| 层 | 位置 | 用途 |
|----|------|------|
| 共享 YAML | `packages/config/configs/application.yaml` | MySQL 连接、项目元数据（支持 `${ENV_VAR:默认值}` 占位符；Redis 配置节点仅作保留，**业务代码不得读取**） |
| 启动配置 | `packages/config/configs/bootstrap.yaml` | Nacos 连接信息 |
| 后端环境变量 | `apps/server/.env` | 端口、JWT 密钥、CORS、Nacos 开关等 |
| 前端环境变量 | Vite 环境变量 `VITE_*` | API 基址等 |
| 完整本地运行配置 | 仓库根 `.env.sandbox.local`（**Git 忽略，含真实凭据**）| MySQL 连接（`MYSQL_HOST/PORT/USERNAME/PASSWORD/DATABASE`）、网关（`GW_BASE_URL/GW_TOKEN/GW_GROUP_CODE/GW_PROJECT_ID`）、前端开发鉴权（`DEV_REQUEST_TOKEN/DEV_GROUP_CODE/DEV_PROJECT_ID/DEV_TENANT_ID`）；新服务克隆后从模板同路径文件复制，无需手动填写 |

#### 配置加载机制

```
YAML 文件 → loader.ts（解析占位符）→ schema.ts（Zod 校验）→ index.ts（导出入口）
```

后端通过 `loadServerConfig()` 统一聚合所有配置源。

#### 关键约束

- 敏感信息（密码、Token、密钥）只能放 `.env` 或 K8s Secret，不提交 Git
- 新增配置项优先在统一配置入口补齐
- 配置结构变更需同步更新 schema 与消费方类型

### 3.10 数据库与 Prisma 规范

#### 新增 Model 的标准模式

在 `apps/server/prisma/schema.prisma` 中添加：

```prisma
model Todo {
  id          String   @id @default(cuid())
  tenantId    String   @map("tenant_id")
  title       String
  completed   Boolean  @default(false)
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  @@unique([tenantId, title])
  @@index([tenantId, completed])
  @@map("todos")
}
```

#### 命名规范

| 元素 | 规范 | 示例 |
|------|------|------|
| Model 名 | PascalCase 单数 | `Todo`、`User` |
| 字段名 | camelCase | `tenantId`、`createdAt` |
| 数据库列名 | snake_case + `@map()` | `tenant_id`、`created_at` |
| 表名 | 复数 + `@@map()` | `@@map("todos")` |
| ID | `@id @default(cuid())` | — |
| 时间戳 | `@default(now())` + `@updatedAt` | — |

#### 多租户字段要求

- 业务 Model 必须包含 `tenantId String @map("tenant_id")`
- 唯一约束设计为 `@@unique([tenantId, 业务字段])`
- 索引优先包含 `tenantId`

#### 迁移命令

```bash
# 修改 schema 后执行
pnpm --filter @app/server prisma:migrate
pnpm --filter @app/server prisma:generate
```

### 3.11 测试验证规范

| 测试层 | 框架 | 方式 | 命令 |
|--------|------|------|------|
| 后端 | Vitest | `Fastify.inject()` 半集成测试 | `pnpm --filter @app/server test` |
| 前端 | Vitest | Vue 逻辑测试 | `pnpm --filter @app/web test` |
| 契约包 | Vitest | schema 单元测试 | `pnpm --filter @app/api-contract test` |
| 全量 | turbo | 所有包并行 | `pnpm test` |
| 类型检查 | tsc / vue-tsc | — | `pnpm typecheck` |
| 构建 | turbo | — | `pnpm build` |

**核心要求**：

- 必须基于**实际命令输出**说明验证结果
- 不能只凭静态阅读声称"已通过"
- 未运行的测试必须明确声明"未运行"及原因

### 3.12 CI/CD 与部署规范

| 环节 | 机制 |
|------|------|
| 触发条件 | Push 到 `main`/`develop`/`qa` 分支 |
| 分支-环境映射 | `main` → prod, `develop` → dev, `qa` → qa |
| 构建流程 | pnpm install → 前端 build → Dagger 构建 Docker 镜像 → 推送 Harbor |
| 镜像 | 基于 Nginx Alpine，前端产物放入 `/usr/share/nginx/html/` |
| 镜像 Tag 格式 | `{VERSION_TAG}-{Git短SHA8位}-{时间戳}` |
| K8s 配置 | `k8s/k8s_env_config.yml`（项目级）+ `k8s/env/{env}.yml`（环境差异） |
| GitOps | 自动渲染模板 → 推送到中央配置仓库（`sandbox/sandbox-infra-config`）|
| ArgoCD | 监听中央配置仓库 `${IMAGE_NAME}/${DEPLOY_ENV}/` 目录变更 → 自动同步 K8s 资源 |
| 命名空间 | `persagy-ai-dev` / `persagy-ai-qa` / `persagy-ai-prod` |
| 凭据 | 通过 CI Secrets 注入，绝不提交到仓库 |

#### 关键配置文件

- `k8s/k8s_env_config.yml`：**每个新服务必须修改此文件**，将 `IMAGE_NAME`、`WEB_SERVICE_NAME`、`SERVER_SERVICE_NAME`、`INGRESS_PATHS` 改为实际服务名；`INGRESS_HOST=sandbox.meos.center`（三个环境统一域名）
- `k8s/env/dev.yml|qa.yml|prod.yml`：环境差异（命名空间、副本数、资源限制）
- `k8s/ci-infra/Dockerfile`：前端 Nginx 镜像构建
- `.gitea/workflows/build_deploy.yml`：完整流水线定义

#### CI Secrets 依赖

流水线依赖以下 Forgejo Secrets（在仓库 Settings → Actions → Secrets 中配置）：

| Secret 类别 | 包含变量 | 用途 |
|------------|---------|------|
| Harbor 凭据 | `HARBOR_USER` / `HARBOR_PWD` | 推送镜像 |
| GitOps Token | `CONFIG_REPO_TOKEN` | 写入中央配置仓库 |
| 网关配置 | `GW_BASE_URL` / `GW_TOKEN` / `GW_GROUP_CODE` / `GW_PROJECT_ID` | 网关鉴权 |
| 数据库配置 | `MYSQL_HOST` / `MYSQL_PORT` / `MYSQL_USERNAME` / `MYSQL_PASSWORD` / `MYSQL_DATABASE` | K8s Pod 环境变量注入 |
| 钉钉通知 | `DINGTALK_WEBHOOK` / `DINGTALK_SECRET` | 部署完成后推送钉钉消息 |

> ✅ 以上 Secrets 均已配置在 `sandbox` **组织级**，新仓库自动继承，无需手动添加。

### 3.13 外部业务线接口调用规范

本服务调用的所有外部业务线接口（包括老产品能力、数据服务、资产服务等任何外部服务）统一通过 `docs/product-apis/` 管理，按业务线一个子目录，数据从 Apifox 自动同步。

#### 调用约束

1. **只能**调用 `docs/product-apis/<业务线>/api-list.md` 中登记的接口
2. **只能**调用各业务线的测试环境
3. 网关 BaseURL 来自 `GW_BASE_URL` 环境变量，四个业务线**共用同一网关**，不在代码中硬编码
4. 网关鉴权 Token 来自 `GW_TOKEN` 环境变量，**不得提交到 git**；调用时同步传递 `GW_GROUP_CODE`（集团编码）与 `GW_PROJECT_ID`（项目 ID）
5. `openapi.json` 中的路径已包含网关服务名前缀（如 `/dtp-rwd-server/rwd/...`），可直接与 `GW_BASE_URL` 拼接构造完整调用地址
6. 多租户场景下，调用前确认请求参数中 `groupCode`/`projectId` 等租户字段已正确传递

#### 两份文档的分工（AI 必读）

每个业务线子目录下有两份文件，职责不同：

| 文件 | 受众 | 内容 | AI 开发时必读 |
|------|------|------|------------------|
| `openapi.json` | AI / 工具链 | 完整 schema、参数、响应、字段类型 | ✅ **必读，单一事实来源** |
| `api-list.md` | 非研发人员 / 人类速查 | 仅方法 + 路径 + 摘要 | ⚠️ 仅作索引 |

**AI 开发规则**：

- 写代码时**必须**通过 `openapi.json` 获取请求体、响应体、字段约束
- **禁止**仅凭 `api-list.md` 编造请求字段或响应类型
- `api-list.md` 仅用于：人类挑接口、确认目标接口已登记

#### 已接入的业务线

> 基于本模板创建的新工程默认携带以下业务线接口清单。开发新功能时，**优先**调用这些已登记接口，而不要新建同质能力。

| 业务线 | 目录 | 业务范围 | 接口补充说明 |
|--------|------|----------|--------------|
| 数据服务 | [`docs/product-apis/data-service/`](docs/product-apis/data-service/api-list.md) | BDTP 数据服务接口 | 持久化数据查询 / 订阅 / 计算 |
| 风险数据服务 | [`docs/product-apis/risk-data-service/`](docs/product-apis/risk-data-service/api-list.md) | 风险事件接口 | 仅保留 OpenApi 模块（顶层包含 `tag=OpenApi` 的接口） |
| 工程事务服务 | [`docs/product-apis/work-order-service/`](docs/product-apis/work-order-service/api-list.md) | 工程事务接口 | 工单查询 / 任务创建 / 反馈 / 成本 |
| 准静态物理世界 | [`docs/product-apis/physical-world-service/`](docs/product-apis/physical-world-service/api-list.md) | 准静态物理世界接口 | 对象实例 / 三维数据 / 几何数据 / 关系路由查询（部分分组标记为「老接口不建议使用」/「暂时不可用」，需避开） |

实时接口数与同步时间见 [`docs/product-apis/README.md`](docs/product-apis/README.md)。

**使用提示**：

- AI 接到需求后，应首先查阅上表 3 个业务线的 `api-list.md` 判断是否有可直接复用的接口
- 确认调用后，**必须**读同目录下的 `openapi.json` 获取完整 schema（请求体、响应体、字段类型、枚举、必填项）
- 不论业务线是否为老产品起源，均按「外部业务线接口」考虑鉴权、隔离与错误处理

#### 接入新业务线

```bash
# 1. 准备 Apifox 个人访问令牌（一次性配置）
echo 'YOUR_APIFOX_TOKEN' > ~/.apifox-token
chmod 600 ~/.apifox-token

# 2. 同步该业务线的接口数据（仓库根目录下执行）
bash docs/product-apis/sync.sh <业务线英文名> <Apifox 项目 ID>

# 3. 更新 docs/product-apis/README.md 中的索引表格
```

#### 禁止事项

- 调用任何业务线的生产环境接口
- 直连任何业务线数据库
- 调用未登记在 `docs/product-apis/<业务线>/api-list.md` 中的接口
- 猜测接口路径、参数或响应字段（不确定时查 `openapi.json`）
- 把 Apifox 令牌、业务线 Token 写入代码、文档、提交记录
- 手工修改 `docs/product-apis/<业务线>/openapi.json`（应通过重新同步更新）

#### 接口需更新时

重新执行 `bash docs/product-apis/sync.sh <业务线> <项目 ID>`，并通过 `git diff` 检查接口变化。

### 3.14 常用命令清单

```bash
# ─── 日常开发 ───────────────────────────────────
pnpm install                              # 安装依赖
pnpm dev                                  # 启动全部（前端 3200 + 后端 3201）
pnpm dev:web                              # 只启动前端
pnpm dev:server                           # 只启动后端

# ─── 基础设施 ───────────────────────────────────
pnpm db:up                                # 启动本地基础设施（仅需使用 MySQL；Redis 容器会一起启动但业务代码不得连接）

# ─── 构建与检查 ─────────────────────────────────
pnpm build                                # 全量构建（后端 `prebuild` 会自动跑 `prisma generate`；前端产物输出到 `apps/web/<package.name>-web/`）
pnpm typecheck                            # 全量类型检查
pnpm lint                                 # 代码规范检查
pnpm test                                 # 全量测试
pnpm format                               # 代码格式化

# ─── 数据库 ─────────────────────────────────────
pnpm --filter @app/server prisma:generate # 生成 Prisma Client
pnpm --filter @app/server prisma:migrate  # 执行数据库迁移

# ─── 单包操作 ───────────────────────────────────
pnpm --filter @app/server test            # 后端测试
pnpm --filter @app/server typecheck       # 后端类型检查
pnpm --filter @app/web test               # 前端测试
pnpm --filter @app/web typecheck          # 前端类型检查
pnpm --filter @app/web build              # 前端构建
```

### 3.15 禁止事项

#### 架构类

- 禁止把业务专属逻辑塞进共享包（`packages/*`）
- 禁止把页面逻辑、路由逻辑放入 `packages/*`
- 禁止未核实上下文时直接大范围重构
- 禁止随意调整目录结构、脚本命名、导出边界

#### 契约类

- 禁止前后端重复定义同义接口类型
- 禁止绕过 `packages/api-contract` 手写接口结构
- 禁止只修改实现不补契约或测试

#### 多租户类

- 禁止遗漏 `tenant_id` 条件访问业务数据
- 禁止前端伪造租户切换作为安全边界
- 禁止在多个路由文件重复维护租户解析逻辑
- 禁止直接按业务主键查询而遗漏租户条件

#### 后端类

- 禁止把核心业务逻辑直接堆在路由处理器中
- 禁止只改数据库结构而不同步契约、实现或测试
- 禁止在业务代码中直接 `process.env`（应通过 `loadServerConfig()`）

#### 前端类

- 禁止绕过 `src/lib/api.ts` 在页面组件中直接拼接 fetch 请求
- 禁止在多个页面重复手写相同接口类型
- 禁止以前端条件判断替代真正的后端租户隔离
- 禁止在代码中硬编码 API 地址

#### 中间件类（重要｜当前阶段强约束）

> **当前非研发人员的业务开发中间件范围仅限 MySQL**。Redis 等其他中间件虽然在 `infra/docker/docker-compose.yml` 中保留，但**业务代码不得依赖**，AI 在自动设计代码时**不允许**主动引入。

- 禁止在业务代码中引入 `ioredis`、`redis`、`@redis/*` 等任何 Redis 客户端
- 禁止在 `apps/server/src/lib/` 下新增 `redis.ts`、缓存客户端、连接池等模块
- 禁止使用 Redis 实现会话存储、限流、消息队列、分布式锁、缓存等任何场景
- 禁止在 `packages/api-contract` 或 `packages/shared` 中暴露 Redis 相关类型/常量
- 禁止把 `REDIS_URL`、`REDIS_HOST`、`REDIS_PASSWORD` 等环境变量加入新代码读取路径
- 禁止引入 Kafka、RabbitMQ、MongoDB、Elasticsearch 等其他中间件作为变通方案
- 如确有缓存需求：优先用**进程内 `Map`**、**纯计算**或**Prisma 查询优化**解决；超出能力的需求需联系平台维护者评审，**不得自行扩展**

#### 安全类

- 禁止把敏感信息（密码、Token、密钥）写入代码、配置文件、日志、截图或通知
- 禁止调用任何业务线生产环境接口
- 禁止直连任何业务线数据库
- 禁止调用未登记在 `docs/product-apis/<业务线>/api-list.md` 中的接口
- 禁止仅凭 `api-list.md` 编造请求字段或响应类型（必须参阅 `openapi.json`）
- 禁止提交 `.env` 文件、`~/.apifox-token`、Apifox 令牌、业务线 Token 到 Git

#### 验证类

- 禁止未运行验证命令就宣称"已完成""已通过"
- 禁止编造仓库中不存在的脚本、目录、环境变量或部署方式
- 禁止不确定时做推断式修改

### 3.16 交付要求

每次功能开发完成后，必须输出以下内容：

#### 自测报告（参考 templates/self-test-template.md）

- 页面验证：页面可访问、关键功能正常、空数据正常
- 接口验证：新功能接口正常、错误处理正常
- 数据库验证：表结构正确、测试数据正确
- 验证命令执行结果

#### Review 交接说明（参考 templates/review-handoff-template.md）

- 需求名称与等级
- 新功能说明
- 与外部业务线接口的调用关系
- Prisma/数据库变更
- 修改文件清单
- 自测结果
- 风险点
- 建议正式上线方式

#### 其他交付要求

- 改了什么、为什么这样改
- 实际执行了哪些验证命令及输出
- 哪些验证未执行，以及原因
- 是否存在剩余风险、依赖项或后续事项

### 3.17 注释规范（JSDoc）

> 跨前后端通用，§ 3.5 与 § 3.6 中的局部注释要求均遵循本节。

- 注释风格统一采用 `JSDoc`，避免在同一仓库内混用多套注释风格。
- 注释应说明**职责、参数、返回值、约束、边界或副作用**，不要只重复代码表面含义。
- 对外暴露的函数、类、类型、配置加载入口、工具函数优先补充 `JSDoc`。
- 复杂分支、兼容逻辑、租户约束、配置解析逻辑等难以从代码表面直接看懂的部分，应增加 `JSDoc` 或邻近说明注释。
- 禁止编写无信息量注释，例如「给变量赋值」「调用函数执行」这类重复代码字面意思的注释。
- 新增代码时应同步考虑注释是否需要更新；修改已有行为时，也应同步更新失效注释。

### 3.18 变更落点决策

做改动前，按以下顺序判断应放在哪一层：

1. 是否仅属于某个 app 的页面、接口或流程？
2. 是否已被两个及以上应用稳定复用？
3. 是否属于接口契约而非实现逻辑？
4. 是否属于共享配置数据或配置加载逻辑？
5. 是否属于纯常量、纯类型、纯函数？

决策规则：

- 单一应用专属逻辑 → 对应 `apps/*`
- 前后端共享接口结构 → `packages/api-contract`
- 多应用共享配置文件与配置加载逻辑 → `packages/config`
- 通用常量、基础类型、纯函数 → `packages/shared`
- 前端业务组件 → 优先使用 `meri-plus`；确有业务组合需求时放 `apps/web/src/components` 或页面附近
- **不确定是否值得抽共享时，优先留在 app 内**，避免过早抽象

### 3.19 Memory 使用规范

Memory 是长期可复用知识，不是日志系统。

#### 必须写入

- 架构决策、项目规范、可复用流程
- 已确认根因与解决方案
- 项目长期背景、用户长期偏好

#### 禁止写入

- 普通聊天内容、临时调试信息
- 未验证结论、一次性状态、重复信息

#### 写入前判断

写入前必须先问自己：「**一个月后是否仍然有价值？**」否定则不写入。

---

## Part 4: 端到端开发示例

> 示例需求："新增待办事项管理功能，用户可以创建、查看、标记完成待办事项"

### PLAN 阶段

**涉及模块分析**：

| 模块 | 变更内容 |
|------|----------|
| `packages/api-contract` | 新增 Todo 相关 schema 和类型 |
| `apps/server/prisma` | 新增 Todo model（含 tenantId） |
| `apps/server/src/routes` | 新增 todo.ts 路由文件 |
| `apps/server/src/app.ts` | 注册新路由 |
| `apps/web/src/lib/api.ts` | 新增 Todo 请求函数 |
| `apps/web/src/routes` | 新增 TodoPage.vue |
| `apps/web/src/router.ts` | 注册新路由 |

### EXECUTE 阶段

#### 第 1 步：定义接口契约

文件：`packages/api-contract/src/index.ts`（追加内容）

```typescript
export const createTodoRequestSchema = z.object({
  title: z.string().min(1).max(200),
});

export type CreateTodoRequest = z.infer<typeof createTodoRequestSchema>;

export const todoResponseSchema = z.object({
  id: z.string(),
  title: z.string(),
  completed: z.boolean(),
  createdAt: z.string().datetime(),
});

export type TodoResponse = z.infer<typeof todoResponseSchema>;

export const todoListResponseSchema = z.object({
  items: z.array(todoResponseSchema),
  total: z.number(),
});

export type TodoListResponse = z.infer<typeof todoListResponseSchema>;
```

#### 第 2 步：新增 Prisma Model

文件：`apps/server/prisma/schema.prisma`（追加内容）

```prisma
model Todo {
  id        String   @id @default(cuid())
  tenantId  String   @map("tenant_id")
  title     String   @db.VarChar(200)
  completed Boolean  @default(false)
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")

  @@index([tenantId, completed])
  @@map("todos")
}
```

执行迁移：

```bash
pnpm --filter @app/server prisma:migrate
pnpm --filter @app/server prisma:generate
```

#### 第 3 步：新增后端路由

文件：`apps/server/src/routes/todo.ts`

```typescript
import type { FastifyInstance } from "fastify";
import {
  createTodoRequestSchema,
  todoListResponseSchema,
  todoResponseSchema,
} from "@app/api-contract";
import { createPrismaClient } from "../lib/prisma.js";

const prisma = createPrismaClient();

export async function registerTodoRoutes(app: FastifyInstance) {
  /** 获取当前租户的待办列表 */
  app.get("/todos", async (request) => {
    const tenantId = request.tenantContext!.tenantId;
    const items = await prisma.todo.findMany({
      where: { tenantId },
      orderBy: { createdAt: "desc" },
    });

    return todoListResponseSchema.parse({
      items: items.map((item) => ({
        ...item,
        createdAt: item.createdAt.toISOString(),
      })),
      total: items.length,
    });
  });

  /** 创建待办事项 */
  app.post("/todos", async (request, reply) => {
    const tenantId = request.tenantContext!.tenantId;
    const payload = createTodoRequestSchema.parse(request.body);

    const todo = await prisma.todo.create({
      data: { tenantId, title: payload.title },
    });

    return reply.status(201).send(
      todoResponseSchema.parse({
        ...todo,
        createdAt: todo.createdAt.toISOString(),
      }),
    );
  });

  /** 标记待办完成/未完成 */
  app.patch("/todos/:id/toggle", async (request) => {
    const tenantId = request.tenantContext!.tenantId;
    const { id } = request.params as { id: string };

    const existing = await prisma.todo.findFirst({
      where: { id, tenantId },
    });

    if (!existing) {
      throw app.httpErrors.notFound("Todo not found");
    }

    const updated = await prisma.todo.update({
      where: { id },
      data: { completed: !existing.completed },
    });

    return todoResponseSchema.parse({
      ...updated,
      createdAt: updated.createdAt.toISOString(),
    });
  });
}
```

在 `apps/server/src/app.ts` 中注册：

```typescript
import { registerTodoRoutes } from "./routes/todo.js";
// ... 在 buildApp 函数末尾
await registerTodoRoutes(app);
```

#### 第 4 步：新增前端请求函数

文件：`apps/web/src/lib/api.ts`（追加内容）

```typescript
import {
  type CreateTodoRequest,
  type TodoListResponse,
  type TodoResponse,
  todoListResponseSchema,
  todoResponseSchema,
} from "@app/api-contract";
import { TENANT_HEADER } from "@app/shared";

export function getTodos(tenantId: string): Promise<TodoListResponse> {
  return request(
    "/todos",
    { method: "GET", headers: { [TENANT_HEADER]: tenantId } },
    (value) => todoListResponseSchema.parse(value),
  );
}

export function createTodo(
  tenantId: string,
  payload: CreateTodoRequest,
): Promise<TodoResponse> {
  return request(
    "/todos",
    {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { [TENANT_HEADER]: tenantId },
    },
    (value) => todoResponseSchema.parse(value),
  );
}

export function toggleTodo(
  tenantId: string,
  id: string,
): Promise<TodoResponse> {
  return request(
    `/todos/${id}/toggle`,
    { method: "PATCH", headers: { [TENANT_HEADER]: tenantId } },
    (value) => todoResponseSchema.parse(value),
  );
}
```

#### 第 5 步：新增前端页面

文件：`apps/web/src/routes/TodoPage.vue`

```vue
<script setup lang="ts">
import { createTodo, getTodos, toggleTodo } from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { CheckCircle2, Circle, Plus } from "lucide-vue-next";
import { ref } from "vue";

const tenantId = "default";
const queryClient = useQueryClient();
const newTitle = ref("");

const todosQuery = useQuery({
  queryKey: ["todos"],
  queryFn: () => getTodos(tenantId),
});

const createMutation = useMutation({
  mutationFn: (title: string) => createTodo(tenantId, { title }),
  onSuccess: () => {
    newTitle.value = "";
    void queryClient.invalidateQueries({ queryKey: ["todos"] });
  },
});

const toggleMutation = useMutation({
  mutationFn: (id: string) => toggleTodo(tenantId, id),
  onSuccess: () => {
    void queryClient.invalidateQueries({ queryKey: ["todos"] });
  },
});

function handleCreate() {
  if (newTitle.value.trim()) {
    createMutation.mutate(newTitle.value.trim());
  }
}
</script>

<template>
  <section class="space-y-6">
    <div class="rounded-lg border border-slate-200 bg-white p-6">
      <h2 class="text-xl font-semibold">待办事项</h2>
      <form class="mt-4 flex gap-2" @submit.prevent="handleCreate">
        <MInput v-model:value="newTitle" placeholder="输入待办事项..." class="flex-1" />
        <MButton type="primary" :disabled="!newTitle.trim()">
          <Plus class="mr-1 h-4 w-4" />新增
        </MButton>
      </form>
    </div>

    <div class="space-y-2">
      <div
        v-for="todo in todosQuery.data.value?.items"
        :key="todo.id"
        class="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 cursor-pointer hover:bg-slate-50"
        @click="toggleMutation.mutate(todo.id)"
      >
        <component
          :is="todo.completed ? CheckCircle2 : Circle"
          class="h-5 w-5"
          :class="todo.completed ? 'text-emerald-500' : 'text-slate-400'"
        />
        <span :class="todo.completed ? 'line-through text-slate-400' : ''">
          {{ todo.title }}
        </span>
      </div>
    </div>
  </section>
</template>
```

#### 第 6 步：注册前端路由

文件：`apps/web/src/router.ts`（在 AppLayout children 中追加）

```typescript
{
  path: "todos",
  name: "todos",
  component: () => import("./routes/TodoPage.vue"),
}
```

### VERIFY 阶段

```bash
pnpm typecheck    # ✅ 全量类型检查通过
pnpm lint         # ✅ 无 lint 错误
pnpm test         # ✅ 全量测试通过
pnpm build        # ✅ 构建成功
```

### DONE 阶段 — 自测报告示例

```
## 页面验证
- 页面可访问：✅ /todos 页面正常渲染
- 关键功能正常：✅ 创建、列表展示、标记完成均正常
- 空数据正常：✅ 无待办时页面正常显示

## 接口验证
- GET /todos：✅ 返回租户隔离的待办列表
- POST /todos：✅ 创建待办并返回 201
- PATCH /todos/:id/toggle：✅ 切换完成状态

## 数据库验证
- 表结构：✅ todos 表已通过 Prisma migrate 创建
- 租户隔离：✅ 不同 tenantId 数据互不可见
```

---

## 附录

### A. 需求提示词模板

向 AI 提供需求时，推荐使用以下格式：

```
本任务将在 sandbox 环境中执行。
请先读取 AI-DEVELOPMENT-SPEC.md，然后按照规范开发以下需求。

执行要求：
1. 先进行需求分析和影响范围评估
2. 先生成结构化变更计划，不要立即修改代码
3. 按新功能开发处理，不直接改老产品
4. 如需使用外部业务线能力，只能调用 docs/product-apis 中登记的测试环境接口，必读对应 openapi.json 获取完整 schema
5. 数据库结构通过 Prisma 管理，不得提交数据库密码
6. 修改完成后输出自测报告和研发 Review 交接说明

客户需求如下：
【粘贴客户需求】
```

### B. 自测报告模板结构

```markdown
## 页面验证
- 页面可访问：
- 关键功能正常：
- 空数据正常：

## 接口验证
- 新功能接口：
- 错误处理：

## 数据库验证
- 表结构：
- 测试数据：

## 验证命令执行结果
- pnpm typecheck：
- pnpm lint：
- pnpm test：
- pnpm build：
```

### C. Review 交接模板结构

```markdown
## 需求名称
## 需求等级（L1/L2/L3/L4）
## 新功能说明
## 与外部业务线接口调用关系
## Prisma / 数据库变更
## 修改文件清单
## 自测结果
## 风险点
## 建议正式上线方式
```

### D. 关键文件索引

| 文件路径 | 用途 |
|----------|------|
| `AGENTS.md` | 公共开发规范与四层规则技能体系导览 |
| `rules/server.md` | 后端工程级规则（apps/server 改动必读） |
| `rules/web.md` | 前端工程级规则（apps/web 改动必读） |
| `.qoder/rules/` | IDE 级 always-on 规则（9 条 sandbox 硬约束） |
| `.qoder/skills/` | IDE 级按需技能（6 个 sandbox 工程类 + 10 个 Vue/组件库类） |
| `.qoder/skills/README.md` | Skill 清单总览 |
| `apps/server/src/app.ts` | 后端入口，插件/路由注册（双路径：`/` 与 `/<package.name>-server/`） |
| `apps/server/src/plugins/tenant.ts` | 租户插件，公开路由白名单（同时兼容带前缀路径） |
| `apps/server/src/config/env.ts` | 配置聚合（loadServerConfig） |
| `apps/server/prisma/schema.prisma` | 数据库模型定义 |
| `packages/api-contract/src/index.ts` | 接口契约定义 |
| `packages/shared/src/index.ts` | 共享常量（TENANT_HEADER）和类型 |
| `packages/config/src/loader.ts` | YAML 配置加载机制 |
| `apps/web/src/lib/api.ts` | 前端请求封装（含开发调用鉴权请求头注入） |
| `apps/web/.env.example` | 前端开发调用鉴权示例（`DEV_REQUEST_TOKEN/GROUP_CODE/PROJECT_ID`） |
| `apps/web/vite.config.ts` | Vite 配置（`base`、`__API_BASE_URL__` 注入、`/<name>-server` 代理、`/dev-config.js` 插件） |
| `.gitea/workflows/build_deploy.yml` | CI/CD 流水线 |
| `templates/quest-start-prompt.md` | AI 需求输入提示词模板 |
| `templates/self-test-template.md` | 自测报告模板 |
| `templates/review-handoff-template.md` | Review 交接模板 |
| `docs/product-apis/README.md` | 外部业务线接口总入口与已接入业务线索引 |
| `docs/product-apis/data-service/` | BDTP 数据服务接口（默认携带） |
| `docs/product-apis/risk-data-service/` | 风险事件接口（默认携带，仅 OpenApi 模块） |
| `docs/product-apis/work-order-service/` | 工程事务接口（默认携带） |
| `docs/product-apis/physical-world-service/` | 准静态物理世界接口（默认携带，避开老接口/不可用分组） |
| `docs/product-apis/<业务线>/openapi.json` | AI 必读的接口 schema（请求/响应完整定义） |
| `docs/product-apis/<业务线>/api-list.md` | 人类速查的接口索引 |
| `docs/product-apis/sync.sh` | Apifox 同步脚本 |
