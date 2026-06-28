---
name: meri-plus-switch
description: Use when the user asks to generate, configure, debug, or document Meri Plus Switch usage in a consumer Vue 3 application, including checked/uncheck v-model, size, loading, disabled, beforeChange, and change event. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Switch

使用本 Skill 生成开关组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-switch`
- 脚本组件名：`MSwitch`

## Scope

适合生成开关状态、加载态、禁用态和切换前拦截示例。

## Component Boundary

Switch 负责二态切换 UI；业务侧负责是否允许切换和保存状态。

## Public API

Props：

- `modelValue`: `checked | uncheck`，默认 `uncheck`。
- `size`: `default | small`，默认 `default`。
- `loading`: `boolean`，默认 `false`。
- `disabled`: `boolean`，默认 `false`。
- `beforeChange`: `function`，切换前钩子，返回 `false` 或 rejected Promise 可阻止切换。

Events：

- `change(state, event)`: 切换成功后触发。

## Workflow

1. 使用 `v-model` 绑定开关状态。
2. 加载中使用 `loading`。
3. 禁止操作使用 `disabled`。
4. 切换前确认或异步校验使用 `beforeChange`。

## Usage Patterns

- 普通开关：只绑定 `v-model`。
- 异步确认：使用 `beforeChange`。
- 保存中：设置 `loading`。

## Examples

```vue
<template>
  <m-switch v-model="state" :before-change="beforeChange" @change="handleChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const state = ref('uncheck')
function beforeChange() {
  return true
}
function handleChange(value: string) {
  console.log(value)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 禁用状态
- 加载状态
- 尺寸配置
- switch

## 示例写法补充

生成 开关 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 状态值只使用 `checked` 或 `uncheck`。
- 异步限制放在 `beforeChange`。
- 不在 `change` 中回滚模拟拦截。
