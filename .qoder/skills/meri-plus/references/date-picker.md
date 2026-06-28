---
name: meri-plus-date-picker
description: Use when the user asks to generate, configure, debug, or document Meri Plus DatePicker usage in a consumer Vue 3 application, including date/month/year/datetime/range types, v-model, scope, format, timePicker, disabled dates, confirm interception, type switch, and events. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus DatePicker

使用本 Skill 生成日期选择器用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-date-picker`
- 脚本组件名：`MDatePicker`

## Scope

适合生成日期、月份、年份、日期时间和范围选择。不要用于时间点单独选择；单独时间使用 Timepicker。

## Component Boundary

DatePicker 负责日期面板、范围选择、格式化显示和事件；业务侧负责保存值和校验业务范围。

## Public API

Props：

- `modelValue` / `v-model`: `string`。
- `width`: `number`，默认 `240`。
- `disabled`: `boolean`，默认 `false`。
- `caption`: `string`。
- `clearable`: `boolean`，默认 `true`。
- `type`: `year | month | date | datetime | yearrange | monthrange | daterange | datetimerange`，默认 `date`。
- `placeholder`: `string`，默认 `选择日期`。
- `scope`: `string`，限定可选时间段。
- `itemMapHandle`: `function`，自定义每项样式和禁用逻辑。
- `timePicker`: `object`，datetime 时的时间配置。
- `format`: `string`，输入框显示格式。
- `range-separator`: `string`，范围分隔符。
- `maxAllowedDays`: `number`，范围最大可选天数。
- `singlePanel`: `boolean`，范围类型是否单看板。
- `beforeConfirmClick`: `function`，范围确认前拦截。
- `forbidPanelHide`: `boolean`，禁止面板自动关闭。
- `confirmBtnText` / `cancelBtnText`: `string`。
- `showTypeSwitch`: `boolean`，是否显示日、周、月、年切换。

Events：

- `change(value)`、`clear(event)`、`blur(event)`、`focus(event)`、`typeSwitchChange(event)`。

Slots：

- `footerOperate`: 底部左下角插槽。

Expose：

- `handleSetRangeSelected({ startTime, endTime })`: 手动修改范围开始、结束时间。

## Workflow

1. 根据业务选择 `type`。
2. 使用 `v-model` 绑定字符串值。
3. 范围场景配置分隔符、最大天数和确认逻辑。
4. 日期时间选择使用 `timePicker`。
5. 复杂底部操作使用 `footerOperate`。

## Usage Patterns

- 日期：`type="date"`。
- 日期时间：`type="datetime"`。
- 日期范围：`type="daterange"`。
- 最大范围天数：`maxAllowedDays`。

## Examples

```vue
<template>
  <m-date-picker v-model="date" type="date" clearable @change="handleChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const date = ref('')
function handleChange(value: string) {
  console.log(value)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 确认前拦截
- 前置标签
- 可清空
- 自定义内容
- datePicker
- 日期范围
- 日期时间选择
- 日期时间范围
- 禁用状态
- 禁止面板关闭
- 月份范围
- 月份选择
- 范围限制
- 日期类型切换
- 简易样式
- 单面板范围
- 周选择
- 周范围
- 宽度配置
- 年份范围
- 隐藏年份选择
- 年份选择

## 示例写法补充

```vue
<template>
  <m-date-picker v-model="date" type="daterange" clearable />
</template>
```

## Quality Checks

- `type` 与值格式保持一致。
- 范围限制用公开 props，不在组件外硬改面板。
- 时间点单选优先使用 Timepicker。
