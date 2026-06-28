import type { DefineComponent } from "vue";

declare module "vue" {
  export interface GlobalComponents {
    MBadge: DefineComponent;
    MButton: DefineComponent;
    MDatePicker: DefineComponent;
    MInput: DefineComponent;
  }
}

export {};
