---
name: meri-plus-virtual-list
description: Use when the user asks to generate, configure, debug, or document Meri Plus VirtualList usage in a consumer Vue 3 application, including items, item-size, dynamic item-resizable, key-field, default scroll, padding, scrollbar props, scroll/wheel/resize callbacks, and scrollTo. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus VirtualList

使用本 Skill 生成虚拟列表用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-virtual-list`
- 脚本组件名：`MVirtualList`

## Scope

适合生成大数据列表、固定高度项、动态高度项和手动滚动。

## Component Boundary

VirtualList 负责只渲染可视区域项目以提升性能；业务侧负责提供数据和单项渲染内容。

## Public API

Props：

- `default-scroll-key`: `string | number`。
- `default-scroll-index`: `number`。
- `ignore-item-resize`: `boolean`，默认 `false`。
- `items`: `Array<object>`，默认 `[]`。
- `item-resizable`: `boolean`，默认 `false`，是否动态尺寸。
- `item-size`: `number`，必填，最小项目高度。
- `items-style`: `string | CSSProperties`。
- `key-field`: `string`，默认 `key`。
- `padding-top` / `padding-bottom`: `string | number`。
- `scrollbar-props`: `ScrollbarProps`。
- `visible-items-tag`: `string`，默认 `div`。
- `visible-items-props`: `object`。
- `on-scroll(event)`、`on-wheel(event)`、`on-resize(event)`。

Methods：

- `scrollTo(arg)`: 滚动到某个位置。

## Workflow

1. 确认数据量较大，需要虚拟滚动。
2. 提供 `items` 和稳定 key 字段。
3. 固定高度设置 `item-size`。
4. 动态高度设置 `item-resizable`。
5. 需要滚动控制时使用 `scrollTo`。

## Usage Patterns

- 固定行高：只设置 `item-size`。
- 动态行高：设置 `item-resizable`。
- 默认定位：`default-scroll-key` 或 `default-scroll-index`。

## Examples

```vue
<template>
  <m-virtual-list :items="items" :item-size="40" key-field="id">
    <template #default="{ item }">
      <div>{{ item.name }}</div>
    </template>
  </m-virtual-list>
</template>

<script setup lang="ts">
const items = Array.from({ length: 1000 }, (_, index) => ({ id: index, name: `项目 ${index}` }))
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 基础用法
- resize

## 示例写法补充

生成 虚拟列表 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- `item-size` 必须合理。
- key 字段稳定。
- 小数据量不必使用虚拟列表。
