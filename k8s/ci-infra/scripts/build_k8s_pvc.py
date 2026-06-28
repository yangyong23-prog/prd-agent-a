#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build_k8s_pvc.py — 按需生成 K8s PersistentVolume + PersistentVolumeClaim YAML
位置: k8s/ci-infra/scripts/build_k8s_pvc.py
由 build_deploy.yml 在 GitOps 渲染阶段调用

跳过条件：NFS_SERVER 环境变量为空时自动跳过，不生成任何文件
"""

import os
import sys


def main():
    image_name = os.environ.get("IMAGE_NAME", "").strip()
    if not image_name:
        print("❌ 错误: IMAGE_NAME 环境变量未设置")
        sys.exit(1)

    # ── 判断是否启用 PV/PVC（NFS_SERVER 为空则跳过）────────────────────────────
    nfs_server = os.environ.get("NFS_SERVER", "").strip()
    if not nfs_server:
        print("ℹ️  NFS_SERVER 未配置，跳过 PV/PVC 生成")
        return

    nfs_path = os.environ.get("NFS_PATH", "").strip()
    if not nfs_path:
        print("❌ 错误: NFS_SERVER 已配置，但 NFS_PATH 为空，请补充 NFS 挂载路径")
        sys.exit(1)

    # ── 读取其余变量 ──────────────────────────────────────────────────────────
    namespace         = os.environ.get("K8S_NAMESPACE",      "default").strip()
    storage_size      = os.environ.get("STORAGE_SIZE",       "30Gi").strip()
    storage_class     = os.environ.get("STORAGE_CLASS_NAME", "nfs-client").strip()
    pv_name           = os.environ.get("PV_NAME",            f"{image_name}-pv").strip()
    pvc_name          = os.environ.get("PVC_NAME",           f"{image_name}-pvc").strip()

    output_path = f"config-folder/{image_name}/{os.environ.get('DEPLOY_ENV', 'prod').strip()}/k8s_pvc.yaml"

    # ── 生成 YAML ──────────────────────────────────────────────────────────────
    content = f"""apiVersion: v1
kind: PersistentVolume
metadata:
  name: {pv_name}
spec:
  capacity:
    storage: {storage_size}
  accessModes:
    - ReadWriteMany
  storageClassName: {storage_class}
  nfs:
    path: {nfs_path}
    server: {nfs_server}
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: {pvc_name}
  namespace: {namespace}
spec:
  accessModes:
    - ReadWriteMany
  storageClassName: {storage_class}
  resources:
    requests:
      storage: {storage_size}
"""

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"✅ PV/PVC 已生成，输出至 {output_path}")
    print(f"   PV  : {pv_name}  ({storage_size}, {storage_class})")
    print(f"   PVC : {pvc_name}  (namespace: {namespace})")
    print(f"   NFS : {nfs_server}:{nfs_path}")


if __name__ == "__main__":
    main()
