# 基线 PRD 章节 Schema 规格

> 用途：作为基线版 PRD 梳理的统一容器。一份 schema 同时框住——四个梳理目标的产物形态、基线版本锚点、产品线成熟度分档、以及 RAG 的 chunk 边界与建成状态标签。
> 定位：PRD 在结构上被拆成两层——**实建层**（码派生、可再生、随 commit 保鲜）与**意图层**（人工拥有、PM 确认）。schema 的字段就是用来标住每一节属于哪层、由谁修、能不能入库。
> 用法：每条产品线一份文档级头，每节一个章节级块；梳理产物（漂移台账、PM 队列）挂载到 `section_id` 上。

---

## 一、三个层级

| 层级 | 粒度 | 作用 |
|------|------|------|
| 文档级 | 每条产品线一份 | 锚住基线 commit、成熟度档、处理模式、归集的历史 PRD 集合 |
| 章节级 | 每节 = 一个 RAG chunk | 自包含元数据：层归属、修正来源、建成状态、出处、本体概念 |
| 正文范式 | 节内正文 | 按章节类型走固定结构，便于生成、核实、检索 |

字段规则（第四节）把这三级串起来：章节级元数据决定**自动改 / 走 PM / 入不入库**,文档级的处理模式决定章节怎么被**填充**。

---

## 二、文档级 schema（每条产品线一份）

```yaml
product_line: 资产风险管控          # 产品线名称
baseline:
  version: v-baseline-2026
  commit: <git tag/commit>          # 基线锚点：构建已部署制品的那个提交，全文以它为准
  frozen_at: 2026-06-30             # 冻结时点
maturity_tier: 高 | 中 | 低          # PRD 成熟度档（入口评分得出）
processing_mode: 对齐 | 重建         # 由成熟度导出：高→对齐，低→重建，中→混合
source_prd_set:                     # 归集关圈定的历史 PRD 集合（人工/半自动定档）
  - { name: 异常事件管理, version: v3.1, status: 作数 }
  - { name: 异常事件_3.1, version: '-', status: 已被取代 }
  - { name: 位置视图, version: v1.2, status: 作数 }
ontology_version: <本体版本号>       # 本次语义对齐所依据的本体
runtime_fact_snapshot:              # 运行期事实 dump 的快照引用（最终真相）
  ddl: <pg_dump 引用>
  topics: <topic list 引用>
  registry: <服务注册表引用>
maturity_score:                     # 入口评分依据，留痕
  coverage: 0-1                     # 章节覆盖度
  empty_section_ratio: 0-1          # 空节比例
  initial_drift: 低 | 中 | 高        # 与基线代码的初始漂移量
review:
  state: 进行中 | 已签字
  signoff: [{ role: 产品负责人, name: '', at: '' }]
```

**成熟度 → 处理模式映射**：`高` 走对齐（文档为骨、核实补全），`低` 走重建（代码为骨、PM 补意图），`中` 混合（强节对齐、弱节重建）。映射可被人工覆盖，但要在 `maturity_score` 留依据。

---

## 三、章节级 schema（每节一个块 = 一个 RAG chunk）

```yaml
section_id: SEC-RCC-异常事件-接口-工单交互   # 稳定 ID，不随章节编号漂；漂移台账/队列挂在它上
title: 与工单的交互消息字段
service: 风险管理服务
kind: 背景 | 规则 | 流程 | 功能 | 接口 | 数据 | 依赖 | 枚举   # 决定正文范式（第六节）；前四类意图层，后四类实建层

layer: 实建层 | 意图层                        # 核心维度：实建层码派生可再生，意图层人工拥有
source_authority: 代码 | 判定 | 编辑          # 修正来源：决定能否自动改
build_status: 已实现 | 规划中 | 已废弃 | 历史切片 | 暂不处理   # 防 RAG 把未建成当现状
regenerable: true | false                    # 实建层=true，绑 commit 自动重生

provenance:                                  # 出处，二选一填
  # —— 实建层填这组 ——
  generated_from_commit: <commit>
  generator: springdoc | jqassistant | pg_dump | topic-scan
  # —— 意图层填这组 ——
  source_prd: { name: '', version: '' }
  pm_confirmed: { by: '', at: '', decision_ref: '' }

ontology_concepts: [异常事件, 问题, 风控策略]   # 触及的本体规范概念，供语义对齐与检索
review_state: 已核验 | 待PM确认 | 草稿
last_verified_commit: <commit>               # 最近一次与之核对过的 commit

drift: [DRIFT-0007, DRIFT-0012]              # 挂载的漂移台账项（目标 1 产物）
queue: [Q-0031]                              # 挂载的 PM 决策项（目标 2/规范性意图）

rag:
  indexable: true | false                    # 入库门（第七节规则得出）
  surface_status: true                       # 检索时强制带出 build_status
  chunk_boundary: self_contained             # 本节自包含，不依赖相邻节才能读懂
```

---

## 四、关键字段语义与约束（schema 的"逻辑"在这里）

这几条规则把字段变成机器约束,而不是靠人自觉。

**`layer` × `source_authority` → 能不能自动改**
- `实建层 + 代码`：代码一变即重生,**自动更新**,不进 PM 队列。
- `意图层 + 判定`：**永不自动改**,任何修正走 PM。
- `* + 编辑`：纯文档卫生（编号/错字/串位）,可批量自动整理。

**`build_status` → 防洗白 / 防 RAG 污染**
- 任何"文档说有、基线代码没有"的行为,标 `规划中` 或 `已废弃`,**不删**,由 PM 定性（你那份文档里的"目前未实现"就归这里）。
- `历史切片 / 暂不处理` 是有效内容但**不是现状**,必须带标签,绝不能被检索成当前行为。

