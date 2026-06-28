import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory, type RouterHistory } from "vue-router";

import AppLayout from "./routes/AppLayout.vue";
import DashboardPage from "./routes/DashboardPage.vue";
import ExamplePage from "./routes/ExamplePage.vue";
import LoginPage from "./routes/LoginPage.vue";

/**
 * 前端路由表，定义应用主布局与示例页面的可访问路径。
 */
export const routeDefinitions: RouteRecordRaw[] = [
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "",
        name: "dashboard",
        component: DashboardPage,
      },
      {
        path: "example",
        name: "example",
        component: ExamplePage,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
];

/**
 * 创建前端路由实例，显式接收 Vite base，保持微应用部署路径可配置。
 */
export function createAppRouter(
  base: string,
  history: RouterHistory = createWebHistory(base),
) {
  return createRouter({
    history,
    routes: routeDefinitions,
  });
}
