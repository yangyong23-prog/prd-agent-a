---
name: meri-plus-select
description: Use when the user asks to generate, configure, debug, or document Meri Plus Select usage in a consumer Vue 3 application, including v-model, options, single/multiple, searchable, panelSearchable, confirm, tags mode, virtual list, slots, OptionGroup, Option, and events. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Select

使用本 Skill 生成选择器用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-select`
- 脚本组件名：`MSelect`

## Scope

适合生成单选、多选、搜索、分组、确认、虚拟列表和自定义下拉内容。不要用于树形选择；树形选择使用 TreeSelect。

## Component Boundary

Select 负责下拉选择、搜索、回显和事件；业务侧负责提供 options、维护选中值和处理结果。

## Public API

Props：

- `modelValue` / `v-model`: `string | string[]`，单选或多选绑定值。
- `options`: `Item[]`，默认 `[]`。
- `valueKey`: `string`，默认 `id`。
- `labelKey`: `string`，默认 `name`。
- `disabled`: `boolean`，默认 `false`。
- `prefix`: `string`。
- `clearable`: `boolean`，默认 `false`。
- `searchable`: `boolean`，默认 `false`。
- `panelSearchable`: `boolean`，默认 `false`。
- `autoClearSearch`: `boolean`，默认 `true`。
- `multiple`: `boolean`，默认 `false`。
- `multipleLimit`: `number`，默认 `0`。
- `hasConfirm`: `boolean`，默认 `false`。
- `mode`: `multiple | tags`，默认 `multiple`。
- `placeholder`: `string`。
- `size`: `small | medium | large | auto | number`，默认 `medium`。
- `menuSize`: `min | small | medium | large | max | auto | number`。
- `virtual`: `boolean`，默认 `false`。
- `teleport`: `string | Ref`，默认 `body`。
- `beforeClickItem`: `function`。
- `hasCheckAll`: `boolean`，是否开启全选。
- `beforeConfirm`: `function`，确认前钩子。

Events：

- `change(value)`、`search(value)`、`remove(item)`、`clear()`、`blur()`、`focus()`、`confirm(value)`、`cancel(value)`。

Slots：

- `default`、`prefix`、`suffixIcon`、`clearIcon`、`trigger`、`empty`、`panelHeader`、`panelFooter`、`nodeSlot`。

Methods：

- `focus()`、`blur()`。

## Workflow

1. 明确单选或多选。
2. 使用 `options`、`valueKey`、`labelKey` 描述选项。
3. 需要搜索时选择 `searchable` 或 `panelSearchable`，不要同时依赖两套搜索。
4. 大数据量使用 `virtual`。
5. 多选确认流程使用 `hasConfirm`。

## Usage Patterns

- 基础单选：`v-model` + `options`。
- 多选标签：`multiple` + `mode="tags"`。
- 面板搜索：`panelSearchable`。
- 创建项：使用 SelectCreate。

## Examples

```vue
<template>
  <m-select v-model="value" :options="options" clearable @change="handleChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
const options = [{ id: 'a', name: '选项 A' }]
function handleChange(v: string | string[]) {
  console.log(v)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 创建新选项
- 确认操作
- 自定义内容
- 分组用法
- 多步骤或多选用法
- 搜索能力
- 选择用法
- 触发器配置
- 虚拟滚动
- 虚拟列表自定义节点
- 宽度配置

## 示例写法补充

```vue
<template>
  <m-select v-model="value" :options="options" clearable searchable />
</template>
```

## Quality Checks

- `v-model` 类型与 `multiple` 一致。
- 选项字段与 `valueKey` / `labelKey` 一致。
- 自定义内容使用公开插槽。
