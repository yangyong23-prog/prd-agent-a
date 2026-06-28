---
name: meri-plus-search
description: Use when the user asks to generate, configure, debug, or document Meri Plus Search usage in a consumer Vue 3 application, including v-model, default value, width, border, real/enter trigger, suggestions, fetchSuggestions, clearInp, searchHide, and events. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Search

使用本 Skill 生成搜索框用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-search`
- 脚本组件名：`MSearch`

## Scope

适合生成实时搜索、回车搜索、输入建议、自定义空状态和手动清空。

## Component Boundary

Search 负责搜索输入、建议面板和事件触发；业务侧负责查询数据和展示结果。

## Public API

Props：

- `model-value` / `v-model`: 输入值。
- `defaultValue`: `string`。
- `defaultWidth`: `string | number`。
- `immediate`: `boolean`，默认 `false`。
- `width`: `string | number`。
- `height`: `string | number`。
- `placeholder`: `string`，默认 `搜索`。
- `border`: `boolean`，默认 `true`。
- `disabled`: `boolean`，默认 `false`。
- `type`: `real | enter`，默认 `real`。
- `label`: `string`，默认 `label`，建议项展示字段。
- `triggerOnFocus`: `boolean`，默认 `false`。
- `fetchSuggestions`: `function`，通过回调提供建议项。

Events：

- `change(value)`、`focus(event)`、`input(event)`、`clear(value, type)`、`select(obj)`。

Expose：

- `clearInp()`: 手动清空。
- `searchHide()`: 手动失焦并收起面板。

Slots：

- `empty`: 自定义空状态。

## Workflow

1. 使用 `v-model` 绑定搜索值。
2. 实时搜索使用 `type="real"`，回车搜索使用 `type="enter"`。
3. 输入建议使用 `fetchSuggestions`。
4. 自定义空状态使用 `empty` 插槽。

## Usage Patterns

- 即时搜索：`type="real"`。
- 提交式搜索：`type="enter"`。
- 聚焦展示建议：`triggerOnFocus`。

## Examples

```vue
<template>
  <m-search v-model="keyword" type="enter" placeholder="搜索设备" @change="handleSearch" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const keyword = ref('')
function handleSearch(value: string) {
  console.log(value)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 搜索能力
- search3
- search4
- search5

## 示例写法补充

生成 搜索框 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 查询接口逻辑留在消费项目。
- 搜索触发方式与产品预期一致。
- 不直接操作内部输入框。
