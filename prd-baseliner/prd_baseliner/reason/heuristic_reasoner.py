"""HeuristicReasoner：确定性（无 LLM、无 key）推理层实现，M3 默认。

用信号词做 build_status / nature 判定，保证管线随处可跑、可测；置信度刻意保守，
低于阈值或规范性一律转 PM（route 执行）。真正的强模型实现见 ClaudeReasoner，
两者实现同一 Reasoner 接口，route 不感知差异（§7 provider 可换）。

注意：本实现只产建议+置信度+证据，无副作用；绝不改写意图层正文（§2.3）。
"""

from __future__ import annotations

import re

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

# build_status 信号词（按优先级）。markers 会被原样取证供 PM 核实。
_PLANNED_RE = re.compile(r"(目前未实现|暂未实现|尚未实现|待实现|后续逻辑|后续实现|规划中|未实现)")
_DEPRECATED_RE = re.compile(r"(已废弃|废弃|已下线|下线|不再使用|停用)")
_HISTORICAL_RE = re.compile(r"(历史切片|旧版本|历史版本|已被取代)")

# nature 信号词：规范性=断言'本就该如此'（必须走 PM）；描述性=陈述'现在怎么做'。
_NORMATIVE_RE = re.compile(
    r"(必须|应当|应该|不得|禁止|严禁|需要确保|务必|强制|权重高于|优先级高于|不允许|只能|有且仅)"
)
_DESCRIPTIVE_RE = re.compile(r"(目前|当前|现在|系统会|则|展示|默认|生成|更新|计算)")


def _excerpts(text: str, pattern: re.Pattern, limit: int = 4) -> list[str]:
    """取命中信号词所在行的短摘录，作为证据。"""
    out = []
    for ln in text.splitlines():
        if pattern.search(ln):
            out.append(ln.strip()[:80])
            if len(out) >= limit:
                break
    return out


class HeuristicReasoner(Reasoner):
    def __init__(self, *, confidence_threshold: float = 0.7) -> None:
        self.confidence_threshold = confidence_threshold

    def classify_divergence(self, fact: Fact | None, claim: Claim, evidence: str) -> Suggestion:
        # 中文术语↔代码常量的值级映射靠语义，启发式不硬判 → 低置信、转 PM。
        return Suggestion(bucket="判定", confidence=0.0, rationale="启发式不判语义映射", evidence=evidence)

    def judge_build_status(self, claim: Claim, fact: Fact | None = None) -> BuildStatusSuggestion:
        text = claim.text
        if (mk := _excerpts(text, _PLANNED_RE)):
            return BuildStatusSuggestion(
                BuildStatus.规划中, confidence=0.6,
                rationale="文中含'未实现/后续逻辑'类标注，需对照基线代码核实是否已建成",
                evidence="；".join(mk),
            )
        if (mk := _excerpts(text, _DEPRECATED_RE)):
            return BuildStatusSuggestion(BuildStatus.已废弃, 0.55, "含废弃/下线表述", "；".join(mk))
        if (mk := _excerpts(text, _HISTORICAL_RE)):
            return BuildStatusSuggestion(BuildStatus.历史切片, 0.5, "含历史/旧版表述", "；".join(mk))
        return BuildStatusSuggestion(BuildStatus.已实现, 0.5, "无未建成信号，暂判已实现（待PM/代码核实）", "")

    def judge_nature(self, claim: Claim) -> tuple[Nature, float]:
        text = claim.heading + "\n" + claim.text
        norm = len(_NORMATIVE_RE.findall(text))
        desc = len(_DESCRIPTIVE_RE.findall(text))
        if norm and norm >= desc:
            return (Nature.规范性, min(0.5 + 0.1 * norm, 0.9))
        if norm and desc:
            return (Nature.混合, 0.5)
        return (Nature.描述性, 0.6 if desc else 0.4)

    def align_semantics(self, text: str, ontology: dict) -> SemanticSuggestion:
        return SemanticSuggestion(confidence=0.0, rationale="启发式不做本体对齐，转 PM/本体", is_ontology_gap=False)

    def draft_design(self, structure: dict, code: str) -> str:
        return ""  # 不臆造意图层正文

    def score_maturity(self, prd: dict, facts: dict) -> MaturityResult:
        cov = prd.get("section_count", 0)
        empty = prd.get("empty_ratio", 0.0)
        tier = "高" if cov >= 30 and empty < 0.2 else ("中" if cov >= 10 else "低")
        return MaturityResult(
            coverage=min(cov / 40.0, 1.0), empty_section_ratio=empty,
            initial_drift="待测", tier=tier,
            notes=[f"启发式成熟度：节数={cov} 空节比={empty:.2f} → {tier}"],
        )
