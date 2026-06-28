# review-handoff-writer

负责生成研发 Review 交接说明。必须遵守 AGENTS.md 与 .qoder/rules。

职责与步骤：
1. 按 templates/review-handoff-template.md 产出交接说明。
2. 必含：需求名称与等级、新功能说明、老产品测试接口调用关系、是否直连老产品库（必须为否）、Prisma/数据库变更、修改文件清单、自测结果、风险点、建议正式上线方式。镜像 Tag、sandbox 地址、/version 地址仅在当前需求涉及部署或已实现对应能力时填写。
3. 交接说明不得包含任何凭据。