**描述性过期 vs 规范性意图（`kind: 规则/流程/功能` 节内再细分）**——这是第三条背景（基线测试充分）能放权的边界：
```yaml
nature: 描述性 | 规范性                # 适用于 规则/流程/功能 三类行为意图节
# 描述性：陈述系统"现在怎么做"。基线代码可信度高 → 默认"按代码更新（PM 轻确认）"
# 规范性：断言系统"本就该怎么做"。再可信也走 PM 重决策——代码自证不了它实现的是不是你要的需求
```

**`provenance` → 可追溯 + 可再生**
- 实建层每段标 `generated_from_commit`,这是它"绑基线、可保鲜"的依据。
- 意图层每段留 `pm_confirmed`,这是 PM 判定的痕迹,下轮迭代不必重判。

---

## 五、基线锚点的用法

- 文档级 `baseline.commit` 是全文的参照原点;所有实建层节的 `generated_from_commit` 在基线时刻都等于它。
- 冻结后,这份 PRD 成为后续迭代 diff 的**参照系**：新迭代来时,diff 的是"新代码 vs 基线 PRD",而不是"新代码 vs 漂移文档"。
- 基线时刻**两层都做全量冻结**（做重、做彻底）;冻结之后,实建层的 `regenerable` 能力转为迭代期的增量保鲜。

---

## 六、正文范式（按 `kind`，目标 4 的"格式统一"落点）

每类节走固定结构,既便于生成,也便于成为干净的 RAG chunk。

| kind | 层 | 正文结构 | 谁产出 |
|------|----|----------|--------|
| 背景 | 意图层 | 需求背景 / 目标 / 约束 / 为什么这么设计 | 人写,PM 拥有 |
| 规则 | 意图层 | 触发条件 → 判断点 → 分支 → 结果（决策表）;每条带 `build_status` 与 `nature` | 人写,代码核实 |
| 流程 | 意图层 | 阶段/状态 → 转移 → 触发条件 → 输入/输出（状态机或流程序列）;带 `build_status` 与 `nature` | 人写,代码做漂移对照 |
| 功能 | 意图层 | 字段/操作 → 触发条件 → 展示与交互规则;带 `build_status` 与 `nature` | 人写,字段计算可对照 |
| 接口 | 实建层 | 端点 / 方法 / 入参 / 出参 schema / 错误码 / 收发方 | springdoc 生成 |
| 数据 | 实建层 | 表 / 字段 / 类型 / 主外键 / 关系;**计算字段单列标注** | pg_dump 生成 |
| 依赖 | 实建层 | 同步依赖（Feign/RPC）/ 异步依赖（topic 生产·消费）/ 基础设施依赖 | jqassistant + 扫描 |
| 枚举 | 混合 | 单一来源＝代码常量;值（生成）/ 含义＝本体规范名（人补）/ 各处引用一致性 | 值码派生,含义人补 |

`接口/数据/依赖/枚举`-值 是绑 commit 的**生成块**,不手维护;代码变就重生。`背景/规则/流程/功能/枚举`-含义 是意图层人工内容,留 PM 痕迹;其中 `规则/流程/功能` 虽属意图层,但代码有实现、**可被代码核实做漂移对照**——描述性的那半在基线下默认按代码更新,规范性的仍走 PM。

---

## 七、RAG 入库门

语料入库前过这道门,否则 RAG 会把未建成/历史内容当现状自信检索出去。

```
indexable = true  当且仅当:
  build_status == 已实现  且  review_state == 已核验
否则:
  规划中 / 已废弃 / 历史切片 / 暂不处理 → 仍可入库，但 surface_status 强制带标签，
                                            检索结果必须显式标注"非当前现状"
  待PM确认 / 草稿 → 不入库
```

每个 chunk 以 `section_id` 为检索单元,自包含;`ontology_concepts` 作为语义标签辅助召回。那份 PRD 体检清单的缺陷类目,直接当**入库质量门的检查项**。

---

## 八、两种处理模式如何填充章节

**对齐模式（文档强）**：保留现有章节 → 核实 → 标 `drift` → 补 `接口/数据/依赖` 等实建层节 → 给 `语义归一` 建议。意图层基本沿用,`build_status` 逐节复核。

**重建模式（文档弱）**：以基线代码为骨架先生成全部实建层节（`接口/数据/依赖/枚举`-值）→ 意图层节（`背景/规则`）标 `review_state: 草稿 / 待PM确认`,列入 PM 补全队列 → 漂移台账退化为"代码有、原文档无"清单。

混合模式按节走：强节对齐、弱节重建,粒度到 `section_id`。

---

## 九、挂载的梳理产物（不脱离 PRD，挂在 section_id 上）

**漂移台账（目标 1）**
```yaml
- drift_id: DRIFT-0007
  section_id: <挂载节>
  type: 文档历史漂移 | 文档vs代码      # 前者不需代码即可定，后者需 diff
  desc: ''
  evidence: <commit:行 / dump / 旧PRD版本>
  source_authority: 代码 | 判定 | 编辑
  disposition: 自动更新 | 进PM队列
```

**PM 决策队列（目标 2 与规范性意图）**
```yaml
- queue_id: Q-0031
  section_id: <挂载节>
  type: 描述性过期 | 规范性意图 | 语义冲突 | 本体缺口   # 本体缺口=反馈给本体 owner，不是改 PRD
  question: ''
  options: ['按代码更新', '保留原表述', '修订为…']
  evidence: ''
  decision: ''                          # PM 回填，写回对应节的 pm_confirmed
```

`本体缺口` 这一类提醒：语义对齐是双向的——冲突既可能修 PRD,也可能是本体漏了概念、该反馈给本体 owner。
