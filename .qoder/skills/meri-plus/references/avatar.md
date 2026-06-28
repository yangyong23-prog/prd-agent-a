---
name: meri-plus-avatar
description: Use when the user asks to generate, configure, debug, or document Meri Plus Avatar usage in a consumer Vue 3 application, including image, logo, text avatar, iconName, colors, size, fit, radius, onError, and default slot. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Avatar

使用本 Skill 生成头像组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-avatar`
- 脚本组件名：`MAvatar`

## Scope

适合生成图片头像、图标头像、文字头像和加载失败处理。不要用于复杂用户资料卡。

## Component Boundary

Avatar 负责头像内容展示；业务侧负责提供图片地址、文字、图标名和失败兜底逻辑。

## Public API

Props：

- `type`: `image | logo | text`，默认 `image`。
- `iconName`: `string`，图标名称。
- `color`: `string`，默认 `#8d9399`，文本颜色。
- `bgColor`: `string`，默认 `#eff0f1`，背景色。
- `fontSize`: `number`，默认 `14`。
- `radius`: `string`，默认 `100%`。
- `src`: `string`，图片地址。
- `size`: `small | medium | large`。
- `fit`: `fill | contain | cover | none | scale-down`，默认 `fill`。

Events：

- `onError(event)`: 图片加载失败时触发。

Slots：

- `default`: 自定义头像内容。

## Workflow

1. 图片头像使用 `type="image"` 和 `src`。
2. 文本头像使用 `type="text"` 并配置颜色。
3. 图标头像使用 `type="logo"` 和 `iconName`。
4. 图片失败处理使用 `onError`。

## Usage Patterns

- 用户头像：图片优先，失败时业务侧处理兜底。
- 缩写头像：使用文本类型和默认插槽。
- 圆形头像：默认 `radius="100%"`。

## Examples

```vue
<template>
  <m-avatar type="image" src="/avatar.png" size="medium" @onError="handleError" />
</template>

<script setup lang="ts">
function handleError(event: Event) {
  console.log(event)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 图片适应方式
- 图标用法
- 圆角配置
- 尺寸配置
- 文本内容

## 示例写法补充

生成 头像 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 图片地址由消费项目提供。
- 文字或图标头像不要混用无效 props。
- 加载失败只处理兜底，不写内部逻辑。
