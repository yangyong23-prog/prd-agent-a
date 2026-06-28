"""M2 测试：PRD 解析 + 漂移检测 + 意图层组装（不改写）+ PM 队列。

用 examples/prd 下的占位 fixture（v3.0/v3.1）验证管线逻辑。
"""

from __future__ import annotations

import os

from prd_baseliner.drift.detector import DriftDetector
from prd_baseliner.factstore.store import FactStore
from prd_baseliner.models.fact import Fact, FactKind
from prd_baseliner.models.schema import DocumentHeader, Kind, Layer, ReviewState
from prd_baseliner.prd_parse.parser import PrdParser
from prd_baseliner.reason.noop_reasoner import NoopReasoner
from prd_baseliner.route.assembler import Assembler

FX = os.path.join(os.path.dirname(__file__), "..", "examples", "prd")
V31 = os.path.join(FX, "异常事件管理-v3.1.md")
V30 = os.path.join(FX, "异常事件管理-v3.0.md")


def _parse(path, ver):
    return PrdParser().parse(path, source_prd=os.path.basename(path), source_version=ver)


def test_parse_classifies_and_skips_doc_title():
    claims = _parse(V31, "v3.1")
    by_h = {c.heading: c for c in claims}
    # H1 文档标题被跳过
    assert "异常事件管理 PRD（v3.1）" not in by_h
    assert by_h["需求背景"].kind_guess == Kind.背景
    assert by_h["异常事件全生命周期（流程）"].kind_guess == Kind.流程
    assert by_h["问题来源（枚举）"].kind_guess == Kind.枚举
    assert by_h["异常事件对象（数据）"].kind_guess == Kind.数据
    assert by_h["与工单的交互消息字段说明（接口）"].kind_guess == Kind.接口
    # 占位名识别 + 空节识别
    assert "A程序" in by_h["异常事件全生命周期（流程）"].placeholders
    assert by_h["与工单的交互消息字段说明（接口）"].is_empty


def test_history_drift_between_versions():
    claims = _parse(V31, "v3.1") + _parse(V30, "v3.0")
    drifts = DriftDetector().detect_vs_prd(claims)
    headings = {d.desc.split("「")[1].split("」")[0] for d in drifts}
    assert all(d.type == "文档历史漂移" for d in drifts)
    # 流程与问题来源两节在版本间有意改动
    assert "异常事件全生命周期（流程）" in headings
    assert "问题来源（枚举）" in headings


def test_is_empty_treats_markdown_rules_as_empty():
    # 仿真实 PRD §8.1：标题下只有 '---' 分隔线 → 应判为空节
    import tempfile

    with tempfile.TemporaryDirectory() as d:
        p = os.path.join(d, "doc.md")
        with open(p, "w", encoding="utf-8") as f:
            f.write("# 标题\n\n## 容器章节\n\n### 子节A\n内容\n\n## 与工单的交互消息字段说明（接口）\n\n---\n")
        claims = PrdParser().parse(p, source_prd="d", source_version="v1")
    by_h = {c.heading: c for c in claims}
    iface = by_h["与工单的交互消息字段说明（接口）"]
    assert iface.is_empty and iface.is_leaf and iface.kind_guess == Kind.接口
    # '容器章节'后跟更深一级'子节A' → 非叶子（容器）
    assert by_h["容器章节"].is_leaf is False


def test_empty_section_vs_code_drift():
    claims = _parse(V31, "v3.1")
    facts = FactStore()
    facts.add(Fact("api:x", FactKind.接口, "c0", "openapi", "ev", {"service": "s"}))
    drifts = DriftDetector().detect_vs_facts(claims, facts)
    assert any(d.type == "文档vs代码" and "为空" in d.desc for d in drifts)


def test_intent_section_not_rewritten_and_queue_built():
    claims = _parse(V31, "v3.1")
    facts = FactStore()
    facts.add(Fact("enum:s:0", FactKind.枚举, "c0", "openapi-enum", "ev",
                   {"service": "s", "values": ["PLAN_MAINTENANCE"], "usage_count": 2, "seen_as": []}))
    header = DocumentHeader(product_line="异常事件（RCC）")
    sections, drifts, queue = Assembler(NoopReasoner()).assemble(
        header=header, claims=claims, facts=facts, drifts=[]
    )
    # 意图层节：原文逐字保留（含'风控策略'原句），且标待PM确认
    intent = [s for s in sections if s.layer == Layer.意图层]
    bg = next(s for s in intent if s.kind == Kind.背景)
    assert "风控策略" in bg.body and bg.review_state == ReviewState.待PM确认
    # 队列含架构占位绑定 + 枚举数量自相矛盾
    qtypes = {q.type for q in queue}
    assert "规范性意图" in qtypes  # A程序 绑定
    assert any("共 10 种" in q.question for q in queue)
