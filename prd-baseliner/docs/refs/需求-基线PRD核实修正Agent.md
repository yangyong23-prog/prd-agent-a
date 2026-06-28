# 需求文档：基线 PRD 核实修正 Agent（MVP）

代号暂定 `prd-baseliner`（可改）。本文档交付给 Claude Code 作为开发依据。

## 0. 随附必读 & 输出契约

开发前先读以下两份，它们是**输出形状的权威**，Agent 产物必须与之一致：
- `基线PRD章节Schema.md` —— 输出的数据结构定义（文档级 / 章节级 / 正文范式 / 字段规则 / RAG 门）。
- `样例-异常事件基线PRD章节.md` —— 一份人工填好的目标样例，Agent 跑出来的东西应当是它的"真实数据版"。

Agent 的成功标准，最直接的表述就是：**喂入异常事件产线的代码 + 历史 PRD，自动产出一份达到该样例质量的章节实例 + 漂移台账 + PM 队列。**

---

## 1. 目标与范围

**一句话目标**：输入一条产品线的代码（锁定 commit）+ 该产线参与基线的历史 PRD 集合，输出一份按 schema 填好的基线 PRD 章节实例，并标出哪些由代码生成/核实、哪些需 PM 确认。

**MVP 范围**：单产品线（异常事件 / RCC）端到端跑通，产出真实样例。

**明确非目标（不要 over-build）**：
- 不做接口自动化测试、UI 自动化（已出局）。
- 不做多产线批处理、Web 控制台、迭代期增量保鲜——后续阶段。
- 不做历史 PRD 的自动发现/爬取；归集集合由人工以 manifest 提供（见 §4）。

---

## 2. 核心设计原则（架构不变量，不可违背）

这几条是硬约束，但**它们全是"正确性约束"，不是"部署约束"**——和气隙、和省不省 token 无关。本 Agent 跑在你自己的开发环境，放开用最强模型和开源生态；下面这些该守，理由是任务性质，模型越强越要守：

1. **穷举归工具、判断归模型**。接口/依赖/表/topic/枚举值这类"要求一个不漏"的事实，由确定性工具产出（§6），**不交给 LLM 去"数"或"列"**——这不是"少用 AI"，是因为穷举型任务里再强的模型也会漏、会编，这是任务性质决定的。把强模型用在它真正擅长的判断上，质量反而更高。
2. **事实/判断硬闸**。推理层在"已验证事实库"之上做判断，而非直接对原始源码自由生成。理由是把判断**接地在可信事实上**以降低臆造——这是质量手段，与部署无关。
3. **意图层永不自动改写**。意图层（背景/规则/流程/功能）的修正一律走 PM；推理层只产出建议+置信度、对意图层只写"待确认"。**模型越强这条越要守**：代码自证不了"该不该如此"，一个很有说服力的强模型最容易把 bug 洗白进 PRD。
4. **`build_status` 一等公民**。"文档说有、代码没有"的行为标 `规划中/已废弃`、不删；`历史切片/暂不处理` 带标签。RAG 入库门按 schema §7 执行。
5. **证据绑定**。每条结论必须挂具体证据：`commit:文件:行` / `dump 引用` / `旧 PRD 版本:节`。禁止裸断言。
6. **描述性可放权、规范性走人**。基线测试充分，`nature: 描述性` 的过期默认建议"按代码更新（PM 轻确认）"；`nature: 规范性` 一律 PM 决策。

---

## 3. 系统架构 / 模块划分

数据流：`归集 → 确定性抽取核心 → 已验证事实库 → PRD 解析 → 漂移检测 →（推理层）→ 路由+组装 → 产物`。推理层在硬闸之后；它面向最强模型、provider 可换（§7）。除穷举型抽取外，鼓励各环节放开用强模型与开源能力。

| 模块 | 职责 | 是否用 LLM |
|------|------|-----------|
| `collect` 归集 | 读入人工提供的 PRD manifest，定位、去重、标"作数/已被取代" | 否 |
| `extract` 确定性抽取核心 | 子工具集，从代码/库产出事实（见 §6） | 否 |
| `factstore` 已验证事实库 | 存放抽取出的结构化事实；推理层唯一可读来源 | 否 |
| `prd-parse` PRD 解析 | 把历史 PRD 切成候选 section（claim），按 kind 初分类 | 是（鼓励强模型/开源解析） |
| `drift` 漂移检测 | PRD-vs-PRD（历史漂移）+ PRD-vs-facts（文档vs代码），产出分歧 | 否（diff 确定性） |
| `reason` 推理层（可插拔） | 对分歧分类→`[代码]/[判定]/[编辑]`+置信度；判 `build_status`；判 `nature`；语义对齐建议；成熟度评分 | 是 |
| `route` 路由+组装 | 按修正来源分流；实建层自动反填；意图层标 `review_state`；组装成 schema 实例 | 否 |
| `emit` 产物输出 | 输出章节实例 + 漂移台账 + PM 队列，写 Forgejo/outputs | 否 |

