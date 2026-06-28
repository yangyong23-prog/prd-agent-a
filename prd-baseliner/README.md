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

骨架阶段：模型层（schema/fact）+ 流水线编排 + 产物序列化 + RAG 入库门已可用并测；
五个抽取器与 prd_parse/drift/reason/route 为带契约的 stub，按 `docs/IMPLEMENTATION-PLAN.md`
的 M1→M4 逐步实现。
