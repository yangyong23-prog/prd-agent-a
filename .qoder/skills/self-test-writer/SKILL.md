# self-test-writer

负责生成并执行自测。必须遵守 AGENTS.md 与 .qoder/rules。

职责与步骤：
1. 按 templates/self-test-template.md 产出自测报告。
2. 覆盖：页面可访问、关键功能、空数据不报错；新功能接口与老产品测试接口调用；错误处理。
3. 数据库：表结构、测试数据、SQL 执行结果。
4. 版本：仅在当前需求涉及部署或已实现版本能力时，验证页面版本、/version、镜像 Tag 一致。
5. 自测通过后才进入研发 Review 交接。
