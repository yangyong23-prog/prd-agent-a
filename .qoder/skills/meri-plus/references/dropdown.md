---
name: meri-plus-dropdown
description: Use when the user asks to generate, configure, debug, or document Meri Plus Dropdown usage in a consumer Vue 3 application, including options, trigger text, hover/click trigger, button/text type, arrow, search, manual open control, disabled options, slots, and option change events. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Dropdown

使用本 Skill 生成消费项目中的 Meri Plus 下拉菜单组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-dropdown`
- 脚本组件名：`MDropdown`

## Scope

适合用于：

- 生成基础下拉菜单、按钮触发下拉、搜索下拉和分组下拉示例。
- 配置 `options`、`text`、`type`、`trigger`、`showArrow`、`showSearch`。
- 使用 `v-model`、`v-model:search` 或手动打开控制。
- 处理选项点击和变化事件。

不适合用于：

- 承载复杂表单选择；该场景优先考虑 Select。
- 修改 Popover 或 Dropdown 内部实现。
- 生成业务权限菜单逻辑。

## Component Boundary

Dropdown 用于从触发器展示一组操作项。它负责菜单展示、搜索和选项点击；业务侧负责提供选项、处理点击结果和控制外部状态。

## Public API

Props：

- `options`: `array`，默认 `[]`，下拉数据列表。
- `text`: `string`，触发下拉菜单的文字。
- `type`: `text | button`，默认 `text`，触发器类型。
- `trigger`: `hover | click`，默认 `hover`，触发方式。
- `showArrow`: `boolean`，默认 `false`，是否显示箭头。
- `showSearch`: `boolean`，默认 `false`，是否显示搜索框。
- `search` / `v-model:search`: `string | number`，搜索值。
- `modelValue` / `v-model`: `boolean`，手动触发绑定值。
- `open` / `v-open`: `boolean`，手动控制显示隐藏。

Option：

- `label`: `string`，操作项内容，必填。
- `key`: `string`，操作项唯一标识，必填。
- `disabled`: `boolean`，是否禁用。
- `type`: `string`，分组类型，例如 `divider`。
- `divider`: `boolean`，是否展示分割线。
- `slotName`: `string`，每项插槽名称。

Events / Methods：

- `show(status)`: 下拉菜单展开回调。
- `close(status)`: 下拉菜单关闭回调。
- `change(value, option)`: 选中值变化时触发。
- `optionClick(value, option)`: 选项点击时触发。
- `btnClick(event)`: 按钮类型触发器点击时触发。

Slots：

- `empty`: 空状态。
- `slotName`: 自定义选项内容。

## Workflow

1. 确认用户需要操作菜单，而不是表单选择器。
2. 用 `options` 提供稳定 `key` 和展示 `label`。
3. 根据交互选择 `trigger="hover"` 或 `trigger="click"`。
4. 需要按钮触发时设置 `type="button"`。
5. 需要搜索时设置 `showSearch` 并绑定 `v-model:search`。
6. 用 `change` 或 `optionClick` 处理选择结果。

## Usage Patterns

- 文本触发：默认 `type="text"`。
- 按钮触发：`type="button"`。
- 点击触发：`trigger="click"`。
- 禁用选项：在 option 上设置 `disabled`。
- 分组或分割线：使用 `type="divider"` 或 `divider`。

## Examples

```vue
<template>
  <m-dropdown
    text="更多操作"
    type="button"
    trigger="click"
    :options="options"
    @change="handleChange"
  />
</template>

<script setup lang="ts">
const options = [
  { label: '编辑', key: 'edit' },
  { label: '删除', key: 'delete', disabled: true }
]

function handleChange(value: string, option: unknown) {
  console.log(value, option)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 分组数据
- 基础用法
- 自定义下拉内容
- 禁用状态
- 搜索能力
- 显示箭头
- 插槽用法
- 溢出提示
- 触发器配置

## 示例写法补充

生成 下拉菜单 示例时，优先从上面的能力点选择最小组合；如果用户没有指定复杂场景，使用基础用法，并只加入必要的 props、events 和 slots。

## Quality Checks

- 每个 option 都有稳定 `key`。
- 禁用项使用 `disabled`，不在事件中二次模拟禁用。
- 操作结果交给业务侧处理。
- 不把 Dropdown 当作复杂选择表单使用。
