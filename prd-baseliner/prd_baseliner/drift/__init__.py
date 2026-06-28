"""漂移检测（§3）：PRD-vs-PRD（历史漂移）+ PRD-vs-facts（文档vs代码），产出分歧。

关键次序（§3 注）：drift 在 reason 之前——分歧的【发现】是确定性 diff，
分歧的【归类与定性】才交给推理层。本模块不调用 LLM。
"""

from .detector import DriftDetector  # noqa: F401
