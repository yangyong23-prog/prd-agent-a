<script setup lang="ts">
import { getHealth } from "@/lib/api";
import { useQuery } from "@tanstack/vue-query";
import { Activity, Database, Layers3, ShieldCheck } from "lucide-vue-next";
import { computed } from "vue";

const healthQuery = useQuery({
  queryKey: ["health"],
  queryFn: getHealth,
  retry: 1,
});

const serviceStatus = computed(() => {
  if (healthQuery.isLoading.value) {
    return "检查中";
  }

  if (healthQuery.isError.value) {
    return "异常";
  }

  return healthQuery.data.value?.status ?? "未知";
});

const capabilityGroups = [
  {
    title: "前端应用",
    description: "Vue3、Vue Router、TanStack Vue Query 和 Tailwind CSS。",
    icon: Layers3,
  },
  {
    title: "组件体系",
    description: "使用 meri-plus 作为 Vue3 基础组件库。",
    icon: Activity,
  },
  {
    title: "接口契约",
    description: "通过 packages/api-contract 复用 Zod schema 与 DTO 类型。",
    icon: ShieldCheck,
  },
  {
    title: "基础设施",
    description: "后端使用 Fastify，数据层使用 Prisma、MySQL 和 Redis。",
    icon: Database,
  },
];
</script>

<template>
  <section class="space-y-6">
    <div class="rounded-lg border border-slate-200 bg-white p-6">
      <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <MBadge type="primary">Vue3 + Vite</MBadge>
          <h2 class="mt-4 text-2xl font-semibold">企业后台模板</h2>
          <p class="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            面向 qiankun 类微应用集成，内置共享配置、接口契约、租户请求头和 meri-plus 组件基线。
          </p>
        </div>

        <div class="rounded-md bg-slate-50 px-4 py-3 text-sm">
          <p class="text-slate-500">API 服务状态</p>
          <p class="mt-1 text-lg font-semibold" :class="healthQuery.isError.value ? 'text-red-600' : 'text-emerald-600'">
            {{ serviceStatus }}
          </p>
        </div>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <article
        v-for="item in capabilityGroups"
        :key="item.title"
        class="rounded-lg border border-slate-200 bg-white p-5"
      >
        <component :is="item.icon" class="h-5 w-5 text-blue-600" />
        <h3 class="mt-4 text-base font-semibold">{{ item.title }}</h3>
        <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.description }}</p>
      </article>
    </div>
  </section>
</template>
