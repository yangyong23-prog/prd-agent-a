"""漂移检测：确定性 diff，产出未定性的分歧（divergence）。

两路（均不调用 LLM）：
  1. PRD-vs-PRD（文档历史漂移）：跨版本同标题节正文不一致 → 不需代码即可定。
  2. PRD-vs-facts（文档vs代码）：覆盖度 diff —— 代码有事实但 PRD 无对应节、
     或 PRD 实建层节为空但代码有契约。值级语义映射（中文术语↔代码常量）需 PM/本体，
     不在此硬判，留给 route 生成 queue（§2.6 语义走人）。
"""

from __future__ import annotations

import re

from ..factstore.store import FactStore
from ..models.fact import FactKind
from ..models.schema import DriftItem, Kind, SourceAuthority
from ..prd_parse.parser import Claim

# 实建层 kind ↔ FactKind：覆盖度对照用
_BUILD_KINDS = {Kind.接口: FactKind.接口, Kind.数据: FactKind.数据, Kind.枚举: FactKind.枚举}


def _norm(text: str) -> str:
    """正文归一：去空白/标点，便于跨版本判定'是否实质改动'。"""
    return re.sub(r"[\s　,，。.;；、]+", "", text)


class DriftDetector:
    def __init__(self) -> None:
        self._seq = 0

    def _next_id(self) -> str:
        self._seq += 1
        return f"DRIFT-{self._seq:04d}"

    def detect_vs_prd(self, claims: list[Claim]) -> list[DriftItem]:
        """跨版本同标题节正文不一致 → 文档历史漂移。"""
        by_heading: dict[str, list[Claim]] = {}
        for c in claims:
            by_heading.setdefault(c.heading, []).append(c)
        out: list[DriftItem] = []
        for heading, group in by_heading.items():
            versions = {c.source_version: c for c in group}
            if len(versions) < 2:
                continue
            norms = {v: _norm(c.text) for v, c in versions.items()}
            if len(set(norms.values())) <= 1:
                continue  # 各版本正文实质一致，无漂移
            vs = sorted(versions)
            ev = " ↔ ".join(f"{versions[v].evidence}" for v in vs)
            out.append(
                DriftItem(
                    drift_id=self._next_id(),
                    section_id="",  # route 挂载到对应节
                    type="文档历史漂移",
                    desc=f"节「{heading}」在版本 {', '.join(vs)} 间正文不一致，需 PM 认定哪版作数",
                    evidence=ev,
                    source_authority=SourceAuthority.判定,
                    disposition="进PM队列",
                )
            )
        return out

    def detect_vs_facts(self, claims: list[Claim], facts: FactStore) -> list[DriftItem]:
        """覆盖度 diff（确定性）：代码有事实文档无 / 文档节为空代码有。"""
        out: list[DriftItem] = []
        claim_kinds = {c.kind_guess for c in claims if c.kind_guess}

        # (a) 代码有事实，但 PRD 无任何对应 kind 的节 —— 重建模式'代码有、原文档无'
        for kind, fk in _BUILD_KINDS.items():
            if facts.by_kind(fk) and kind not in claim_kinds:
                out.append(
                    DriftItem(
                        drift_id=self._next_id(),
                        section_id="",
                        type="文档vs代码",
                        desc=f"代码存在 {len(facts.by_kind(fk))} 条「{kind.value}」事实，但历史 PRD 无对应章节",
                        evidence=f"factstore:{fk.value}（{len(facts.by_kind(fk))} 条）",
                        source_authority=SourceAuthority.代码,
                        disposition="自动更新",
                    )
                )

        # (b) PRD 实建层节为空，但代码有契约 —— 如样例 §5 接口原文为空
        for c in claims:
            if c.kind_guess in _BUILD_KINDS and c.is_empty:
                fk = _BUILD_KINDS[c.kind_guess]
                if facts.by_kind(fk):
                    out.append(
                        DriftItem(
                            drift_id=self._next_id(),
                            section_id="",
                            type="文档vs代码",
                            desc=f"PRD 节「{c.heading}」正文为空，但代码有 {len(facts.by_kind(fk))} 条「{c.kind_guess.value}」事实可生成",
                            evidence=f"{c.evidence} ⟷ factstore:{fk.value}",
                            source_authority=SourceAuthority.代码,
                            disposition="自动更新",
                        )
                    )
        return out
