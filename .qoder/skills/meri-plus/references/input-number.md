---
name: meri-plus-input-number
description: Use when the user asks to maintain or document legacy Meri Plus InputNumber usage in a consumer Vue 3 application, including numeric v-model, min, max, step, precision, controls, disabled, and change/input events. Prefer InputNum for new usage. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus InputNumber

使用本 Skill 维护历史项目中的数字输入框用法。新项目优先使用 `m-input-num`。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-input-number`
- 脚本组件名：`MInputNumber`

## Scope

适合历史兼容场景。不要在新功能中优先推荐。

## Component Boundary

InputNumber 负责数字输入和步进控制；业务侧负责数值含义和提交。

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

Events：

- `change(value)`、`input(event)`、`blur(event)`、`focus(event)`。

## Workflow

1. 确认是否为历史代码兼容。
2. 新代码优先建议 `m-input-num`。
3. 维护旧代码时保持公开 props。

## Usage Patterns

- 历史数字输入：保留 InputNumber。
- 新数字输入：迁移到 InputNum。

## Examples

```vue
<template>
  <m-input-number v-model="value" :min="0" :precision="0" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(0)
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 禁用状态
- 错误提示
- 固定尺寸
- 基础用法
- 精度配置
- 文本对齐
- 宽度配置

## 示例写法补充

生成 旧版数字输入框 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 明确这是历史兼容组件。
- 不新增对内部实现的依赖。
- 新需求优先推荐 InputNum。
