"""路由+组装：把事实、claim、推理建议汇成 schema 实例 + drift + queue。

M1：实建层节由 factstore 事实自动反填（接口/数据/枚举）。
M2：
  - 意图层节（背景/流程/规则/功能）由 claim 原文承载，**正文不改写**，review_state=待PM确认。
  - 漂移挂载到对应 section_id。
  - PM 队列（确定性子集）：架构占位名绑定、枚举语义对齐/数量自相矛盾。
M3：意图层 build_status/nature 由 reasoner 判定（此处先留空/待确认）。

不变量：意图层永不自动改写（§2.3）；规范性/语义一律走 PM（§2.6）。
"""

from __future__ import annotations

import re

from ..factstore.store import FactStore
from ..models.fact import Fact, FactKind
from ..models.schema import (
    BuildStatus,
    DocumentHeader,
    DriftItem,
    Kind,
    Layer,
    Nature,
    Provenance,
    QueueItem,
    ReviewState,
    Section,
    SourceAuthority,
)
from ..prd_parse.parser import Claim
from ..reason.base import Reasoner
from . import render

_INTENT_KINDS = {Kind.背景, Kind.流程, Kind.规则, Kind.功能, Kind.依赖}
# 行为意图节：可被代码核实做漂移对照，且区分描述性/规范性（Schema §六）。
_BEHAVIORAL_KINDS = {Kind.流程, Kind.规则, Kind.功能}
_KIND_TO_FACT = {Kind.接口: FactKind.接口, Kind.数据: FactKind.数据, Kind.枚举: FactKind.枚举}


def _slug(s: str) -> str:
    return re.sub(r"[^\w]+", "-", s).strip("-") or "x"


