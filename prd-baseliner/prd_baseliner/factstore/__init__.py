"""已验证事实库（§3）：存放抽取出的结构化事实；推理层唯一可读来源。

事实/判断硬闸（§2.2）：推理层在 factstore 之上做判断，而非直接对原始源码自由生成。
"""

from .store import FactStore  # noqa: F401
