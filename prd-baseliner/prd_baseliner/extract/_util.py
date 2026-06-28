"""抽取层共用工具：定位代码根、解析基线 commit、读文件。

证据绑定（§2.5）：所有事实的 generated_from_commit 与 evidence 都依赖这里解析出的真实 commit。
"""

from __future__ import annotations

import os
import subprocess


def resolve_commit(root: str, declared: str | None) -> str:
    """declared 为 WORKDIR/空时，用 git 解析 root 的真实短 commit；解析不到则回落 declared/WORKDIR。"""
    if declared and declared not in ("WORKDIR", "HEAD", ""):
        return declared
    try:
        out = subprocess.run(
            ["git", "rev-parse", "--short", "HEAD"],
            cwd=root,
            capture_output=True,
            text=True,
            timeout=10,
        )
        if out.returncode == 0 and out.stdout.strip():
            return out.stdout.strip()
    except Exception:
        pass
    return declared or "WORKDIR"


def rel(root: str, path: str) -> str:
    """证据里用相对代码根的路径，稳定、可点。"""
    try:
        return os.path.relpath(path, root)
    except ValueError:
        return path
