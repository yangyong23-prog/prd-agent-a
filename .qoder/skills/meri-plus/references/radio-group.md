---
name: meri-plus-radio-group
description: Use when the user asks to generate, configure, debug, or document Meri Plus RadioGroup usage in a consumer Vue 3 application, including v-model, cancelable selection, change events, and grouped radio behavior. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus RadioGroup

使用本 Skill 生成消费项目中的 Meri Plus 单选框组用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-radio-group`
- 脚本组件名：`MRadioGroup`

## Scope

适合用于：

- 生成单选框组的 `v-model` 示例。
- 配置是否允许取消选中。
- 说明 `change` 和 `update:modelValue` 事件。

不适合用于：

- 单独说明 Radio 组件的全部能力。
- 修改组件库内部实现。
- 添加与单选状态无关的业务流程。

## Component Boundary

RadioGroup 用于管理一组 Radio 的单选状态。它负责维护组内选中值和派发变化事件；业务侧负责提供候选项和处理选中结果。

## Public API

Props：

- `modelValue`: `string | number`，当前选中值。
- `cancel`: `boolean`，默认 `false`，是否允许取消选中。

Events：

- `change(selected)`: 单选框改变时触发。
- `update:modelValue(selected)`: `v-model` 更新时触发。

Slots：

- `default`: 放置组内的 Radio 项。

## Workflow

1. 确认用户需要单选互斥能力。
2. 使用 `v-model` 绑定选中值。
3. 每个 Radio 项必须有可比较的 `label`。
4. 需要再次点击取消时设置 `cancel`。
5. 用 `change` 处理消费项目的后续逻辑。

## Usage Patterns

- 普通单选：只使用 `v-model`。
- 可取消单选：增加 `cancel`。
- 值类型：保持 Radio 的 `label` 与 `modelValue` 类型一致。

## Examples

```vue
<template>
  <m-radio-group v-model="value" cancel @change="handleChange">
    <m-radio label="day">按天</m-radio>
    <m-radio label="month">按月</m-radio>
  </m-radio-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref<string | number>('day')

function handleChange(selected: string | number) {
  console.log(selected)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 基础用法
- 可取消选中

## 示例写法补充

生成 单选框组 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 使用 `v-model` 表达受控选中值。
- Radio 项提供稳定 `label`。
- 不用额外状态重复保存同一选中值。
- 不引入无关业务逻辑。
