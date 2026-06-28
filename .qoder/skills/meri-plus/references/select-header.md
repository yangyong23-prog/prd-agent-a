---
name: meri-plus-select-header
description: Use when the user asks to maintain or document Meri Plus SelectHeader usage in a consumer Vue 3 application, where the behavior is similar to Select but the bound value format is an Item array. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus SelectHeader

使用本 Skill 维护选择器输入框用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-select-header`
- 脚本组件名：`MSelectHeader`

## Scope

适合维护 SelectHeader 的基础用法。若用户只是普通选择场景，优先使用 Select。

## Component Boundary

SelectHeader 行为可参考 Select，但双向绑定的数据格式是 `Item` 数组；业务侧负责提供和消费该数组。

## Public API

公开文档中仅说明：

- 双向绑定值格式为 `Item[]`。
- 选择能力参考 Select。

生成示例时只使用这个已知边界，不编造额外 props。

## Workflow

1. 确认是否必须使用 SelectHeader。
2. 若无特殊要求，建议使用 Select。
3. 使用 `v-model` 绑定 `Item[]`。
4. 其他能力按 Select 的公开 API 谨慎处理。

## Usage Patterns

- 已有项目兼容：保留 SelectHeader。
- 新项目普通选择：使用 Select。

## Examples

```vue
<template>
  <m-select-header v-model="items" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const items = ref([])
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 基础用法

## 示例写法补充

生成 选择器输入框 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 不编造 SelectHeader 未公开的 props。
- 明确绑定值是 `Item[]`。
- 新需求优先评估 Select。
