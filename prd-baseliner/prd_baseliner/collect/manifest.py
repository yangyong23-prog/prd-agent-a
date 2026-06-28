"""归集：读 prd_manifest（§4），定位文件、去重、标作数/已被取代。归集集合由人工给定，不自动发现。"""

from __future__ import annotations

import os
from dataclasses import dataclass


@dataclass
class PrdDoc:
    path: str
    version: str
    status: str  # 作数 | 已被取代 | 废稿
    exists: bool = False


class Collector:
    def collect(self, manifest: list[dict], base_dir: str = ".") -> list[PrdDoc]:
        docs: list[PrdDoc] = []
        for item in manifest:
            path = item["path"]
            abs_path = path if os.path.isabs(path) else os.path.join(base_dir, path)
            docs.append(
                PrdDoc(
                    path=path,
                    version=item.get("version", "-"),
                    status=item.get("status", "作数"),
                    exists=os.path.exists(abs_path),
                )
            )
        # TODO(M2): 同名去重 / 版本排序 / 校验'已被取代'内容是否已并入作数版
        return docs
