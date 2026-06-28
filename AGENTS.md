# AGENTS.md

## 1. 文档目标

本文件定义当前仓库的公共开发规范，供 Agent 与开发者在本项目内协作时共同遵循。

目标：

- 保持实现稳定、可复现、可验证。
- 保持 Monorepo 边界清晰，避免职责混乱。
- 保持前后端接口契约一致，减少重复定义。
- 保持多租户实现安全，避免越权访问。
- 保持交付可检查，不以“看起来没问题”代替实际验证。

## 2. 规则与技能体系

本仓库的开发约束分布在四个层面，AI 与开发者应按优先级依次确认。

### 2.1 顶层规范（仓库根）

- [`AGENTS.md`](AGENTS.md)：本文件，公共开发规范与跨服务约束
- [`AI-DEVELOPMENT-SPEC.md`](AI-DEVELOPMENT-SPEC.md)：单文件自包含技术规范，AI 开发本工程的主入口

### 2.2 工程级规则（`rules/`）

涉及具体服务实现时，除遵守本文件外，还必须同时遵守：

- `apps/web` 改动：[`rules/web.md`](rules/web.md)
- `apps/server` 改动：[`rules/server.md`](rules/server.md)

如果一次改动同时涉及多个服务，则应同时查阅并遵守多份规则文档。

### 2.3 IDE 级 always-on 规则（`.qoder/rules/`）

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

这 9 条规则与本文件、`AI-DEVELOPMENT-SPEC.md` 共同构成约束，**冲突时以仓库当前实现与本文件为准**（详见 § 17）。

### 2.4 IDE 级技能（`.qoder/skills/`）

`.qoder/skills/` 下 16 个 Skill 在用户调用或匹配触发时按需加载，分两类：

**Sandbox 工程类（6 个，本仓库自定义）**：

- `expert-quest-controller`：需求接入引导
- `mysql-schema-designer`：MySQL schema 设计辅助
- `product-api-researcher`：业务线接口检索
- `review-handoff-writer`：Review 交接稿生成
- `sandbox-debugger`：Sandbox 日志/问题诊断
- `self-test-writer`：自测报告生成

**Vue / 组件库类（10 个，安装自外部源）**：

- Vue 3 实践：`vue-best-practices`、`vue-debug-guides`、`vue-jsx-best-practices`、`vue-options-api-best-practices`、`vue-pinia-best-practices`、`vue-router-best-practices`、`vue-testing-best-practices`、`create-adaptable-composable`
- 组件库：`meri-plus`

调用约束：

- Skill 是工具能力清单，**不替代**本文件与 spec 的开发规范。
- 不要把 Skill 行为写进 spec 的强制条款；它们随安装升级可能变化。
- Skill 文件清单详见 [`.qoder/skills/README.md`](.qoder/skills/README.md)。

## 3. 项目概览

这是一个企业后台业务脚手架，采用 `pnpm workspace` + `turbo` 管理 Monorepo。

核心技术栈：

- `apps/web`：Vue3 + Vite + Vue Router + TanStack Vue Query + meri-plus + Tailwind CSS
- `apps/server`：Fastify + TypeScript + Prisma + MySQL
- `packages/api-contract`：前后端共享 Zod schema、DTO、类型
- `packages/config`：多应用共享环境变量配置加载与 schema 校验
- `packages/shared`：共享常量、共享类型、纯函数
- `packages/eslint-config`：统一 ESLint 配置
- `packages/tsconfig`：统一 TypeScript 配置

仓库目录全貌：

