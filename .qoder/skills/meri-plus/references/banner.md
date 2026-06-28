---
name: meri-plus-banner
description: Use when the user asks to generate, configure, debug, or document Meri Plus Banner usage in a consumer Vue 3 application, including info/error/warn type, closable, message, width, close event, and message slot. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Banner

使用本 Skill 生成横幅提示组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-banner`
- 脚本组件名：`MBanner`

## Scope

适合生成页面顶部或局部横幅提醒。不要用于全局消息队列或弹窗确认。

## Component Boundary

Banner 负责展示固定区域提示和关闭入口；业务侧负责控制是否渲染和处理关闭。

## Public API

Props：

- `type`: `info | error | warn`，默认 `info`。
- `closable`: `boolean`，默认 `false`，是否显示关闭按钮。
- `message`: `string`，默认空字符串，横幅内容。
- `width`: `number`，默认 `232`，宽度。

Events：

- `close(event)`: 点击关闭时触发。

Slots：

- `message`: 自定义消息内容。

## Workflow

1. 根据提醒级别选择 `type`。
2. 简单文本使用 `message`。
3. 复杂内容使用 `message` 插槽。
4. 需要关闭时设置 `closable` 并处理 `close`。

## Usage Patterns

- 信息提示：`type="info"`。
- 错误提示：`type="error"`。
- 警告提示：`type="warn"`。

## Examples

```vue
<template>
  <m-banner type="warn" message="当前数据存在延迟" closable @close="visible = false" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(true)
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- close
- edit
- 类型配置

## 示例写法补充

生成 横幅提示 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 关闭状态由消费项目维护。
- 文案简短明确。
- 不用 Banner 替代 Modal 或 Message。
