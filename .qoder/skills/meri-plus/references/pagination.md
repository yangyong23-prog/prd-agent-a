---
name: meri-plus-pagination
description: Use when the user asks to generate, configure, debug, or document Meri Plus Pagination usage in a consumer Vue 3 application, including total, page-num v-model, page-size, layout, sizes-list, simple mode, hide-on-single-page, and page/size change events. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Pagination

使用本 Skill 生成分页组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-pagination`
- 脚本组件名：`MPagination`

## Scope

适合生成页码、每页条数、简洁分页和自定义布局。不要实现后端分页接口。

## Component Boundary

Pagination 负责分页 UI 和页码事件；业务侧负责请求对应页数据。

## Public API

Props：

- `total`: `string | number`，总数。
- `page-num` / `v-model:page-num`: `number`，当前页。
- `default-page-number`: `number`，默认 `1`。
- `page-size`: `string | number`，默认 `10`。
- `sizes-list`: `array`，默认 `[10, 20, 50, 100]`。
- `pager-count`: `string | number`，默认 `7`。
- `disabled`: `boolean`，默认 `false`。
- `layout`: `string`，默认 `total,prev,pager,next`。
- `prev-text` / `next-text`: `string`。
- `total-tmp-string`: `string`，默认 `共 {total} 条`。
- `pages-tmp-string`: `string`，默认 `共 {totalPages} 页`。
- `sizes-tmp-string`: `string`，默认 `{value}条/页`。
- `background`: `boolean`，默认 `true`。
- `simple`: `boolean`，默认 `false`。
- `hide-on-single-page`: `boolean`，默认 `false`。

Events：

- `page-change(pageNum)`。
- `size-change(pageSize)`。

## Workflow

1. 绑定当前页。
2. 设置总数和每页条数。
3. 在页码或条数变化时由业务侧请求数据。
4. 简洁场景使用 `simple`。

## Usage Patterns

- 标准分页：total + page-num。
- 可切换条数：layout 包含 sizes。
- 单页隐藏：`hide-on-single-page`。

## Examples

```vue
<template>
  <m-pagination
    v-model:page-num="page"
    :total="total"
    :page-size="20"
    @page-change="loadPage"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const page = ref(1)
const total = ref(120)
function loadPage(pageNum: number) {
  console.log(pageNum)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 自定义文案
- 基础用法
- 禁用状态
- 跳转页码
- 无背景样式

## 示例写法补充

```vue
<template>
  <m-pagination v-model:page-num="page" :total="total" @page-change="loadPage" />
</template>
```

## Quality Checks

- 页码状态由消费项目维护。
- 数据请求不写入组件配置。
- `pager-count` 必须是合理奇数。
