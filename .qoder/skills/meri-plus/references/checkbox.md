---
name: meri-plus-checkbox
description: Use when the user asks to generate, configure, debug, or document Meri Plus Checkbox usage in a consumer Vue 3 application, including checked/uncheck/notNull states, size, click, change, and v-model update. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Checkbox

使用本 Skill 生成复选框用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-checkbox`
- 脚本组件名：`MCheckbox`

## Scope

适合生成单个复选框、半选状态和尺寸配置。不要用于复选框组；组场景使用 CheckBoxGroup。

## Component Boundary

Checkbox 负责展示单个勾选状态；业务侧负责维护状态和处理变化。

## Public API

Props：

- `modelValue`: `checked | uncheck | notNull`，默认 `uncheck`。
- `size`: `number`，默认 `16`，组件大小。

Events：

- `click(state, event)`: 点击时触发。
- `change(state, event)`: 状态变化时触发。
- `update:modelValue(state)`: `v-model` 更新时触发。

Slots：

- `default`: 复选框文本或内容。

## Workflow

1. 使用 `v-model` 绑定状态。
2. 半选状态使用 `notNull`。
3. 用 `change` 处理状态变化。

## Usage Patterns

- 未选：`uncheck`。
- 已选：`checked`。
- 半选：`notNull`。

## Examples

```vue
<template>
  <m-checkbox v-model="state" @change="handleChange">启用</m-checkbox>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const state = ref('uncheck')
function handleChange(value: string) {
  console.log(value)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 禁用状态
- 双向绑定
- 尺寸配置
- 状态控制

## 示例写法补充

生成 复选框 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 状态值只使用公开枚举。
- 单个勾选用 Checkbox，多项使用 CheckBoxGroup。
- 不额外模拟组件内部状态。
