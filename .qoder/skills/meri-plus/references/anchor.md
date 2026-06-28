---
name: meri-plus-anchor
description: Use when the user asks to generate, configure, debug, or document Meri Plus Anchor usage in a consumer Vue 3 application, including sections, target scrolling, rail, background, position, overflow tooltip, and scrollTo. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Anchor

使用本 Skill 生成消费项目中的锚点导航用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-anchor`
- 脚本组件名：`MAnchor`

## Scope

适合生成页面锚点、滚动定位、侧边轨道和溢出提示。不要用于路由导航或修改组件库实现。

## Component Boundary

Anchor 负责根据 `sections` 渲染锚点并监听滚动位置；业务侧负责提供 section id、标题和页面内容区域。

## Public API

Props：

- `sections`: `array`，默认 `[]`，锚点数据。
- `target`: `string`，默认 `document`，监听滚动对象。
- `duration`: `number`，默认 `50`，滚动触发间隔。
- `bound`: `number`，默认 `12`，触发偏移量。
- `show-rail`: `boolean`，默认 `true`，是否展示轨道。
- `show-background`: `boolean`，默认 `false`，是否展示背景。
- `offset`: `number`，固定位置偏移。
- `position`: `string`，默认 `top`，锚点位置。
- `zIndex`: `number`，默认 `100`，层级。
- `width`: `string`，默认 `100%`，宽度。
- `size`: `string`，默认 `default`，尺寸。
- `ellipsisTheme`: `string`，溢出 tooltip 主题。
- `show-overflow-tooltip`: `boolean`，默认 `true`，内容过长时显示 tooltip。

Methods：

- `scrollTo(id: string)`: 手动滚动到指定位置。

## Workflow

1. 确认用户需要页面内滚动定位。
2. 使用 `sections` 提供锚点数据。
3. 设置 `target` 指向滚动容器。
4. 需要主动跳转时调用 `scrollTo`。

## Usage Patterns

- 文档目录：`show-rail` 保持开启。
- 固定顶部：设置 `position` 和 `offset`。
- 长文本锚点：开启 `show-overflow-tooltip`。

## Examples

```vue
<template>
  <m-anchor :sections="sections" target="#content" />
</template>

<script setup lang="ts">
const sections = [
  { id: 'basic', title: '基础信息' },
  { id: 'api', title: 'API' }
]
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 背景展示
- 基础用法
- 固定位置
- 手动滚动定位
- 隐藏轨道
- 弹出提示
- 尺寸配置

## 示例写法补充

生成 锚点 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- `sections` 中的 id 与页面真实元素对应。
- 不把 Anchor 当作路由菜单使用。
- 滚动容器用公开 `target` 配置。
