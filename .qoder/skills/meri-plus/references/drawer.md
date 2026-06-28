---
name: meri-plus-drawer
description: Use when the user asks to generate, configure, debug, or document Meri Plus Drawer usage in a consumer Vue 3 application, including v-model visibility, title, width, shadow, shadowClick, fixed footer, custom close icon, title/content/handle slots, and close events. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Drawer

使用本 Skill 生成消费项目中的 Meri Plus 侧弹窗组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-drawer`
- 脚本组件名：`MDrawer`

## Scope

适合用于：

- 生成侧弹窗详情、表单或操作面板示例。
- 配置显示状态、标题、宽度、高度、蒙层和点击蒙层关闭。
- 使用标题、内容、关闭图标和底部操作插槽。
- 处理关闭事件。

不适合用于：

- 页面内常驻侧边栏；该场景优先使用 Sidebar。
- 修改组件库内部定位、滚动或层级逻辑。
- 添加业务接口或路由跳转。

## Component Boundary

Drawer 用于从页面侧边弹出临时内容区域。它负责弹窗容器、标题区、内容区、操作区、蒙层和关闭交互；业务侧负责控制显示状态、填充内容和处理提交或关闭逻辑。

## Public API

Props：

- `modelValue`: `boolean`，默认 `false`，是否显示，支持 `v-model`。
- `zInde`: `number`，默认 `1000`，自定义层级。
- `title`: `string`，默认空字符串，标题，插槽优先级更高。
- `show`: `boolean`，默认 `false`，是否显示。
- `width`: `string`，默认 `240px`，可传百分比或具体宽度。
- `shadow`: `boolean`，默认 `false`，是否显示蒙层。
- `shadowClick`: `boolean`，默认 `false`，点击蒙层或外部区域是否关闭。
- `footFixed`: `boolean`，默认 `true`，底部是否固定。
- `height`: `string`，默认 `100%`，弹窗高度。
- `drawerClass`: `string`，默认空字符串，侧弹窗 class。
- `customCloseClassName`: `string`，默认空字符串，带该类名的外部元素点击时不关闭。
- `titleOverFlow`: `boolean`，默认 `true`，标题文字是否超出隐藏。

Events：

- `close(event)`: 关闭组件时触发。

Slots：

- `title`: 头部内容。
- `content`: 内容区域。
- `icon`: 关闭按钮图标。
- `handle`: 底部内容。

## Workflow

1. 确认用户需要临时侧弹窗，而不是常驻侧边栏。
2. 使用 `v-model` 控制显隐。
3. 根据内容设置 `title`、`width`、`height`。
4. 需要遮罩时设置 `shadow`。
5. 是否允许点击外部关闭由 `shadowClick` 决定。
6. 复杂标题、内容、底部操作使用公开插槽。
7. 在 `close` 中同步消费项目状态。

## Usage Patterns

- 详情侧弹窗：标题 + 内容插槽。
- 表单侧弹窗：内容插槽 + `handle` 底部操作。
- 自定义关闭图标：使用 `icon` 插槽。
- 带蒙层：设置 `shadow`。

## Examples

```vue
<template>
  <m-button type="primary" @click="visible = true">打开详情</m-button>
  <m-drawer v-model="visible" title="设备详情" width="480px" shadow @close="visible = false">
    <template #content>
      <div>这里是详情内容</div>
    </template>
    <template #handle>
      <m-button @click="visible = false">关闭</m-button>
    </template>
  </m-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- constitute
- drawer
- drawer1
- 图标用法
- scroll
- side
- side1
- side2

## 示例写法补充

生成 侧弹窗 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 使用 `v-model` 或显式状态控制显隐。
- Drawer 只承载临时弹出内容。
- 自定义区域使用公开插槽。
- 不在 Drawer 示例中加入无关接口请求。
