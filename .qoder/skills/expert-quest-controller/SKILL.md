# expert-quest-controller

统筹 Quest 专家团的总控 Skill。必须遵守 AGENTS.md 与 .qoder/rules。

职责与步骤：
1. 读取 AGENTS.md、.qoder/rules、.qoder/skills、docs/product-apis。
2. 对需求做 L1/L2/L3/L4 分级（见 rule 08），出现 L4 立即停并提示上报。
3. 先产出结构化 Spec（范围、不做范围、接口调用关系、Prisma/数据库影响、修改文件、自测方案、风险点），**等用户确认后**再实现。
4. 协调各角色产出：调研员→接口/数据确认；全栈→实现；mysql-schema→表设计；QA/self-test→自测；review-handoff→交接。
5. 任何破坏性 SQL 或越界动作，先暂停并向用户说明。
