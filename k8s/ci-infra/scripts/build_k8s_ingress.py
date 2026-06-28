#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build_k8s_ingress.py — 生成完整的 K8s Ingress YAML（支持多路由路径）
位置: k8s/ci-infra/scripts/build_k8s_ingress.py
由 build_deploy.yml 在 GitOps 渲染阶段调用

INGRESS_PATHS 格式（逗号分隔，每项格式为 路径:服务名:端口）：
  单路径示例：/:sandbox-service-template-svc:80
  多路径示例：/:sandbox-service-template-svc:80,/api:backend-svc:8080
"""

import os
import sys

# CORS 允许头列表（基础设施级固定配置，如需修改请直接编辑此脚本）
CORS_ALLOW_HEADERS = (
    "DNT,projectId,access-control-allow-credentials,access-control-request-method,"
    "access-control-request-headers,user-agent,Keep-Alive,User-Agent,X-Requested-With,"
    "If-Modified-Since,Cache-Control,Content-Type,Range,Authorization,loginDeviceType,"
    "token,group-code,project-id,sec-ch-ua-mobile,sec-ch-ua,sec-ch-ua-platform,"
    "sec-fetch-dest,sec-fetch-mode,sec-fetch-site,accept-language,accept,accept-encoding,"
    "authority,method,path,scheme,origin,referer,Referer,websiteCode,websiteId,websiteid,"
    "websiteName,Application,Version-Id,Plateobjinstid,Versioncode,scene,reportcode,"
    "shareId,Reportcode,Accountid,Logindevicetype,Groupcode,sec-ch-ua,sec-ch-ua-mobile,"
    "userName,userId,imageServer,mergeParams,os-type,inst-version-id,"
    "phase-code,risk-event-id"
)


def parse_paths(paths_str):
    """解析 INGRESS_PATHS，格式：path:serviceName:port，多个用逗号分隔"""
    paths = []
    for item in paths_str.split(","):
        item = item.strip()
        if not item:
            continue
        parts = item.split(":")
        if len(parts) != 3:
            print(f"❌ 错误: INGRESS_PATHS 格式不正确，期望 path:serviceName:port，实际: {item}")
            sys.exit(1)
        paths.append({"path": parts[0].strip(), "service": parts[1].strip(), "port": parts[2].strip()})
    return paths


def build_path_block(path_item):
    """生成单条路由规则 YAML 块"""
    return (
        f"      - backend:\n"
        f"          service:\n"
        f"            name: {path_item['service']}\n"
        f"            port:\n"
        f"              number: {path_item['port']}\n"
        f"        path: {path_item['path']}\n"
        f"        pathType: ImplementationSpecific"
    )


def main():
    image_name = os.environ.get("IMAGE_NAME", "").strip()
    if not image_name:
        print("\u274c 错误: IMAGE_NAME 环境变量未设置")
        sys.exit(1)
    
    deploy_env  = os.environ.get("DEPLOY_ENV", "prod").strip()
    output_path = f"config-folder/{image_name}/{deploy_env}/k8s_ingress.yaml"

    # ── 读取环境变量，均以 INGRESS_ 为前缀 ──────────────────────────────────
    ingress_name          = os.environ.get("INGRESS_NAME",                   f"{image_name}-ingress")
    namespace             = os.environ.get("INGRESS_NAMESPACE",              "default")
    class_name            = os.environ.get("INGRESS_CLASS_NAME",             "nginx")
    host                  = os.environ.get("INGRESS_HOST",                   image_name)
    tls_secret            = os.environ.get("INGRESS_TLS_SECRET",             "").strip()
    proxy_body_size       = os.environ.get("INGRESS_PROXY_BODY_SIZE",        "1024M")
    client_body_buf_size  = os.environ.get("INGRESS_CLIENT_BODY_BUFFER_SIZE","1024M")
    proxy_connect_timeout = os.environ.get("INGRESS_PROXY_CONNECT_TIMEOUT",  "600")
    proxy_read_timeout    = os.environ.get("INGRESS_PROXY_READ_TIMEOUT",     "600")
    proxy_send_timeout    = os.environ.get("INGRESS_PROXY_SEND_TIMEOUT",     "50000")
    cors_allow_origin     = os.environ.get("INGRESS_CORS_ALLOW_ORIGIN",      "*")
    cors_allow_methods    = os.environ.get("INGRESS_CORS_ALLOW_METHODS",     "PUT,GET,POST,OPTIONS,DELETE,PATCH")

    web_port = os.environ.get("WEB_CONTAINER_PORT", "80").strip()
    server_port = os.environ.get("SERVER_CONTAINER_PORT", "3201").strip()
    web_service = os.environ.get("WEB_SERVICE_NAME", f"{image_name}-web").strip()
    server_service = os.environ.get("SERVER_SERVICE_NAME", f"{image_name}-server").strip()
    paths_str = os.environ.get(
        "INGRESS_PATHS",
        f"/{server_service}:{image_name}:{server_port},/{web_service}:{image_name}:{web_port}",
    )

    # ── 解析多路由 ────────────────────────────────────────────────────────────
    paths = parse_paths(paths_str)
    if not paths:
        print("❌ 错误: INGRESS_PATHS 未配置任何路由")
        sys.exit(1)

    paths_yaml = "\n".join(build_path_block(p) for p in paths)

    # ── TLS 区块（可选，INGRESS_TLS_SECRET 有值时启用）────────────────────────
    tls_block = ""
    if tls_secret:
        tls_block = (
            f"  tls:\n"
            f"    - hosts:\n"
            f"        - {host}\n"
            f"      secretName: {tls_secret}\n"
        )

    # ── 生成最终 YAML ─────────────────────────────────────────────────────────
    content = f"""apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: {ingress_name}
  namespace: {namespace}
  annotations:
    kubernetes.io/ingress.rule-mix: "true"
    nginx.ingress.kubernetes.io/cors-allow-credentials: "true"
    nginx.ingress.kubernetes.io/cors-allow-headers: {CORS_ALLOW_HEADERS}
    nginx.ingress.kubernetes.io/cors-allow-methods: {cors_allow_methods}
    nginx.ingress.kubernetes.io/cors-allow-origin: '{cors_allow_origin}'
    nginx.ingress.kubernetes.io/enable-cors: "true"
    nginx.ingress.kubernetes.io/proxy-body-size: {proxy_body_size}
    nginx.ingress.kubernetes.io/client-body-buffer-size: {client_body_buf_size}
    nginx.ingress.kubernetes.io/proxy-connect-timeout: "{proxy_connect_timeout}"
    nginx.ingress.kubernetes.io/proxy-read-timeout: "{proxy_read_timeout}"
    nginx.ingress.kubernetes.io/proxy-send-timeout: "{proxy_send_timeout}"
    nginx.ingress.kubernetes.io/gzip-static: "true"
    nginx.ingress.kubernetes.io/configuration-snippet: |
      gzip on;
      gzip_types text/plain text/css application/x-javascript application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/jpeg image/gif image/png;
      gzip_min_length 1024;
      gzip_proxied any;
      gzip_buffers 16 8k;
      gzip_comp_level 9;
      gzip_disable "MSIE 6\\.";
spec:
  ingressClassName: {class_name}
{tls_block}  rules:
  - host: {host}
    http:
      paths:
{paths_yaml}
"""

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"✅ Ingress [{ingress_name}] 已生成，共 {len(paths)} 条路由，输出至 {output_path}")
    for p in paths:
        print(f"   路由: {p['path']}  →  {p['service']}:{p['port']}")


if __name__ == "__main__":
    main()
