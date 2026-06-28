---
name: meri-plus-guide
description: Use when the user asks to generate, configure, debug, or document Meri Plus Guide usage in a consumer Vue 3 application, including single-step guide, multi-step guide, visible control, custom title/content/action slots, offsets, close, and closeall events. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Guide

使用本 Skill 生成消费项目中的 Meri Plus 新手指导组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-guide`
- 脚本组件名：`MGuide`

## Scope

适合用于：

- 生成单步骤或多步骤新手引导示例。
- 配置标题、内容、按钮文字、步骤信息和偏移量。
- 使用插槽自定义标题、内容和底部操作区。
- 处理 `close` 和 `closeall` 事件。

不适合用于：

- 实现复杂产品引导状态机。
- 修改组件库内部定位或动画逻辑。
- 添加业务接口或用户权限逻辑。

## Component Boundary

Guide 用于围绕触发器展示引导浮层。它负责展示引导标题、内容、步骤和操作区；业务侧负责控制 `visible`、切换步骤和决定是否结束引导。

## Public API

Props：

- `visible`: `boolean`，默认 `true`，控制显隐。
- `step`: `single | multiple`，默认 `single`，单步骤或多步骤。
- `title`: `string`，默认空字符串，标题文案。
- `content`: `string`，默认空字符串，内容文案。
- `singleText`: `string`，默认 `我知道了`，单步骤按钮文案。
- `stepTip`: `object`，多步骤信息，例如当前步、总数、跳过和下一步文案。
- `deviationLeft`: `number`，默认 `0`，左右偏移。
- `deviationTop`: `number`，默认 `0`，上下偏移。
- `deviationArrow`: `number`，默认 `0`，箭头偏移。

Events：

- `close(event)`: 单步骤确认按钮点击时触发。
- `closeall(event)`: 多步骤跳过全部按钮点击时触发。

Slots：

- `default`: 引导触发器。
- `guidtitle`: 自定义标题。
- `guidcontent`: 自定义内容。
- `guidstep`: 自定义底部操作栏。

## Workflow

1. 确认用户需要围绕某个触发器展示引导浮层。
2. 单步骤使用 `step="single"`，多步骤使用 `step="multiple"`。
3. 简单文案使用 props，自定义结构使用插槽。
4. 在 `close` 或 `closeall` 中由业务侧更新 `visible`。
5. 需要位置微调时使用偏移 props。

## Usage Patterns

- 单步骤：用于一次性提示。
- 多步骤：用于产品功能引导。
- 插槽模式：用于标题、内容或底部操作区需要自定义结构。

## Examples

```vue
<template>
  <m-guide
    :visible="visible"
    title="新功能提示"
    content="这里可以查看设备运行状态。"
    single-text="我知道了"
    @close="visible = false"
  >
    <m-button type="primary">查看功能</m-button>
  </m-guide>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(true)
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 多步骤或多选用法
- 单步骤用法
- 插槽用法

## 示例写法补充

生成 新手指导 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- `visible` 由消费项目显式控制。
- 关闭事件中明确更新显隐状态。
- 自定义内容优先使用公开插槽。
- 不把引导流程和业务接口耦合。
