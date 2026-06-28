---
name: meri-plus-message
description: Use when the user asks to generate, configure, debug, or document Meri Plus Message usage in a consumer Vue 3 application, including global message calls, success/error/info/default/customIcon types, duration, close button, buttonClick, and message instance close. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Message

使用本 Skill 生成全局消息提示用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 使用方式：全局消息服务或实例方法。

## Scope

适合生成轻量消息提示、成功/失败反馈和可关闭实例。复杂确认使用 MessageBox 或 Modal。

## Component Boundary

Message 负责短时消息展示；业务侧负责触发时机和文案。

## Public API

Options：

- `title`: `string`，消息内容。
- `type`: `success | error | Info | default | closeAll | customIcon`。
- `customIcon`: `string`，自定义图标名，仅 `customIcon` 类型生效。
- `showClose`: `boolean`，默认 `true`。
- `duration`: `number`，默认 `3000`。
- `className`: `string`。
- `shadowClick`: `boolean`，默认 `false`。
- `button`: `string`，按钮显示名称。
- `defaultPadding`: `string`，默认 `100`。

Events：

- `buttonClick`: 点击按钮回调。

Instance：

- `close()`: 关闭当前消息实例。

## Workflow

1. 选择消息类型。
2. 设置简短 `title`。
3. 需要手动关闭时保留实例并调用 `close()`。
4. 需要操作按钮时使用 `buttonClick`。

## Usage Patterns

- 成功提示：`type="success"`。
- 错误提示：`type="error"`。
- 自定义图标：`type="customIcon"` + `customIcon`。

## Examples

```ts
import { Message } from 'meri-plus'

const instance = Message({
  title: '保存成功',
  type: 'success',
  duration: 3000
})

instance.close()
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 删除或关闭实例
- 消息内容

## 示例写法补充

生成 全局消息 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- Message 只承载短反馈。
- 需要用户确认时不要使用 Message。
- 文案简短明确。
