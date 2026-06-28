---
name: meri-plus-sidebar
description: Use when the user asks to generate, configure, debug, or document Meri Plus Sidebar usage in a consumer Vue 3 application, including collapsible side panels, draggable width, min/max width, show and width updates, resident button, classList, and change events. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Sidebar

使用本 Skill 生成消费项目中的 Meri Plus 侧边栏组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-sidebar`
- 脚本组件名：`Msidebar`

## Scope

适合用于：

- 生成可展开收起侧边栏示例。
- 配置可拖拽宽度、最小宽度、最大宽度和常驻按钮。
- 处理 `show`、`width` 双向更新和状态变化事件。

不适合用于：

- 侧弹窗场景；侧弹窗应优先使用 Drawer。
- 修改组件库内部实现。
- 生成完整布局系统。

## Component Boundary

Sidebar 用于页面内侧边区域的显示、隐藏和宽度调整。它负责面板容器交互；业务侧负责提供面板内容、保存宽度和控制显示状态。

## Public API

Props：

- `changeSize`: `boolean`，默认 `true`，是否可以改变宽度。
- `width`: `number`，默认 `680`，当前宽度，通常必传。
- `minwidth`: `number`，默认 `240`，最小宽度。
- `maxwidth`: `number`，默认 `680`，最大宽度。
- `show`: `boolean`，默认 `true`，是否显示内容组件。
- `resident`: `boolean`，默认 `true`，收缩按钮是否常驻。
- `classList`: `string[]`，默认 `[]`，添加到组件上的样式类。

Events：

- `change({ width, show })`: 状态改变时触发。
- `onUpdate:show(show)`: 展开收起状态更新。
- `onUpdate:width(width)`: 宽度更新。

Slots：

- `default`: 侧边栏内容。

## Workflow

1. 确认用户需要页面内侧边栏，而不是弹窗。
2. 使用 `v-model:show` 和 `v-model:width` 管理状态。
3. 设置 `minwidth` 和 `maxwidth` 限制拖拽范围。
4. 用 `change` 同步状态，不在组件示例中写持久化接口。
5. 需要样式扩展时使用 `classList` 或外层局部样式。

## Usage Patterns

- 固定宽度侧边栏：关闭或忽略 `changeSize`。
- 可拖拽侧边栏：设置 `changeSize`、`minwidth`、`maxwidth`。
- 常驻收缩按钮：设置 `resident`。

## Examples

```vue
<template>
  <m-sidebar
    v-model:show="show"
    v-model:width="width"
    :minwidth="240"
    :maxwidth="680"
    @change="handleChange"
  >
    <div class="sidebar-content">侧边栏内容</div>
  </m-sidebar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true)
const width = ref(360)

function handleChange(state: { width: number; show: boolean }) {
  console.log(state)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 拖拽改变宽度
- 基础用法
- 常驻收缩按钮

## 示例写法补充

生成 侧边栏 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 状态由消费项目维护。
- 宽度范围明确。
- 不用 Sidebar 替代 Drawer。
- 不依赖内部样式实现。
