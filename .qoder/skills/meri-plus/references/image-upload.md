---
name: meri-plus-image-upload
description: Use when the user asks to generate, configure, debug, or document Meri Plus ImageUpload usage in a consumer Vue 3 application, including image upload, multiple, accepts, limit, custom upload, validation, preview, overcount, delete/upload/preview events, and exposed previewImage. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus ImageUpload

使用本 Skill 生成图片上传组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-image-upload`
- 脚本组件名：`MImageUpload`

## Scope

适合生成单图/多图上传、预览、数量限制、自定义上传和校验。

## Component Boundary

ImageUpload 负责图片选择、列表展示、预览和上传事件；业务侧负责上传服务和文件持久化。

## Public API

Props：

- `host`: `string`。
- `action`: `string`。
- `fileSize`: `number`，默认 `Number.MAX_SAFE_INTEGER`。
- `multiple`: `boolean`，默认 `false`。
- `accepts`: `string`。
- `limit`: `number`，默认 `9`。
- `disabled`: `boolean`，默认 `false`。
- `dropTitle`: `string`，默认 `上传文件`。
- `files`: `FileType[]`，默认 `[]`。
- `upload`: `(item: FileType) => void`。
- `valite`: `(item: FileType) => string`。
- `preview`: `boolean`，默认 `false`。
- `overcount`: `(message: string) => void`。

Events：

- `delete(files, item)`、`upload(files, items)`、`preview(item?)`。

Expose：

- `files`、`input`、`previewImage`。

## Workflow

1. 设置图片类型、数量和大小限制。
2. 自定义上传时传入 `upload`。
3. 只预览时设置 `preview`。
4. 超出数量使用 `overcount` 提示。

## Usage Patterns

- 单图上传：默认。
- 多图上传：`multiple` + `limit`。
- 手动预览：使用暴露的 `previewImage`。

## Examples

```vue
<template>
  <m-image-upload accepts=".png,.jpg" :limit="3" multiple @upload="handleUpload" />
</template>

<script setup lang="ts">
function handleUpload(files: unknown[], items: unknown[]) {
  console.log(files, items)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 手动预览
- 禁用状态
- 自定义触发
- 文件大小限制
- 数量限制
- 加载失败兜底
- 超出数量提示
- 预览模式

## 示例写法补充

生成 图片上传 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 上传服务由消费项目实现。
- 限制条件明确。
- 预览和上传状态不要混用。
