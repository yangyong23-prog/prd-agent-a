"""路由+组装：把事实、claim、推理建议汇成 schema 实例 + drift + queue。

路由规则（Schema §四 / 需求文档 §2）：
  - 实建层 + 代码：用 factstore 事实【自动反填】对应 kind 的节，带 generated_from_commit，regenerable=True。
  - 意图层 + 判定：永不自动改写，只标 review_state（待PM确认/草稿），分歧入 drift/queue。
  - 编辑：纯文档卫生，可自动整理。
  - 低于阈值的推理建议 → 一律转 queue（PM 决策）。
  - 每节算 RAG 入库门（Section.compute_indexable）。
"""

from __future__ import annotations

from ..factstore.store import FactStore
from ..models.schema import DocumentHeader, DriftItem, QueueItem, Section
from ..prd_parse.parser import Claim
from ..reason.base import Reasoner


class Assembler:
    def __init__(self, reasoner: Reasoner, *, confidence_threshold: float = 0.7) -> None:
        self.reasoner = reasoner
        self.confidence_threshold = confidence_threshold

    def assemble(
        self,
        *,
        header: DocumentHeader,
        claims: list[Claim],
        facts: FactStore,
        drifts: list[DriftItem],
    ) -> tuple[list[Section], list[DriftItem], list[QueueItem]]:
        # TODO(M2): 实建层节 —— 由 facts 直接反填成型（接口/数据/依赖/枚举值）。
        # TODO(M3): 意图层节 —— 沿用 claim 正文，调 reasoner 判 build_status/nature；
        #           规范性 & 低置信度 → 转 queue；意图层正文不改写，只标 review_state。
        # TODO(M2): 每节 compute_indexable()；把 drift/queue id 挂回 section_id。
        raise NotImplementedError("M2/M3：实现路由与组装")
