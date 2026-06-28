---
name: meri-plus-radio
description: Use when the user asks to generate, configure, debug, or document Meri Plus Radio usage in a consumer Vue 3 application, including checked/uncheck state, size, label, click, change, and v-model update. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Radio

使用本 Skill 生成单选框用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-radio`
- 脚本组件名：`MRadio`

## Scope

适合生成单个 Radio 或 RadioGroup 子项。互斥选择优先配合 RadioGroup。

## Component Boundary

Radio 负责单个单选项展示；RadioGroup 或业务侧负责互斥状态管理。

## Public API

Props：

- `modelValue`: `checked | uncheck`，默认 `uncheck`。
- `size`: `number`，默认 `16`。
- `label`: `string | number`，用于组内比较。

Events：

- `click(state, event)`: 点击回调。
- `change(state, event)`: 状态变化回调。
- `update:modelValue(state)`: `v-model` 更新。

Slots：

- `default`: 单选项文本。

## Workflow

1. 组场景优先放入 `m-radio-group`。
2. 为每个 Radio 提供稳定 `label`。
3. 单独使用时用 `v-model` 绑定状态。

## Usage Patterns

- 单项展示：单独 Radio。
- 互斥选择：RadioGroup + 多个 Radio。

## Examples

```vue
<template>
  <m-radio-group v-model="value">
    <m-radio label="yes">是</m-radio>
    <m-radio label="no">否</m-radio>
  </m-radio-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('yes')
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 禁用状态
- 双向绑定
- 尺寸配置
- 状态控制

## 示例写法补充

生成 单选框 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- RadioGroup 子项必须有 `label`。
- 状态值只使用公开枚举。
- 不用 Radio 实现多选。
