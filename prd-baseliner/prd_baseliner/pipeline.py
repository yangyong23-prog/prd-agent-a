"""流水线编排（§3 数据流）：

  归集 → 确定性抽取核心 → 已验证事实库 → PRD 解析 → 漂移检测 →（推理层）→ 路由+组装 → 产物

推理层在硬闸之后（factstore 建立之后）。drift 在 reason 之前（发现是确定性 diff，定性才交模型）。
本文件只做编排接线；各阶段的真实逻辑在各自模块，按里程碑逐步实现。
"""

from __future__ import annotations

import os
from dataclasses import dataclass

from .collect import Collector
from .drift import DriftDetector
from .emit import Emitter
from .extract import ALL_EXTRACTORS
from .extract._util import resolve_commit
from .factstore import FactStore
from .models.schema import Baseline, DocumentHeader
from .prd_parse import PrdParser
from .reason.base import Reasoner
from .reason.noop_reasoner import NoopReasoner
from .route import Assembler


@dataclass
class PipelineConfig:
    product_line: str
    repo: str
    commit: str
    services: list[str]
    prd_manifest: list[dict]
    base_dir: str = "."
    out_dir: str = "outputs"
    runtime_facts: dict | None = None
    ontology: dict | None = None


class Pipeline:
    def __init__(self, config: PipelineConfig, reasoner: Reasoner | None = None) -> None:
        self.config = config
        self.reasoner = reasoner or NoopReasoner()  # M1/M2 无模型也能跑
        self.factstore = FactStore()

    def run(self) -> None:
        cfg = self.config

        # 解析真实代码根与基线 commit（证据绑定 §2.5）
        code_root = os.path.abspath(os.path.join(cfg.base_dir, cfg.repo))
        commit = resolve_commit(code_root, cfg.commit)

        # 1. 归集
        collector = Collector()
        prd_docs = collector.collect(cfg.prd_manifest, base_dir=cfg.base_dir)

        # 2. 确定性抽取 → 3. factstore（穷举归工具，不用 LLM）
        for ExtractorCls in ALL_EXTRACTORS:
            extractor = ExtractorCls()
            try:
                facts = extractor.extract(repo=code_root, commit=commit, services=cfg.services)
                self.factstore.extend(facts)
                if facts:
                    print(f"[ok]   {extractor.name}: {len(facts)} facts")
                else:
                    print(f"[none] {extractor.name}: 0 facts（事实源缺失或本产线为空集，详见 docstring）")
            except NotImplementedError:
                # 尚未实现的抽取器：跳过但不静默吞掉（§4 不静默猜测）
                print(f"[skip] {extractor.name} 未实现（里程碑待办）")

        # 4. PRD 解析
        parser = PrdParser()
        claims = []
        for doc in prd_docs:
            if doc.status == "作数" and doc.exists:
                try:
                    claims += parser.parse(
                        doc.path, source_prd=doc.path, source_version=doc.version
                    )
                except NotImplementedError:
                    print("[skip] prd-parse 未实现（M2）")
                    break

        # 5. 漂移检测（确定性 diff，reason 之前）
        detector = DriftDetector()
        drifts = []
        try:
            drifts += detector.detect_vs_facts(claims, self.factstore)
            drifts += detector.detect_vs_prd(claims)
        except NotImplementedError:
            print("[skip] drift 未实现（M2）")

        # 6/7. 路由+组装（内部按需调用 reasoner）
        header = DocumentHeader(
            product_line=cfg.product_line,
            baseline=Baseline(commit=commit),
        )
        assembler = Assembler(self.reasoner)
        try:
            sections, drifts, queue = assembler.assemble(
                header=header, claims=claims, facts=self.factstore, drifts=drifts
            )
        except NotImplementedError:
            print("[skip] route/assemble 未实现（M2/M3）")
            sections, queue = [], []

        # 8. 产物
        Emitter(cfg.out_dir).emit(
            header=header, sections=sections, drifts=drifts, queue=queue
        )
        print(
            f"[done] facts={len(self.factstore)} claims={len(claims)} "
            f"sections={len(sections)} drifts={len(drifts)} queue={len(queue)} → {cfg.out_dir}/"
        )
