# 日志诊断指南

当前仓库暂未提供 sandbox 日志采集脚本。上线后发生异常时，应先确认项目是否已经接入对应脚本和部署权限。

如果后续补齐脚本，可优先使用：

```bash
./scripts/collect-debug-bundle.sh <service-name>
```

然后让 Qoder 分析 `debug-bundle/` 目录。
