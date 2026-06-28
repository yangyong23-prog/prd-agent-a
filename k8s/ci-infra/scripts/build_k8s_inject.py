#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build_k8s_inject.py — 自动向 deploy.yaml 注入 ConfigMap 卷挂载
位置: k8s/ci-infra/scripts/build_k8s_inject.py
由 build_deploy.yml 在检测到 k8s/k8s_configMap.yml 时调用
"""

import os
import sys


def main():
    image_name  = os.environ.get("IMAGE_NAME", "").strip()
    cport       = os.environ.get("SERVER_CONTAINER_PORT", "3201").strip()
    cmap_name   = image_name + "-config"
    deploy_env  = os.environ.get("DEPLOY_ENV", "prod").strip()
    deploy_path = f"config-folder/{image_name}/{deploy_env}/k8s_deploy.yaml"

    if not image_name:
        print("❌ 错误: IMAGE_NAME 环境变量未设置")
        sys.exit(1)

    if not os.path.exists(deploy_path):
        print(f"❌ 错误: 找不到 {deploy_path}")
        sys.exit(1)

    content = open(deploy_path, encoding="utf-8").read()

    # 1. 在 containerPort 后注入 env + volumeMounts
    port_anchor = f"        - containerPort: {cport}"
    port_inject = (
        port_anchor
        + "\n        env:"
        + "\n        - name: SPRING_CONFIG_IMPORT"
        + "\n          value: \"optional:file:/app/config/application.yml\""
        + "\n        volumeMounts:"
        + "\n        - name: app-config"
        + "\n          mountPath: /app/config"
        + "\n          readOnly: true"
    )
    content = content.replace(port_anchor, port_inject, 1)

    # 2. 在 Service 的 --- 分隔符前注入 volumes
    vol_block = (
        f"      volumes:\n"
        f"      - name: app-config\n"
        f"        configMap:\n"
        f"          name: {cmap_name}\n"
        f"---"
    )
    content = content.replace("---", vol_block, 1)

    open(deploy_path, "w", encoding="utf-8").write(content)
    print(f"✅ volumeMounts + volumes + SPRING_CONFIG_IMPORT 已自动注入 Deployment [{image_name}]")


if __name__ == "__main__":
    main()
