---
name: meri-plus-tabs
description: Use when the user asks to generate, configure, debug, or document Meri Plus Tabs usage in a consumer Vue 3 application, including v-model, data items, line/segment/border types, size, scroll position, item width, custom render slots, and change events. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Tabs

使用本 Skill 生成消费项目中的 Meri Plus 页签组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-tabs`
- 脚本组件名：`MTabs`

## Scope

适合用于：

- 生成 line、segment、border 类型页签。
- 配置 `v-model`、`data`、`size`、`scrollPosition`、`item-width`。
- 说明自定义后置内容和前置内容渲染。
- 处理页签 `change` 事件。

不适合用于：

- 实现路由系统。
- 修改组件库内部滑块计算逻辑。
- 用 Tabs 承载复杂业务流程状态机。

## Component Boundary

Tabs 用于在同一页面区域内切换分类或视图。它负责展示页签、选中状态和点击事件；业务侧负责根据当前选中 id 渲染对应内容。

## Public API

Props：

- `model-value` / `v-model`: `string`，选中的对象 id。
- `data`: `array`，页签选项集合。
- `type`: `line | segment | border`，默认 `line`。
- `backgroundColor`: `string`，背景颜色。
- `size`: `large | medium | small`，默认 `medium`。
- `scrollPosition`: `start | end`，默认 `start`，选中滑块滚动停留位置。
- `item-width`: `string`，单个页签宽度。
- `renderSlot`: `object`，页签项后置内容渲染配置。
- `renderPreSlot`: `object`，页签项前置内容渲染配置。

Events：

- `change(item, event)`: 点击页签时触发。

Methods：

- `setBarStyle()`: 重新计算页签条宽度。

## Workflow

1. 确认用户需要同一区域内的页签切换。
2. 使用 `v-model` 绑定当前选中 id。
3. 用 `data` 提供页签项，至少包含稳定 `id` 和展示名。
4. 根据视觉需求选择 `type` 和 `size`。
5. 用 `change` 更新业务侧内容，不在 Tabs 内写路由逻辑。

## Usage Patterns

- `type="line"`：常规页签。
- `type="segment"`：分段控制样式。
- `type="border"`：边框型页签。
- `renderPreSlot`：用于前置图标或状态。
- `renderSlot`：用于后置计数或额外标记。

## Examples

```vue
<template>
  <m-tabs v-model="active" :data="tabs" type="line" @change="handleChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref('overview')
const tabs = [
  { id: 'overview', name: '概览' },
  { id: 'detail', name: '详情' }
]

function handleChange(item: unknown) {
  console.log(item)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 边框样式
- 线型样式
- 前置图标
- 分段样式

## 示例写法补充

生成 页签 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- `data` 中的 id 稳定且与 `v-model` 对应。
- 不把路由跳转写成 Tabs 的默认行为。
- 自定义渲染只使用公开 props。
- 示例保持页签切换职责清晰。
