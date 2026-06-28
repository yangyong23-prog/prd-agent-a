---
name: meri-plus-cascader
description: Use when the user asks to generate, configure, debug, or document Meri Plus Cascader usage in a consumer Vue 3 application, including v-model, options, single/multiple, filterable, clearable, checkStrictly, lastStage, lazy loadData, confirm, check all, and events. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Cascader

使用本 Skill 生成级联选择器用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-cascader`
- 脚本组件名：`MCascader`

## Scope

适合生成层级级联单选、多选、搜索、懒加载、仅末级可选和确认选择。树形下拉场景优先评估 TreeSelect。

## Component Boundary

Cascader 负责层级面板、路径选择和回显；业务侧负责提供 options、维护值和加载远程层级数据。

## Public API

Props：

- `modelValue` / `v-model`: `string | string[]`。
- `options`: `Item[]`，默认 `[]`。
- `disabled`: `boolean`，默认 `false`。
- `caption`: `string`。
- `clearable`: `boolean`，默认 `true`。
- `filterable`: `boolean`，默认 `false`。
- `multiple`: `boolean`，默认 `false`。
- `showSelectCount`: `boolean`，默认 `false`。
- `placeholder`: `string`，默认 `请选择`。
- `trigger`: `click | hover`，默认 `click`。
- `rangeSeparator`: `string`，默认 ` / `。
- `width`: `number | string`，默认 `240`。
- `lastStage`: `boolean`，默认 `false`。
- `checkStrictly`: `boolean`，默认 `false`。
- `valueKey`: `string`，默认 `id`。
- `labelKey`: `string`，默认 `name`。
- `childrenKey`: `string`，默认 `children`。
- `loadData`: `function`，懒加载。
- `hasConfirm`: `boolean`，默认 `false`。
- `loading`: `boolean`，默认 `false`。
- `autoClearSearch`: `boolean`，默认 `true`。
- `hasCheckAll`: `boolean`，默认 `false`。

Events：

- `change(value)`、`clear()`、`blur()`、`focus()`。

Methods：

- `focus()`、`blur()`。

## Workflow

1. 确认用户需要层级级联选择。
2. 单选绑定字符串，多选绑定字符串数组。
3. 自定义字段使用 `valueKey`、`labelKey`、`childrenKey`。
4. 远程层级使用 `loadData`。
5. 多选确认使用 `hasConfirm`。

## Usage Patterns

- 仅末级可选：`lastStage`。
- 父子不联动：`checkStrictly`。
- 搜索：`filterable`。
- 全选：`hasCheckAll`。

## Examples

```vue
<template>
  <m-cascader v-model="value" :options="options" clearable @change="handleChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
const options = [{ id: 'a', name: '区域 A', children: [{ id: 'a1', name: '楼层 A1' }] }]
function handleChange(v: string | string[]) {
  console.log(v)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- cascader
- 父子不联动
- 可清空
- customTrigger
- 禁用状态
- filterable
- hasConfirm
- 自定义标签字段
- 仅末级可选
- 懒加载
- 多步骤或多选用法
- 弹出位置
- 分隔符配置
- 显示完整层级
- 简易样式
- 触发器配置
- 宽度配置

## 示例写法补充

```vue
<template>
  <m-cascader v-model="value" :options="options" multiple check-strictly />
</template>
```

## Quality Checks

- `v-model` 类型与 `multiple` 一致。
- options 字段与 key 配置一致。
- 懒加载只负责取子级数据，不写业务持久化。
