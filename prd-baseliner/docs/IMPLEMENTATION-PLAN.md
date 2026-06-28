# prd-baseliner 实现计划

> 配套阅读：`docs/refs/需求-基线PRD核实修正Agent.md`（需求）、`基线PRD章节Schema.md`（输出形状）、
> `样例-异常事件基线PRD章节.md`（目标输出）。本计划是把这三者落到代码的路线图。

---

## 0. 一句话目标与成功判据

**目标**：喂入异常事件产线的代码（锁定 commit）+ 历史 PRD，自动产出一份达到样例质量的
「章节实例 + 漂移台账 + PM 队列」。

**成功 = 验收标准（需求文档 §10）全绿**：
- 产物结构符合 Schema（文档级 + 章节级字段齐全）。
- 接口/数据/依赖/枚举值节由代码生成、带 `generated_from_commit`、可复现。
- 漂移台账每条有可点到证据（`commit:文件:行 / dump / 旧PRD版本`）。
- 意图层节未被自动改写，分歧均进 `drift`/`queue`。
- 每节有 `build_status`，`indexable` 算得出。
- "A程序"占位名被识别为待绑定项、进 PM 队列。
- 能区分 `需代码·生成 / 需代码·核实 / 需PM·确认 / 需PM·决策 / 需PM·本体`（样例末尾两张清单可自动产出）。

---

## 1. 关键决策与现状（已定）

| 决策 | 取值 | 依据 |
|------|------|------|
| 编排语言 | **Python**，独立子目录 `prd-baseliner/` | 需求 §8 推荐；与根 TS monorepo 并存 |
| 样例目标产线 | 仓库根 `yushu-app`（保留不动，当输入 commit） | 用户确认 |
| 骨架运行时依赖 | 仅 PyYAML（dataclasses 建模，零额外依赖即可跑） | MVP 出活快，后续可换 pydantic |
| 推理层 | 可插拔 `Reasoner`；MVP `NoopReasoner` 起步，M3 换 `ClaudeReasoner` | 需求 §7 |

### ⚠️ 栈适配（必须重视的偏差）

需求文档 §6 的抽取工具**假设目标栈是 Spring Boot / Java / PostgreSQL / Kafka**，
但实际样例产线 `yushu-app` 是 **Fastify / TS / Prisma / MySQL / Zod，且无消息中间件**。
因此抽取工具要按真实栈重映射（这正是 §4「边界处理」「不静默猜测」的适用场景）：

| 需求文档假设 | 样例产线真实情况 | 适配后做法 |
|--------------|------------------|------------|
| springdoc-openapi 构建期产出 | `docs/product-apis/<svc>/openapi.json` 已存在 + Fastify Swagger + Zod | 直接读现成 OpenAPI；缺则扫路由+Zod 降置信度 |
| pg_dump --schema-only | `apps/server/prisma/schema.prisma` + migrations | 解析 Prisma model/@map/@relation；退化解析 migration.sql |
| jQAssistant 扫字节码 | TS 源码 + `packages/shared/src/product-apis/*.ts` | 静态扫 import + `requestGateway` 调用点；tree-sitter 兜底 |
| kafka-topics --list | **无 Kafka**（README：仅 MySQL，禁中间件） | topic-scanner 预期产出空集，产物显式标"无异步依赖"，不静默跳过 |
| Java enum + jQAssistant | TS enum / `z.enum([...])` / Prisma enum | 静态扫三种来源 |

> 这一偏差不改架构，只改 `extract/` 各子工具的实现细节与降级标注。已写进各 stub 的 docstring。

---

## 2. 已落地的骨架（本次交付）