```text
sandbox-service-template/
├── AGENTS.md                       本文件，公共开发规范
├── AI-DEVELOPMENT-SPEC.md          单文件自包含 AI 开发规范
├── README.md                       面向人类的总入口
├── 创建新服务-提示词.md             非研发人员「创建新服务」提示词
├── 更新工程-提示词.md               非研发人员「更新工程」提示词
├── apps/                           应用代码
│   ├── server/                     Fastify API 服务
│   └── web/                        Vue 管理后台
├── packages/                       共享包
│   ├── api-contract/               接口契约（Zod schema + 类型）
│   ├── config/                     共享 YAML 配置 + 加载层
│   ├── shared/                     跨端常量/类型/纯函数
│   ├── eslint-config/              统一 ESLint
│   └── tsconfig/                   统一 TypeScript 配置
├── rules/                          工程级规则（本文件 § 2.2）
│   ├── server.md
│   └── web.md
├── docs/                           架构、运行手册、外部业务线接口
│   ├── product-apis/               外部业务线接口（当前 4 业务线）
│   └── …                          architecture / runbook / mysql-dev-guide 等
├── templates/                      自测/Review/需求提示词模板
├── infra/                          本地开发基础设施
│   ├── docker/                     docker-compose（MySQL + 保留 Redis 容器）
│   └── nginx/
├── k8s/                            CI/CD 部署配置
│   ├── ci-infra/                   Dagger 构建脚本与 K8s 模板
│   └── env/                        多环境配置
├── .gitea/workflows/               Forgejo Actions 流水线
└── .qoder/                         IDE 级规则与技能（本文件 § 2.3、§ 2.4）
    ├── rules/                      9 条 always-on 规则
    └── skills/                     16 个按需技能
```

## 4. 最高优先级原则

### 4.1 确定性优先

- 相同输入应尽量得到相同输出。
- 优先选择稳定方案，不引入无必要的隐式行为。
- 没有证据时不做推断式修改。

### 4.2 最小假设

- 信息不足时，应先补上下文，再做变更。
- 不得臆测接口字段、数据库结构、运行方式或业务规则。
- 不明确时，优先查仓库内文档、代码与既有约定。

### 4.3 显式执行

- 复杂任务按 `PLAN -> EXECUTE -> VERIFY -> DONE` 推进。
- 修改前先确认改动落点与影响范围。
- 修改后必须按范围执行验证，不能跳过验证直接宣称完成。

### 4.4 安全失败

- 不确定时明确说明不确定。
- 禁止编造不存在的脚本、接口、字段、目录或流程。
- 不做隐式副作用操作，所有关键操作都应有明确目的。

## 5. 工作方式

### 5.1 先理解，再修改

- 先阅读相关代码、配置、文档，再动手修改。
- 涉及历史决策、既有规范、已解决问题时，优先查询 Memory。
- 若已有实现模式，应优先沿用，不要无关重构。

### 5.2 修改范围最小化

- 只修改完成当前目标所必需的文件。
- 不顺手修 unrelated 问题，除非它直接阻塞当前任务。
- 不随意调整目录结构、脚本命名、导出边界。

### 5.3 输出要求

- 说明结论时区分“事实”“推理”“假设”。
- 交付时优先给出结果、验证情况、剩余风险。
- 不以主观判断替代命令输出或代码依据。

### 5.4 代码注释规范

- 书写代码过程中必须同步添加或更新对应注释；新增核心类型、公共方法、配置入口、生成器、请求封装、跨端共享能力时不得省略注释。
- 编码过程中应为核心类型、公共方法、复杂函数、关键流程和不直观的业务规则补充必要注释。
- 注释风格统一采用 `JSDoc`，避免在同一仓库内混用多套注释风格。
- 注释应说明职责、参数、返回值、约束、边界或副作用，不要只重复代码表面含义。
- 对外暴露的函数、类、类型、配置加载入口、工具函数优先补充 `JSDoc` 注释。
- 自动生成代码也必须输出 `JSDoc` 注释；生成器应保证生成文件中的接口方法、请求体类型、查询参数类型和核心组件类型具备可读注释。
- 复杂分支、兼容逻辑、租户约束、配置解析逻辑等难以从代码表面直接看懂的部分，应增加 `JSDoc` 或邻近说明注释。
- 禁止编写无信息量注释，例如“给变量赋值”“调用函数执行”这类重复代码字面意思的注释。
- 新增代码时应同步考虑注释是否需要更新；修改已有行为时，也应同步更新失效注释。

## 6. Monorepo 公共边界

### 6.1 apps

- `apps/web` 只放前端应用代码。
- `apps/server` 只放服务端代码。

### 6.2 packages