> 注意 `drift` 在 `reason` 之前：分歧的**发现**是确定性的（diff），分歧的**归类与定性**才交给推理层。

---

## 4. 输入契约

```yaml
inputs:
  product_line: 异常事件（RCC）
  code:
    repo: <Forgejo repo>
    commit: <基线 commit/tag>          # 全程以它为准
    services: [风险管理服务, ...]        # 本产线涉及的服务列表
  prd_manifest:                         # 归集关由人工给定，不自动发现
    - { path: ./prd/异常事件管理.md, version: v7.0, status: 作数 }
    - { path: ..., version: ..., status: 已被取代 | 废稿 }
  runtime_facts:                        # 最终真相，可选但强烈建议
    ddl: <pg_dump --schema-only 文件 或 DB 连接>
    topics: <kafka-topics --list 输出>
    registry: <服务注册表导出>
  ontology:
    version: <版本>
    export: <Neo4j 概念/关系导出，供语义对齐>
  schema_def: ./基线PRD章节Schema.md     # 输出契约
  maturity_rules: <可选；缺省用内置规则>
```

边界处理：无可用 DB 时，`schema-dumper` 退化为解析 migration，并在产物里标 `事实来源=migration（可能漂移）`；服务无 springdoc 时，`openapi-extractor` 退回扫 controller 注解并降置信度、提示。

---

## 5. 输出契约

三份产物，全部 `section_id` 对齐、可挂载：

1. **章节实例**：符合 `基线PRD章节Schema.md`，每节含载重字段 + 正文 + 标记。实建层节带 `generated_from_commit`。
2. **漂移台账** `drift.yaml`：每条 `{drift_id, section_id, type: 文档历史漂移|文档vs代码, desc, evidence, source_authority, disposition}`。
3. **PM 决策队列** `queue.yaml`：每条 `{queue_id, section_id, type: 描述性过期|规范性意图|语义冲突|本体缺口, question, options, evidence, decision(空待回填)}`。

产物落 `/outputs` 并可推 Forgejo，与基线 commit 绑定。

---

## 6. 确定性抽取核心：各子工具契约

统一规则：每个工具的输出**逐项打 `generated_from_commit`**，喂入 `factstore`，再由 `route` 反填进对应 kind 的节。栈为 Spring Boot 3 / Java 21 / PostgreSQL / Kafka。

| 工具 | 输入 | 输出（事实） | 填入节 |
|------|------|-------------|--------|
| `openapi-extractor` | 服务 repo@commit | OpenAPI（端点/方法/入参/出参 schema/错误码）；含 MQ 消息 DTO schema | 接口 |
| `schema-dumper` | DB 连接 或 migration | 物理表（表/字段/类型/主外键/关系）+ 计算字段启发式标注 | 数据 |
| `dep-extractor` | 源码（字节码） | 同步依赖（Feign/RPC 目标）+ 异步依赖（topic 生产/消费）+ 基础设施依赖 | 依赖 |
| `topic-scanner` | 源码 + 运行期 topic 清单 | topic 列表 + 生产方/消费方映射 + "代码声明 vs 集群实际"对账 | 依赖 |
| `enum-scanner` | 源码 | 枚举常量真实取值（如"问题来源"） | 枚举（值） |

推荐实现：`openapi-extractor` 用 `springdoc-openapi-maven-plugin` 构建期产出；`dep-extractor` 用 jQAssistant 扫进 Neo4j 后 Cypher 查（与你现有 Neo4j 栈契合）；`schema-dumper` 走 `pg_dump --schema-only`；`enum-scanner` 可静态扫 + jQAssistant 兜底。这些都是建议、选型自由——欢迎接更强的开源工具（如 tree-sitter 做跨语言解析）；LLM 可在工具产出之上做归并、补全、可读化，但不替代穷举本身。

计算字段启发式（`schema-dumper`）：标出"库里无对应列但 PRD 当属性写"的字段为**疑似计算字段**（如 名称=拼接、持续时长=时间差、聚合类），列入需核实，最终由代码确认 persisted vs derived。

---

## 7. 推理层接口（面向最强模型，provider 可换）

推理层实现一个 `Reasoner` 接口；`route` 只依赖接口，不绑具体模型/提供方。这样可以随时换用当前最强的模型（不同 provider 或开源模型），而组装与路由逻辑不动。直接上你能拿到的最好模型，不必将就。

```python
class Reasoner(Protocol):
    # 对一条已 diff 出的分歧分类，返回建议——不写库，由 route 决定落盘
    def classify_divergence(self, fact, claim, evidence) -> Suggestion:
        # -> { bucket: 代码|判定|编辑, confidence: float, rationale, evidence }
        ...
    def judge_build_status(self, claim, fact) -> BuildStatusSuggestion: ...
    def judge_nature(self, claim) -> ("描述性"|"规范性", confidence): ...
    def align_semantics(self, text, ontology) -> SemanticSuggestion:
        # 含 本体缺口 反馈：可能建议改 PRD，也可能建议补本体
        ...
    def draft_design(self, structure, code) -> str:   # 设计叙述草稿（意图层，标草稿）
        ...
    def score_maturity(self, prd, facts) -> MaturityScore: ...
```

