#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build_dagger.py — 使用 Dagger Python SDK 构建镜像并推送至 Harbor
位置: k8s/ci-infra/scripts/build_dagger.py
由 build_deploy.yml 通过 ./dagger run 调用
"""

import os
import sys
import anyio
import dagger
from datetime import datetime


def resolve_params():
    """从环境变量中读取并校验所有构建参数"""
    harbor_addr    = os.getenv("HARBOR_ADDR", "").strip()
    harbor_project = os.getenv("HARBOR_PROJECT", "").strip()
    image_name     = os.getenv("IMAGE_NAME", "").strip()
    web_artifact   = os.getenv("WEB_ARTIFACT_DIR", f"{image_name}-web").strip()
    server_artifact = os.getenv("SERVER_ARTIFACT_DIR", f"{image_name}-server").strip()
    harbor_user    = os.getenv("HARBOR_USER", "").strip()
    harbor_pwd     = os.getenv("HARBOR_PWD", "").strip()
    short_sha      = os.getenv("SHORT_SHA", "").strip()
    ref_name       = os.getenv("GITEA_REF_NAME") or os.getenv("GITHUB_REF_NAME") or "main"
    version_tag    = os.getenv("VERSION_TAG", "").strip()

    print("==================================================")
    print("      🕵️ Dagger 构建控制台：开始解析环境参数      ")
    print("==================================================")
    print(f"🍏 [入参锁定] 目标私有仓地址: [ {harbor_addr} ]")
    print(f"🍏 [入参锁定] 目标项目空间名: [ {harbor_project} ]")
    print(f"🍏 [入参锁定] 业务应用镜像名: [ {image_name} ]")
    print(f"🍏 [入参锁定] 前端产物目录: [ {web_artifact} ]")
    print(f"🍏 [入参锁定] 后端产物目录: [ {server_artifact} ]")
    print("==================================================\n")

    missing = [name for name, val in [
        ("HARBOR_ADDR", harbor_addr),
        ("HARBOR_PROJECT", harbor_project),
        ("IMAGE_NAME", image_name),
        ("WEB_ARTIFACT_DIR", web_artifact),
        ("SERVER_ARTIFACT_DIR", server_artifact),
        ("HARBOR_USER", harbor_user),
        ("HARBOR_PWD", harbor_pwd),
    ] if not val]

    if missing:
        print(f"❌ 错误: 以下必要环境变量未设置或为空: {missing}")
        sys.exit(1)

    # 防止 ref_name 含有未展开的 shell 变量占位符
    if "$" in ref_name:
        ref_name = "main"

    # 优先使用环境变量中已设置的 IMAGE_TAG（保持与 CI 一致）
    env_image_tag = os.getenv("IMAGE_TAG")
    if env_image_tag and ":" not in env_image_tag:
        tag = env_image_tag
        print(f"📦 使用环境变量 IMAGE_TAG: {tag}")
    else:
        # 镜像 Tag 格式: {版本号}-{Git短SHA}-{时间戳}
        # 示例: v1.0.0-abc12345-20260617150830
        timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
        sha8 = short_sha[:8] if short_sha else "no-sha"

        if version_tag:
            tag = f"{version_tag}-{sha8}-{timestamp}"
        else:
            tag = f"{ref_name}-{sha8}-{timestamp}"

        print(f"📦 代码版本号: {version_tag or ref_name}")
        print(f"🔍 Git短SHA: {sha8}")
        print(f"⏰ 构建时间: {timestamp}")
        print(f"🏷️ 镜像Tag: {tag}")

    return harbor_addr, harbor_project, image_name, web_artifact, server_artifact, harbor_user, harbor_pwd, tag


async def build_and_push(
    harbor_addr,
    harbor_project,
    image_name,
    web_artifact,
    server_artifact,
    harbor_user,
    harbor_pwd,
    tag,
):
    """使用 Dagger Python SDK 构建并推送单个全栈镜像到 Harbor"""
    full_tag = f"{harbor_addr}/{harbor_project}/{image_name}:{tag}"

    print(f"🚀 即将推送的镜像标签: {full_tag}")

    config = dagger.Config(log_output=sys.stderr)

    async with dagger.Connection(config) as client:
        src = client.host().directory(".")
        pwd_secret = client.set_secret("harbor-pwd", harbor_pwd)

        image = (
            src.docker_build(
                dockerfile="k8s/ci-infra/Dockerfile",
                build_args=[
                    dagger.BuildArg(name="WEB_ARTIFACT_DIR", value=web_artifact),
                    dagger.BuildArg(name="SERVER_ARTIFACT_DIR", value=server_artifact),
                ],
            )
            .with_registry_auth(harbor_addr, harbor_user, pwd_secret)
        )
        ref = await image.publish(full_tag)
        print(f"✅ 镜像标签推送成功: {ref}")

    print("\n==================================================")
    print(f"🎉 应用 [{image_name}] 全栈镜像已成功推送至 Harbor！")
    print("==================================================\n")


def main():
    harbor_addr, harbor_project, image_name, web_artifact, server_artifact, harbor_user, harbor_pwd, tag = resolve_params()
    anyio.run(
        build_and_push,
        harbor_addr,
        harbor_project,
        image_name,
        web_artifact,
        server_artifact,
        harbor_user,
        harbor_pwd,
        tag,
    )


if __name__ == "__main__":
    main()