- `packages/api-contract` 只放接口契约相关内容，如 Zod schema、DTO、请求响应类型。
- `packages/config` 用于维护多个应用共享的环境变量配置加载逻辑与配置 schema。
- `packages/shared` 只放真正跨端复用的常量、基础类型、纯函数。
- `packages/eslint-config` 与 `packages/tsconfig` 只负责工程配置复用。

### 6.3 公共约束

- app 专属逻辑不得放入共享包。
- 共享包只保留跨应用、跨模块确实复用的内容。
- `packages/shared` 不应依赖 Vue、Fastify、Prisma 等框架运行时。
- `packages/config` 不放业务实现代码，只负责环境变量配置解析和配置校验。
- `packages/api-contract` 不放请求实现，不放页面逻辑，不放数据库访问代码。

## 7. 共享配置规范

### 7.1 配置来源

- 当前项目运行时配置统一从环境变量读取。
- 本地开发可使用根目录 `.env` 或 `.env.sandbox.local` 注入环境变量。
- `.env.sandbox.local` 必须保持 Git 忽略状态，用于保存本地敏感信息。

### 7.2 推荐结构

推荐采用“环境变量 + TypeScript 加载层 + schema 校验层”的结构：

```txt
packages/config/
  src/
    index.ts
    loader.ts
    schema.ts
```

要求：

- `src/loader.ts` 负责读取 `.env`、`.env.sandbox.local` 与 `process.env`。
- `src/schema.ts` 负责配置结构校验，优先使用 `zod`。
- `src/index.ts` 负责导出统一的配置访问入口。

### 7.3 使用约束

- 不再使用 `packages/config/configs/*.yaml` 作为配置来源。
- 机器相关、环境相关、敏感信息相关内容使用环境变量。
- 不要把数据库密码、密钥、Token、私有地址等敏感信息提交到代码或可提交配置文件中。
- 配置结构一旦被多个应用依赖，变更时必须同步评估兼容性。

### 7.4 变更要求

- 新增或修改共享配置时，应同时更新配置 schema 与消费方类型。
- 若配置字段影响前后端协作行为，应补充对应测试或最小验证。
- 若只是临时实验配置，不应进入共享配置 schema。

## 8. 接口契约公共规范

### 8.1 契约优先

- 前后端接口字段以 `packages/api-contract` 为单一事实来源。
- 当接口请求体、响应体、参数结构变更时，应优先更新契约，再同步前后端实现。
- 前端与后端不要各自维护一份语义相同但定义分散的类型。

### 8.2 类型使用原则

- 能复用契约类型时，不要在 app 内重新声明同义类型。
- `packages/shared` 放跨端共享但不属于接口契约的基础类型与常量。
- Zod schema 与 TypeScript 类型应保持一致，不允许一边更新一边遗漏。

## 9. 多租户公共规范

当前采用“共享库共享表”模型。

统一要求：

- 业务表默认包含 `tenant_id`。
- 后端通过请求上下文解析当前租户。
- Service/Repository 层应统一注入租户条件。
- 前端不能直接决定核心查询使用哪个租户。
- 租户请求头常量位于 `packages/shared`，应优先复用既有常量。

禁止事项：

- 直接按业务主键查询而遗漏租户条件。
- 在前端伪造租户切换作为安全边界。
- 在共享包中写入依赖具体租户实现细节的业务逻辑。

## 10. 测试与验证公共原则

### 10.1 总原则

- 提交或交付前，不能只凭静态阅读声称“已通过”。
- 必须基于实际命令输出说明验证结果。
- 按改动范围选择最小但充分的验证集合。

### 10.2 服务级验证入口

- `apps/web` 变更：参见 [`rules/web.md`](rules/web.md)
- `apps/server` 变更：参见 [`rules/server.md`](rules/server.md)

## 11. 常用命令

```bash
pnpm install
pnpm dev
pnpm dev:web
pnpm dev:server
pnpm build
pnpm typecheck
pnpm lint
pnpm test
pnpm format
```

数据库与基础设施：

```bash
pnpm db:up
pnpm --filter @app/server prisma:generate
pnpm --filter @app/server prisma:migrate
```

## 12. 变更落点决策

做改动前，优先按以下顺序判断应放在哪一层：

