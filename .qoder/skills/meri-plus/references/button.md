---
name: meri-plus-button
description: Use when the user asks to generate, configure, debug, or document Meri Plus Button usage in a consumer Vue 3 application, including m-button/MButton examples, button type, size, loading, disabled, icon, icon-bg, icon-position, width, events, and slots. Do not use for modifying the Meri Plus component library implementation or unrelated page/backend/business workflow work.
---

# Meri Plus Button

Use this skill to produce consumer-side Vue 3 code for the Meri Plus Button component.

## Package Context

- Component library: `meri-plus`
- Theme CSS: `meri-plus/theme/index.css`
- Optional icon package: `meri-icon`
- Template component name: `m-button`
- Script component name: `MButton`

Follow the general Meri Plus rules from the project-level `meri-plus` skill: public APIs only, consumer Vue 3 examples, theme CSS from `meri-plus/theme/index.css`, and `meri-icon` names for icon props.

## Scope

Use this skill when the task is about:

- Creating `m-button` or `MButton` examples.
- Choosing Button `type`, `size`, `loading`, `disabled`, `icon`, `icon-bg`, `icon-position`, `width`, or `icon-size`.
- Explaining Button props, events, slots, and consumer-side usage.
- Building Vue SFC snippets, docs examples, or small consumer components that use Button.

Do not use it for:

- Changing the component library implementation.
- Designing unrelated components.
- Adding backend, routing, permission, or database logic.
- Generating full page layouts unless the user explicitly asks for a page example.

## Component Boundary

Button is a base action component. In consumer projects it should only:

- Display an action entry.
- Express action type, size, loading state, disabled state, and icon state.
- Emit `click` so business behavior stays outside the component usage itself.
- Extend content through the default slot and `icon` slot.

## Public API

Props:

- `size`: `large | medium | small`, default `medium`.
- `type`: `default | primary | danger | text | link | icon`, default `default`.
- `loading`: `boolean`, default `false`.
- `disabled`: `boolean`, default `false`.
- `icon-bg`: `boolean`, mainly for icon button usage.
- `icon-position`: `left | right`, default `left`.
- `width`: `string | number`, sets button width.
- `icon`: `string`, a `meri-icon` icon component name.
- `icon-size`: `number`, overrides icon size.

Events:

- `click`: emitted when a non-disabled button is clicked.

Slots:

- `default`: button text or main content.
- `icon`: custom icon content.

## Workflow

1. Confirm the user is using Button in a consumer Vue project.
2. Select the smallest valid Button pattern for the requested goal.
3. Use public props for state and appearance; do not invent unsupported props.
4. Use the default slot for text and the `icon` slot for custom icons.
5. Prefer the `icon` prop when the user names a `meri-icon` icon.
6. Use `loading` for loading state and `disabled` for disabled state; do not add extra click guards unless the user asks for business behavior.
7. Return copy-paste-ready Vue SFC, template snippets, or documentation text.

## Usage Patterns

- Primary action: `type="primary"`.
- Secondary/default action: omit `type` or use `type="default"`.
- Destructive action: `type="danger"`.
- Text-style action: `type="text"`.
- Link-style action: `type="link"`.
- Icon-only action: `type="icon"`, usually with `icon` or `#icon`; use `icon-bg` when a filled icon background is needed.
- Loading action: bind `:loading` to a reactive state.
- Disabled action: bind `:disabled` or pass `disabled`.

## Examples

Primary action:

```vue
<template>
  <m-button type="primary" size="medium" :loading="submitting" @click="submit">
    提交
  </m-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const submitting = ref(false)

function submit() {
  submitting.value = true
}
</script>
```

Icon button:

```vue
<template>
  <m-button type="icon" icon-bg icon="IconMeriActionHelp" size="medium" />
</template>
```

Right icon:

```vue
<template>
  <m-button type="default" icon="IconMeriActionArrowRight" icon-position="right">
    下一步
  </m-button>
</template>
```

Custom icon slot:

```vue
<template>
  <m-button type="primary">
    <template #icon>
      <IconMeriActionAdd />
    </template>
    新建
  </m-button>
</template>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 图标用法
- 加载状态
- 尺寸配置
- 类型配置
- 宽度配置

## 示例写法补充

```vue
<template>
  <m-button type="primary" size="medium" :loading="loading">提交</m-button>
</template>
```

## Quality Checks

- The output only uses the public Button API listed above.
- `loading`, `disabled`, and icon behavior are represented by Button props or slots.
- Icon buttons use `type="icon"` when the button has no text.
- Custom icons use the `icon` slot, and library icons use the `icon` prop.
- Examples are usable in a consumer Vue 3 project.
- The answer does not add backend logic or unrelated business flow unless requested.
