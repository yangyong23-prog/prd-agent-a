---
name: meri-plus-steps
description: Use when the user asks to generate, configure, debug, or document Meri Plus Steps usage in a consumer Vue 3 application, including v-model current node, size, space, layout, lineType, category, readonly, node status, icon steps, slots, and change event. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Steps

使用本 Skill 生成步骤条组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-steps`
- 脚本组件名：`MSteps`

## Scope

适合生成流程步骤、纵向步骤、数字步骤、图标步骤和可交互步骤。

## Component Boundary

Steps 负责步骤展示和当前节点交互；业务侧负责步骤数据和流程状态。

## Public API

Props：

- `v-model`: `string`，当前交互节点。
- `size`: `medium | small`，默认 `medium`。
- `space`: `number | string`，默认 `20`。
- `layout`: `horizontal | vertical`。
- `lineType`: `solid | dashed`，默认 `solid`。
- `category`: `default | number | icon`。
- `defaultColor`: `boolean | string`，默认 `true`。
- `readonly`: `boolean | string`，默认 `false`。
- `defaultSet`: `boolean | string`，默认 `true`。

Node：

- `index`: `number | string`，必填。
- `title`: `string`，必填。
- `description`: `string`。
- `icon`: `string`，图标步骤必填。
- `status`: `finish | error | success`。
- `color`: `string`。

Events：

- `change(current, context)`。

Slots：

- `title`、`description`、`defaultImg`、`activeImg`。

## Workflow

1. 准备步骤节点数组。
2. 通过 `v-model` 绑定当前节点。
3. 根据视觉选择 `layout`、`category` 和 `lineType`。
4. 用 `readonly` 控制是否可交互。

## Usage Patterns

- 横向步骤：默认。
- 纵向步骤：`layout="vertical"`。
- 数字步骤：`category="number"`。
- 图标步骤：`category="icon"`。

## Examples

```vue
<template>
  <m-steps v-model="current" :data="steps" category="number" @change="handleChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const current = ref('1')
const steps = [
  { index: '1', title: '创建', description: '填写信息' },
  { index: '2', title: '确认', description: '确认提交' }
]
function handleChange(current: unknown) {
  console.log(current)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 基础用法
- 图标用法
- 数字步骤
- 插槽用法
- 自定义步骤图片
- 状态展示

## 示例写法补充

生成 步骤条 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 节点 `index` 稳定。
- 状态字段使用公开枚举。
- 只展示流程，不写业务流转接口。
