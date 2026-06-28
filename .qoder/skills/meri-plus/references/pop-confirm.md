---
name: meri-plus-pop-confirm
description: Use when the user asks to generate, configure, debug, or document Meri Plus PopConfirm usage in a consumer Vue 3 application, including content, confirm/cancel text, status, before-confirm, before-cancel, main/footer slots, and confirm/cancel events. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus PopConfirm

使用本 Skill 生成气泡确认框用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-pop-confirm`
- 脚本组件名：`MPopConfirm`

## Scope

适合生成轻量二次确认。复杂表单确认使用 Modal。

## Component Boundary

PopConfirm 负责围绕触发元素展示确认/取消操作；业务侧负责执行确认或取消后的动作。

## Public API

Props：

- `content`: `string`。
- `confirm-button-text`: `string`，默认 `确定`。
- `cancel-button-text`: `string`，默认 `取消`。
- `confirm-button-id` / `cancel-button-id`: `string`。
- `confirm-button-class` / `cancel-button-class`: `string`。
- `status`: `default | danger | primary`，默认 `default`。
- `before-cancel(done)`: 取消前回调。
- `before-confirm(done)`: 确认前回调。
- `triggter`: `click | hover | manually`，默认 `click`。

Events：

- `cancel()`、`confirm()`。

Slots：

- `main`: 触发元素。
- `footer`: 按钮区域。

## Workflow

1. 用 `content` 写清确认内容。
2. 危险操作使用 `status="danger"`。
3. 异步确认使用 `before-confirm` 并调用 `done`。
4. 监听 `confirm` 执行业务动作。

## Usage Patterns

- 删除确认：danger。
- 自定义按钮区：footer 插槽。
- 异步关闭：before-confirm。

## Examples

```vue
<template>
  <m-pop-confirm content="确认删除吗？" status="danger" @confirm="remove">
    <template #main>
      <m-button type="danger">删除</m-button>
    </template>
  </m-pop-confirm>
</template>

<script setup lang="ts">
function remove() {
  console.log('delete')
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 基础用法
- 插槽用法

## 示例写法补充

生成 气泡确认 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 只用于轻量确认。
- 危险动作状态明确。
- 异步拦截必须调用 done。
