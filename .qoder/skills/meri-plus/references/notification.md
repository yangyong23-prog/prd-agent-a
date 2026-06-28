---
name: meri-plus-notification
description: Use when the user asks to generate, configure, debug, or document Meri Plus Notification usage in a consumer Vue 3 application, including title, content, type, duration, position, offset, footer actions, HTML content, onClick, and onClose. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Notification

使用本 Skill 生成通知栏用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 使用方式：通知服务调用。

## Scope

适合生成右上、左上、右下、左下通知和带操作按钮的通知。

## Component Boundary

Notification 负责全局通知展示；业务侧负责触发时机、文案和按钮行为。

## Public API

Options：

- `title`: `string`，必填。
- `type`: `success | info | error | warning`。
- `content`: `string | VNode`，必填。
- `dangerouslyUseHTMLString`: `boolean`，默认 `false`。
- `customClass`: `string`。
- `duration`: `number`，默认 `5000`，为 `0` 时不自动关闭。
- `position`: `topLeft | topRight | bottomLeft | bottomRight`，默认 `topRight`。
- `zIndex`: `number`。
- `showClose`: `boolean`，默认 `true`。
- `onClick`: `function`。
- `onClose`: `function`。
- `offset`: `number`。
- `appendTo`: `HTMLElement`，默认 `document.body`。
- `footer`: 操作按钮数组。

## Workflow

1. 确认通知类型和位置。
2. 使用 `title` 和 `content` 表达信息。
3. 不自动关闭时设置 `duration=0`。
4. 操作按钮放入 `footer`。

## Usage Patterns

- 成功通知：`type="success"`。
- 长驻通知：`duration: 0`。
- 带操作：`footer` 按钮。

## Examples

```ts
import { Notification } from 'meri-plus'

Notification({
  title: '任务完成',
  content: '数据同步已完成',
  type: 'success'
})
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 基础用法
- 底部操作
- HTML 内容
- 偏移配置
- 位置配置
- 类型配置

## 示例写法补充

生成 消息通知 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 通知内容简洁。
- HTML 内容必须明确开启。
- 多个通知位置和 offset 保持一致。
