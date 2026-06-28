---
name: meri-plus-popover
description: Use when the user asks to generate, configure, debug, or document Meri Plus Popover usage in a consumer Vue 3 application, including content, trigger, placement, delay, virtual triggering, show arrow, width, append-to, manual open, slots, events, and methods. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Popover

使用本 Skill 生成气泡弹出层用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-popover`
- 脚本组件名：`MPopover`

## Scope

适合生成 hover/click/manual 弹出层、虚拟触发和自定义内容。二次确认使用 PopConfirm。

## Component Boundary

Popover 负责弹出层定位、触发和显隐；业务侧负责触发内容和弹出内容。

## Public API

Props：

- `content`: `string`。
- `is-open`: `boolean`，手动控制。
- `trigger`: `click | hover | manually`，默认 `hover`。
- `placement`: `top | right | bottom | left` 及 start/end 组合，默认 `bottom`。
- `offset`: `number`，默认 `8`。
- `show-animation`: `boolean`，默认 `true`。
- `mouse-enter-delay`: `number`，默认 `150`。
- `mouse-leave-delay`: `number`，默认 `100`。
- `popover-class`: `string | array | object`。
- `display-directive`: `show | if`，默认 `if`。
- `show-arrow`: `boolean`，默认 `true`。
- `width`: `string`。
- `virtual-triggering`: `boolean`，默认 `false`。
- `virtual-ref`: `HTMLElement | templateRef`。
- `append-to`: `string`，默认 `body`。
- `z-index`: `number`。

Events：

- `show()`、`hide()`、`clickEvent(event, type)`、`mouseEnter(event)`、`mouseLeave(event)`、`scroll(event)`。

Slots：

- `default`: 触发元素。
- `content`: 弹出内容。

Methods：

- `manuallyHide()`、`manuallyOpen()`、`popoverRef`。

## Workflow

1. 选择触发方式。
2. 选择 `placement`。
3. 简单内容使用 `content`，复杂内容使用插槽。
4. 手动控制时使用 `trigger="manually"` 和方法。

## Usage Patterns

- hover 提示：默认触发。
- 点击弹出：`trigger="click"`。
- 手动控制：`trigger="manually"`。

## Examples

```vue
<template>
  <m-popover content="提示内容" placement="top">
    <m-button>悬停查看</m-button>
  </m-popover>
</template>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 自动或自适应配置
- 基础用法
- 延时触发
- 文本溢出提示
- 溢出提示主题
- 事件与方法
- 弹出位置
- 嵌套弹层
- 箭头显示
- 插槽用法
- 自定义提示内容
- 主题配置
- 提示主题
- 虚拟滚动

## 示例写法补充

生成 气泡弹出层 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 弹出内容和触发器职责清晰。
- 复杂交互不要滥用 hover。
- 手动控制要同步显隐状态。
