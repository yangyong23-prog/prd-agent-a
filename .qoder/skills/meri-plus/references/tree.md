---
name: meri-plus-tree
description: Use when the user asks to generate, configure, debug, or document Meri Plus Tree usage in a consumer Vue 3 application, including tree data, single select, multiple select, checkStrictly, lastStage, virtual tree, filtering, lazy loading, node slots, events, and exposed methods. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus Tree

使用本 Skill 生成消费项目中的 Meri Plus 树组件用法。

## Package Context

- 组件库：`meri-plus`
- 主题样式：`meri-plus/theme/index.css`
- 模板组件名：`m-tree`
- 脚本组件名：`MTree`

## Scope

适合用于：

- 展示树形数据。
- 生成单选树、多选树、虚拟树、搜索树或懒加载树示例。
- 配置父子联动、仅末级可选、节点高亮、节点插槽和事件。
- 使用 `checkAll`、`changeExpand` 方法。

不适合用于：

- 下拉树选择；该场景优先使用 TreeSelect 或 SelectTree。
- 修改组件库内部树数据计算逻辑。
- 直接绑定后端分页或权限流程。

## Component Boundary

Tree 用于展示和选择树形数据。它负责节点渲染、展开收起、选中、勾选、过滤和懒加载触发；业务侧负责提供树数据、处理事件、维护选中值和异步数据源。

## Public API

Props：

- `data`: `array`，默认 `[]`，树结构数据。
- `v-model`: `array`，默认 `[]`，已选中节点信息。
- `props`: `object`，配置 label、children、class 等字段映射。
- `nodeKey`: `string`，默认 `id`，节点唯一标识。
- `multiple`: `boolean`，默认 `false`，是否多选。
- `defaultExpandAll`: `boolean`，默认 `false`，是否默认展开全部。
- `notNull`: `boolean`，默认 `true`，是否返回半选状态数据。
- `checkStrictly`: `boolean`，默认 `false`，多选时父子是否不联动。
- `returnParentNode`: `boolean`，默认 `false`，多选 change 中是否返回父节点。
- `lastStage`: `boolean`，默认 `false`，是否仅末级可选。
- `virtual`: `boolean`，默认 `false`，是否启用虚拟列表。
- `filterNodeMethod`: `function`，树过滤函数。
- `filterValue`: `string`，过滤关键字。
- `detachCheckAction`: `boolean`，默认 `false`，是否分离勾选和行点击。
- `readonly`: `boolean`，默认 `false`，是否只读展示。
- `height`: `number`，默认 `0`，树高度。
- `itemHeight`: `number`，默认 `40`，节点高度。
- `indent`: `number`，默认 `14`，水平缩进。
- `detachHoverAction`: `boolean`，默认 `false`，是否分离 hover 样式。
- `widthAuto`: `boolean`，默认 `false`，宽度是否自适应。
- `selectedExpand`: `boolean`，默认 `true`，选中项是否展开。
- `multipleHighlight`: `boolean`，默认 `false`，多选时行是否高亮。
- `highlightDisabled`: `boolean`，默认 `true`，禁用节点是否可高亮。
- `highlightItem`: `string`，默认空字符串，手动定义高亮节点。
- `checkHighlight`: `boolean`，默认 `true`，勾选节点是否高亮当前行。
- `searchAsTree`: `boolean`，默认 `false`，搜索结果是否以树形展示。
- `dataAutoSelect`: `boolean`，默认 `true`，是否自动计算关联节点选中状态。
- `beforeClick`: `function`，节点点击前钩子。
- `lazy`: `boolean`，默认 `false`，是否懒加载。
- `load`: `function`，懒加载节点时获取子节点。

Events：

- `change(ids, selectNode, currentNode)`: 选中变化时触发。
- `nodeClick(currentNode)`: 节点点击时触发。
- `nodeEnter(event, currentNode)`: 节点鼠标移入。
- `nodeLeave(event, currentNode)`: 节点鼠标移出。
- `nodeExpand(currentNode)`: 节点展开。
- `nodeCollapse(currentNode)`: 节点收起。

Methods：

- `checkAll(status: boolean)`: 多选情况下全选或取消全选。
- `changeExpand(status: boolean)`: 展开或收起整棵树。

Slots：

- `nodePrefix`: 节点前缀。
- `nodeSuffix`: 节点后缀。
- `rowSuffix`: 节点行后缀。
- `nodeSlot`: 自定义节点渲染。
- `searchSlot`: 自定义搜索结果面板。

## Workflow

1. 确认用户需要独立树组件。
2. 根据选择方式设置 `multiple`、`checkStrictly`、`lastStage`。
3. 大数据量场景设置 `virtual`、`height` 和 `itemHeight`。
4. 搜索场景使用 `filterValue` 和 `filterNodeMethod`。
5. 异步节点使用 `lazy` 和 `load`。
6. 用事件把交互结果交给业务侧处理。

## Usage Patterns

- 展示树：只传 `data`。
- 单选树：默认单选，监听 `change`。
- 多选树：设置 `multiple`。
- 父子不联动：设置 `checkStrictly`。
- 仅末级可选：设置 `lastStage`。
- 虚拟树：设置 `virtual` 并给出高度。
- 懒加载树：设置 `lazy` 和 `load`。

## Examples

```vue
<template>
  <m-tree
    v-model="checked"
    :data="treeData"
    multiple
    check-strictly
    node-key="id"
    @change="handleChange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const checked = ref([])
const treeData = ref([
  { id: 'root', name: '根节点', children: [{ id: 'child', name: '子节点' }] }
])

function handleChange(ids: unknown[], selected: unknown, current: unknown) {
  console.log(ids, selected, current)
}
</script>
```

## 示例覆盖

已从组件示例中抽象出以下消费项目用法，生成回答时优先复用这些能力点，代码需保持面向使用者、可复制、无内部路径。

- 基础用法、tree
- check、tree、父子不联动、detachHoverAction
- check、tree、detachCheckAction
- check、tree、hideCheckbox
- check、tree、仅末级可选、detachCheckAction
- check、tree、仅末级可选
- check、tree、notCheckStrictly、detachCheckAction
- check、tree、notCheckStrictly
- check、tree
- radio、tree、beforeClick
- radio、tree、detachHoverAction
- radio、tree、仅末级可选
- radio、tree、lazy
- radio、tree、nodeSlot
- radio、tree、插槽用法
- radio、tree
- test
- 虚拟滚动、tree

## 示例写法补充

```vue
<template>
  <m-tree v-model="checked" :data="treeData" multiple check-strictly />
</template>
```

## Quality Checks

- 树数据字段和 `props` 映射一致。
- 选择模式与业务意图一致。
- 大数据量场景优先考虑虚拟树。
- 不在示例中写内部树状态计算。
