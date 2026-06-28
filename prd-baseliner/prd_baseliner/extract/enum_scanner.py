"""enum-scanner：枚举常量真实取值 —— 单一来源 = 代码常量（§6）。

栈适配（需求 §6 假设 Java enum，实际样例）：OpenAPI components.schemas[].properties[].enum 是
权威、码生成的枚举源（如 work-order 的 workType=计划巡检/临时维修… 正对应样例 §7'问题来源'）。
按取值集合去重，记录'被哪些 schema.字段引用'。含义/规范名留给 PM/本体（route 标 待PM确认）。
填入节：枚举（值）。
"""

from __future__ import annotations

import json
import os

from ..models.fact import Fact, FactKind
from ._util import rel, resolve_commit
from .openapi_extractor import _registry_dir


def _walk_enums(node, schema_name, out):
    """递归找带 enum 的属性。out: dict[tuple(values) -> list[(schema, prop)]]。"""
    if isinstance(node, dict):
        props = node.get("properties")
        if isinstance(props, dict):
            for pname, pdef in props.items():
                if isinstance(pdef, dict) and isinstance(pdef.get("enum"), list):
                    key = tuple(str(v) for v in pdef["enum"])
                    out.setdefault(key, []).append((schema_name, pname))


class EnumScanner:
    name = "enum-scanner"

    def extract(self, *, repo: str, commit: str, **kwargs) -> list[Fact]:
        root = repo
        reg = _registry_dir(root)
        if reg is None:
            return []
        commit = resolve_commit(root, commit)
        facts: list[Fact] = []
        for service in sorted(os.listdir(reg)):
            spec_path = os.path.join(reg, service, "openapi.json")
            if not os.path.exists(spec_path):
                continue
            try:
                spec = json.load(open(spec_path, encoding="utf-8"))
            except (json.JSONDecodeError, OSError):
                continue
            schemas = (spec.get("components", {}) or {}).get("schemas", {}) or {}
            by_values: dict[tuple, list] = {}
            for sname, sdef in schemas.items():
                _walk_enums(sdef, sname, by_values)
            relpath = rel(root, spec_path)
            for idx, (values, seen) in enumerate(
                sorted(by_values.items(), key=lambda kv: (-len(kv[1]), kv[0]))
            ):
                facts.append(
                    Fact(
                        fact_id=f"enum:{service}:{idx}",
                        kind=FactKind.枚举,
                        generated_from_commit=commit,
                        generator="openapi-enum",
                        evidence=f"{relpath}#/components/schemas (×{len(seen)} 引用)",
                        payload={
                            "service": service,
                            "values": list(values),
                            "usage_count": len(seen),
                            "seen_as": [f"{s}.{p}" for s, p in seen[:8]],
                        },
                    )
                )
        return facts
