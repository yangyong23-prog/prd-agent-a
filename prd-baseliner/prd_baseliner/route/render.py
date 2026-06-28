"""正文范式渲染（Schema §六）：把事实渲染成各 kind 的固定结构 markdown 正文。

确定性、无 LLM。实建层正文由此生成，便于成为干净的 RAG chunk。
"""

from __future__ import annotations

from ..models.fact import Fact


def data_body(f: Fact) -> str:
    """数据节：表/字段/类型/主外键/关系；计算字段单列标注（§六）。"""
    p = f.payload
    lines = [f"**表**：`{p['table']}`（model `{p['model']}`）　来源：{f.evidence}", ""]
    lines.append("| 字段 | 库列 | 类型 | 可空 | 主键 | 唯一 | 默认 |")
    lines.append("|------|------|------|------|------|------|------|")
    for c in p["columns"]:
        t = c["db_type"] or c["prisma_type"]
        lines.append(
            f"| {c['name']} | {c['db_column']} | {t} | "
            f"{'是' if c['nullable'] else '否'} | {'✓' if c['pk'] else ''} | "
            f"{'✓' if c['unique'] else ''} | {c['default'] or ''} |"
        )
    if p["primary_key"]:
        lines += ["", f"**主键**：{', '.join(p['primary_key'])}"]
    if p["foreign_keys"]:
        lines.append("**外键**：" + "；".join(f"{fk['field']} → {fk['references']}" for fk in p["foreign_keys"]))
    if p["relations"]:
        rels = "；".join(f"{r['field']}→{r['target_model']}{'[]' if r['list'] else ''}" for r in p["relations"])
        lines.append(f"**关系**（非库列）：{rels}")
    if p["unique_constraints"]:
        lines.append("**唯一约束**：" + "；".join("(" + ", ".join(u) + ")" for u in p["unique_constraints"]))
    if p["indexes"]:
        lines.append("**索引**：" + "；".join("(" + ", ".join(ix) + ")" for ix in p["indexes"]))
    return "\n".join(lines)


def api_body(service: str, facts: list[Fact]) -> str:
    """接口节：端点 / 方法 / 入参 / 出参 / 收发方（§六）。"""
    lines = [f"**服务**：{service}　**端点数**：{len(facts)}", ""]
    lines.append("| 方法 | 路径 | 摘要 | 入参数 | 请求体 | 响应码 |")
    lines.append("|------|------|------|--------|--------|--------|")
    for f in sorted(facts, key=lambda x: x.payload["path"]):
        p = f.payload
        dep = " ⚠️deprecated" if p.get("deprecated") else ""
        codes = ",".join(p.get("responses", {}).keys())
        summary = (p.get("summary") or "").replace("|", "/")[:40]
        lines.append(
            f"| {p['method']} | `{p['path']}` | {summary}{dep} | "
            f"{len(p.get('parameters', []))} | {p.get('request_type') or ''} | {codes} |"
        )
    return "\n".join(lines)


def enum_body(service: str, facts: list[Fact]) -> str:
    """枚举节：单一来源=代码常量；值（生成）/ 含义=本体规范名（人补，留待 PM）。"""
    lines = [f"**服务**：{service}　**去重取值集**：{len(facts)}", "", "> 值由代码（OpenAPI enum）生成；每个取值的规范名/含义待 PM 与本体对齐。", ""]
    lines.append("| 取值集（代码真实值） | 引用次数 | 示例引用处 |")
    lines.append("|----------------------|----------|------------|")
    for f in sorted(facts, key=lambda x: -x.payload.get("usage_count", 0)):
        p = f.payload
        vals = ", ".join(p["values"])[:80]
        seen = ", ".join(p.get("seen_as", [])[:3])
        lines.append(f"| {vals} | {p.get('usage_count', 1)} | {seen} |")
    return "\n".join(lines)
