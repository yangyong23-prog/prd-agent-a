---
name: meri-plus-loading
description: Use when the user asks to generate, configure, debug, or document Meri Plus Loading usage in a consumer Vue 3 application, including service loading, directive loading, target, fullscreen, lock, background, progressBar, lottieName, failText, reload, and destroy. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Loading

使用本 Skill 生成加载状态用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 使用方式：`Loading.service(options)` 或指令。

## Scope

适合生成全局加载、局部加载、进度条加载和失败重试。不要用于业务请求封装本身。

## Component Boundary

Loading 负责加载遮罩和动画；业务侧负责请求状态、关闭和重试。

## Public API

Options：

- `target`: `string`，默认 `document.body`。
- `fullscreen`: `boolean`，默认 `true`。
- `lock`: `boolean`，默认 `false`。
- `background`: `string`。
- `progressBar`: `boolean`，默认 `false`。
- `duration`: `number`，默认 `10`。
- `lottieName` / `element-loading-lottieName`: `plane | ball | circle`。
- `loadTextOptions`: `object`。
- `failText`: `string`。
- `loadButton`: `function`。
- `customClass`: `string`。
- `reload`: `function`。
- `loadIconStyle`: `object`。
- `setTimeoutOs`: `number`。

Instance：

- `destroy()`: 关闭 Loading。
- `reload()`: 重新加载。

## Workflow

1. 全局加载使用 `fullscreen`。
2. 局部加载设置 `target`。
3. 请求结束后调用 `destroy()`。
4. 需要失败重试时设置 `failText` 和 `reload`。

## Usage Patterns

- 页面加载：全屏。
- 区块加载：指定 target。
- 进度条：服务调用中设置 `progressBar`。

## Examples

```ts
import { Loading } from 'meri-plus'

const loading = Loading.service({ fullscreen: true, lock: true })

setTimeout(() => {
  loading.destroy()
}, 1000)
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- demo
- demo2

## 示例写法补充

生成 加载 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 必须在合适时机关闭实例。
- 局部加载 target 必须存在。
- 不把 Loading 写成请求库。
