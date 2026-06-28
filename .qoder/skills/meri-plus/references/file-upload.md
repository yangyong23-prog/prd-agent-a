---
name: meri-plus-file-upload
description: Use when the user asks to generate, configure, debug, or document Meri Plus FileUpload usage in a consumer Vue 3 application, including button upload, drag upload, file type accepts, file size, multiple upload, limit, custom upload, validation, preview, and upload/delete events. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus FileUpload

使用本 Skill 生成消费项目中的 Meri Plus 文件上传组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-file-upload`
- 脚本组件名：`MFileUpload`

## Scope

适合用于：

- 生成按钮上传或拖拽上传示例。
- 配置文件类型、数量、大小、禁用态和预览态。
- 使用自定义校验和自定义上传方法。
- 处理上传成功和删除事件。

不适合用于：

- 设计文件服务接口协议。
- 实现后端上传服务。
- 修改组件库内部上传状态逻辑。

## Component Boundary

FileUpload 用于选择、校验、展示和触发上传文件。组件负责文件列表 UI、状态和事件；业务侧负责提供上传地址、自定义上传逻辑和服务端返回处理。

## Public API

Props：

- `host`: `string`，文件服务根地址。
- `action`: `string`，上传接口。
- `fileSize`: `number`，默认 `5242880`，最大上传字节数。
- `multiple`: `boolean`，默认 `false`，是否多选。
- `accepts`: `string`，上传文件类型。
- `limit`: `number`，默认 `9`，可上传数量。
- `size`: `large | medium | small`，默认 `medium`，上传按钮尺寸。
- `type`: `drop | button`，默认 `button`，展示形式。
- `disabled`: `boolean`，默认 `false`，是否禁用。
- `uplaodStlye`: `object`，上传按钮样式。
- `fileListStyle`: `object`，文件列表样式。
- `errorText`: `string`，默认文件体积过大提示。
- `valite`: `function`，自定义校验方法。
- `dropTitle`: `string`，拖拽区域标题。
- `dropContent`: `string`，拖拽区域内容。
- `files`: `FileType[]`，默认 `[]`，已上传文件集合。
- `upload`: `function`，自定义上传方法。
- `preview`: `boolean`，默认 `false`，是否只预览不操作。

Events：

- `delete(files, item)`: 删除文件后触发。
- `upload(files, items)`: 上传后触发。

Expose：

- `files`: 当前组件中的所有文件。
- `input`: 文件输入对象。

## Workflow

1. 确认用户需要文件上传 UI。
2. 根据展示形态选择 `type="button"` 或 `type="drop"`。
3. 设置 `accepts`、`fileSize`、`limit` 和 `multiple`。
4. 如果上传逻辑由业务接管，使用 `upload` 自定义方法。
5. 如果只是展示文件，使用 `preview`。
6. 用 `delete` 和 `upload` 同步消费项目状态。

## Usage Patterns

- 单文件按钮上传：默认 `type="button"`。
- 多文件上传：设置 `multiple` 和 `limit`。
- 拖拽上传：设置 `type="drop"`。
- 自定义上传：传入 `upload` 方法并更新文件状态。
- 只读预览：设置 `preview`。

## Examples

```vue
<template>
  <m-file-upload
    action="/upload"
    accepts=".png,.jpg"
    multiple
    :limit="3"
    :file-size="5 * 1024 * 1024"
    @upload="handleUpload"
    @delete="handleDelete"
  />
</template>

<script setup lang="ts">
function handleUpload(files: unknown[], items: unknown[]) {
  console.log(files, items)
}

function handleDelete(files: unknown[], item: unknown) {
  console.log(files, item)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 文件类型限制
- 自定义内容
- 禁用状态
- 自定义触发
- drag1
- 文件大小限制
- 数量限制
- 预览模式
- 尺寸配置
- 自定义样式

## 示例写法补充

生成 文件上传 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 明确文件类型、大小和数量限制。
- 自定义上传逻辑由消费项目实现。
- 不编写后端服务代码。
- 不把预览态和上传态混用。
