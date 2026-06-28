"""dep-extractor：同步依赖（Feign/RPC 目标）+ 异步依赖（topic 生产/消费）+ 基础设施依赖。

栈适配说明：需求文档 §6 假设 jQAssistant + Neo4j 扫字节码。实际样例产线是 TS：
  - packages/shared/src/product-apis/*.ts + gateway.ts ← 跨业务线同步调用（相当于 Feign 目标）
  - packages/shared/src/product-apis/ 列出的服务即依赖目标
  - 跨语言解析建议 tree-sitter（§8）；MVP 可静态扫 import + requestGateway 调用点
填入节：依赖。
"""

from __future__ import annotations

from ..models.fact import Fact
from .base import Extractor


class DepExtractor(Extractor):
    name = "dep-extractor"

    def extract(self, *, repo: str, commit: str, **kwargs) -> list[Fact]:
        # TODO(M2): 扫 product-apis 各 service 的 requestGateway 调用 → Fact(kind=依赖, 同步)，
        #           evidence 指向调用点 文件:行。Kafka 在本样例可能不存在（见 topic_scanner）。
        raise NotImplementedError("M2：实现依赖图抽取")
