#!/bin/bash
# Apifox 接口同步脚本
#
# 用法：
#   bash docs/product-apis/sync.sh <业务线英文名> <Apifox 项目 ID>
#
# 示例：
#   bash docs/product-apis/sync.sh data-service 5878457
#   bash docs/product-apis/sync.sh asset-service 1234567
#
# 前置条件：
#   1. 本地存在 ~/.apifox-token 文件，内容为 Apifox 个人访问令牌
#      生成路径：Apifox → 头像 → 账号设置 → API 访问令牌 → 新建令牌
#      令牌特征：以 afxp 或 APS 开头，长度 40+
#   2. 系统已安装 jq、curl

set -euo pipefail

SERVICE_NAME="${1:-}"
PROJECT_ID="${2:-}"

if [ -z "$SERVICE_NAME" ] || [ -z "$PROJECT_ID" ]; then
  echo "❌ 用法: bash $0 <业务线英文名> <Apifox 项目 ID>"
  echo "   示例: bash $0 data-service 5878457"
  exit 1
fi

# 校验依赖
command -v jq >/dev/null 2>&1 || { echo "❌ 缺少 jq，请先安装：brew install jq"; exit 1; }
command -v curl >/dev/null 2>&1 || { echo "❌ 缺少 curl"; exit 1; }

# 校验令牌
if [ ! -f ~/.apifox-token ]; then
  echo "❌ 未找到 ~/.apifox-token"
  echo "   请先创建：echo 'YOUR_TOKEN' > ~/.apifox-token && chmod 600 ~/.apifox-token"
  exit 1
fi
TOKEN=$(cat ~/.apifox-token | tr -d '[:space:]')
if [ -z "$TOKEN" ]; then
  echo "❌ ~/.apifox-token 为空"
  exit 1
fi

# 定位仓库根目录（脚本所在目录的上两级）
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
TARGET_DIR="$REPO_ROOT/docs/product-apis/$SERVICE_NAME"

mkdir -p "$TARGET_DIR"
echo "📁 目标目录: $TARGET_DIR"

# 拉取 OpenAPI Spec
echo "🌐 正在从 Apifox 拉取项目 $PROJECT_ID 的 OpenAPI Spec ..."
HTTP_CODE=$(curl -sSL -o "$TARGET_DIR/openapi.json" -w "%{http_code}" \
  -X POST \
  -H "X-Apifox-Api-Version: 2024-03-28" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"scope":{"type":"ALL"}}' \
  "https://api.apifox.com/v1/projects/${PROJECT_ID}/export-openapi")

if [ "$HTTP_CODE" != "200" ]; then
  echo "❌ 拉取失败 HTTP $HTTP_CODE"
  cat "$TARGET_DIR/openapi.json" | head -20
  exit 1
fi

# 校验返回的是合法 JSON
if ! jq empty "$TARGET_DIR/openapi.json" 2>/dev/null; then
  echo "❌ 返回内容不是合法 JSON，请检查令牌和项目 ID"
  head -5 "$TARGET_DIR/openapi.json"
  exit 1
fi

# 校验是 OpenAPI 文档
if [ "$(jq -r '.openapi // empty' "$TARGET_DIR/openapi.json")" = "" ]; then
  echo "❌ 返回内容不是 OpenAPI 文档"
  exit 1
fi

TOTAL=$(jq '[.paths | to_entries[] | .value | to_entries[] | select(.key | IN("get","post","put","delete","patch"))] | length' "$TARGET_DIR/openapi.json")
TAGS_COUNT=$(jq '[.paths | to_entries[] | .value | to_entries[] | select(.key | IN("get","post","put","delete","patch")) | .value.tags[0] // "未分类"] | unique | length' "$TARGET_DIR/openapi.json")
TITLE=$(jq -r '.info.title // "(无标题)"' "$TARGET_DIR/openapi.json")
SYNC_TIME=$(date '+%Y-%m-%d %H:%M:%S')

echo "✅ 拉取完成"
echo "   标题: $TITLE"
echo "   接口数: $TOTAL"
echo "   分类数: $TAGS_COUNT"

# 生成 api-list.md
echo "📝 生成 api-list.md ..."

{
cat <<HEAD
# ${SERVICE_NAME} 接口清单

> **数据来源**：Apifox 项目 \`${PROJECT_ID}\`
> **OpenAPI 标题**：${TITLE}
> **最后同步**：${SYNC_TIME}
> **接口总数**：${TOTAL} 个 / ${TAGS_COUNT} 个分类

## 文档说明

本文档由 \`docs/product-apis/sync.sh\` 自动同步生成，**不要手动修改接口列表本身**。
更新方式：

\`\`\`bash
bash docs/product-apis/sync.sh ${SERVICE_NAME} ${PROJECT_ID}
\`\`\`

## 调用约束

- ❗ **只能调用测试环境**，禁止调用生产环境
- ❗ 接口 BaseURL 通过环境变量注入，不在代码中硬编码
- ❗ 鉴权 Token 从环境变量读取，不得提交到 git
- ❗ 多租户场景下，调用前确认 \`groupCode\`/\`projectId\` 等租户字段已正确传递

## 原始 OpenAPI Spec

完整 schema、请求/响应类型、参数定义见 [\`openapi.json\`](./openapi.json)。

---

HEAD

  jq -r '
    [
      .paths
      | to_entries[]
      | .key as $path
      | .value
      | to_entries[]
      | select(.key | IN("get","post","put","delete","patch"))
      | { path: $path, method: (.key | ascii_upcase), tag: (.value.tags[0] // "未分类"), summary: (.value.summary // "(无说明)") }
    ]
    | group_by(.tag)
    | sort_by(-(length))
    | .[]
    | "## \(.[0].tag)（\(. | length) 个）\n\n| 方法 | 路径 | 说明 |\n|------|------|------|\n" +
      ([.[] | "| `\(.method)` | `\(.path)` | \(.summary) |"] | join("\n")) +
      "\n"
  ' "$TARGET_DIR/openapi.json"
} > "$TARGET_DIR/api-list.md"

echo "✅ 已生成: $TARGET_DIR/api-list.md"
echo ""
echo "📋 后续操作建议："
echo "   1. 检查变更: git diff $TARGET_DIR"
echo "   2. 如新增业务线，更新 docs/product-apis/README.md 中的索引表格"
echo "   3. 提交变更: git add docs/product-apis/$SERVICE_NAME && git commit"
