---
name: meri-plus-list-skeleton
description: Use when the user asks to generate, configure, debug, or document Meri Plus ListSkeleton usage in a consumer Vue 3 application, including itemNum for list skeleton placeholders. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus ListSkeleton

使用本 Skill 生成列表骨架屏用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-list-skeleton`
- 脚本组件名：`MListSkeleton`

## Scope

适合生成列表加载占位。不要用于真实列表渲染。

## Component Boundary

ListSkeleton 负责展示加载占位柱子；业务侧负责根据加载状态决定是否显示。

## Public API

Props：

- `itemNum`: `number`，默认 `6`，骨架柱子数量。

## Workflow

1. 根据列表预期行数设置 `itemNum`。
2. 在加载中展示。
3. 数据加载完成后切换为真实内容。

## Usage Patterns

- 默认骨架：不传 `itemNum`。
- 自定义数量：设置 `itemNum`。

## Examples

```vue
<template>
  <m-list-skeleton v-if="loading" :item-num="6" />
</template>

<script setup lang="ts">
const loading = true
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 骨架屏数量

## 示例写法补充

生成 列表骨架屏 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 骨架屏只用于加载占位。
- 数量与真实列表密度接近。
