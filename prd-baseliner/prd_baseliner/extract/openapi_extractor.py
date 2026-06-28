"""openapi-extractor：从 OpenAPI 产出接口事实（端点/方法/入参/出参/错误码/收发方）。

栈适配（需求 §6 假设 springdoc，实际样例已有现成 OpenAPI）：直接读
docs/product-apis/<service>/openapi.json —— 各业务线对外契约。每个 (path, method) → 一条 Fact(接口)。
退化：无 OpenAPI 时退回扫 Fastify 路由 + Zod（M1 不做，记录降级）。
填入节：接口。
"""

from __future__ import annotations

import json
import os

from ..models.fact import Fact, FactKind
from ._util import rel, resolve_commit


def _registry_dir(root: str) -> str | None:
    for p in (os.path.join(root, "docs", "product-apis"), os.path.join(root, "product-apis")):
        if os.path.isdir(p):
            return p
    return None


def _ref_name(schema: dict | None) -> str | None:
    """从 OpenAPI schema 取一个可读的类型引用名（$ref 末段 / array items / 原始 type）。"""
    if not isinstance(schema, dict):
        return None
    if "$ref" in schema:
        return schema["$ref"].split("/")[-1]
    if schema.get("type") == "array":
        inner = _ref_name(schema.get("items"))
        return f"{inner}[]" if inner else "array"
    return schema.get("type")


class OpenApiExtractor:
    name = "openapi-extractor"

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
            facts.extend(self._parse_spec(spec, service, commit, rel(root, spec_path)))
        return facts

    def _parse_spec(self, spec, service, commit, relpath):
        for path, item in (spec.get("paths") or {}).items():
            if not isinstance(item, dict):
                continue
            for method, op in item.items():
                if method.lower() not in ("get", "post", "put", "delete", "patch"):
                    continue
                if not isinstance(op, dict):
                    continue
                params = [
                    {
                        "name": p.get("name"),
                        "in": p.get("in"),
                        "required": p.get("required", False),
                        "type": _ref_name(p.get("schema")),
                    }
                    for p in (op.get("parameters") or [])
                    if isinstance(p, dict)
                ]
                req = op.get("requestBody", {})
                req_type = None
                if isinstance(req, dict):
                    content = req.get("content", {})
                    for _ct, body in content.items():
                        req_type = _ref_name(body.get("schema"))
                        if req_type:
                            break
                responses = {}
                for code, r in (op.get("responses") or {}).items():
                    rt = None
                    if isinstance(r, dict):
                        for _ct, body in (r.get("content") or {}).items():
                            rt = _ref_name(body.get("schema"))
                            if rt:
                                break
                    responses[code] = rt
                yield Fact(
                    fact_id=f"api:{service}:{method.upper()}:{path}",
                    kind=FactKind.接口,
                    generated_from_commit=commit,
                    generator="openapi",
                    evidence=f"{relpath}#/paths{path}/{method.lower()}",
                    payload={
                        "service": service,
                        "method": method.upper(),
                        "path": path,
                        "summary": op.get("summary"),
                        "deprecated": bool(op.get("deprecated", False)),
                        "tags": op.get("tags", []),
                        "parameters": params,
                        "request_type": req_type,
                        "responses": responses,
                    },
                )
