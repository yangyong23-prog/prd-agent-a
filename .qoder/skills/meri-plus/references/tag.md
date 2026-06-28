---
name: meri-plus-tag
description: Use when the user asks to generate, configure, debug, or document Meri Plus Tag usage in a consumer Vue 3 application, including color, bg-color, size, type, dot, icon, has-prefix, prefix/suffix slots, and click events. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Tag

使用本 Skill 生成标签组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-tag`
- 脚本组件名：`MTag`

## Scope

适合生成状态标签、颜色标签、点状标签和带图标标签。不要用于复杂筛选器。

## Component Boundary

Tag 负责展示轻量状态或分类；业务侧负责标签含义和交互处理。

## Public API

Props：

- `color`: `string`，字体颜色。
- `bg-color`: `string`，背景颜色，默认可由字体色透明化得到。
- `size`: `small | medium | large`，默认 `small`。
- `type`: `processing | canceled | completed | rejected | error`。
- `dot`: `boolean`，默认 `false`。
- `icon`: `string`，图标名。
- `has-prefix`: `boolean`，默认 `false`，是否有默认尾部 icon。

Events：

- `clickSuffix`: 点击头部 icon。
- `clickPrefix`: 点击尾部 icon。

Slots：

- `suffix`: 头部 icon 内容，作用域 `{ color }`。
- `prefix`: 尾部 icon 内容，作用域 `{ color }`。

## Workflow

1. 状态标签优先使用 `type`。
2. 自定义颜色使用 `color` 和 `bg-color`。
3. 点状状态使用 `dot`。
4. 自定义图标使用插槽。

## Usage Patterns

- 状态展示：`type="completed"` 等。
- 自定义色：设置 `color`。
- 图标标签：使用 `icon` 或插槽。

## Examples

```vue
<template>
  <m-tag type="completed" size="small">已完成</m-tag>
</template>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 自动或自适应配置
- 等级标签
- 尺寸配置
- 状态展示
- 无状态标签

## 示例写法补充

生成 标签 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 标签文案简短。
- 状态类标签优先使用公开 `type`。
- 图标交互使用公开事件或插槽。
