---
name: meri-plus-scrollbar
description: Use when the user asks to generate, configure, debug, or document Meri Plus Scrollbar usage in a consumer Vue 3 application, including height, max-height, native, always, styles/classes, scroll events, scrollToBoundary, and exposed scroll methods. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Scrollbar

使用本 Skill 生成滚动条组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-scrollbar`
- 脚本组件名：`MScrollbar`

## Scope

适合生成自定义滚动容器、最大高度、横向滚动和手动滚动控制。

## Component Boundary

Scrollbar 负责滚动容器和滚动条 UI；业务侧负责内容和滚动目标。

## Public API

Props：

- `height`: `string | number`，默认 `100%`。
- `max-height`: `string | number`。
- `native`: `boolean`，默认 `false`。
- `box-style` / `box-class`。
- `content-style` / `content-class`。
- `noresize`: `boolean`，默认 `false`。
- `always`: `boolean`，默认 `false`。
- `min-size`: `number`，默认 `20`。
- `barBackgroundColor`、`barYSize`、`barYHoverSize`、`barXSize`、`barXHoverSize`、`thumbColor`、`thumbHoverColor`。

Events：

- `scroll({ scrollLeft, scrollTop })`。
- `scrollToBoundary(boundary)`。

Slots：

- `default`: 滚动内容。

Expose：

- `handleScroll()`、`scrollTo()`、`setScrollTop()`、`setScrollLeft()`、`update()`、`boxRef`。

## Workflow

1. 设置容器高度或最大高度。
2. 放入需要滚动的内容。
3. 监听 `scroll` 获取位置。
4. 手动滚动使用暴露方法。

## Usage Patterns

- 固定高度滚动：设置 `height`。
- 最大高度滚动：设置 `max-height`。
- 总是显示滚动条：`always`。

## Examples

```vue
<template>
  <m-scrollbar height="240px" @scroll="handleScroll">
    <div v-for="item in list" :key="item">{{ item }}</div>
  </m-scrollbar>
</template>

<script setup lang="ts">
const list = Array.from({ length: 20 }, (_, index) => `内容 ${index + 1}`)
function handleScroll(position: { scrollTop: number; scrollLeft: number }) {
  console.log(position)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 总是显示滚动条
- 基础用法
- 手动滚动
- 最大高度、高度配置
- 原生滚动条
- 宽度配置

## 示例写法补充

生成 滚动条 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 滚动容器高度明确。
- 手动滚动使用暴露方法。
- 不直接操作内部 DOM。
