---
name: meri-plus-badge
description: Use when the user asks to generate, configure, debug, or document Meri Plus Badge usage in a consumer Vue 3 application, including count badge, dot badge, show, and type. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Badge

使用本 Skill 生成徽标组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-badge`
- 脚本组件名：`MBadge`

## Scope

适合生成数字徽标、小红点和消息数量提示。不要用于复杂通知列表。

## Component Boundary

Badge 负责展示数字或点状提示；业务侧负责计算数量和决定是否展示。

## Public API

Props：

- `count`: `number`，默认 `0`，消息数量，为 0 时不显示数字红点。
- `show`: `boolean`，默认 `false`，无数量或数量为 0 时是否显示小红点。
- `type`: `num | dot`，默认 `num`，数字或点状类型。

Slots：

- `default`: 被徽标包裹的内容。

## Workflow

1. 数字提醒使用 `count`。
2. 仅提示存在状态使用 `type="dot"` 或 `show`。
3. 将 Badge 包裹在按钮、图标或文本外层。

## Usage Patterns

- 消息数：`count` 大于 0。
- 未读点：`type="dot"`。
- 空数量仍展示点：`show` 为 `true`。

## Examples

```vue
<template>
  <m-badge :count="3">
    <m-button>消息</m-button>
  </m-badge>
</template>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 文本内容

## 示例写法补充

生成 徽标 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 数量由业务侧计算。
- 不用 Badge 表达复杂状态。
- `count` 为 0 时按产品意图决定是否设置 `show`。
