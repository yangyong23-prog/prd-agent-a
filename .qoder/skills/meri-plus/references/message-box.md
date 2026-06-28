---
name: meri-plus-message-box
description: Use when the user asks to generate, configure, debug, or document Meri Plus MessageBox usage in a consumer Vue 3 application, including alert, confirm, title, message, close-on-click-modal, button text, before-close, callback, loading, icon, and global methods. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus MessageBox

使用本 Skill 生成消息弹出框用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 使用方式：`$msgbox`、`$messageBox`、`$alert`、`$confirm` 或服务方法。

## Scope

适合生成简单 alert/confirm。复杂内容使用 Modal。

## Component Boundary

MessageBox 负责简单确认或提示；业务侧负责处理确认、取消和关闭后的动作。

## Public API

Options：

- `title`: `string`。
- `message`: `string | VNode | (() => VNode)`。
- `close-on-click-modal`: `boolean`，默认 `true`。
- `use-html-string`: `boolean`，默认 `false`。
- `show-cancel-button`: `boolean`，默认 `true`。
- `show-confirm-button`: `boolean`，默认 `true`。
- `show-close`: `boolean`，默认 `true`。
- `zIndex`: `number`。
- `cancel-button-text`: `string`，默认 `取消`。
- `confirm-button-text`: `string`，默认 `确认`。
- `field`: `confirm | alert`，默认 `confirm`。
- `custom-class`、`custom-style`。
- `lock-scroll`: `boolean`，默认 `false`。
- `icon`: `string | VNode | (() => VNode)`。
- `callback(action, instance)`。
- `before-close(action, instance, done)`。
- `has-loading`: `boolean`，默认 `false`。
- `title-hidden`: `boolean`。
- `transition-name`: `string`。
- `size`: `string`，默认 `medium`。

## Workflow

1. 简单提示使用 alert。
2. 需要确认/取消使用 confirm。
3. 关闭前异步处理使用 `before-close` 和 `done`。
4. 复杂内容切换到 Modal。

## Usage Patterns

- 删除确认：confirm。
- 简单通知：alert。
- 异步确认：`before-close` + `has-loading`。

## Examples

```ts
import { MessageBox } from 'meri-plus'

MessageBox.confirm({
  title: '删除确认',
  message: '确认删除该项吗？',
  confirm-button-text: '删除',
  cancel-button-text: '取消'
})
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 基础用法
- 图标用法
- input
- 消息内容
- 双向绑定

## 示例写法补充

生成 消息弹出框 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 只用于简单内容。
- HTML 字符串必须明确设置 `use-html-string`。
- 异步关闭必须调用 `done`。
