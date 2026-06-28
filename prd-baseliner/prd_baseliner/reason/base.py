"""推理层接口（需求文档 §7）：面向最强模型，provider 可换。

硬约束（接口契约）：
  - 所有方法【只返回建议 + 置信度 + 证据】，无副作用，不写库。
  - 低于阈值的 confidence 一律转 PM 队列（由 route 执行）。
  - 推理层【无权】直接写意图层正文；对意图层最多产出 review_state=待PM确认 的标记与 draft。
    （§2.3 意图层永不自动改写——模型越强越要守，防止把 bug 洗白进 PRD。）

route 只依赖本接口，不绑具体模型/提供方；换更强模型或换 provider 时上层不动。
"""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Protocol

from ..models.fact import Fact
from ..models.schema import BuildStatus, Nature
from ..prd_parse.parser import Claim


@dataclass
class Suggestion:
    bucket: str  # 代码 | 判定 | 编辑
    confidence: float
    rationale: str = ""
    evidence: str = ""


@dataclass
class BuildStatusSuggestion:
    build_status: BuildStatus
    confidence: float
    rationale: str = ""
    evidence: str = ""


@dataclass
class SemanticSuggestion:
    # 含'本体缺口'反馈：可能建议改 PRD，也可能建议补本体（§7）
    aligned_concept: str = ""
    is_ontology_gap: bool = False
    confidence: float = 0.0
    rationale: str = ""


@dataclass
class MaturityResult:
    coverage: float = 0.0
    empty_section_ratio: float = 0.0
    initial_drift: str = "中"
    tier: str = "中"
    notes: list[str] = field(default_factory=list)


class Reasoner(Protocol):
    """对一条已 diff 出的分歧分类，返回建议——不写库，由 route 决定落盘。"""

    def classify_divergence(self, fact: Fact | None, claim: Claim, evidence: str) -> Suggestion: ...

    def judge_build_status(self, claim: Claim, fact: Fact | None) -> BuildStatusSuggestion: ...

    def judge_nature(self, claim: Claim) -> tuple[Nature, float]: ...

    def align_semantics(self, text: str, ontology: dict) -> SemanticSuggestion: ...

    def draft_design(self, structure: dict, code: str) -> str:
        """设计叙述草稿（意图层，标草稿）。"""
        ...

    def score_maturity(self, prd: dict, facts: dict) -> MaturityResult: ...
