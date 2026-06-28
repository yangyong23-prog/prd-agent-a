---
name: meri-plus-checkbox-group
description: Use when the user asks to generate, configure, debug, or document Meri Plus CheckBoxGroup usage in a consumer Vue 3 application, including selected array modelValue, change, and update:modelValue events. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus CheckBoxGroup

使用本 Skill 生成复选框组用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-check-box-group`
- 脚本组件名：`MCheckBoxGroup`

## Scope

适合生成多个复选项的数组绑定。不要用于单个复选框状态。

## Component Boundary

CheckBoxGroup 负责管理组内选中值数组；业务侧负责提供选项和处理变化。

## Public API

Props：

- `modelValue`: `(string | number)[]`，默认 `[]`，选中状态数组。

Events：

- `change(selected)`: 复选框组变化时触发。
- `update:modelValue(selected)`: `v-model` 更新时触发。

Slots：

- `default`: 组内复选框项。

## Workflow

1. 使用 `v-model` 绑定数组。
2. 每个子项提供稳定值。
3. 用 `change` 处理选中数组。

## Usage Patterns

- 多个选项：数组保存所有选中值。
- 数值或字符串值：保持子项值类型一致。

## Examples

```vue
<template>
  <m-check-box-group v-model="values" @change="handleChange">
    <m-checkbox model-value="checked">A</m-checkbox>
  </m-check-box-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const values = ref<(string | number)[]>([])
function handleChange(selected: (string | number)[]) {
  console.log(selected)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 基础用法

## 示例写法补充

生成 复选框组 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 绑定值必须是数组。
- 子项值保持稳定。
- 不在组外重复维护派生选中状态。
