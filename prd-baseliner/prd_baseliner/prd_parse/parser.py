"""PRD 解析：历史 PRD markdown → 候选 section（claim），按 kind 初分类。

claim 是'文档说了什么'的载体，喂给 drift 与 reason；它本身不是结论。
LLM 在此可放开用（§8：unstructured / LlamaParse 解析图表）；MVP 先按 markdown 标题切。
"""

from __future__ import annotations

from dataclasses import dataclass, field

from ..models.schema import Kind


@dataclass
class Claim:
    """从历史 PRD 切出的一段候选 section。"""

    claim_id: str
    source_prd: str  # 来自哪份 PRD
    source_version: str
    heading: str
    text: str
    kind_guess: Kind | None = None  # 初分类，后续 reason 可纠正
    evidence: str = ""  # 旧PRD版本:节/行，供证据绑定
    ontology_hits: list[str] = field(default_factory=list)


class PrdParser:
    def parse(self, prd_path: str, *, source_prd: str, source_version: str) -> list[Claim]:
        # TODO(M2): 按 markdown 标题层级切节；用关键词/LLM 初判 kind（背景/规则/流程/功能/接口/数据/依赖/枚举）；
        #           记录 heading 行号作 evidence。
        raise NotImplementedError("M2：实现 PRD 切节与 kind 初分类")
