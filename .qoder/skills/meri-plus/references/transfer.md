---
name: meri-plus-transfer
description: Use when the user asks to generate, configure, debug, or document Meri Plus Transfer usage in a consumer Vue 3 application, including tree data transfer, modelValue ids, notNull, linkage, lastStage, search placeholder, virtual scrolling, slots, change, and clear events. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Transfer

使用本 Skill 生成穿梭框组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-transfer`
- 脚本组件名：`MTransfer`

## Scope

适合生成树形数据左右穿梭、选中数量、搜索和虚拟滚动。

## Component Boundary

Transfer 负责左右选择和已选列表展示；业务侧负责提供树数据、保存选中 id 和处理清空。

## Public API

Props：

- `modelValue`: `array`，默认 `[]`，绑定节点 id 集合。
- `data`: `array`，默认 `[]`，树结构数据。
- `notNull`: `boolean`，默认 `false`，是否返回半选状态。
- `linkage`: `boolean`，默认 `true`，父子是否关联。
- `lastStage`: `boolean`，默认 `false`，是否仅末级可选。
- `placeholderSearch`: `string`，默认 `请输入`。
- `virtual`: `boolean`，默认 `false`，是否开启虚拟滚动。

Slots：

- `selectedCount`: 右侧选中数量。
- `leftFilter`: 左侧筛选。

Events：

- `change(row, selectNode)`: 勾选或删除内容回调。
- `clear(event)`: 点击右上角清空按钮。

## Workflow

1. 使用 `v-model` 绑定选中 id 数组。
2. 使用 `data` 提供树数据。
3. 根据父子关系设置 `linkage` 和 `notNull`。
4. 大数据量设置 `virtual`。
5. 用 `change` 同步业务状态。

## Usage Patterns

- 仅末级可选：`lastStage`。
- 父子联动：`linkage` 为 `true`。
- 大数据：`virtual`。

## Examples

```vue
<template>
  <m-transfer v-model="selected" :data="treeData" virtual @change="handleChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const selected = ref<string[]>([])
const treeData = [{ id: 'root', name: '根节点', children: [{ id: 'child', name: '子节点' }] }]
function handleChange(row: unknown, nodes: unknown[]) {
  console.log(row, nodes)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 仅末级可选
- 左右联动筛选
- 父子联动
- 大量数据
- 父子不联动
- 半选数据
- 搜索占位符
- 显示完整层级
- 已选数量插槽
- 虚拟滚动

## 示例写法补充

生成 穿梭框 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 绑定值是节点 id 数组。
- 数据结构稳定。
- 半选和父子联动策略明确。
