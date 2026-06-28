# Sandbox 日志诊断规则

上线后出现构建失败、部署失败、页面异常、接口异常、Pod 重启、数据库连接失败等问题时：

1. 优先查看钉钉通知中的失败阶段和日志链接。
2. 当前仓库暂未提供 `scripts/get-sandbox-logs.sh` 或 `scripts/collect-debug-bundle.sh`；若后续需要 sandbox 日志诊断，应先补齐标准脚本。
3. 有标准脚本后，Qoder 只能通过标准脚本读取 sandbox 日志，不得执行高风险 kubectl 命令。
4. 日志诊断范围仅限 sandbox Namespace。
5. 日志中如出现 Token、密码、客户敏感数据，必须脱敏后再提交。
6. 故障诊断结果必须说明失败阶段、根因判断、涉及版本、修复建议、是否需要研发介入。
