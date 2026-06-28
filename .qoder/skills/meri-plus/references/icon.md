---
name: meri-plus-icon
description: Use when the user asks to generate, configure, debug, or document Meri Plus Icon usage in a consumer Vue 3 application, including icon type and rotate. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Icon

使用本 Skill 生成图标组件用法。

## Package Context

- 组件库：`meri-plus`
- 图标包：`meri-icon`
- 模板组件名：`m-icon`
- 脚本组件名：`MIcon`

## Scope

适合生成基础图标和旋转图标。不要用于设计新图标资源。

## Component Boundary

Icon 负责展示已有图标；业务侧负责选择图标类型和使用场景。

## Public API

Props：

- `type`: `string`，默认 `iconcreate`，Icon 类型。
- `rotate`: `boolean`，默认 `false`，是否旋转。

## Workflow

1. 确认图标名称。
2. 使用 `type` 指定图标。
3. 加载态或动效场景使用 `rotate`。

## Usage Patterns

- 静态图标：只传 `type`。
- 旋转图标：`rotate`。

## Examples

```vue
<template>
  <m-icon type="iconcreate" />
</template>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 类型配置

## 示例写法补充

生成 图标 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 图标名来自公开图标集合。
- 不生成新图标源码。
