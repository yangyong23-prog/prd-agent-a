"""归集（§3）：读入人工提供的 PRD manifest，定位、去重、标'作数/已被取代'。不用 LLM。"""

from .manifest import Collector, PrdDoc  # noqa: F401
