---
name: meri-plus-tree-select
description: Use when the user asks to generate, configure, debug, or document Meri Plus TreeSelect usage in a consumer Vue 3 application, including single select, multiple select, searchable tree select, tags mode, confirm mode, selected display, checkAll, and checkByIds. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus TreeSelect

使用本 Skill 生成消费项目中的 Meri Plus 树选择组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-tree-select`
- 脚本组件名：`MTreeSelect`

## Scope

适合用于：

- 生成单选树选择、多选树选择、可搜索树选择示例。
- 配置 `hasConfirm`、`searchable`、`mode`、`disabled`、`showParentName`、`loading`。
- 说明选中项回显、面板内搜索、确认按钮、全选和按 id 操作选中节点。

不适合用于：

- 修改组件库内部实现。
- 替代 Tree 或 Select 的底层能力说明。
- 添加业务接口、路由、权限或数据库逻辑。

## Component Boundary

TreeSelect 用于在下拉面板中选择树形数据。它负责触发器回显、树节点选择、搜索、确认和禁用态；业务侧负责提供树数据、接收选中结果并维护需要持久化的状态。

## Public API

Props：

- `hasConfirm`: `boolean`，默认 `false`，是否显示确认按钮。
- `searchable`: `boolean`，默认 `false`，是否支持搜索。
- `mode`: `tags | multiple`，默认 `multiple`，多选回显为标签或数量。
- `disabled`: `boolean`，默认 `false`，是否禁用。
- `showParentName`: `boolean`，默认 `true`，触发器是否显示父级路径。
- `searchShowParentName`: `boolean`，默认 `false`，搜索面板是否显示父级路径。
- `loading`: `boolean`，默认 `false`，树为空时是否展示加载状态。

Events：

- `change`: 选中变化时触发，参数包含已选节点 id 数组和当前选中节点信息。
- `blur`: 失焦时触发。

Methods：

- `checkAll(status: boolean)`: 全选或取消全选。
- `checkByIds(ids, status)`: 根据 id 操作选中节点，适用于父子不联动场景。

## Workflow

1. 确认用户需要树形下拉选择，而不是普通 Select 或独立 Tree。
2. 根据需求选择单选、多选、搜索、标签回显或确认模式。
3. 用公开 props 表达禁用、搜索、回显路径和加载态。
4. 用 `change` 接收选中结果，不在示例中写持久化业务逻辑。
5. 需要全选时使用组件暴露方法，不手写内部树遍历。

## Usage Patterns

- 单选树：用于选择一个组织、区域或分类节点。
- 多选树：用于选择多个层级节点。
- `mode="tags"`：用于展示已选标签。
- `searchable`：用于节点较多时快速筛选。
- `hasConfirm`：用于需要用户确认后再提交的选择流程。

## Examples

```vue
<template>
  <m-tree-select
    v-model="selectedIds"
    :data="treeData"
    searchable
    mode="tags"
    @change="handleChange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedIds = ref<string[]>([])
const treeData = ref([
  { id: 'building', name: '楼宇', children: [{ id: 'floor-1', name: '一层' }] }
])

function handleChange(ids: unknown[], node: unknown) {
  console.log(ids, node)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 基础用法、check、父子不联动
- 基础用法、check、确认操作
- 基础用法、check、detachHoverAction、父子不联动
- 基础用法、check、detachHoverAction、仅末级可选
- 基础用法、check、detachHoverAction
- 基础用法、check、禁用状态
- 基础用法、check、filter
- 基础用法、check、仅末级可选
- 基础用法、check、scroll
- 基础用法、check、showParentName
- 基础用法、check、插槽用法、搜索能力
- 基础用法、check、插槽用法
- 基础用法、check、tag、maxTagTextLength
- 基础用法、check、tag
- 基础用法、check、虚拟滚动
- 基础用法、check
- 基础用法、radio、detachHoverAction
- 基础用法、radio、禁用状态
- 基础用法、radio、仅末级可选、detachHoverAction
- 基础用法、radio、仅末级可选
- 基础用法、radio、menuSize
- 基础用法、radio、notLastStage
- 基础用法、radio、scroll
- 基础用法、radio、showParentName
- 基础用法、radio
- 基础用法、搜索能力、check、父子不联动
- 基础用法、搜索能力、check
- 基础用法、搜索能力、确认操作
- 基础用法、搜索能力、面板内搜索
- 基础用法、搜索能力
- test

## 示例写法补充

```vue
<template>
  <m-tree-select v-model="ids" :data="treeData" searchable mode="tags" />
</template>
```

## Quality Checks

- 只使用公开 props、events 和 methods。
- 搜索、确认和回显模式通过组件 props 表达。
- 示例数据保持中性，不绑定业务接口。
- 不引用组件库内部实现或内部样式。
