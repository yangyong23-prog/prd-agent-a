# prd-baseliner —— 基线 PRD 核实修正 Agent（MVP）

> 输入一条产品线的代码（锁定 commit）+ 该产线参与基线的历史 PRD 集合，
> 输出一份按《基线 PRD 章节 Schema》填好的基线 PRD 章节实例，并标出哪些由代码
> 生成/核实、哪些需 PM 确认。

本目录是 Agent 的 Python 实现，与仓库根的 `yushu-app`（Fastify/Vue monorepo）**并存**——
后者是本 MVP 的**样例目标产线代码**（异常事件/RCC），即 Agent 要分析的输入。

## 权威参考（动手前必读，§0）

| 文件 | 角色 |
|------|------|
| [`docs/refs/基线PRD章节Schema.md`](docs/refs/基线PRD章节Schema.md) | 输出形状（数据结构）——当作类型定义 |
| [`docs/refs/样例-异常事件基线PRD章节.md`](docs/refs/样例-异常事件基线PRD章节.md) | 目标输出样例——成品应是它的"真实数据版" |
| [`docs/refs/需求-基线PRD核实修正Agent.md`](docs/refs/需求-基线PRD核实修正Agent.md) | 本 Agent 的需求文档 |
| [`docs/IMPLEMENTATION-PLAN.md`](docs/IMPLEMENTATION-PLAN.md) | 实现计划（里程碑 M1–M4、任务拆解、栈适配） |

## 模块（对齐需求文档 §3 数据流）

```
归集 → 确定性抽取核心 → 已验证事实库 → PRD解析 → 漂移检测 →（推理层）→ 路由+组装 → 产物
collect   extract        factstore     prd_parse   drift        reason       route      emit
```

| 包 | 职责 | 用 LLM |
|----|------|--------|
| `collect`   | 读 PRD manifest，定位/去重/标作数 | 否 |
| `extract`   | 五个确定性抽取子工具（穷举归工具） | 否 |
| `factstore` | 已验证事实库，推理层唯一可读来源 | 否 |
| `prd_parse` | 历史 PRD 切节成 claim，按 kind 初分类 | 是 |
| `drift`     | PRD-vs-facts + PRD-vs-PRD 确定性 diff | 否 |
| `reason`    | 可插拔 Reasoner：分类/build_status/nature/语义/成熟度 | 是 |
| `route`     | 按修正来源分流、实建层反填、意图层标 review_state、组装 | 否 |
| `emit`      | 输出章节实例 + drift.yaml + queue.yaml | 否 |

## 四条不可违背的不变量（需求文档 §2）

1. **穷举归工具、判断归模型**——接口/表/topic/枚举值由确定性工具产出，不让 LLM 数/列。
2. **事实/判断硬闸**——推理层只读 `factstore`，不直接对源码自由生成。
3. **意图层永不自动改写**——背景/规则/流程/功能只标 `待PM确认`/`草稿`，分歧进 drift/queue。
4. **证据绑定**——每条结论挂 `commit:文件:行 / dump / 旧PRD版本`，禁止裸断言。

## 快速开始

```bash
cd prd-baseliner
python -m pytest                              # 骨架冒烟测试
cp configs/inputs.example.yaml configs/inputs.yaml
python -m prd_baseliner.cli run --config configs/inputs.yaml
# 骨架阶段：未实现的阶段打印 [skip]，产出空的 outputs/*.yaml（结构正确）
```

产物落 `outputs/`：`document.yaml` / `sections.yaml` / `drift.yaml` / `queue.yaml`。

## 当前状态

**M1 已完成**（确定性抽取 + 实建层组装）。对样例产线实测：

```
[ok]   openapi-extractor: 380 facts      # docs/product-apis/*/openapi.json → 接口
[ok]   schema-dumper:       3 facts      # apps/server/prisma/schema.prisma → 数据
[ok]   enum-scanner:      241 facts      # OpenAPI components enum 去重 → 枚举
[done] facts=624 sections=9             # 3 数据 + 4 接口 + 2 枚举，全部带 generated_from_commit
```

产出已直击 RCC 主题：接口节含 `…/list-action-by-exceptionId`（异常事件↔工单交互），
枚举节含 `workType: PLAN_MAINTENANCE/SUBSCRIBER_REPORT/…`（样例 §7「问题来源」真实取值）。

- ✅ M1：`schema-dumper` / `openapi-extractor` / `enum-scanner` / `route` 实建层反填 / `render` 正文范式
- ✅ M2：`prd_parse` 切节分类 + `drift` 双路 diff（历史漂移 / 文档vs代码）+ 意图层节（不改写）+ PM 队列
- ✅ M3：推理层判定 `build_status`/`nature`（`HeuristicReasoner` 默认无 key 可跑；`ClaudeReasoner` LLM 路径），意图层只标不改
- ✅ M4：`emit` 渲染对标样例的成品 markdown（章节实例 + 就地标记 + 末尾两张清单自动产出）

**四个里程碑全部完成**。产物：`outputs/{document,sections,drift,queue}.yaml` + `基线PRD章节实例.md`。
成品示例（用占位 fixture 跑，安全无真实 PRD）见 [`examples/output/示例-基线PRD章节实例.md`](examples/output/示例-基线PRD章节实例.md)。
真实 PRD 实测产出 46 节、106KB 成品，五类标记（需代码·生成/核实、需PM·确认/决策/本体）自动产出。

M3 在真实 PRD 上实测：规则章节含「目前未实现/后续逻辑」→ 自动判 `build_status=规划中` +
入队「需对照基线代码核实」；「列表字段展示」含「人工修改权重高于计算规则」→ 判 `nature=混合`
入队 PM 决策；描述性节默认「按代码更新（PM 轻确认）」不阻塞。推理层只写元数据与队列，**正文逐字不改**。
`--reasoner heuristic|claude|noop` 可切换（接口同一，route 不感知差异）。

M2 实测（用 `examples/prd` 占位 fixture，换成真实历史 PRD 即可）：10 claims → 3 drifts
（流程/枚举历史漂移、接口节空但代码有 380 端点）+ 3 queue（A程序绑定、问题来源「共10种实列7项」、
中文取值↔代码常量对齐）。意图层节原文逐字保留、标 `待PM确认`、`build_status` 不臆断。
`dep-extractor`/`topic-scanner` 仍待做（本样例无 Kafka，topic-scanner 预期空集）。
详见 `docs/IMPLEMENTATION-PLAN.md`。