```
prd-baseliner/
├── prd_baseliner/
│   ├── cli.py                 # `prd-baseliner run --config ...`（可运行）
│   ├── pipeline.py            # 8 阶段编排接线（可运行，未实现阶段优雅 skip）
│   ├── models/                # ✅ schema.py（章节/文档级/drift/queue）+ fact.py
│   ├── collect/manifest.py    # ✅ manifest 读取/去重骨架
│   ├── extract/               # ⬜ 5 个抽取器 stub（带契约 + 栈适配 docstring）
│   ├── factstore/store.py     # ✅ 事实库（按 kind 索引）
│   ├── prd_parse/parser.py    # ⬜ stub
│   ├── drift/detector.py      # ⬜ stub（两路 diff）
│   ├── reason/                # ✅ base 接口 + NoopReasoner ；⬜ ClaudeReasoner stub
│   ├── route/assembler.py     # ⬜ stub（路由+组装）
│   └── emit/writer.py         # ✅ YAML 产物序列化（dataclass/enum → YAML）
├── configs/inputs.example.yaml  # ✅ 输入契约（§4），已按样例产线填好路径
├── tests/test_skeleton.py       # ✅ 冒烟：入库门规则、序列化、流水线端到端 skip
├── docs/refs/                    # ✅ 三份权威文档随附
└── outputs/                      # 产物落点
```

✅ = 已实现可用　⬜ = 带契约的 stub，按里程碑填实

---

## 3. 里程碑（每个都有可验证产物，逐步逼近真实样例）

### M1 · 确定性抽取先行（为正确性）　✅ 已完成
**做**：实现 `extract/` 五工具中样例最缺的三个 + factstore 反填路径。

**实测结果**（commit 绑定，可复现）：`openapi-extractor` 380 接口事实、`schema-dumper` 3 表、
`enum-scanner` 241 去重枚举 → `route` 组装成 9 个实建层 section（3 数据 + 4 接口 + 2 枚举）。
接口节含异常事件↔工单交互端点；枚举节含 `workType` 等样例 §7 真实取值。
`render.py` 落地各 kind 正文范式。测试见 `tests/test_extractors.py`（对真实样例文件）。
- `openapi-extractor`：读 `docs/product-apis/<svc>/openapi.json` → `Fact(接口)`，evidence 指到 `openapi.json#/paths/...`。
- `schema-dumper`：解析 `apps/server/prisma/schema.prisma` → `Fact(数据)`（表/字段/类型/主外键/@@map），含计算字段启发式标注。
- `enum-scanner`：扫 TS `enum` / `z.enum` / Prisma `enum` → `Fact(枚举, values[])`。
- `route` 的实建层反填（接口/数据/枚举值节直接成型，带 `generated_from_commit`）。

**验证**（对标样例 节5接口 / 节6数据 / 节7枚举值）：跑样例产线代码，产出真实的接口契约、
物理表结构、枚举真实取值，三者各带 commit、可复现。**这一步单独就有交付价值**。

### M2 · PRD 解析 + 漂移检测　✅ 已完成（核心逻辑）
**实测结果**（用 `examples/prd` 占位 fixture v3.0/v3.1）：`prd-parse` 切 10 claims、按标题分类
（背景/流程/规则/功能/接口/数据/枚举）、识别架构占位「A程序」与空节；`drift` 产 3 项——
2 条文档历史漂移（流程、问题来源跨版本不一致）+ 1 条文档vs代码（接口节空但代码有 380 端点）；
`route` 生成意图层节（原文不改写、待PM确认）+ 3 条 PM 队列（A程序绑定、问题来源数量自相矛盾、
中文取值↔代码常量语义对齐）。中文术语↔代码常量的值级映射按设计**不在此硬判**，交 PM/本体（M3）。
测试见 `tests/test_m2.py`。`dep-extractor`/`topic-scanner` 仍待做。

**原计划**：
- `prd-parse`：历史 PRD markdown 切节成 `Claim`，按 kind 初分类（标题层级 + 关键词/LLM）。
- `drift.detect_vs_facts`：接口/数据/枚举类 claim 与 factstore 比对 → `DriftItem(文档vs代码)`。
- `drift.detect_vs_prd`：跨版本 claim 相似匹配（embedding，§8）→ `DriftItem(文档历史漂移)`。
- `route` 把实建层事实自动反填进章节实例。
- `dep-extractor` + `topic-scanner`（后者样例产线预期空集，按 §4 标注）。

