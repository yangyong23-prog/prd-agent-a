---
name: meri-plus
description: Use when the user asks how to use the Meri Plus component library in a consumer Vue 3 application, including installation context, global component naming, theme CSS import, icon package usage, public API guidance, or general component-library usage rules. Do not use for modifying the Meri Plus component library implementation.
---

# Meri Plus

Use this skill to guide consumer-side usage of the Meri Plus Vue 3 component library.

## Package Context

- Component library package: `meri-plus`
- Theme CSS entry: `meri-plus/theme/index.css`
- Optional icon package: `meri-icon`
- Framework: Vue 3
- Preferred code format: Vue SFC
- TypeScript: supported

## Naming Rules

- Template components use kebab-case with the `m` prefix, for example `m-button`.
- Script components use PascalCase with the `M` prefix, for example `MButton`.
- Prefer template usage when components are globally registered.
- Prefer script imports only when the user says the project uses on-demand imports.

## Usage Rules

1. Generate code for consumer Vue projects, not component-library source maintenance.
2. Prefer public component props, events, slots, and documented usage patterns.
3. Include `meri-plus/theme/index.css` when the user asks for setup or a complete example.
4. Use `meri-icon` component names when a Meri Plus component accepts an icon prop.
5. Keep examples copy-paste-ready and avoid unnecessary business logic.
6. If the user asks about a specific component, load only the relevant file from `references/`.

## Component References

Load the smallest matching reference file when the user asks about a specific component:

| Component topic | Reference |
|---|---|
| Anchor | `references/anchor.md` |
| Avatar | `references/avatar.md` |
| Badge | `references/badge.md` |
| Banner | `references/banner.md` |
| Breadcrumb | `references/breadcrumb.md` |
| Button | `references/button.md` |
| Cascader | `references/cascader.md` |
| Checkbox | `references/checkbox.md` |
| Collapse | `references/collapse.md` |
| Date Picker | `references/date-picker.md` |
| Drawer | `references/drawer.md` |
| Dropdown | `references/dropdown.md` |
| File Upload | `references/file-upload.md` |
| Form | `references/form.md` |
| Guide | `references/guide.md` |
| Icon | `references/icon.md` |
| Input | `references/input.md` |
| Loading | `references/loading.md` |
| Message | `references/message.md` |
| Modal | `references/modal.md` |
| Pagination | `references/pagination.md` |
| Popover | `references/popover.md` |
| Radio | `references/radio.md` |
| Search | `references/search.md` |
| Select | `references/select.md` |
| Sidebar | `references/sidebar.md` |
| Steps | `references/steps.md` |
| Switch | `references/switch.md` |
| Table | `references/table.md` |
| Tabs | `references/tabs.md` |
| Tag | `references/tag.md` |
| Transfer | `references/transfer.md` |
| Tree | `references/tree.md` |

## Style Guidance

- Prefer the library theme CSS instead of recreating component styles.
- If custom styles are needed, scope them to the consumer component or wrapper.
- Do not rely on internal class names or internal design-token implementation details unless the user explicitly provides them as part of their own project code.

## Quality Checks

- The answer targets a consumer Vue 3 application.
- The code uses public package names and public component APIs.
- Examples can run without access to component-library source files.
- No backend, routing, permission, or unrelated workflow logic is added unless requested.
