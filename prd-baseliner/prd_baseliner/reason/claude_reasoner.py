"""ClaudeReasoner：LLM 支撑的推理层（§7，面向最强模型，provider 可换）。

通过 anthropic SDK 调用模型；SDK/密钥缺失时抛清晰错误（CLI 应回落 HeuristicReasoner）。
约束复述（接口硬约束）：只返回建议+置信度+证据；低置信度转 PM；绝不写意图层正文。

实现策略：build_status / nature 是分类任务——用结构化 JSON 提示，要求模型给
{label, confidence, rationale, evidence}，并夹带 claim 原文；其余方法逐步接入。
启发式 reasoner 已能在无模型时产出可用结果，本类用于'放开用最强模型'的部署形态。
"""

from __future__ import annotations

import json
import os

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
from .heuristic_reasoner import HeuristicReasoner

_BUILD_STATUS_VALUES = {b.value: b for b in BuildStatus}
_NATURE_VALUES = {n.value: n for n in Nature}


class ClaudeReasoner(Reasoner):
    def __init__(self, *, model: str | None = None, confidence_threshold: float = 0.7) -> None:
        self.model = model or os.environ.get("PRD_REASONER_MODEL", "claude-opus-4-8")
        self.confidence_threshold = confidence_threshold
        self._fallback = HeuristicReasoner(confidence_threshold=confidence_threshold)
        try:
            import anthropic  # noqa: F401
        except ImportError as e:
            raise RuntimeError(
                "ClaudeReasoner 需要 anthropic SDK 与 ANTHROPIC_API_KEY；"
                "未安装/未配置请用 --reasoner heuristic。原始错误：%s" % e
            )
        self._client = anthropic.Anthropic()

    # —— 内部：一次结构化分类调用 —— #
    def _classify(self, system: str, user: str) -> dict:
        msg = self._client.messages.create(
            model=self.model,
            max_tokens=512,
            system=system,
            messages=[{"role": "user", "content": user}],
        )
        text = "".join(b.text for b in msg.content if getattr(b, "type", "") == "text")
        start, end = text.find("{"), text.rfind("}")
        return json.loads(text[start : end + 1]) if start >= 0 else {}

    def judge_build_status(self, claim: Claim, fact: Fact | None = None) -> BuildStatusSuggestion:
        try:
            r = self._classify(
                "你是 PRD 核实助手。判断给定 PRD 节描述的功能在'基线代码'中的建成状态。"
                "只输出 JSON：{label: 已实现|规划中|已废弃|历史切片|暂不处理, confidence: 0-1, "
                "rationale: 简述, evidence: 文中证据原句}。不要臆断未建成为已建成（防洗白）。",
                f"标题：{claim.heading}\n正文：\n{claim.text[:4000]}",
            )
            bs = _BUILD_STATUS_VALUES.get(r.get("label"), BuildStatus.已实现)
            return BuildStatusSuggestion(bs, float(r.get("confidence", 0.5)),
                                         r.get("rationale", ""), r.get("evidence", ""))
        except Exception:
            return self._fallback.judge_build_status(claim, fact)

    def judge_nature(self, claim: Claim) -> tuple[Nature, float]:
        try:
            r = self._classify(
                "判断 PRD 节是'描述性'（陈述系统现在怎么做）还是'规范性'（断言系统本该怎么做）。"
                "只输出 JSON：{label: 描述性|规范性|混合, confidence: 0-1}。",
                f"标题：{claim.heading}\n正文：\n{claim.text[:4000]}",
            )
            return (_NATURE_VALUES.get(r.get("label"), Nature.描述性), float(r.get("confidence", 0.5)))
        except Exception:
            return self._fallback.judge_nature(claim)

    def classify_divergence(self, fact: Fact | None, claim: Claim, evidence: str) -> Suggestion:
        return self._fallback.classify_divergence(fact, claim, evidence)

    def align_semantics(self, text: str, ontology: dict) -> SemanticSuggestion:
        # TODO：接 Neo4j 本体导出做语义对齐 + 本体缺口反馈。
        return self._fallback.align_semantics(text, ontology)

    def draft_design(self, structure: dict, code: str) -> str:
        return ""  # 意图层草稿留待显式开启，且必标 review_state=草稿

    def score_maturity(self, prd: dict, facts: dict) -> MaturityResult:
        return self._fallback.score_maturity(prd, facts)
