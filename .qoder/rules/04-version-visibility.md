# 版本可见性

当前仓库暂未实现 `/version` 接口、页面版本展示、K8S Label/Annotation 或钉钉部署通知。以下规则仅在后续明确接入 sandbox 部署时生效。

后续若接入 sandbox 部署，建议补齐：

1. 部署通知：包含服务、需求、负责人、分支、Commit、Build ID、镜像 Tag、部署时间、访问地址。
2. 部署元数据：服务名、版本、负责人、Commit 使用 ASCII 安全字段。
3. `/version` 接口：返回 service、environment、version、commit、branch、buildId、image、deployedAt。
4. 页面版本展示：页面使用相对路径请求版本接口并展示关键版本信息。

镜像 Tag 建议规则：`sandbox-<service>-<owner>-<date>-<commit-short-sha>`。
