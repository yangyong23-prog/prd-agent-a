"""M1 抽取器测试：对真实样例产线（仓库根 yushu-app）抽取，验证事实形状与证据绑定。

代码根 = 本仓库根（prd-baseliner 的上级）。这些测试依赖样例代码存在；缺失时跳过。
"""

from __future__ import annotations

import os

import pytest

from prd_baseliner.extract.enum_scanner import EnumScanner
from prd_baseliner.extract.openapi_extractor import OpenApiExtractor
from prd_baseliner.extract.schema_dumper import SchemaDumper
from prd_baseliner.models.fact import FactKind

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
HAS_PRISMA = os.path.exists(os.path.join(ROOT, "apps", "server", "prisma", "schema.prisma"))
HAS_OPENAPI = os.path.isdir(os.path.join(ROOT, "docs", "product-apis"))


@pytest.mark.skipif(not HAS_PRISMA, reason="样例 Prisma schema 不存在")
def test_schema_dumper_parses_real_prisma():
    facts = SchemaDumper().extract(repo=ROOT, commit="WORKDIR")
    tables = {f.payload["table"] for f in facts}
    assert {"tenants", "users", "todos"} <= tables
    users = next(f for f in facts if f.payload["table"] == "users")
    assert users.kind == FactKind.数据
    assert users.payload["primary_key"] == ["id"]
    # tenant_id 映射、外键、关系单列（关系不当库列）
    cols = {c["name"]: c for c in users.payload["columns"]}
    assert cols["tenantId"]["db_column"] == "tenant_id"
    assert "tenant" not in cols  # 关系字段不在库列里
    assert any(fk["references"] == "Tenant.id" for fk in users.payload["foreign_keys"])
    assert ["tenantId", "username"] in users.payload["unique_constraints"]
    # 嵌套括号默认值不被截断
    assert cols["id"]["default"] == "cuid()"
    # 证据绑定：commit:文件:行
    assert "schema.prisma:" in users.evidence


@pytest.mark.skipif(not HAS_OPENAPI, reason="样例 OpenAPI 不存在")
def test_openapi_extractor_parses_real_specs():
    facts = OpenApiExtractor().extract(repo=ROOT, commit="WORKDIR")
    assert len(facts) > 50
    assert all(f.kind == FactKind.接口 for f in facts)
    f0 = facts[0]
    assert f0.payload["method"] in ("GET", "POST", "PUT", "DELETE", "PATCH")
    assert "#/paths" in f0.evidence  # 证据指向 openapi.json 路径
    # 异常事件↔工单 交互接口应被抽到
    assert any("exceptionId" in f.payload["path"] for f in facts)


@pytest.mark.skipif(not HAS_OPENAPI, reason="样例 OpenAPI 不存在")
def test_enum_scanner_finds_work_type_enum():
    facts = EnumScanner().extract(repo=ROOT, commit="WORKDIR")
    assert all(f.kind == FactKind.枚举 for f in facts)
    # 样例 §7'问题来源'对应 work-order 的 workType 取值集
    all_values = [set(f.payload["values"]) for f in facts]
    assert any({"PLAN_MAINTENANCE", "SUBSCRIBER_REPORT"} <= v for v in all_values)
    # 去重：同一取值集只产一条，记录引用次数
    multi = [f for f in facts if f.payload["usage_count"] > 1]
    assert multi  # 存在被多处复用的枚举
