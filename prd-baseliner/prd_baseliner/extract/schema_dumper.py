"""schema-dumper：物理表（表/字段/类型/主外键/关系）+ 计算字段启发式标注。

栈适配说明：需求文档 §6 假设 PostgreSQL + pg_dump。实际样例产线是 MySQL + Prisma：
  - apps/server/prisma/schema.prisma           ← 解析 model/@map/@relation（首选，零依赖）
  - apps/server/prisma/migrations/*/migration.sql
  - 退化：无 DB 时解析 migration，flags 标 '事实来源=migration（可能漂移）'（§4 边界处理）
填入节：数据。

计算字段启发式（§6）：标出'库里无对应列但 PRD 当属性写'的字段为疑似计算字段
（如 名称=拼接、持续时长=时间差、聚合类），列入需核实，最终由代码确认 persisted vs derived。
"""

from __future__ import annotations

from ..models.fact import Fact
from .base import Extractor


class SchemaDumper(Extractor):
    name = "schema-dumper"

    def extract(self, *, repo: str, commit: str, **kwargs) -> list[Fact]:
        # TODO(M1): 解析 schema.prisma → 每个 model 产出 Fact(kind=数据)，含字段/类型/主外键/@@map 表名；
        #           关系字段映射到外键；evidence 指向 schema.prisma:行。
        raise NotImplementedError("M1：实现 Prisma/migration 表结构抽取")
