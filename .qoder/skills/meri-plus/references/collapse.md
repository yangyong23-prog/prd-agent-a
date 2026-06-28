---
name: meri-plus-collapse
description: Use when the user asks to generate, configure, debug, or document Meri Plus Collapse and CollapseItem usage in a consumer Vue 3 application, including v-model active panels, accordion, before-click, header/icon position, disabled items, slots, and change/click events. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Collapse

使用本 Skill 生成折叠面板用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-collapse`、`m-collapse-item`
- 脚本组件名：`MCollapse`

## Scope

适合生成基础折叠、手风琴、自定义标题、自定义图标和点击前拦截。

## Component Boundary

Collapse 管理活动面板；CollapseItem 承载单个面板标题和内容；业务侧负责面板内容和点击前判断。

## Public API

Collapse Props：

- `model-value` / `v-model`: `array`，当前活动面板。
- `accordion`: `boolean`，默认 `false`。
- `before-click`: `(id, isActive, done) => void`。
- `headerPosition`: `string`，默认 `top`。
- `iconPosition`: `string`，默认 `right`。
- `hoverStyle`: `boolean`，默认 `true`。
- `onlyIconClick`: `boolean`，默认 `false`。

Collapse Events：

- `change`、`click`。

CollapseItem Props：

- `id`: `string | number`，唯一标识。
- `title`: `string`。
- `icon`: `Component`。
- `disabled`: `boolean`，默认 `false`。
- `headerPosition`、`iconPosition`、`hoverStyle`、`onlyIconClick`。

Slots：

- Collapse 默认插槽放置 CollapseItem。
- CollapseItem 的 `default`、`title`、`icon`。

## Workflow

1. 使用 `v-model` 绑定活动面板数组。
2. 每个 CollapseItem 提供稳定 `id`。
3. 单开模式设置 `accordion`。
4. 点击前拦截使用 `before-click` 并调用 `done`。

## Usage Patterns

- 多开折叠：默认模式。
- 手风琴：`accordion`。
- 禁用面板：item 设置 `disabled`。
- 自定义标题：`title` 插槽。

## Examples

```vue
<template>
  <m-collapse v-model="active">
    <m-collapse-item id="base" title="基础信息">内容</m-collapse-item>
  </m-collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const active = ref(['base'])
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 手风琴模式
- 点击回调
- 基础用法
- 禁用状态
- 图标用法
- 位置配置
- 自定义标题

## 示例写法补充

生成 折叠面板 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 每个 item 的 `id` 唯一。
- 拦截逻辑必须调用 `done` 才继续。
- 不用 Collapse 承载路由切换。