**验证**：漂移台账每条带证据；实建层节自动成型；样例 §7「问题来源 10 vs 11 / 第三方报警」
冲突被 diff 出来。

### M3 · 推理层接入　✅ 已完成
**做**：推理层两实现（同一 Reasoner 接口，route 不感知）：
- `HeuristicReasoner`（默认）：确定性、无 key、可测；信号词判 build_status/nature。
- `ClaudeReasoner`：LLM 路径，anthropic SDK + key 在位时启用（`--reasoner claude`），缺失则清晰报错回落。
`route._judge_intent` 对行为意图节（流程/规则/功能）判 build_status/nature → 写元数据 + 入队，**正文不改写**。

**实测结果**（真实 PRD）：规则章节含「目前未实现/后续逻辑」→ `build_status=规划中` + 队列「描述性过期·需对照基线代码核实」（携原句证据）；「列表字段展示」（含「人工修改权重高于计算规则」）→ `nature=混合` + 队列「规范性意图」；描述性节默认放权、不入阻塞队列。整轮队列 6 条（规范性意图 2 / 语义冲突 3 / 描述性过期 1），无噪音。测试见 `tests/test_m3.py`。

**原计划**：`route` 调它对意图层节（流程/规则/功能）判分类/置信度/`build_status`/`nature`；低置信度 & 规范性 → `queue.yaml`；意图层正文不改写、只标 `待PM确认`。

### M4 · 组装出真实样例
**做**：`emit` 渲染完整章节实例 + 两份台账 + 末尾两张清单（需代码 / 需PM）；跑全产线。

**验证**：产物是 `样例-异常事件基线PRD章节.md` 的**真实数据版**，§10 验收标准全绿。

---

## 4. 里程碑 → 验收标准追踪

| 验收标准（§10） | 落在 |
|------------------|------|
| 产物结构符合 Schema | M1（emit 已就绪）→ M4 完整 |
| 实建层节带 commit、可复现 | M1 |
| 漂移台账带可点证据 | M2 |
| 意图层未被自动改写、分歧进 drift/queue | M3（不变量在 route/reason 接口已硬编码） |
| 每节 build_status、indexable 可判 | M1（`compute_indexable` 已实现）→ M3 |
| "A程序"占位名进 PM 队列 | M3 |
| 五类标记可自动产出 | M4 |

---

## 5. 风险与开放项

1. **栈适配偏差**（见 §1.⚠️）——最大变量；M1 先验证三类事实在 TS 栈下确能抽全。
2. **历史 PRD 来源**：当前 `prd_manifest` 为空——需用户提供真实异常事件历史 PRD（§4 人工归集，不自动发现）。在此之前 M2/M3 只能用占位 PRD 验证管线连通性。
3. **本体导出**：M3 语义对齐需 Neo4j 本体导出；缺则 `align_semantics` 降级为只标"待本体确认"。
4. **commit 锚点**：MVP 用 `WORKDIR`；冻结时换成真实 tag，所有实建层节 `generated_from_commit` 统一指向它。
5. **pydantic vs dataclasses**：骨架用 dataclasses 求零依赖；若后续需要更强校验/JSON Schema 导出，再整体迁移（接口不变）。

---

## 6. 下一步建议

1. 跑 `python -m pytest` 确认骨架冒烟通过（已含 4 个测试）。
2. 进 **M1**：先做 `schema-dumper`（Prisma 解析最确定、价值最高），再 `openapi-extractor`、`enum-scanner`。
3. 请用户提供真实历史 PRD 文件填入 `configs/inputs.yaml` 的 `prd_manifest`，解锁 M2。
