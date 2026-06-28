"""已验证事实（Fact）：确定性抽取核心的产物，factstore 的存储单元。

核心不变量（需求文档 §2.5 证据绑定）：每条事实必须挂 generated_from_commit + 具体证据
（commit:文件:行 / dump 引用）。推理层只能读 factstore，不直接读原始源码。
"""

from __future__ import annotations

from dataclasses import dataclass, field
from enum import Enum
from typing import Any


class FactKind(str, Enum):
    """事实类型 → 决定反填进哪个 kind 的节（route 阶段）。"""

    接口 = "接口"  # openapi-extractor：端点/方法/入参/出参 schema/错误码/MQ DTO
    数据 = "数据"  # schema-dumper：表/字段/类型/主外键/关系 + 计算字段启发式
    依赖 = "依赖"  # dep-extractor / topic-scanner：同步/异步/基础设施依赖
    枚举 = "枚举"  # enum-scanner：枚举常量真实取值


@dataclass
class Fact:
    """一条结构化事实。payload 的形状随 kind 而定（接口=OpenAPI 片段，数据=表定义…）。"""

    fact_id: str
    kind: FactKind
    generated_from_commit: str  # 硬约束：逐项打 commit
    generator: str  # openapi | prisma | dep-extractor | topic-scan | enum-scan
    evidence: str  # commit:文件:行 / dump 引用 —— 禁止裸断言
    payload: dict[str, Any] = field(default_factory=dict)
    # 启发式标注，例：schema-dumper 标出'疑似计算字段'供后续核实 persisted vs derived
    flags: list[str] = field(default_factory=list)
