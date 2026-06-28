---
name: meri-plus-form
description: Use when the user asks to generate, configure, debug, or document Meri Plus Form and FormItem usage in a consumer Vue 3 application, including model, rules, inline layout, label position, validation, error display, validate methods, slots, and async-validator rules. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Form

使用本 Skill 生成表单和表单项用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-form`、`m-form-item`
- 脚本组件名：`MForm`

## Scope

适合生成表单布局、校验、行内表单、错误提示和单项校验。不要用于实现业务提交接口。

## Component Boundary

Form 负责表单布局和校验调度；FormItem 负责单项标签、错误和规则；业务侧负责表单数据、提交和接口调用。

## Public API

Form Props：

- `model`: `object`，表单数据对象。
- `rules`: `array`，校验规则。
- `inline`: `boolean`，默认 `false`。
- `label-position`: `left | right | top`，默认 `right`。
- `label-width`: `string`。
- `scroll-to-error`: `boolean`，默认 `false`。
- `require-asterisk-position`: `left | right`，默认 `right`。
- `show-message`: `boolean`，默认 `true`。
- `error-use-popover`: `boolean`，默认 `true`。
- `novalidate`: `boolean`，默认 `true`。

Form Methods：

- `validate(callback?)`、`validateField(props, callback?)`、`clearValidate(props?)`、`scrollToField(prop)`。

FormItem Props：

- `prop`: `string | string[]`。
- `label`: `string`。
- `label-width`: `string`。
- `rules`: `array`。
- `show-message`: `boolean`，默认 `true`。
- `item-model`: `any`。
- `error-use-popover`: `boolean`，默认 `true`。
- `require-asterisk-position`: `left | right`。

FormItem Slots：

- 默认内容、`label`、`error`。

## Workflow

1. 使用 `model` 保存表单数据。
2. 使用 `rules` 定义校验规则。
3. 每个需要校验的 FormItem 设置 `prop`。
4. 提交前调用 `validate`。
5. 自定义错误展示使用 `error` 插槽。

## Usage Patterns

- 行内表单：`inline`。
- 顶部标签：`label-position="top"`。
- 提交校验：`validate`。
- 清理校验：`clearValidate`。

## Examples

```vue
<template>
  <m-form ref="formRef" :model="form" :rules="rules" label-width="80px">
    <m-form-item label="名称" prop="name">
      <m-input v-model="form.name" />
    </m-form-item>
    <m-button type="primary" @click="submit">提交</m-button>
  </m-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const formRef = ref()
const form = reactive({ name: '' })
const rules = { name: [{ required: true, message: '请输入名称', trigger: 'blur' }] }

function submit() {
  formRef.value?.validate()
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 基础用法
- dong
- error
- inline
- labelPosition
- onlyItem
- rules

## 示例写法补充

```vue
<template>
  <m-form ref="formRef" :model="form" :rules="rules"><m-form-item label="名称" prop="name"><m-input v-model="form.name" /></m-form-item></m-form>
</template>
```

## Quality Checks

- `model` 字段与 `prop` 一致。
- 提交前使用公开方法校验。
- 接口提交逻辑不写进 Form 示例核心。
