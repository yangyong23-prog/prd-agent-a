"""M3 测试：推理层判 build_status/nature；意图层不改写；描述性放权、规范性走 PM。"""

from __future__ import annotations

from prd_baseliner.factstore.store import FactStore
from prd_baseliner.models.schema import BuildStatus, DocumentHeader, Kind, Layer, Nature
from prd_baseliner.prd_parse.parser import Claim
from prd_baseliner.reason.heuristic_reasoner import HeuristicReasoner
from prd_baseliner.route.assembler import Assembler


def _claim(heading, text, kind):
    return Claim("c", "prd", "v1", heading, text, kind_guess=kind, evidence="prd:1")


def test_build_status_detects_planned_branch():
    r = HeuristicReasoner()
    planned = _claim("规则", "暂不处理标识未消失前不再通知（目前未实现）", Kind.规则)
    assert r.judge_build_status(planned).build_status == BuildStatus.规划中
    clean = _claim("规则", "异常事件生成排查处理单并指派", Kind.规则)
    assert r.judge_build_status(clean).build_status == BuildStatus.已实现


def test_nature_normative_vs_descriptive():
    r = HeuristicReasoner()
    norm, _ = r.judge_nature(_claim("功能", "人工修改事件等级权重高于计算规则，必须以人工为准", Kind.功能))
    assert norm in (Nature.规范性, Nature.混合)
    desc, _ = r.judge_nature(_claim("流程", "系统当前会生成问题并更新异常事件，展示当前等级", Kind.流程))
    assert desc == Nature.描述性


def test_assembler_m3_flags_and_does_not_rewrite():
    claims = [
        _claim("规则A", "暂不处理重复上报抑制（目前未实现）；专项整改不消失（后续逻辑）", Kind.规则),
        _claim("功能B", "人工修改权重高于计算规则，必须以人工为准", Kind.功能),
        _claim("流程C", "系统当前会按问题等级最高值生成事件等级并展示", Kind.流程),
    ]
    sections, _, queue = Assembler(HeuristicReasoner()).assemble(
        header=DocumentHeader(product_line="RCC"), claims=claims, facts=FactStore(), drifts=[]
    )
    by_t = {s.title: s for s in sections}
    # 规则A：含'目前未实现' → 规划中 + 描述性过期(核实)队列；正文逐字保留
    a = by_t["规则A"]
    assert a.build_status == BuildStatus.规划中
    assert "目前未实现" in a.body  # 未改写
    assert any(q.type == "描述性过期" and q.section_id == a.section_id for q in queue)
    # 功能B：规范性 → 规范性意图队列
    b = by_t["功能B"]
    assert b.nature in (Nature.规范性, Nature.混合)
    assert any(q.type == "规范性意图" and q.section_id == b.section_id for q in queue)
    # 流程C：描述性 → 不入阻塞队列（可放权）
    c = by_t["流程C"]
    assert c.nature == Nature.描述性
    assert not c.queue


def test_intent_body_is_verbatim():
    claims = [_claim("规则X", "原文一字不改：必须保留（目前未实现）", Kind.规则)]
    sections, _, _ = Assembler(HeuristicReasoner()).assemble(
        header=DocumentHeader(product_line="RCC"), claims=claims, facts=FactStore(), drifts=[]
    )
    s = next(s for s in sections if s.layer == Layer.意图层)
    assert "原文一字不改：必须保留（目前未实现）" in s.body
