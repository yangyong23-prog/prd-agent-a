"""Emitter：把三份产物落 /outputs（§5）。全部 section_id 对齐、可挂载。

  1. 章节实例（章节.md 或 sections.yaml）：符合 Schema，每节载重字段 + 正文 + 标记，实建层带 commit。
  2. 漂移台账 drift.yaml。
  3. PM 决策队列 queue.yaml（decision 空待回填）。
"""

from __future__ import annotations

import os
from dataclasses import asdict, is_dataclass
from enum import Enum
from typing import Any

import yaml

from ..models.schema import DocumentHeader, DriftItem, QueueItem, Section


def _to_plain(obj: Any) -> Any:
    """dataclass/Enum → 可 YAML 序列化的纯结构。"""
    if is_dataclass(obj) and not isinstance(obj, type):
        return {k: _to_plain(v) for k, v in asdict(obj).items()}
    if isinstance(obj, Enum):
        return obj.value
    if isinstance(obj, list):
        return [_to_plain(x) for x in obj]
    if isinstance(obj, dict):
        return {k: _to_plain(v) for k, v in obj.items()}
    return obj


class Emitter:
    def __init__(self, out_dir: str = "outputs") -> None:
        self.out_dir = out_dir

    def emit(
        self,
        *,
        header: DocumentHeader,
        sections: list[Section],
        drifts: list[DriftItem],
        queue: list[QueueItem],
    ) -> None:
        os.makedirs(self.out_dir, exist_ok=True)
        self._dump("document.yaml", _to_plain(header))
        self._dump("sections.yaml", [_to_plain(s) for s in sections])
        self._dump("drift.yaml", [_to_plain(d) for d in drifts])
        self._dump("queue.yaml", [_to_plain(q) for q in queue])
        # M4：对标样例的成品 markdown（章节实例 + 就地标记 + 末尾两张清单）
        from .markdown import render_document

        md = render_document(header, sections, drifts, queue)
        with open(os.path.join(self.out_dir, "基线PRD章节实例.md"), "w", encoding="utf-8") as f:
            f.write(md)

    def _dump(self, name: str, data: Any) -> None:
        path = os.path.join(self.out_dir, name)
        with open(path, "w", encoding="utf-8") as f:
            yaml.safe_dump(data, f, allow_unicode=True, sort_keys=False)
