# 版本可见性规则

当前仓库暂未实现 `/version` 接口、页面版本展示、K8S Label/Annotation 或钉钉部署通知。本文是后续接入 sandbox 部署时的目标规则，不代表当前仓库已有能力。

镜像 Tag（仅 ASCII 字段）：`sandbox-<service>-<owner>-<date>-<commit-short-sha>`
中文需求名不进 Tag/Label，只出现在 Annotation 和钉钉通知里。

若后续接入 sandbox 部署，服务应提供 `/version` 接口，并在页面展示版本信息（页面用相对路径请求 version）。