1. 是否仅属于某个 app 的页面、接口或流程？
2. 是否已被两个及以上应用稳定复用？
3. 是否属于接口契约而非实现逻辑？
4. 是否属于共享配置数据或配置加载逻辑？
5. 是否属于纯常量、纯类型、纯函数？

决策规则：

- 单一应用专属逻辑，放对应 `apps/*`。
- 前后端共享接口结构，放 `packages/api-contract`。
- 多应用共享配置文件与配置加载逻辑，放 `packages/config`。
- 通用常量、基础类型、纯函数，放 `packages/shared`。
- 前端优先使用 `meri-plus` 组件；仅当前端应用确有业务组合组件时，放在 `apps/web/src/components` 或页面附近。
- 不确定是否值得抽共享时，优先留在 app 内，避免过早抽象。

## 13. 禁止事项

- 禁止在未核实上下文时直接大范围重构。
- 禁止把业务专属逻辑塞进共享包。
- 禁止把敏感信息写入代码或可提交配置文件。
- 禁止前后端重复定义同义接口类型。
- 禁止绕过租户上下文直接查询业务数据。
- 禁止只修改实现不补契约或测试。
- 禁止未运行验证命令就宣称“已完成”“已通过”。
- 禁止编造仓库中不存在的脚本、目录、环境变量或部署方式。

## 14. 交付要求

完成任务时应至少说明：

- 改了什么。
- 为什么这样改。
- 实际执行了哪些验证命令。
- 哪些验证未执行，以及原因。
- 是否存在剩余风险、依赖项或后续事项。

如果未运行测试，必须明确说明“未运行”，不能模糊表达为“理论上可行”。

## 15. Memory 使用规范

Memory 是长期可复用知识，不是日志系统。

### 15.1 必须写入的内容

- 架构决策
- 项目规范
- 可复用流程
- 已确认根因与解决方案
- 项目长期背景
- 用户长期偏好

### 15.2 禁止写入的内容

- 普通聊天内容
- 临时调试信息
- 未验证结论
- 一次性状态
- 重复信息

### 15.3 写入前判断

写入前必须先问自己：

“一个月后是否仍然有价值？”

如果答案是否定的，则不要写入 Memory。

## 16. 结论

本项目所有开发活动都应围绕以下目标展开：

- 边界清晰
- 契约一致
- 多租户安全
- 变更可验证
- 交付可复现

当局部效率与整体稳定性冲突时，优先选择整体稳定性。

## 17. 关于补充资料的兼容声明

仓库内一些资料（包括 `.qoder/rules/` 部分条款、`templates/`、部分 `docs/` 文件）原本来自 sandbox 服务模板。涉及与本仓库实际实现冲突时，以本文件、`AI-DEVELOPMENT-SPEC.md`、`rules/server.md`、`rules/web.md` 与仓库内实际代码为准。

适用原则：

- 若 `.qoder/rules/` 或 sandbox 文档与当前实现冲突，以本文件与仓库当前实现为准。
- 本仓库本地基础设施实际包含 MySQL 与保留的 Redis 容器，但**业务代码仅允许使用 MySQL**，禁止依赖 Redis（详见 `.qoder/rules/03-mysql-only.md` 与 `AI-DEVELOPMENT-SPEC.md` § 3.15）。
- 数据库 schema 由 Prisma 维护，不再使用 sandbox 模板原带的 `sql/` migration 或 `scripts/mysql-migrate.sh` 流程。
- Forgejo Actions 与 K8s 部署已接入：`.gitea/workflows/build_deploy.yml`、`k8s/k8s_env_config.yml`、`k8s/ci-infra/templates/k8s_deploy.yaml` 已实装；相关约束参见 `.qoder/rules/05-ci-cd-notification.md`。
- 调用外部业务线接口时，只能调用 `docs/product-apis/<业务线>/api-list.md` 中登记的接口（当前 4 业务线：`data-service`、`risk-data-service`、`work-order-service`、`physical-world-service`），代码实现须参阅对应 `openapi.json` 获取完整 schema；不调用生产接口，不直连业务线数据库，不猜测未登记接口。
- 凭据、Token、数据库密码、Webhook、Kubeconfig 不得提交到 Git、代码、文档、日志、通知或截图中。
