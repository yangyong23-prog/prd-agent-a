---
name: meri-plus-sidebar-custom
description: Use when the user asks to generate, configure, debug, or document Meri Plus SidebarCustom usage in a consumer Vue 3 application, including collapsible side panels, draggable width, show control, resident collapse button, and legacy custom sidebar usage. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus SidebarCustom

使用本 Skill 生成消费项目中的 Meri Plus 自定义侧边栏组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-sidebar-custom`
- 脚本组件名：`MsidebarCustom`

## Scope

适合用于：

- 生成可展开收起的自定义侧边栏示例。
- 配置拖拽宽度、显示隐藏和常驻收缩按钮。
- 维护已有消费项目中的 SidebarCustom 用法。

不适合用于：

- 新项目优先方案选择；如无历史兼容要求，应优先考虑 Sidebar。
- 修改组件库内部实现。
- 实现抽屉弹窗或复杂布局系统。

## Component Boundary

SidebarCustom 用于历史项目中的自定义侧边栏布局。它负责显示隐藏、宽度和收缩按钮；业务侧负责提供侧边栏内容和同步状态。

## Public API

Props：

- `changeSize`: `boolean`，默认 `true`，是否显示拖拽能力。
- `width`: `number | string`，默认 `680`，当前组件宽度，通常必传。
- `show`: `boolean`，默认 `true`，是否显示左侧组件。
- `resident`: `boolean`，默认 `true`，收缩按钮是否常驻。

Slots：

- `default`: 侧边栏内容。

## Workflow

1. 确认用户确实需要 SidebarCustom，而不是普通 Sidebar。
2. 使用 `show` 控制展开收起。
3. 使用 `width` 控制当前宽度。
4. 需要拖拽宽度时保持 `changeSize` 为 `true`。
5. 需要收缩按钮常驻时设置 `resident`。

## Usage Patterns

- 常驻收缩按钮：`resident` 为 `true`。
- hover 展示收缩按钮：根据业务状态控制 `resident`。
- 可拖拽宽度：`changeSize` 为 `true` 并提供宽度。

## Examples

```vue
<template>
  <m-sidebar-custom v-model:show="show" :width="width" :change-size="true" resident>
    <div class="panel-content">侧边栏内容</div>
  </m-sidebar-custom>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true)
const width = ref(360)
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 基础用法
- 常驻收缩按钮

## 示例写法补充

生成 自定义侧边栏 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 如果不是历史兼容场景，提醒优先评估 Sidebar。
- `width` 和 `show` 由消费项目维护。
- 不把 SidebarCustom 当作 Drawer 使用。
- 不引用内部样式或内部实现。
