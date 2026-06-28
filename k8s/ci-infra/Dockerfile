# =========================================================================
# 应用 Dockerfile：单镜像托管前端静态资源和后端 Fastify API
# =========================================================================

FROM harbor.meos.center/public/sandbox-service-template-node-base:node24-pnpm9.15.4

# 声明构建参数
ARG PROGRAM_ID
ARG PORT_LOCAL
ARG WEB_ARTIFACT_DIR=yushu-app-web
ARG SERVER_ARTIFACT_DIR=yushu-app-server

# 设置元数据标签
LABEL tier="fullstack" \
      product="meos" \
      project="persagy" \
      name="${PROGRAM_ID}"

# 设置环境变量
ENV TZ=Asia/Shanghai \
    WORKER_HOME=/usr/share/nginx/html \
    CONFIG_PATH=/data/SpringCloud \
    PROGRAM_NAME=${PROGRAM_ID} \
    LANG=C.UTF-8 \
    PNPM_HOME=/pnpm \
    PATH=/pnpm:$PATH \
    NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3201

WORKDIR /app

# 前端静态资源，目录名需要与 Vue Router/Vite base 保持一致。
COPY ${WEB_ARTIFACT_DIR}/ /usr/share/nginx/html/${WEB_ARTIFACT_DIR}/

# 后端运行上下文
COPY ${SERVER_ARTIFACT_DIR}/ /app/

RUN pnpm install --frozen-lockfile --prod=false \
  && pnpm --filter @app/server build

COPY k8s/ci-infra/start-app.sh /usr/local/bin/start-app
RUN chmod +x /usr/local/bin/start-app

# 暴露前端 Nginx 和后端 Fastify 端口
EXPOSE 80 3201

CMD ["start-app"]
