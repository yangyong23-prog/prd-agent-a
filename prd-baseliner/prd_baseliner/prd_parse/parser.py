"""PRD 解析：历史 PRD markdown → 候选 section（claim），按 kind 初分类。

claim 是'文档说了什么'的载体，喂给 drift 与 reason；它本身不是结论。
MVP：按 markdown 标题切节 + 关键词初判 kind（确定性）；LLM 增强留到后续（§8）。
"""

from __future__ import annotations

import os
import re
from dataclasses import dataclass, field

from ..models.schema import Kind

# kind 关键词初分类（命中即定；顺序=优先级）。这是初判，drift/reason 可纠正。
_KIND_KEYWORDS: list[tuple[Kind, tuple[str, ...]]] = [
    (Kind.枚举, ("枚举", "来源", "取值", "状态值", "类型值", "字典")),
    (Kind.接口, ("接口", "交互消息", "字段说明", "api", "端点", "消息字段")),
    (Kind.数据, ("数据", "对象", "表结构", "数据模型", "属性", "字段定义")),
    (Kind.流程, ("流程", "生命周期", "阶段", "状态机", "时序")),
    (Kind.规则, ("规则", "判断", "场景", "策略", "约束")),
    (Kind.功能, ("功能", "列表", "详情", "展示", "操作")),
    (Kind.依赖, ("依赖", "上下游", "调用关系", "topic", "消息队列")),
    (Kind.背景, ("背景", "目标", "概述", "综述", "为什么")),
]

# 架构占位名：必须识别为待绑定项进 PM 队列（验收标准）。可扩充。
_PLACEHOLDER_RE = re.compile(r"A\s*程序|某程序|XX服务|待定服务|占位服务")
_HEADING_RE = re.compile(r"^(#{1,4})\s+(.*\S)\s*$")


@dataclass
class Claim:
    """从历史 PRD 切出的一段候选 section。"""

    claim_id: str
    source_prd: str
    source_version: str
    heading: str
    text: str
    kind_guess: Kind | None = None
    evidence: str = ""  # 文件:行
    level: int = 2  # 标题级别（H1..H4）
    is_leaf: bool = True  # 是否叶子节（其后无更深一级子标题）；容器章节为 False
    ontology_hits: list[str] = field(default_factory=list)
    placeholders: list[str] = field(default_factory=list)  # 识别出的架构占位名

    @property
    def is_empty(self) -> bool:
        """正文是否实质为空：去占位语/空白/markdown 分隔线（---、===、表分隔 |--|）后无内容。"""
        body = "\n".join(
            ln for ln in self.text.splitlines()
            if not re.fullmatch(r"[\s　\-=|:]*", ln)  # 丢掉纯分隔线/空行
        )
        body = re.sub(r"[（(].*?[)）]|[\s　]", "", body)
        return len(body) == 0 or bool(re.fullmatch(r"(待补充|待完善|本章节待补充|TBD|TODO)?", body))


def _match_kind(hay: str) -> Kind | None:
    hay = hay.lower()
    for kind, kws in _KIND_KEYWORDS:
        if any(kw.lower() in hay for kw in kws):
            return kind
    return None


def _classify(heading: str, text: str) -> Kind | None:
    # 标题优先（可靠，少误命中）；标题判不出再退回正文。
    return _match_kind(heading) or _match_kind(text)


class PrdParser:
    def parse(self, prd_path: str, *, source_prd: str, source_version: str, base_dir: str = ".") -> list[Claim]:
        abs_path = prd_path if os.path.isabs(prd_path) else os.path.join(base_dir, prd_path)
        if not os.path.exists(abs_path):
            return []
        lines = open(abs_path, encoding="utf-8").read().splitlines()
        claims: list[Claim] = []
        cur_heading = None
        cur_level = 0
        cur_line = 0
        cur_is_title = False
        buf: list[str] = []
        idx = 0

        def flush():
            nonlocal idx
            if cur_heading is None or cur_is_title:
                return  # 跳过文档标题（首个 H1），其余各级标题均作业务候选节
            text = "\n".join(buf).strip()
            heading_clean = re.sub(r"^[\d.、\s]+", "", cur_heading).strip()
            claim = Claim(
                claim_id=f"CLAIM-{source_prd}-{source_version}-{idx}",
                source_prd=source_prd,
                source_version=source_version,
                heading=heading_clean,
                text=text,
                kind_guess=_classify(heading_clean, text),
                evidence=f"{prd_path}:{cur_line}",
                level=cur_level,
                placeholders=sorted(set(_PLACEHOLDER_RE.findall(cur_heading + " " + text))),
            )
            claims.append(claim)
            idx += 1

        seen_heading = False
        for i, line in enumerate(lines, 1):
            m = _HEADING_RE.match(line)
            if m:
                flush()
                cur_level = len(m.group(1))
                cur_heading = m.group(2)
                cur_line = i
                cur_is_title = (not seen_heading) and cur_level == 1  # 仅首个 H1 视为文档标题
                seen_heading = True
                buf = []
            else:
                if cur_heading is not None:
                    buf.append(line)
        flush()
        # 叶子判定：若紧邻的下一节标题更深一级，则当前节是容器章节（非叶子）
        for a, b in zip(claims, claims[1:]):
            a.is_leaf = not (b.level > a.level)
        return [c for c in claims if c.heading]