接口契约（硬约束）：
- 所有方法**只返回建议 + 置信度 + 证据**，无副作用。
- 低于阈值的 `confidence` 一律转 PM 队列。
- 推理层**无权**直接写意图层正文；它对意图层最多产出 `review_state=待PM确认` 的标记与 `draft`。

MVP 实现：直接用当前最强的模型起步；接口保证日后换更强的模型或换 provider 都不动上层。

---

## 8. 技术栈与假设（可被你否决）

- **编排器语言：Python**（理由：LLM 编排 + PRD/markdown 解析 + CLI 胶水 + 后续 RAGFlow 集成最顺；Claude Code 出活快）。JVM 工具（springdoc 插件、jQAssistant）以子进程/构建步骤调用；`pg_dump`/`kafka-topics` 走 CLI。若你方更倾向团队语言一致，可改 Java，但 MVP 速度上 Python 更优。
- **选型自由 + 鼓励接开源能力**：放开用最强模型和开源生态。建议方向——PRD/图表解析用 unstructured / LlamaParse 之类；跨语言代码解析用 tree-sitter；依赖图用 jQAssistant + Neo4j；检索用 RAGFlow；用 embedding 做语义召回，以及"这句话出自哪个旧版本"的跨版本相似匹配。这些是工具箱、不是限制。
- **版本化**：源码与产物均走 Forgejo，绑基线 commit。
- **本体**：读 Neo4j 导出做语义对齐；本体视为草稿，允许"本体缺口"反向反馈。

---

## 9. 构建顺序（每个里程碑都有可验证产物，逐步逼近真实样例）

**M1 · 确定性抽取先行（为正确性，非为气隙）**
跑通 §6 五个抽取工具，产出 `factstore`，能把样例中的 **节 5 接口 / 节 6 数据 / 节 7 枚举值** 填实。先做它不是为了"晚点再上 LLM"，而是这些穷举型事实必须可靠；模型驱动的解析与判断从 M2 起就放开用。
验证：拿异常事件产线代码，生成真实的工单交互消息契约、物理表结构、问题来源枚举真实取值——三者各自带 commit、可复现。**这一步单独就有交付价值**（补齐了原 PRD 最该有却为空/概念化的部分）。

**M2 · PRD 解析 + 漂移检测**
`prd-parse` 切节、`drift` 跑 PRD-vs-facts 与 PRD-vs-PRD，产出 `drift.yaml`；`route` 把实建层事实自动反填进章节实例。
验证：漂移台账每条带证据；实建层节自动成型。

**M3 · 推理层接入**
接 `Reasoner`，对意图层节（流程/规则/功能）做分类/置信度/`build_status`/`nature` 判定，产出核实标记与 `queue.yaml`；意图层正文不被改写、只标 `待PM确认`。
验证：节 3 规则表那几条"目前未实现"被判出 `build_status` 并标"需对照基线代码核实"；规范性意图进 PM 队列。

**M4 · 组装出真实样例**
`emit` 组装完整章节实例 + 两份台账，跑异常事件全产线，产出对标 `样例-异常事件基线PRD章节.md` 的**真实数据版**。

---

## 10. 验收标准

- 产物结构符合 `基线PRD章节Schema.md`（文档级 + 章节级字段齐全）。
- 接口/数据/依赖/枚举值 节由代码生成、带 `generated_from_commit`、可复现。
- 漂移台账每条有可点到的证据（commit:文件:行 / dump / 旧 PRD 版本）。
- 意图层（背景/规则/流程/功能）节**未被自动改写**，分歧均进 `drift`/`queue`。
- 每节有 `build_status`；RAG 入库门可判定（`indexable` 字段算得出）。
- "A程序"等占位名被识别为待绑定项、进 PM 队列（架构类）。
- 能区分 `需代码·生成 / 需代码·核实 / 需PM·确认 / 需PM·决策 / 需PM·本体`（即样例末尾两张清单可自动产出）。

---

## 11. 给 Claude Code 的额外提示

- 先读 §0 两份随附文件，把 schema 当作类型定义、把样例当作目标输出，再动 M1。
- 严守 §2 六条不变量；尤其"意图层不自动改写"和"事实/判断硬闸"是这套设计的正确性核心（与部署无关）。模型越强越要守，别让一个有说服力的模型直接改意图层、或把 bug 洗白进 PRD。
- M1 的抽取是工具活、先做扎实——它决定样例里实建层那半的真实度；其余环节放开用最强模型与开源能力，不必克制。
- 遇到设计取舍（如某服务无 springdoc、无库可 dump），按 §4 边界处理降级并在产物标注，不要静默猜测。
