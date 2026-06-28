---
name: meri-plus-tips
description: Use when the user asks to generate, configure, debug, or document Meri Plus Tips usage in a consumer Vue 3 application, including tooltip-like content, theme, trigger, max width/height, custom content, and overflow text tips. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Tips

使用本 Skill 生成提示说明组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-tips`
- 脚本组件名：`MTips`

## Scope

适合生成短提示、说明气泡和文本溢出提示。复杂弹出内容使用 Popover。

## Component Boundary

Tips 负责轻量提示展示；业务侧负责提示文案和触发内容。

## Public API

公开文档中 Tips 展示能力包括：

- `theme`: 设置主题，默认 `light`。
- `trigger`: 设置触发方式，默认 `hover`。
- 自定义内容。
- 最大宽高设置。
- 文本溢出提示。

Tips 文档同时展示了 Popover 能力；如果用户需要完整弹层控制，应转用 Popover Skill。

## Workflow

1. 确认提示内容是否轻量。
2. 轻量说明使用 Tips。
3. 复杂弹层、手动控制或虚拟触发使用 Popover。
4. 自定义内容使用公开插槽。

## Usage Patterns

- 默认提示：hover。
- 主题提示：设置 `theme`。
- 溢出提示：结合文本溢出场景。

## Examples

```vue
<template>
  <m-tips content="这里是说明文字">
    <span>查看说明</span>
  </m-tips>
</template>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 插槽用法
- 主题配置

## 示例写法补充

生成 提示说明 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 不用 Tips 承载复杂交互。
- 文案简短。
- 需要手动弹层时改用 Popover。
