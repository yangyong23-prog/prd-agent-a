"""漂移检测：确定性 diff，产出未定性的分歧（divergence）。

两路：
  1. PRD-vs-facts（文档vs代码）：claim 与 factstore 事实比对（如枚举取值、字段、端点）。
  2. PRD-vs-PRD（文档历史漂移）：跨版本 claim 比对（embedding 跨版本相似匹配，§8）。
输出 DriftItem（未定 disposition），交 reason 归类、route 落 source_authority。
"""

from __future__ import annotations

from ..factstore.store import FactStore
from ..models.schema import DriftItem
from ..prd_parse.parser import Claim


class DriftDetector:
    def detect_vs_facts(self, claims: list[Claim], facts: FactStore) -> list[DriftItem]:
        # TODO(M2): 对接口/数据/枚举类 claim，与 factstore 对应事实做确定性比对，
        #           不一致即产 DriftItem(type='文档vs代码', evidence=claim行 + fact证据)。
        raise NotImplementedError("M2：实现 PRD-vs-facts diff")

    def detect_vs_prd(self, claims: list[Claim]) -> list[DriftItem]:
        # TODO(M2): 跨版本 claim 相似匹配，找'同一节不同版本表述漂移'，
        #           产 DriftItem(type='文档历史漂移', evidence=两版本:节)。此路不需代码即可定。
        raise NotImplementedError("M2：实现 PRD-vs-PRD diff")
