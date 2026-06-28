"""openapi-extractor：从服务产出 OpenAPI（端点/方法/入参/出参 schema/错误码）+ MQ DTO。

栈适配说明：需求文档 §6 假设 Spring Boot + springdoc-openapi-maven-plugin。
实际样例产线（yushu-app）是 Fastify + TS + Zod，且仓库已存在现成事实源：
  - docs/product-apis/<service>/openapi.json   ← 各业务线 OpenAPI（直接读）
  - apps/server 运行期 Swagger：http://127.0.0.1:3201/docs（可选 fetch）
  - packages/api-contract（Zod schema）         ← 前后端共享契约
填入节：接口。
"""

from __future__ import annotations

from ..models.fact import Fact
from .base import Extractor


class OpenApiExtractor(Extractor):
    name = "openapi-extractor"

    def extract(self, *, repo: str, commit: str, **kwargs) -> list[Fact]:
        # TODO(M1): 解析 docs/product-apis/<service>/openapi.json → 逐端点产出 Fact(kind=接口)，
        #           evidence 指向 openapi.json#/paths/... ；无 OpenAPI 时退回扫 Fastify 路由
        #           注册 + Zod schema，并在 flags 标 '事实来源=route-scan（降置信度）'。
        raise NotImplementedError("M1：实现 OpenAPI/Zod 抽取")
