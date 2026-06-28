本任务将在 sandbox 环境中执行。
请使用 Quest 专家团模式，并严格启用 Spec-driven 工作流。

专家团成员固定为：调研员、全栈工程师、QA、代码审查员、UI操作者、故障诊断工程师。

请先读取当前项目：
1. AGENTS.md
2. .qoder/rules
3. .qoder/skills
4. docs/product-apis

执行要求：
1. 先进行 L1/L2/L3/L4 需求分级。
2. 先生成结构化 Spec，不要立即修改代码。
3. 本需求按新功能开发处理，不直接改老产品。
4. 如需调用外部业务线接口（含老产品能力），只能调用 docs/product-apis/<业务线>/api-list.md 中登记的测试环境接口，代码实现须参阅同目录 openapi.json 获取完整 schema。
5. 以当前项目实现为准：前端为 Vue3 + meri-plus，后端为 Fastify + Prisma，当前使用 MySQL（Redis 在基础设施中保留但业务代码禁止使用）。
6. 数据库结构优先通过 Prisma 管理；不得提交数据库密码。
7. 修改完成后输出自测报告、风险点和研发 Review 交接说明。镜像 Tag 仅在当前需求涉及部署时填写。

客户需求如下：
【粘贴客户需求】
