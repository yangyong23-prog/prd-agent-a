"""确定性抽取核心：Extractor 接口（需求文档 §6）。

不变量（§2.1 穷举归工具）：接口/依赖/表/topic/枚举值这类'一个不漏'的事实由确定性工具
产出，**不交给 LLM 去数或列**。LLM 只能在工具产出之上做归并/补全/可读化。

每个子工具实现 Extractor，输出 list[Fact]，逐项打 generated_from_commit，喂入 factstore。
"""

from __future__ import annotations

from typing import Protocol, runtime_checkable

from ..models.fact import Fact


@runtime_checkable
class Extractor(Protocol):
    name: str  # openapi-extractor / schema-dumper / dep-extractor / topic-scanner / enum-scanner

    def extract(self, *, repo: str, commit: str, **kwargs) -> list[Fact]:
        """从代码/库/运行期 dump 产出事实。降级时在 Fact.flags 标注（§4 边界处理）。"""
        ...
