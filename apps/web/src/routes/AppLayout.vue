<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";

const route = useRoute();
const selectedDate = ref("");
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-950">
    <aside class="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white px-5 py-6 lg:block">
      <div class="mb-8">
        <p class="text-xs font-medium uppercase tracking-wider text-blue-600">Admin Template</p>
        <h1 class="mt-2 text-xl font-semibold">Fastify Vue 管理后台</h1>
      </div>

      <nav class="space-y-1">
        <RouterLink
          to="/"
          class="block rounded-md px-3 py-2 text-sm font-medium transition hover:bg-blue-50 hover:text-blue-700"
          :class="route.name === 'dashboard' ? 'bg-blue-50 text-blue-700' : 'text-slate-600'"
        >
          工作台
        </RouterLink>
        <RouterLink
          to="/example"
          class="block rounded-md px-3 py-2 text-sm font-medium transition hover:bg-blue-50 hover:text-blue-700"
          :class="route.name === 'example' ? 'bg-blue-50 text-blue-700' : 'text-slate-600'"
        >
          Example Todo
        </RouterLink>
      </nav>
    </aside>

    <div class="lg:pl-64">
      <header class="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div class="flex h-16 items-center justify-between px-5 lg:px-8">
          <div>
            <p class="text-sm font-medium text-slate-500">Vue3 + meri-plus</p>
            <p class="text-lg font-semibold">企业后台业务脚手架</p>
          </div>
          <div class="flex items-center gap-3">
            <m-date-picker
              v-model="selectedDate"
              type="date"
              :width="220"
              clearable
              placeholder="选择日期"
            />
            <RouterLink to="/login">
              <MButton type="primary">登录页</MButton>
            </RouterLink>
          </div>
        </div>
      </header>

      <main class="px-5 py-6 lg:px-8">
        <RouterView />
      </main>
    </div>
  </div>
</template>
