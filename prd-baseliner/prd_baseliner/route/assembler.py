"""路由+组装：把事实、claim、推理建议汇成 schema 实例 + drift + queue。

M1 范围：实建层节由 factstore 事实【自动反填】成型（接口/数据/枚举），带 generated_from_commit、
regenerable=True、build_status=已实现。意图层节（来自 claim + reasoner）在 M2/M3 接入；M1 claim 为空时不产意图层节。

路由规则（Schema §四 / 需求 §2）：
  - 实建层 + 代码：自动反填，不进 PM 队列。
  - 枚举：值码派生（source_authority=代码），但含义/规范名需 PM/本体 → review_state=待PM确认。
  - 每节算 RAG 入库门（compute_indexable）。实建层 M1 默认 review_state=草稿 → 暂不入库（待核验）。
"""

from __future__ import annotations

import re

from ..factstore.store import FactStore
from ..models.fact import Fact, FactKind
from ..models.schema import (
    BuildStatus,
    DocumentHeader,
    DriftItem,
    Kind,
    Layer,
    Provenance,
    QueueItem,
    ReviewState,
    Section,
    SourceAuthority,
)
from ..prd_parse.parser import Claim
from ..reason.base import Reasoner
from . import render


def _slug(s: str) -> str:
    return re.sub(r"[^\w]+", "-", s).strip("-") or "x"


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
        pl = _slug(header.product_line) or "PL"
        commit = header.baseline.commit
        sections: list[Section] = []

        # —— 实建层：数据（每表一节）——
        for f in facts.by_kind(FactKind.数据):
            sections.append(self._data_section(pl, f, commit))

        # —— 实建层：接口（每服务一节，聚合端点）——
        for service, fs in self._group_by_service(facts.by_kind(FactKind.接口)).items():
            sections.append(self._api_section(pl, service, fs, commit))

        # —— 混合：枚举（每服务一节，列去重枚举；含义待 PM/本体）——
        for service, fs in self._group_by_service(facts.by_kind(FactKind.枚举)).items():
            sections.append(self._enum_section(pl, service, fs, commit))

        for s in sections:
            s.compute_indexable()

        # 意图层节 + 规范性入队：M2/M3 接入（claims 为空时此处不产出）
        queue: list[QueueItem] = []
        return sections, drifts, queue

    # ------------------------------------------------------------------ #
    @staticmethod
    def _group_by_service(facts: list[Fact]) -> dict[str, list[Fact]]:
        out: dict[str, list[Fact]] = {}
        for f in facts:
            out.setdefault(f.payload.get("service", "unknown"), []).append(f)
        return out

    def _data_section(self, pl: str, f: Fact, commit: str | None) -> Section:
        table = f.payload["table"]
        return Section(
            section_id=f"SEC-{pl}-数据-{table}",
            kind=Kind.数据,
            layer=Layer.实建层,
            title=f"数据表 · {table}（{f.payload['model']}）",
            source_authority=SourceAuthority.代码,
            build_status=BuildStatus.已实现,
            regenerable=True,
            provenance=Provenance(generated_from_commit=commit, generator=f.generator),
            review_state=ReviewState.草稿,
            last_verified_commit=commit,
            body=render.data_body(f),
        )

    def _api_section(self, pl: str, service: str, fs: list[Fact], commit: str | None) -> Section:
        return Section(
            section_id=f"SEC-{pl}-接口-{_slug(service)}",
            kind=Kind.接口,
            layer=Layer.实建层,
            title=f"接口契约 · {service}（{len(fs)} 端点）",
            service=service,
            source_authority=SourceAuthority.代码,
            build_status=BuildStatus.已实现,
            regenerable=True,
            provenance=Provenance(generated_from_commit=commit, generator="openapi"),
            review_state=ReviewState.草稿,
            last_verified_commit=commit,
            body=render.api_body(service, fs),
        )

    def _enum_section(self, pl: str, service: str, fs: list[Fact], commit: str | None) -> Section:
        return Section(
            section_id=f"SEC-{pl}-枚举-{_slug(service)}",
            kind=Kind.枚举,
            layer=Layer.混合,
            title=f"枚举 · {service}（{len(fs)} 个去重取值集）",
            service=service,
            source_authority=SourceAuthority.代码,  # 值码派生
            build_status=BuildStatus.已实现,
            regenerable=True,
            provenance=Provenance(generated_from_commit=commit, generator="openapi-enum"),
            review_state=ReviewState.待PM确认,  # 含义/规范名需 PM/本体
            last_verified_commit=commit,
            body=render.enum_body(service, fs),
        )
