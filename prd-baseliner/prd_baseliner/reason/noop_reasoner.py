"""NoopReasoner：不调用 LLM 的占位实现，让 M1/M2 流水线在无模型时也能端到端跑通。

行为：一切判断给低置信度并倾向'转 PM'，即'存疑就交人'——符合§2.3 保守不变量。
M3 用 ClaudeReasoner 替换。
"""

from __future__ import annotations

from ..models.fact import Fact
from ..models.schema import BuildStatus, Nature
from ..prd_parse.parser import Claim
from .base import (
    BuildStatusSuggestion,
    MaturityResult,
    Reasoner,
    SemanticSuggestion,
    Suggestion,
)


class NoopReasoner(Reasoner):
    def classify_divergence(self, fact: Fact | None, claim: Claim, evidence: str) -> Suggestion:
        return Suggestion(bucket="判定", confidence=0.0, rationale="noop：默认转 PM", evidence=evidence)

    def judge_build_status(self, claim: Claim, fact: Fact | None) -> BuildStatusSuggestion:
        return BuildStatusSuggestion(BuildStatus.规划中, confidence=0.0, rationale="noop：待核实")

    def judge_nature(self, claim: Claim) -> tuple[Nature, float]:
        return (Nature.规范性, 0.0)

    def align_semantics(self, text: str, ontology: dict) -> SemanticSuggestion:
        return SemanticSuggestion(confidence=0.0, rationale="noop")

    def draft_design(self, structure: dict, code: str) -> str:
        return ""

    def score_maturity(self, prd: dict, facts: dict) -> MaturityResult:
        return MaturityResult(notes=["noop：未评分"])
