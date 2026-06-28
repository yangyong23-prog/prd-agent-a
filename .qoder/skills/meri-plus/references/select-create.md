---
name: meri-plus-select-create
description: Use when the user asks to generate, configure, debug, or document Meri Plus SelectCreate usage in a consumer Vue 3 application, including creating options, searchValue, clearable, multiple, draggable sorting, tab options, autoCreateOption, and create/delete/change events. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus SelectCreate

使用本 Skill 生成可创建选项的选择器用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-select-create`
- 脚本组件名：`MSelectCreate`

## Scope

适合生成可搜索、可新增、可删除、可排序的选项选择器。普通选择场景优先使用 Select。

## Component Boundary

SelectCreate 负责输入、创建选项、选择和排序；业务侧负责保存最终值和同步选项来源。

## Public API

Props：

- `v-model`: `string | { id: string | number; name: string | number }[]`。
- `searchValue` / `v-model:searchValue`: `string`。
- `clearable`: `boolean`，默认 `true`。
- `disabled`: `boolean`，默认 `false`。
- `placeholder`: `string`，默认 `请选择`。
- `searchPlaceholder`: `string`，默认 `搜索或添加选项`。
- `panelHeader`: `boolean`，默认 `false`。
- `maxHeight`: `number`，默认 `280`。
- `multiple`: `boolean`，默认 `true`。
- `repeat`: `boolean`，默认 `false`。
- `disabledDraggable`: `boolean`，默认 `false`。
- `optionTypeTab`: `boolean`，默认 `false`。
- `tabDataAndOptions`: `object`。
- `tabAttrs`: `object`。
- `autoCreateOption`: `boolean`，默认 `true`。
- `confirmBtnDisabled`: `boolean`，默认 `false`。

Events：

- `clear()`、`input(value)`、`change(value)`、`moveEnd(value)`、`show()`、`hide()`、`createSelect(value)`、`deleteSelect(value)`。

## Workflow

1. 确认用户需要创建不存在的选项。
2. 多选创建使用数组对象格式。
3. 搜索值使用 `v-model:searchValue`。
4. 需要排序时保持拖拽启用。
5. 用 `createSelect` 和 `deleteSelect` 同步业务数据。

## Usage Patterns

- 自动创建：`autoCreateOption` 为 `true`。
- 禁止重复：`repeat` 为 `false`。
- Tab 选项：`optionTypeTab`。

## Examples

```vue
<template>
  <m-select-create v-model="items" multiple @createSelect="handleCreate" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const items = ref([])
function handleCreate(value: unknown) {
  console.log(value)
}
</script>
```

## Quality Checks

- 新增选项的持久化由消费项目处理。
- `v-model` 数据格式与单选/多选一致。
- 不用 SelectCreate 替代普通 Select。
