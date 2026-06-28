---
name: meri-plus-popup
description: Use when the user asks to generate, configure, debug, or document Meri Plus Popup usage in a consumer Vue 3 application, including button-like trigger type, size, disabled, splitButton, items, custom dropdown slot, width/height, open control, and events. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Popup

使用本 Skill 生成 Popup 组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-popup`
- 脚本组件名：`MPopup`

## Scope

适合生成带触发按钮的下拉弹出内容、分割按钮和外部控制打开状态。公开文档未给出完整 API 表时，不编造未确认 props。

## Component Boundary

Popup 负责按钮触发和下拉内容展示；业务侧负责提供 items、自定义内容和处理事件。

## Public API

公开文档确认的能力：

- `type`: 控制按钮类型。
- `size`: 控制尺寸。
- `disabled`: 禁用状态。
- `splitButton`: 分割按钮，右侧图标作为触发区域。
- `items`: 下拉数据。
- `open`: 外部控制弹窗状态。
- 默认下拉内容可通过插槽自定义。
- 支持自定义下拉框宽高。

## Workflow

1. 确认用户需要按钮触发的下拉操作。
2. 简单菜单使用 `items`。
3. 复杂内容使用插槽。
4. 需要外部控制时使用 `open`。
5. 若需要完整选项 API，明确说明公开文档未提供完整表格。

## Usage Patterns

- 普通触发按钮：设置 `type` 和 `size`。
- 分割按钮：设置 `splitButton`。
- 自定义下拉：使用默认插槽。

## Examples

```vue
<template>
  <m-popup type="primary" size="medium" :items="items">更多</m-popup>
</template>

<script setup lang="ts">
const items = [{ label: '编辑', value: 'edit' }]
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 禁用状态
- event
- items
- open
- 尺寸配置
- 插槽用法
- splitButton
- 类型配置
- 宽度配置

## 示例写法补充

生成 Popup 下拉按钮 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 不编造未公开的事件和 props。
- 复杂下拉内容优先使用插槽。
- 菜单结果由消费项目处理。
