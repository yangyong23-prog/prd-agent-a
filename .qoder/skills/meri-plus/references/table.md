---
name: meri-plus-table
description: Use when the user asks to generate, configure, debug, or document Meri Plus Table usage in a consumer Vue 3 application, including columns, dataSource, checkbox, sorting, row click, tree table, slots, column setting, resize, mergeMethod, and exposed scroll methods. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Table

使用本 Skill 生成表格组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-table`
- 脚本组件名：`MTable`

## Scope

适合生成基础表格、复选表格、树形表格、排序、列设置、自定义单元格和滚动定位。

## Component Boundary

Table 负责表格展示、选择、排序、展开、列设置和插槽渲染；业务侧负责数据来源、分页、请求和业务操作。

## Public API

Props：

- `checkbox`: `boolean`，默认 `false`。
- `evenColor`: `boolean`，默认 `false`。
- `setting`: `boolean`，默认 `false`。
- `columns`: `Column[]`，列信息。
- `dataSource`: `Row`，数据源。
- `size`: `medium | small`，默认 `medium`。
- `colunmMinWidth`: `number`，默认 `89`。
- `mergeMethod`: `function`，合并行列。
- `columnLine`: `boolean`，默认 `false`。
- `resizable`: `boolean`，默认 `false`。
- `disableSelectAll`: `boolean`，默认 `false`。
- `rowClassName`: `function`。
- `activeRows`: `string[]`。
- `treeLinkage`: `boolean`，默认 `true`。
- `emptyText`: `string`。
- `cellClassNameFn`、`cellIdFn`、`cellStyleFn`。
- `showHeaderCheckbox`: `boolean`，默认 `true`。

Column：

- `title`、`dataIndex` 必填。
- 常用字段：`sorter`、`sortOrder`、`fixed`、`children`、`align`、`ellipsis`、`width`、`minWidth`、`formatter`。

Row：

- `id` 必填。
- 常用字段：`children`、`checked`、`disable`、`checkbox`、`open`、`loading`、`slot`。

Events：

- `checkedChange({ items, selecteds })`。
- `sortChange({ col, state })`。
- `rowClick(event, row)`。
- `expandChange(event, openState, row)`。
- `tableSetCancel(columns)`、`tableSetSumit(columns)`、`tableSetReset(columns)`。

Slots：

- `tooltip`、`col.dataIndex`、`row`、`nodata`。

Expose：

- `resetScrollbar()`、`refScrollbar`、`scrollToById(id)`。

## Workflow

1. 定义稳定 `columns` 和 `dataSource`。
2. 行数据必须有稳定 `id`。
3. 选择功能使用 `checkbox` 和 `checkedChange`。
4. 排序使用列 `sorter` 和 `sortChange`。
5. 自定义单元格使用列名插槽。

## Usage Patterns

- 基础表格：columns + dataSource。
- 可选表格：`checkbox`。
- 树形表格：Row 使用 `children`。
- 列设置：`setting`。

## Examples

```vue
<template>
  <m-table :columns="columns" :data-source="rows" @rowClick="handleRowClick" />
</template>

<script setup lang="ts">
const columns = [{ title: '名称', dataIndex: 'name' }]
const rows = [{ id: '1', name: '设备 A' }]
function handleRowClick(event: Event, row: unknown) {
  console.log(row)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 基础表格
- 列对齐
- 禁用全选提示
- 自定义行样式
- 列描述
- 列描述图标
- 禁用全选
- 列拖拽
- 固定列拖拽
- 列线拖拽
- 奇偶行变色
- 格式化单元格
- 强制显示列
- 自定义单元格
- 自定义行
- 列设置变更
- 列设置
- 列设置全部展开
- 表格尺寸
- 表头提示
- 选中提示
- 合并表格
- 合并行
- 合并表格提示
- 树形表格
- 树形表格展开
- 树形表格基础
- 自定义单元格样式
- 树形表格滚动定位
- 树形表格提示
- 树形表格取消联动
- 树形表格自定义行
- 空值文本
- 末级灰底
- 表头复选框显示

## 示例写法补充

```vue
<template>
  <m-table :columns="columns" :data-source="rows" checkbox @checkedChange="handleChecked" />
</template>
```

## Quality Checks

- 每行必须有稳定 `id`。
- 列 `dataIndex` 与行字段一致。
- 数据请求、分页和权限逻辑不写进表格 Skill。
