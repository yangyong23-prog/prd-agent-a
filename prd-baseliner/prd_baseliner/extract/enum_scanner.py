"""enum-scanner：枚举常量真实取值（如'问题来源'）—— 单一来源 = 代码常量。

栈适配说明：需求文档 §6 假设 Java enum + jQAssistant 兜底。实际样例产线是 TS：
  - TS enum / as const 联合类型 / Zod z.enum([...]) / Prisma enum
作用：解样例 §7'问题来源'三处不一致（10 vs 11、第三方报警是否在内），以代码 enum 为准。
填入节：枚举（值）。含义/规范名由 PM/本体补（route 标 待PM确认）。
"""

from __future__ import annotations

from ..models.fact import Fact
from .base import Extractor


class EnumScanner(Extractor):
    name = "enum-scanner"

    def extract(self, *, repo: str, commit: str, **kwargs) -> list[Fact]:
        # TODO(M1): 静态扫 TS enum / z.enum / Prisma enum → Fact(kind=枚举, payload={name, values[]})，
        #           evidence 指向定义点 文件:行；tree-sitter 兜底跨文件。
        raise NotImplementedError("M1：实现枚举取值抽取")
