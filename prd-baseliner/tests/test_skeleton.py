"""骨架冒烟测试：验证模型可建、RAG 入库门规则正确、产物可序列化、流水线可端到端跑（含 skip）。"""

from __future__ import annotations

import os
import tempfile

from prd_baseliner.emit import Emitter
from prd_baseliner.models.schema import (
    BuildStatus,
    DocumentHeader,
    DriftItem,
    Kind,
    Layer,
    QueueItem,
    ReviewState,
    Section,
    SourceAuthority,
)
from prd_baseliner.pipeline import Pipeline, PipelineConfig


def test_section_indexable_gate():
    # Schema §七：indexable iff 已实现 且 已核验
    s = Section(section_id="SEC-1", kind=Kind.接口, layer=Layer.实建层)
    s.build_status = BuildStatus.已实现
    s.review_state = ReviewState.待PM确认
    assert s.compute_indexable() is False  # 未核验 → 不入库
    s.review_state = ReviewState.已核验
    assert s.compute_indexable() is True


def test_planned_status_not_indexable():
    s = Section(section_id="SEC-2", kind=Kind.规则, layer=Layer.意图层)
    s.build_status = BuildStatus.规划中
    s.review_state = ReviewState.已核验
    assert s.compute_indexable() is False  # 规划中绝不当现状入库


def test_emit_serializes_dataclasses_and_enums():
    with tempfile.TemporaryDirectory() as d:
        Emitter(d).emit(
            header=DocumentHeader(product_line="异常事件（RCC）"),
            sections=[
                Section(
                    section_id="SEC-3",
                    kind=Kind.数据,
                    layer=Layer.实建层,
                    source_authority=SourceAuthority.代码,
                )
            ],
            drifts=[DriftItem(drift_id="DRIFT-1", section_id="SEC-3", type="文档vs代码")],
            queue=[QueueItem(queue_id="Q-1", section_id="SEC-3", type="规范性意图")],
        )
        for name in ("document.yaml", "sections.yaml", "drift.yaml", "queue.yaml"):
            assert os.path.exists(os.path.join(d, name))


def test_pipeline_runs_with_unimplemented_stages():
    # 骨架阶段：所有抽取/解析未实现，流水线应优雅 skip 并产出空产物，不崩溃
    with tempfile.TemporaryDirectory() as d:
        cfg = PipelineConfig(
            product_line="异常事件（RCC）",
            repo=".",
            commit="WORKDIR",
            services=["风险管理服务"],
            prd_manifest=[],
            out_dir=d,
        )
        Pipeline(cfg).run()
        assert os.path.exists(os.path.join(d, "sections.yaml"))
