"""确定性抽取核心（§6）：穷举归工具。LLM 不参与本层的'数与列'。"""

from .base import Extractor  # noqa: F401
from .openapi_extractor import OpenApiExtractor  # noqa: F401
from .schema_dumper import SchemaDumper  # noqa: F401
from .dep_extractor import DepExtractor  # noqa: F401
from .topic_scanner import TopicScanner  # noqa: F401
from .enum_scanner import EnumScanner  # noqa: F401

# route 反填时按 FactKind 路由；此处登记可用抽取器
ALL_EXTRACTORS = [
    OpenApiExtractor,
    SchemaDumper,
    DepExtractor,
    TopicScanner,
    EnumScanner,
]
