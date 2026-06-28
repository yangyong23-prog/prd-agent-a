"""topic-scanner：topic 列表 + 生产方/消费方映射 + '代码声明 vs 集群实际'对账。

栈适配说明：需求文档 §6 假设 Kafka + kafka-topics --list。实际样例产线（yushu-app）
**当前未发现消息中间件**（README 明确：仅 MySQL，禁用 Redis 等中间件）。
因此本工具在样例产线很可能产出空集——这是合法结论，应在产物标注'本产线无异步依赖'，
而非静默跳过（§4 不静默猜测）。若后续接入真实 RCC 服务（Spring/Kafka）再启用对账。
填入节：依赖。
"""

from __future__ import annotations

from ..models.fact import Fact
from .base import Extractor


class TopicScanner(Extractor):
    name = "topic-scanner"

    def extract(self, *, repo: str, commit: str, **kwargs) -> list[Fact]:
        # TODO(M2): 若产线含 Kafka，扫 KafkaTemplate/@KafkaListener 与运行期 topic 清单对账；
        #           yushu-app 无 MQ → 返回 []，由 route 在产物标注'无异步依赖事实'。
        raise NotImplementedError("M2：实现 topic 对账（样例产线可能为空集）")
