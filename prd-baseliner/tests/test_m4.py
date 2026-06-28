"""M4 测试：成品 markdown 渲染——载重字段 + 正文逐字 + 就地标记 + 两张清单。"""

from __future__ import annotations

from prd_baseliner.emit.markdown import render_document
from prd_baseliner.models.fact import Fact, FactKind
from prd_baseliner.factstore.store import FactStore
from prd_baseliner.models.schema import Baseline, DocumentHeader, Kind, Layer
from prd_baseliner.prd_parse.parser import Claim
from prd_baseliner.reason.heuristic_reasoner import HeuristicReasoner
from prd_baseliner.route.assembler import Assembler


def _build():
    facts = FactStore()
    facts.add(Fact("data:todos", FactKind.数据, "c0", "prisma", "c0:schema.prisma:1",
                   {"model": "Todo", "table": "todos", "columns": [], "primary_key": [],
                    "foreign_keys": [], "relations": [], "unique_constraints": [], "indexes": []}))
    facts.add(Fact("api:wo:POST:/x", FactKind.接口, "c0", "openapi", "openapi.json#/paths/x/post",
                   {"service": "work-order-service", "method": "POST", "path": "/x",
                    "summary": "s", "deprecated": False, "tags": [], "parameters": [],
                    "request_type": None, "responses": {"200": None}}))
    claims = [Claim("c1", "prd", "v1", "规则X", "暂不处理重复抑制（目前未实现）", kind_guess=Kind.规则, evidence="prd:1")]
    header = DocumentHeader(product_line="异常事件（RCC）", baseline=Baseline(commit="c0"))
    return header, Assembler(HeuristicReasoner()).assemble(
        header=header, claims=claims, facts=facts, drifts=[]
    )


def test_render_has_legend_sections_and_two_lists():
    header, (sections, drifts, queue) = _build()
    md = render_document(header, sections, drifts, queue)
    assert "## 标记图例" in md
    assert "## 文档级" in md
    assert "## A. 需代码才能补充/核实" in md
    assert "## B. 需 PM 再确认/补充" in md
    # 实建层节出现在清单 A（生成）
    assert "| 生成 |" in md
    # 规则含'目前未实现' → 清单 A 核实行 + 正文逐字保留
    assert "需对照基线代码核实" in md
    assert "目前未实现" in md  # 意图层正文未改写


def test_build_layer_sections_marked_generate():
    header, (sections, drifts, queue) = _build()
    md = render_document(header, sections, drifts, queue)
    # 数据/接口节带 generated_from_commit
    assert "generated_from_commit: c0" in md
