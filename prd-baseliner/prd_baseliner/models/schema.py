"""数据模型：对齐《基线 PRD 章节 Schema.md》。

这是输出形状的权威定义（文档级 / 章节级 / 正文范式 / 漂移台账 / PM 队列）。
所有产物（emit）必须可序列化为与 Schema 文档一致的 YAML。

实现说明：MVP 阶段用标准库 dataclasses 建模以保证零依赖即可运行；
后续可整体替换为 pydantic（见 pyproject 的 optional extras）而不动上层逻辑。
"""

from __future__ import annotations

from dataclasses import dataclass, field
from enum import Enum
from typing import Optional


# --------------------------------------------------------------------------- #
# 枚举：与 Schema 文档第三、四、七节的取值集合一一对应
# --------------------------------------------------------------------------- #


class Kind(str, Enum):
    """章节类型 → 决定正文范式（Schema §六）。前四类意图层，后四类实建层。"""

    背景 = "背景"
    规则 = "规则"
    流程 = "流程"
    功能 = "功能"
    接口 = "接口"
    数据 = "数据"
    依赖 = "依赖"
    枚举 = "枚举"


class Layer(str, Enum):
    """核心维度：实建层码派生可再生，意图层人工拥有。枚举节为'混合'。"""

    实建层 = "实建层"
    意图层 = "意图层"
    混合 = "混合"


class SourceAuthority(str, Enum):
    """修正来源：决定能否自动改（Schema §四）。"""

    代码 = "代码"  # 实建层 + 代码 → 自动更新
    判定 = "判定"  # 意图层 + 判定 → 永不自动改，走 PM
    编辑 = "编辑"  # 纯文档卫生，可批量自动整理


class BuildStatus(str, Enum):
    """建成状态：防 RAG 把未建成/历史内容当现状（Schema §四、§七）。"""

    已实现 = "已实现"
    规划中 = "规划中"
    已废弃 = "已废弃"
    历史切片 = "历史切片"
    暂不处理 = "暂不处理"


class Nature(str, Enum):
    """描述性可放权 vs 规范性走人（仅适用于 规则/流程/功能 三类意图节）。"""

    描述性 = "描述性"  # 陈述系统'现在怎么做' → 默认按代码更新（PM 轻确认）
    规范性 = "规范性"  # 断言系统'本就该怎么做' → 一律走 PM 重决策
    混合 = "混合"


class ReviewState(str, Enum):
    已核验 = "已核验"
    待PM确认 = "待PM确认"
    草稿 = "草稿"


class MaturityTier(str, Enum):
    高 = "高"
    中 = "中"
    低 = "低"


class ProcessingMode(str, Enum):
    对齐 = "对齐"
    重建 = "重建"
    混合 = "混合"


# --------------------------------------------------------------------------- #
# 文档级 schema（每条产品线一份）—— Schema §二
# --------------------------------------------------------------------------- #


@dataclass
class Baseline:
    version: str = "v-baseline-2026"
    commit: Optional[str] = None  # 基线锚点：构建已部署制品的提交，全文以它为准
    frozen_at: Optional[str] = None


@dataclass
class SourcePrd:
    name: str
    version: str
    status: str  # 作数 | 已被取代 | 废稿


@dataclass
class RuntimeFactSnapshot:
    ddl: Optional[str] = None  # pg_dump / prisma 引用
    topics: Optional[str] = None  # topic list 引用
    registry: Optional[str] = None  # 服务注册表引用


@dataclass
class MaturityScore:
    coverage: float = 0.0  # 0-1 章节覆盖度
    empty_section_ratio: str = "中"  # 0-1 或档位
    initial_drift: str = "待测"  # 低 | 中 | 高


@dataclass
class ReviewSignoff:
    state: str = "进行中"  # 进行中 | 已签字
    signoff: list[dict] = field(default_factory=list)


@dataclass
class DocumentHeader:
    product_line: str = ""
    baseline: Baseline = field(default_factory=Baseline)
    maturity_tier: Optional[MaturityTier] = None
    processing_mode: Optional[ProcessingMode] = None
    source_prd_set: list[SourcePrd] = field(default_factory=list)
    ontology_version: Optional[str] = None
    runtime_fact_snapshot: RuntimeFactSnapshot = field(default_factory=RuntimeFactSnapshot)
    maturity_score: MaturityScore = field(default_factory=MaturityScore)
    review: ReviewSignoff = field(default_factory=ReviewSignoff)


# --------------------------------------------------------------------------- #
# 章节级 schema（每节一个块 = 一个 RAG chunk）—— Schema §三
# --------------------------------------------------------------------------- #


@dataclass
class Provenance:
    """出处，二选一填。实建层填 generated_from_commit/generator；意图层填 source_prd/pm_confirmed。"""

    # 实建层
    generated_from_commit: Optional[str] = None
    generator: Optional[str] = None  # springdoc|jqassistant|pg_dump|topic-scan|openapi|prisma|enum-scan
    # 意图层
    source_prd: Optional[dict] = None  # {name, version}
    pm_confirmed: Optional[dict] = None  # {by, at, decision_ref}


@dataclass
class RagGate:
    """RAG 入库门字段（Schema §七规则得出）。"""

    indexable: bool = False
    surface_status: bool = True  # 检索时强制带出 build_status
    chunk_boundary: str = "self_contained"


@dataclass
class Section:
    section_id: str  # 稳定 ID，不随章节编号漂；漂移台账/队列挂在它上
    kind: Kind
    layer: Layer
    title: str = ""
    service: Optional[str] = None
    source_authority: Optional[SourceAuthority] = None
    build_status: Optional[BuildStatus] = None
    regenerable: bool = False  # 实建层 = True，绑 commit 自动重生
    nature: Optional[Nature] = None  # 仅 规则/流程/功能
    provenance: Provenance = field(default_factory=Provenance)
    ontology_concepts: list[str] = field(default_factory=list)
    review_state: Optional[ReviewState] = None
    last_verified_commit: Optional[str] = None
    drift: list[str] = field(default_factory=list)  # 挂载的漂移台账项 id
    queue: list[str] = field(default_factory=list)  # 挂载的 PM 决策项 id
    rag: RagGate = field(default_factory=RagGate)
    body: str = ""  # 正文（按 kind 走固定范式，见 Schema §六）

    def compute_indexable(self) -> bool:
        """RAG 入库门（Schema §七）：indexable iff 已实现 且 已核验。"""
        self.rag.indexable = (
            self.build_status == BuildStatus.已实现
            and self.review_state == ReviewState.已核验
        )
        return self.rag.indexable


# --------------------------------------------------------------------------- #
# 挂载的梳理产物 —— Schema §九
# --------------------------------------------------------------------------- #


@dataclass
class DriftItem:
    """漂移台账（目标 1）。"""

    drift_id: str
    section_id: str
    type: str  # 文档历史漂移 | 文档vs代码
    desc: str = ""
    evidence: str = ""  # commit:行 / dump / 旧PRD版本:节
    source_authority: Optional[SourceAuthority] = None
    disposition: str = ""  # 自动更新 | 进PM队列


@dataclass
class QueueItem:
    """PM 决策队列（目标 2 与规范性意图）。"""

    queue_id: str
    section_id: str
    type: str  # 描述性过期 | 规范性意图 | 语义冲突 | 本体缺口
    question: str = ""
    options: list[str] = field(default_factory=list)
    evidence: str = ""
    decision: str = ""  # PM 回填，写回对应节的 pm_confirmed
