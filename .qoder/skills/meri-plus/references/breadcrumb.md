---
name: meri-plus-breadcrumb
description: Use when the user asks to generate, configure, debug, or document Meri Plus Breadcrumb usage in a consumer Vue 3 application, including separator, separator-icon, data, nameKey, itemNum, widthAuto, overflow popover, and change event. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Breadcrumb

使用本 Skill 生成面包屑导航用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-breadcrumb`
- 脚本组件名：`MBreadcrumb`

## Scope

适合生成层级路径展示和点击回调。不要用于完整路由系统实现。

## Component Boundary

Breadcrumb 负责展示层级路径、省略和点击事件；业务侧负责提供路径数据和执行跳转。

## Public API

Props：

- `separator`: `string`，默认 `>`，分隔符。
- `separator-icon`: `string`，图标分隔符。
- `nameKey`: `string`，默认 `name`，名称字段。
- `itemNum`: `number`，默认 `10`，超过后中间省略。
- `data`: `array`，默认 `[]`，面包屑数据。
- `nameWidth`: `number`，单项宽度。
- `popWidth`: `number`，弹出框宽度。
- `widthAuto`: `boolean`，默认 `false`，是否自适应宽度。

Events：

- `change(item, event)`: 点击面包屑项时触发。

## Workflow

1. 使用 `data` 提供层级路径。
2. 如果名称字段不是 `name`，设置 `nameKey`。
3. 路径过长时使用 `itemNum`、`nameWidth` 或 `popWidth`。
4. 在 `change` 中执行业务跳转。

## Usage Patterns

- 默认分隔：使用 `separator`。
- 图标分隔：使用 `separator-icon`。
- 长路径：配置 `itemNum`。

## Examples

```vue
<template>
  <m-breadcrumb :data="items" @change="handleChange" />
</template>

<script setup lang="ts">
const items = [
  { name: '首页', url: '/' },
  { name: '设备', url: '/devices' }
]

function handleChange(item: unknown) {
  console.log(item)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- demo
- demoWidth
- itemNum
- 分隔符配置

## 示例写法补充

生成 面包屑 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- `data` 只描述路径，不内置路由逻辑。
- 点击行为交给消费项目处理。
- 长文本使用公开宽度或省略配置。
