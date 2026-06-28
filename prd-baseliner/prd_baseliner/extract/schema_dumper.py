"""schema-dumper：物理表（表/字段/类型/主外键/关系）+ 计算字段启发式标注。

栈适配（需求 §6 假设 pg_dump，实际样例为 Prisma/MySQL）：解析 apps/server/prisma/schema.prisma。
每个 model → 一条 Fact(数据)，含字段/类型/主外键/@@map 表名/索引/关系。关系字段不当库列写，单列标注。
退化：无 schema.prisma 时（未实现）回退解析 migration，flags 标 '事实来源=migration（可能漂移）'。
填入节：数据。
"""

from __future__ import annotations

import os
import re

from ..models.fact import Fact, FactKind
from ._util import rel, resolve_commit

# Prisma 标量类型；其余首字母大写的类型视为 model 引用（=关系，非库列）
_SCALAR = {
    "String", "Int", "BigInt", "Boolean", "DateTime", "Json", "Float",
    "Decimal", "Bytes",
}
_FIELD_RE = re.compile(r"^\s*(\w+)\s+(\w+)(\[\])?(\?)?\s*(.*)$")
_MAP_RE = re.compile(r'@map\("([^"]+)"\)')
_DB_RE = re.compile(r"@db\.(\w+(?:\([^)]*\))?)")
def _extract_default(attrs: str) -> str | None:
    """取 @default(...) 内容，按括号配平扫描，正确处理 cuid() / now() 等嵌套。"""
    i = attrs.find("@default(")
    if i < 0:
        return None
    j = i + len("@default(")
    depth = 1
    while j < len(attrs) and depth:
        depth += {"(": 1, ")": -1}.get(attrs[j], 0)
        j += 1
    return attrs[i + len("@default(") : j - 1]
_RELATION_RE = re.compile(r"@relation\(([^)]*)\)")
_FIELDS_RE = re.compile(r"fields:\s*\[([^\]]*)\]")
_REFS_RE = re.compile(r"references:\s*\[([^\]]*)\]")


def _candidate_paths(root: str) -> list[str]:
    return [
        os.path.join(root, "apps", "server", "prisma", "schema.prisma"),
        os.path.join(root, "prisma", "schema.prisma"),
        os.path.join(root, "schema.prisma"),
    ]


class SchemaDumper:
    name = "schema-dumper"

    def extract(self, *, repo: str, commit: str, **kwargs) -> list[Fact]:
        root = repo
        path = next((p for p in _candidate_paths(root) if os.path.exists(p)), None)
        if path is None:
            return []  # 无 schema.prisma：M1 不做 migration 回退，返回空集（§4 不静默猜测，调用方记录）
        commit = resolve_commit(root, commit)
        text = open(path, encoding="utf-8").read()
        lines = text.splitlines()
        model_names = set(re.findall(r"^\s*model\s+(\w+)\s*\{", text, re.M))
        return list(self._parse_models(lines, model_names, commit, rel(root, path)))

    def _parse_models(self, lines, model_names, commit, relpath):
        i, n = 0, len(lines)
        while i < n:
            m = re.match(r"^\s*model\s+(\w+)\s*\{", lines[i])
            if not m:
                i += 1
                continue
            model = m.group(1)
            start_line = i + 1  # 1-based
            i += 1
            columns, relations, fks, indexes, uniques, pk = [], [], [], [], [], []
            table = None
            while i < n and not re.match(r"^\s*\}", lines[i]):
                raw = lines[i].strip()
                i += 1
                if not raw or raw.startswith("//"):
                    continue
                if raw.startswith("@@"):
                    self._parse_block_attr(raw, indexes, uniques, pk)
                    if (mm := re.search(r'@@map\("([^"]+)"\)', raw)):
                        table = mm.group(1)
                    continue
                fm = _FIELD_RE.match(lines[i - 1])
                if not fm:
                    continue
                fname, ftype, is_list, optional, attrs = fm.groups()
                base_is_model = ftype in model_names
                if base_is_model:
                    # 关系字段：不是库列。带 @relation(fields/references) 的一侧落外键
                    rel_info = {"field": fname, "target_model": ftype, "list": bool(is_list)}
                    if (rm := _RELATION_RE.search(attrs)):
                        f = _FIELDS_RE.search(rm.group(1))
                        r = _REFS_RE.search(rm.group(1))
                        if f and r:
                            local = f.group(1).strip()
                            target_col = r.group(1).strip()
                            fks.append(
                                {"field": local, "references": f"{ftype}.{target_col}"}
                            )
                            rel_info["fk_field"] = local
                    relations.append(rel_info)
                    continue
                # 标量列
                col = {
                    "name": fname,
                    "db_column": (_MAP_RE.search(attrs).group(1) if _MAP_RE.search(attrs) else fname),
                    "prisma_type": ftype,
                    "db_type": (_DB_RE.search(attrs).group(1) if _DB_RE.search(attrs) else None),
                    "nullable": bool(optional),
                    "pk": "@id" in attrs,
                    "unique": "@unique" in attrs,
                    "default": _extract_default(attrs),
                }
                if col["pk"]:
                    pk.append(fname)
                columns.append(col)
            table = table or model.lower()
            yield Fact(
                fact_id=f"data:{table}",
                kind=FactKind.数据,
                generated_from_commit=commit,
                generator="prisma",
                evidence=f"{commit}:{relpath}:{start_line}",
                payload={
                    "model": model,
                    "table": table,
                    "columns": columns,
                    "primary_key": pk,
                    "foreign_keys": fks,
                    "relations": relations,
                    "unique_constraints": uniques,
                    "indexes": indexes,
                },
            )

    @staticmethod
    def _parse_block_attr(raw, indexes, uniques, pk):
        if (m := re.match(r"@@unique\(\[([^\]]*)\]", raw)):
            uniques.append([s.strip() for s in m.group(1).split(",") if s.strip()])
        elif (m := re.match(r"@@index\(\[([^\]]*)\]", raw)):
            indexes.append([s.strip() for s in m.group(1).split(",") if s.strip()])
        elif (m := re.match(r"@@id\(\[([^\]]*)\]", raw)):
            pk.extend(s.strip() for s in m.group(1).split(",") if s.strip())
