---
name: meri-plus-input
description: Use when the user asks to generate, configure, debug, or document Meri Plus Input usage in a consumer Vue 3 application, including text, password, textarea, vericode, icons, clearable, errorText, word limit, native input attributes, slots, and input/change/focus events. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Input

使用本 Skill 生成输入框组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-input`
- 脚本组件名：`MInput`

## Scope

适合生成文本、密码、多行、验证码、前后缀、图标、错误提示和字数统计输入框。不要用于表单校验容器；校验容器使用 Form。

## Component Boundary

Input 负责输入 UI、清空、错误提示和基础事件；业务侧负责保存输入值、校验规则和提交逻辑。

## Public API

Props：

- `model-value` / `v-model`: 输入值。
- `type`: `text | password | textarea | vericode`，默认 `text`。
- `placeholder`: `string`，默认 `请输入`。
- `errorText`: `string`，错误提示。
- `prefixIcon` / `suffixIcon`: `string`，前后图标。
- `clearable`: `boolean`，是否可清空。
- `rows`: `number`，默认 `4`，仅 textarea 有效。
- `height`: `number | string`，默认 `32`。
- `width`: `number | string`，默认 `200`。
- `show-word-limit`: `boolean`，是否显示字数。
- `maxlength`: `number | object`，最大字数。
- `autofocus`: `boolean`，默认 `false`。
- `disabled`: `boolean`，默认 `false`。
- `prependSuffixWidth` / `appendSuffixHeight`: `number`，前后缀尺寸控制。

Events：

- `input(value)`、`change(value)`、`blur(event)`、`focus(event)`、`clear(event)`、`keyup(event)`、`pressEnter(event)`。

Slots：

- `prefix`、`suffix`、`prepend`、`append`。

## Workflow

1. 使用 `v-model` 绑定输入值。
2. 根据输入类型设置 `type`。
3. 错误提示使用 `errorText`。
4. 前后缀内容优先使用公开插槽。
5. 回车提交使用 `pressEnter`，不要监听内部 DOM。

## Usage Patterns

- 多行输入：`type="textarea"`。
- 密码输入：`type="password"`。
- 可清空输入：`clearable`。
- 字数限制：`maxlength` 和 `show-word-limit`。

## Examples

```vue
<template>
  <m-input v-model="keyword" clearable placeholder="请输入关键词" @pressEnter="search" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const keyword = ref('')
function search() {
  console.log(keyword.value)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 高度配置
- 图标用法
- input
- 消息内容
- 密码输入
- 字数统计
- 文本内容
- 多行输入
- 验证码输入
- 宽度配置

## 示例写法补充

```vue
<template>
  <m-input v-model="value" clearable placeholder="请输入" @pressEnter="submit" />
</template>
```

## Quality Checks

- 输入值由消费项目维护。
- 不直接操作内部 input DOM。
- 校验逻辑放在业务或 Form 中。
