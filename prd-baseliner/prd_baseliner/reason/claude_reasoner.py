"""ClaudeReasoner：MVP 推理层实现，直接用当前最强模型起步（§7）。

provider 可换：通过环境变量配置 provider/model；route 只依赖 Reasoner 接口，换模型不动上层。
约束复述：只返回建议+置信度+证据；低置信度转 PM；绝不写意图层正文。
"""

from __future__ import annotations

from ..models.fact import Fact
from ..models.schema import Nature
from ..prd_parse.parser import Claim
from .base import (
    BuildStatusSuggestion,
    MaturityResult,
    Reasoner,
    SemanticSuggestion,
    Suggestion,
)


class ClaudeReasoner(Reasoner):
    def __init__(self, *, model: str | None = None, confidence_threshold: float = 0.7) -> None:
        self.model = model
        self.confidence_threshold = confidence_threshold

    def classify_divergence(self, fact: Fact | None, claim: Claim, evidence: str) -> Suggestion:
        # TODO(M3): 提示词把 fact + claim + evidence 喂模型，要求输出 bucket/confidence/rationale/evidence。
        raise NotImplementedError("M3：接入模型做分歧分类")

    def judge_build_status(self, claim: Claim, fact: Fact | None) -> BuildStatusSuggestion:
        # TODO(M3): 判定'文档说有、代码有没有' → 已实现/规划中/已废弃；样例§3'目前未实现'诸条应判出。
        raise NotImplementedError("M3：接入模型判 build_status")

    def judge_nature(self, claim: Claim) -> tuple[Nature, float]:
        # TODO(M3): 判描述性 vs 规范性；规范性一律走 PM（§2.6）。
        raise NotImplementedError("M3：接入模型判 nature")

    def align_semantics(self, text: str, ontology: dict) -> SemanticSuggestion:
        # TODO(M3): 读 Neo4j 本体导出做语义对齐；可建议改 PRD 或反馈'本体缺口'。
        raise NotImplementedError("M3：接入模型做语义对齐")

    def draft_design(self, structure: dict, code: str) -> str:
        # TODO(M3): 生成意图层设计叙述草稿，route 标 review_state=草稿，绝不当现状落库。
        raise NotImplementedError("M3：生成设计草稿（标草稿）")

    def score_maturity(self, prd: dict, facts: dict) -> MaturityResult:
        # TODO(M3): 覆盖度/空节比/初始漂移 → tier → 处理模式（§二映射）。
        raise NotImplementedError("M3：成熟度评分")
