"""M4：把组装结果渲染成对标《样例-异常事件基线PRD章节.md》的成品 markdown。

产出含：标记图例 → 文档级 → 各节（载重字段 + 正文 + 就地标记）→ 末尾两张清单
（A. 需代码·生成/核实；B. 需PM·确认/决策/本体）。确定性渲染，无 LLM、不改正文。

五类标记（验收：可自动产出）：
  需代码·生成 = 实建层节（接口/数据/枚举值，绑 commit 再生）
  需代码·核实 = 文档vs代码漂移 / build_status≠已实现 的意图层节
  需PM·确认   = 描述性过期（轻确认）
  需PM·决策   = 规范性意图（含架构占位绑定）
  需PM·本体   = 语义冲突 / 本体缺口
"""

from __future__ import annotations

from enum import Enum

from ..models.schema import (
    BuildStatus,
    DocumentHeader,
    DriftItem,
    Kind,
    Layer,
    QueueItem,
    Section,
)

_BUILD_KINDS = {Kind.接口, Kind.数据, Kind.枚举}
# queue.type → 清单B 类型
_QUEUE_B = {"描述性过期": "确认", "规范性意图": "决策", "语义冲突": "本体", "本体缺口": "本体"}


def _v(x):
    return x.value if isinstance(x, Enum) else x


def _carry_yaml(s: Section) -> str:
    """节载重字段（非全字段）渲染为 yaml 块。"""
    lines = [
        f"section_id: {s.section_id}",
        f"kind: {_v(s.kind)}　layer: {_v(s.layer)}",
        f"source_authority: {_v(s.source_authority)}　build_status: {_v(s.build_status)}",
    ]
    if s.nature is not None:
        lines.append(f"nature: {_v(s.nature)}")
    if s.regenerable:
        gen = s.provenance.generator
        lines.append(f"regenerable: true　generated_from_commit: {s.provenance.generated_from_commit}　generator: {gen}")
    if s.provenance.source_prd:
        sp = s.provenance.source_prd
        lines.append(f"source_prd: {{name: {sp.get('name','')}, version: {sp.get('version','')}}}")
    lines.append(f"review_state: {_v(s.review_state)}　rag.indexable: {str(s.rag.indexable).lower()}")
    if s.drift:
        lines.append(f"drift: [{', '.join(s.drift)}]")
    if s.queue:
        lines.append(f"queue: [{', '.join(s.queue)}]")
    return "```yaml\n" + "\n".join(lines) + "\n```"


def _inline_markers(s: Section, dmap: dict, qmap: dict) -> str:
    """就地标记：把挂到本节的漂移/队列以引用块列出。"""
    out = []
    for did in s.drift:
        d = dmap.get(did)
        if d:
            out.append(f"> 【需代码·{'核实' if d.type=='文档vs代码' else '核对'}】[{did}] {d.desc}")
    for qid in s.queue:
        q = qmap.get(qid)
        if q:
            tag = _QUEUE_B.get(q.type, "确认")
            out.append(f"> 【需PM·{tag}】[{qid}] {q.question}")
    return "\n".join(out)


def render_document(
    header: DocumentHeader,
    sections: list[Section],
    drifts: list[DriftItem],
    queue: list[QueueItem],
) -> str:
    dmap = {d.drift_id: d for d in drifts}
    qmap = {q.queue_id: q for q in queue}
    P: list[str] = []
    P.append(f"# 基线 PRD 章节实例 · {header.product_line}")
    P.append("> 由 prd-baseliner 自动生成（实建层绑代码、意图层逐字保留不改写）。本文件为对标样例的真实数据版。\n")
    P.append("## 标记图例\n")
    P.append("| 标记 | 含义 |\n|------|------|\n"
             "| 需代码·生成 | 实建层，从代码/库直接生成，绑 commit 可再生 |\n"
             "| 需代码·核实 | 文档与代码有分歧 / build_status 待对照基线代码核实 |\n"
             "| 需PM·确认 | 描述性表述，可倾向按代码更新，PM 轻确认 |\n"
             "| 需PM·决策 | 规范性意图（含架构占位绑定），必须 PM 裁决 |\n"
             "| 需PM·本体 | 语义/规范名对齐本体 |\n")

    # 文档级
    b = header.baseline
    P.append("## 文档级\n")
    P.append("```yaml\n"
             f"product_line: {header.product_line}\n"
             f"baseline: {{version: {b.version}, commit: {b.commit}}}\n"
             f"section_count: {len(sections)}　drift_count: {len(drifts)}　queue_count: {len(queue)}\n"
             "```")
    P.append("> 【需代码·生成】基线 commit、运行期 DDL/topic/注册表快照。\n")

    # 各节
    P.append("---\n")
    for i, s in enumerate(sections, 1):
        P.append(f"## 节 {i} · {_v(s.kind)} · {s.title}\n")
        P.append(_carry_yaml(s))
        markers = _inline_markers(s, dmap, qmap)
        if markers:
            P.append("\n" + markers)
        if s.body:
            P.append("\n" + s.body)
        P.append("\n---\n")

    # 两张清单
    P.append("# 汇总：两张清单\n")
    P.append(_list_a(sections, drifts))
    P.append("\n" + _list_b(sections, queue))
    return "\n".join(P) + "\n"


def _list_a(sections: list[Section], drifts: list[DriftItem]) -> str:
    rows = ["## A. 需代码才能补充/核实\n", "| 项 | 节 | 类型 |", "|----|----|------|",
            "| 基线 commit、运行期 DDL/topic/注册表快照 | 文档级 | 生成 |"]
    for s in sections:
        if s.kind in _BUILD_KINDS and s.layer != Layer.意图层:
            rows.append(f"| {s.title} | {s.section_id} | 生成 |")
    for s in sections:
        if s.layer == Layer.意图层 and s.build_status not in (None, BuildStatus.已实现):
            rows.append(f"| 「{s.title}」标 {_v(s.build_status)}，需对照基线代码核实 | {s.section_id} | 核实 |")
    for d in drifts:
        if d.type == "文档vs代码":
            rows.append(f"| {d.desc[:48]} | {d.section_id or '—'} | 核实 |")
    return "\n".join(rows)


def _list_b(sections: list[Section], queue: list[QueueItem]) -> str:
    rows = ["## B. 需 PM 再确认/补充\n", "| 项 | 节 | 类型 |", "|----|----|------|"]
    for q in queue:
        typ = _QUEUE_B.get(q.type, "确认")
        if q.type == "规范性意图" and "占位" in q.question:
            typ = "决策（架构）"
        rows.append(f"| {q.question[:54]} | {q.section_id or '文档级'} | {typ} |")
    return "\n".join(rows)
