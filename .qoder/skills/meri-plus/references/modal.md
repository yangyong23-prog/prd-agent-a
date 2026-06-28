---
name: meri-plus-modal
description: Use when the user asks to generate, configure, debug, or document Meri Plus Modal usage in a consumer Vue 3 application, including info/error/default/full modal types, v-model:visible, title, size, autoClose, footer, slots, and close/cancel/submit events. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Modal

使用本 Skill 生成对话框组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-modal`
- 脚本组件名：`MModal`

## Scope

适合生成二次确认、默认对话框、全屏弹窗、自定义头部/内容/底部。复杂侧边详情使用 Drawer。

## Component Boundary

Modal 负责弹窗容器、遮罩、标题、内容和操作区；业务侧负责控制显隐和处理提交。

## Public API

Props：

- `type`: `info | error | deafult | full`，默认 `info`。
- `closeable`: `boolean`，默认 `false`。
- `autoClose`: `boolean`，默认 `true`。
- `v-model:visible`: `boolean`。
- `title`: `string`。
- `titleOverflow`: `boolean`，默认 `true`。
- `align-center`: `boolean`，默认 `true`。
- `width` / `height` / `maxWidth` / `maxHeight`: `number`。
- `content`: `string`。
- `escable`: `boolean`，默认 `true`。
- `topY`: `number | string`。
- `zIndex`: `number`。
- `footer`: `boolean`，默认 `true`。
- `modalClassName` / `contentClassName`: `string`。
- `needScrollbar`: `boolean`，默认 `true`。

Events：

- `close(event)`、`cancel(event)`、`submit(event)`。

Slots：

- `header`、`content`、`footer`。

## Workflow

1. 根据场景选择 `type`。
2. 用 `v-model:visible` 控制显隐。
3. 需要业务确认后关闭时设置 `autoClose=false`。
4. 复杂内容使用插槽。

## Usage Patterns

- 二次确认：`type="info"` 或 `type="error"`。
- 自定义内容：使用 `content` 插槽。
- 自定义底部：使用 `footer` 插槽。

## Examples

```vue
<template>
  <m-modal v-model:visible="visible" title="确认操作" @submit="submit" @cancel="visible = false">
    <template #content>确认继续执行吗？</template>
  </m-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
function submit() {
  visible.value = false
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 底部操作
- 类型配置
- type1
- type2
- type3
- type4
- type5
- type6

## 示例写法补充

生成 对话框 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 显隐由消费项目控制。
- 弹窗内容和操作区使用公开插槽。
- 不把 Modal 用作常驻布局。