class Assembler:
    def __init__(self, reasoner: Reasoner, *, confidence_threshold: float = 0.7) -> None:
        self.reasoner = reasoner
        self.confidence_threshold = confidence_threshold
        self._qseq = 0

    def _qid(self) -> str:
        self._qseq += 1
        return f"Q-{self._qseq:04d}"

    def assemble(
        self,
        *,
        header: DocumentHeader,
        claims: list[Claim],
        facts: FactStore,
        drifts: list[DriftItem],
    ) -> tuple[list[Section], list[DriftItem], list[QueueItem]]:
        pl = _slug(header.product_line) or "PL"
        commit = header.baseline.commit
        sections: list[Section] = []

        # —— 实建层（M1）——
        for f in facts.by_kind(FactKind.数据):
            sections.append(self._data_section(pl, f, commit))
        for service, fs in self._group(facts.by_kind(FactKind.接口)).items():
            sections.append(self._api_section(pl, service, fs, commit))
        for service, fs in self._group(facts.by_kind(FactKind.枚举)).items():
            sections.append(self._enum_section(pl, service, fs, commit))

        # —— 意图层（M2，正文不改写）——
        intent_pairs: list[tuple[Section, Claim]] = []
        for c in claims:
            if c.kind_guess in _INTENT_KINDS and not c.is_empty:  # 跳过空容器章节
                s = self._intent_section(pl, c)
                sections.append(s)
                intent_pairs.append((s, c))

        # —— 漂移挂载 + PM 队列 ——
        self._attach_drifts(sections, drifts)
        queue = self._build_queue(claims, facts)
        queue += self._judge_intent(intent_pairs)  # M3：推理层判 build_status/nature
        self._attach_queue(sections, queue)

        for s in sections:
            s.compute_indexable()
        return sections, drifts, queue

    # ------------------------------------------------------------------ #
    @staticmethod
    def _group(facts: list[Fact]) -> dict[str, list[Fact]]:
        out: dict[str, list[Fact]] = {}
        for f in facts:
            out.setdefault(f.payload.get("service", "unknown"), []).append(f)
        return out

    def _data_section(self, pl, f, commit):
        table = f.payload["table"]
        return Section(
            section_id=f"SEC-{pl}-数据-{table}", kind=Kind.数据, layer=Layer.实建层,
            title=f"数据表 · {table}（{f.payload['model']}）",
            source_authority=SourceAuthority.代码, build_status=BuildStatus.已实现,
            regenerable=True, provenance=Provenance(generated_from_commit=commit, generator=f.generator),
            review_state=ReviewState.草稿, last_verified_commit=commit, body=render.data_body(f),
        )

    def _api_section(self, pl, service, fs, commit):
        return Section(
            section_id=f"SEC-{pl}-接口-{_slug(service)}", kind=Kind.接口, layer=Layer.实建层,
            title=f"接口契约 · {service}（{len(fs)} 端点）", service=service,
            source_authority=SourceAuthority.代码, build_status=BuildStatus.已实现,
            regenerable=True, provenance=Provenance(generated_from_commit=commit, generator="openapi"),
            review_state=ReviewState.草稿, last_verified_commit=commit, body=render.api_body(service, fs),
        )

    def _enum_section(self, pl, service, fs, commit):
        return Section(
            section_id=f"SEC-{pl}-枚举-{_slug(service)}", kind=Kind.枚举, layer=Layer.混合,
            title=f"枚举 · {service}（{len(fs)} 个去重取值集）", service=service,
            source_authority=SourceAuthority.代码, build_status=BuildStatus.已实现,
            regenerable=True, provenance=Provenance(generated_from_commit=commit, generator="openapi-enum"),
            review_state=ReviewState.待PM确认, last_verified_commit=commit, body=render.enum_body(service, fs),
        )

    def _intent_section(self, pl, c: Claim):
        # 意图层：原文承载，正文不改写，仅加一行待确认标记
        body = f"> 【待PM确认 · 意图层未自动改写，原文逐字保留】来源：{c.evidence}\n\n{c.text}"
        return Section(
            section_id=f"SEC-{pl}-{c.kind_guess.value}-{_slug(c.heading)}",
            kind=c.kind_guess, layer=Layer.意图层,
            title=c.heading, source_authority=SourceAuthority.判定,
            build_status=None,  # M3 reasoner 判定，不在此臆断
            regenerable=False,
            provenance=Provenance(source_prd={"name": c.source_prd, "version": c.source_version}),
            review_state=ReviewState.待PM确认, body=body,
        )

    # ------------------------------------------------------------------ #
    def _attach_drifts(self, sections: list[Section], drifts: list[DriftItem]) -> None:
        for d in drifts:
            target = self._match_section_for_drift(sections, d)
            if target is not None:
                d.section_id = target.section_id
                target.drift.append(d.drift_id)

    @staticmethod
    def _match_section_for_drift(sections, d: DriftItem) -> Section | None:
        m = re.search(r"「(.+?)」", d.desc)
        head = m.group(1) if m else ""
        # 1) 标题直配（意图层历史漂移）
        for s in sections:
            if head and (s.title == head or head in s.title):
                return s
        # 2) kind 回退：PRD 标题/desc 含 接口/数据/枚举 → 挂到对应实建层节
        for kind in (Kind.接口, Kind.数据, Kind.枚举):
            if kind.value in head or f"「{kind.value}」" in d.desc:
                for s in sections:
                    if s.kind == kind:
                        return s
        return None

    # ------------------------------------------------------------------ #
    def _judge_intent(self, pairs: list[tuple[Section, Claim]]) -> list[QueueItem]:
        """M3：对行为意图节调推理层判 build_status/nature。

        硬约束：只写元数据与队列，**不改正文**；意图层修正一律走 PM（§2.3/§2.6）。
        - build_status≠已实现（含'目前未实现'等）→ 队列'描述性过期'，标'需对照基线代码核实'。
        - nature=规范性/混合 或 置信度低 → 队列'规范性意图'，PM 裁决。
        - 描述性且高置信 → 默认'按代码更新（PM 轻确认）'，不强制入队。
        """
        out: list[QueueItem] = []
        for s, c in pairs:
            if c.kind_guess not in _BEHAVIORAL_KINDS:
                s.build_status = BuildStatus.已实现  # 背景/依赖：默认已实现（待PM轻确认）
                continue

            bs = self.reasoner.judge_build_status(c)
            s.build_status = bs.build_status  # 临时判定；review_state=待PM确认 已表明未定
            if bs.build_status != BuildStatus.已实现:
                q = QueueItem(
                    queue_id=self._qid(), section_id=s.section_id, type="描述性过期",
                    question=f"节「{c.heading}」含未建成/历史标注（判 {bs.build_status.value}），"
                             f"需对照基线代码核实是否已建成（建成→按代码更新；未建成→保留并打标签、不入RAG）",
                    options=["按代码更新", "保留规划中并打标签", "从基线PRD剔除"],
                    evidence=bs.evidence or c.evidence,
                )
                out.append(q)
                s.queue.append(q.queue_id)

            nat, conf = self.reasoner.judge_nature(c)
            s.nature = nat
            # 描述性默认'按代码更新（PM 轻确认）'，不入阻塞队列；仅规范性/混合走 PM（§2.6）。
            if nat in (Nature.规范性, Nature.混合):
                q = QueueItem(
                    queue_id=self._qid(), section_id=s.section_id, type="规范性意图",
                    question=f"节「{c.heading}」判为 {nat.value}（置信度 {conf:.2f}）：规范性意图代码自证不了"
                             f"'该不该如此'，需 PM 确认是否为预期",
                    options=["确认为预期", "按代码更新", "修订为…"],
                    evidence=c.evidence,
                )
                out.append(q)
                s.queue.append(q.queue_id)
        return out

    def _build_queue(self, claims: list[Claim], facts: FactStore) -> list[QueueItem]:
        queue: list[QueueItem] = []

        # 1) 架构占位名绑定（验收标准：A程序 → 真实服务）。按占位 token 去重。
        seen_ph: set[str] = set()
        for c in claims:
            for ph in c.placeholders:
                token = re.sub(r"\s+", "", ph)
                if token in seen_ph:
                    continue
                seen_ph.add(token)
                queue.append(QueueItem(
                    queue_id=self._qid(), section_id="",
                    type="规范性意图",
                    question=f"占位名「{ph}」需绑定到真实可部署服务（架构决策）；定后全文统一引用",
                    options=["绑定为 风险管理服务", "绑定为其他服务", "保留占位待定"],
                    evidence=c.evidence,
                ))

        # 2) 枚举语义对齐 + 数量自相矛盾（语义冲突，走 PM/本体）
        enum_services = {f.payload.get("service") for f in facts.by_kind(FactKind.枚举)}
        for c in claims:
            if c.kind_guess != Kind.枚举:
                continue
            ev = c.evidence
            # 数量自相矛盾：「共 N 种」vs 实际列举数
            claimed, listed = self._enum_counts(c.text)
            code_n = len([f for f in facts.by_kind(FactKind.枚举)])
            if claimed is not None and listed is not None and claimed != listed:
                queue.append(QueueItem(
                    queue_id=self._qid(), section_id="", type="语义冲突",
                    question=f"PRD 节「{c.heading}」声称「共 {claimed} 种」但实际列举 {listed} 项，且代码有 {code_n} 个去重枚举——确认单一来源",
                    options=["以代码枚举为单一来源", "保留PRD表述", "修订为…"], evidence=ev,
                ))
            # 中文术语 ↔ 代码常量对齐
            queue.append(QueueItem(
                queue_id=self._qid(), section_id="", type="语义冲突",
                question=f"将节「{c.heading}」中文取值与代码枚举常量对齐（如 计划巡检↔PLAN_MAINTENANCE），并确认规范名（本体）",
                options=["按代码枚举为单一来源", "保留PRD中文表述", "回本体补缺概念"],
                evidence=f"{ev} ⟷ factstore:枚举（services={sorted(s for s in enum_services if s)}）",
            ))
        return queue

    @staticmethod
    def _enum_counts(text: str):
        cm = re.search(r"共\s*\**\s*(\d+)\s*种", text)
        claimed = int(cm.group(1)) if cm else None
        # 列举项：取冒号后的中文顿号分隔串
        lm = re.search(r"[:：]\s*([^。\n]+)", text)
        listed = None
        if lm:
            items = [x for x in re.split(r"[、，,]", lm.group(1)) if re.search(r"\w", x)]
            listed = len(items) if items else None
        return claimed, listed

    def _attach_queue(self, sections: list[Section], queue: list[QueueItem]) -> None:
        for q in queue:
            head = re.search(r"「(.+?)」", q.question)
            if not head:
                continue
            for s in sections:
                if s.title == head.group(1) or head.group(1) in s.title:
                    q.section_id = s.section_id
                    s.queue.append(q.queue_id)
                    break
