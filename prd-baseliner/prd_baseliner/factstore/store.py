"""FactStore：抽取事实的内存/落盘存储，按 FactKind 索引，供 drift 与 reason 读取。"""

from __future__ import annotations

from collections import defaultdict

from ..models.fact import Fact, FactKind


class FactStore:
    def __init__(self) -> None:
        self._by_kind: dict[FactKind, list[Fact]] = defaultdict(list)
        self._by_id: dict[str, Fact] = {}

    def add(self, fact: Fact) -> None:
        self._by_kind[fact.kind].append(fact)
        self._by_id[fact.fact_id] = fact

    def extend(self, facts: list[Fact]) -> None:
        for f in facts:
            self.add(f)

    def by_kind(self, kind: FactKind) -> list[Fact]:
        return list(self._by_kind.get(kind, []))

    def get(self, fact_id: str) -> Fact | None:
        return self._by_id.get(fact_id)

    def all(self) -> list[Fact]:
        return list(self._by_id.values())

    def __len__(self) -> int:
        return len(self._by_id)
