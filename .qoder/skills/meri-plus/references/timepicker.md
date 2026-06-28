---
name: meri-plus-timepicker
description: Use when the user asks to generate, configure, debug, or document Meri Plus Timepicker usage in a consumer Vue 3 application, including v-model, h/m/s formats, range, scopeTime, stepH/stepM/stepS, disabled, currentTime, width, and change event. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Timepicker

使用本 Skill 生成时间选择器用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-timepicker`
- 脚本组件名：`MTimepicker`

## Scope

适合生成时间点、时间段、步进、禁用时间和当前时间展示。

## Component Boundary

Timepicker 负责时间面板和时间值选择；业务侧负责保存时间字符串和业务校验。

## Public API

Props：

- `v-model`: `string`，时间值，按 `HH:mm:ss` 或对应 `format` 传入。
- `format`: `h | m | s | hm | ms | hms`，默认 `hms`。
- `range`: `boolean`，默认 `false`，是否时间段。
- `scopeTime`: `string`，可选时间段。
- `placeholder`: `string`。
- `stepH`: `number`，默认 `1`。
- `stepM`: `number`，默认 `1`。
- `stepS`: `number`，默认 `1`。
- `hideClear`: `boolean`，默认 `false`。
- `errorText`: `string`。
- `currentTime`: `boolean`，默认 `false`。
- `width`: `number`，默认 `208`。
- `disabled`: `boolean`，默认 `false`。
- `disabledTipsText`: `string`。
- `scopeDisabledTipsText`: `string`。

Events：

- `change(value)`: 时间变化时触发。

## Workflow

1. 根据精度选择 `format`。
2. 时间段使用 `range`。
3. 限制范围使用 `scopeTime`。
4. 步进使用 `stepH`、`stepM`、`stepS`。
5. 用 `change` 同步业务状态。

## Usage Patterns

- 时分秒：`format="hms"`。
- 时分：`format="hm"`。
- 时间段：`range`。

## Examples

```vue
<template>
  <m-timepicker v-model="time" format="hms" @change="handleChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const time = ref('09:00:00')
function handleChange(value: string) {
  console.log(value)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 基础用法
- 格式配置
- 范围选择
- 范围限制
- 步进配置

## 示例写法补充

生成 时间选择器 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 初始值格式与 `format` 一致。
- 范围字符串格式清晰。
- 日期选择不要使用 Timepicker。
