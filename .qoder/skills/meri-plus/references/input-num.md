---
name: meri-plus-input-num
description: Use when the user asks to generate, configure, debug, or document Meri Plus InputNum usage in a consumer Vue 3 application, including numeric v-model, min, max, step, precision, controls, size, errorText, autoFill, suffixWidth, and input/change/focus events. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus InputNum

使用本 Skill 生成数字输入框用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-input-num`
- 脚本组件名：`MInputNum`

## Scope

适合生成数字范围、步进、精度、禁用、错误提示和不同控制按钮样式。新用法优先使用 InputNum。

## Component Boundary

InputNum 负责数字输入和步进 UI；业务侧负责数值含义、保存和提交。

## Public API

Props：

- `model-value` / `v-model`: `number | undefined`。
- `defaultValue`: `number`。
- `min`: `number`，默认 `-Infinity`。
- `max`: `number`，默认 `Infinity`。
- `step`: `number`，默认 `1`。
- `precision`: `number`，默认 `0`。
- `disabled`: `boolean`，默认 `false`。
- `controls`: `operator | rightButton | operatorIcon`，默认 `operator`。
- `placeholder`: `string`。
- `textAlign`: `left | center | right`。
- `errorText`: `string`。
- `size`: `large | medium`，默认 `medium`。
- `autofocus`: `boolean`，默认 `false`。
- `autoFill`: `boolean`，默认 `true`。
- `suffixWidth`: `number`，默认 `0`。

Events：

- `change(value)`、`input(event)`、`blur(event)`、`focus(event)`。

## Workflow

1. 使用 `v-model` 绑定数值。
2. 设置 `min`、`max`、`step` 和 `precision`。
3. 根据视觉选择 `controls` 和 `size`。
4. 错误状态使用 `errorText`。

## Usage Patterns

- 范围数字：设置 `min` 和 `max`。
- 小数：设置 `precision`。
- 自定义步进：设置 `step`。

## Examples

```vue
<template>
  <m-input-num v-model="count" :min="0" :max="100" :step="1" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(1)
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 基础用法
- 禁用状态
- 错误提示
- 固定尺寸
- 精度配置
- 文本对齐
- 宽度配置

## 示例写法补充

生成 数字输入框 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 数值边界明确。
- 精度和步进一致。
- 新项目不优先使用已废弃的 InputNumber。
