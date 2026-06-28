---
name: meri-plus-illustration
description: Use when the user asks to generate, configure, debug, or document Meri Plus Illustration usage in a consumer Vue 3 application, including noContent, noSearchResult, noMessage, noAccess, pageLoadFailure, success, error, title, content, and slots. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Illustration

使用本 Skill 生成插画空状态组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-illustration`
- 脚本组件名：`MIllustration`

## Scope

适合生成空状态、无搜索结果、无权限、加载失败、成功和错误插画。

## Component Boundary

Illustration 负责插画、标题、描述和底部操作展示；业务侧负责状态判断和操作行为。

## Public API

Props：

- `type`: `noContent | noSearchResult | noMessage | noAccess | pageLoadFailure | success | error`。
- `title`: `string`，必填。
- `content`: `string`。

Slots：

- `img`、`title`、`content`、`footer`。

## Workflow

1. 根据状态选择 `type`。
2. 使用 `title` 和 `content` 描述状态。
3. 需要操作按钮时使用 `footer` 插槽。

## Usage Patterns

- 空内容：`noContent`。
- 无搜索结果：`noSearchResult`。
- 无权限：`noAccess`。
- 加载失败：`pageLoadFailure`。

## Examples

```vue
<template>
  <m-illustration type="noContent" title="暂无数据" content="请稍后再试" />
</template>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 基础用法
- 常规展示
- 插槽用法
- 小尺寸展示

## 示例写法补充

生成 插画 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 标题必填且语义明确。
- 操作区用 footer 插槽。
- 不把插画当作通知组件。
