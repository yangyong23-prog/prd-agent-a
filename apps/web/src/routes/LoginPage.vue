<script setup lang="ts">
import type { LoginRequest } from "@app/api-contract";
import { login } from "@/lib/api";
import { useMutation } from "@tanstack/vue-query";
import { KeyRound } from "lucide-vue-next";
import { computed, reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const form = reactive<LoginRequest>({
  tenantId: "default",
  username: "admin",
  password: "admin",
});
const errorMessage = ref("");

const loginMutation = useMutation({
  mutationFn: login,
  onSuccess: () => {
    errorMessage.value = "";
    void router.push("/");
  },
  onError: (error) => {
    errorMessage.value = error instanceof Error ? error.message : "登录失败";
  },
});

const canSubmit = computed(
  () =>
    form.tenantId.trim().length > 0 &&
    form.username.trim().length > 0 &&
    form.password.trim().length > 0 &&
    !loginMutation.isPending.value,
);

/**
 * 提交登录表单时复用统一 API 入口，确保租户请求头由 `login` 方法注入。
 */
function submitLogin() {
  if (!canSubmit.value) {
    errorMessage.value = "请填写租户、用户名和密码。";
    return;
  }

  loginMutation.mutate({
    tenantId: form.tenantId.trim(),
    username: form.username.trim(),
    password: form.password,
  });
}
</script>

<template>
  <main class="grid min-h-screen place-items-center bg-slate-50 px-4 py-10">
    <section class="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div class="flex items-center gap-3">
        <div class="grid h-10 w-10 place-items-center rounded-md bg-blue-50 text-blue-600">
          <KeyRound class="h-5 w-5" />
        </div>
        <div>
          <h1 class="text-xl font-semibold">登录管理后台</h1>
          <p class="text-sm text-slate-500">Vue3 + meri-plus 模板入口</p>
        </div>
      </div>

      <form class="mt-6 space-y-4" @submit.prevent="submitLogin">
        <label class="block space-y-1">
          <span class="text-sm font-medium text-slate-700">租户 ID</span>
          <MInput v-model="form.tenantId" width="100%" placeholder="default" />
        </label>

        <label class="block space-y-1">
          <span class="text-sm font-medium text-slate-700">用户名</span>
          <MInput v-model="form.username" width="100%" placeholder="admin" />
        </label>

        <label class="block space-y-1">
          <span class="text-sm font-medium text-slate-700">密码</span>
          <MInput
            v-model="form.password"
            type="password"
            width="100%"
            placeholder="admin"
          />
        </label>

        <p v-if="errorMessage" class="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {{ errorMessage }}
        </p>

        <MButton type="primary" class="w-full" :disabled="!canSubmit">
          {{ loginMutation.isPending.value ? "登录中" : "登录" }}
        </MButton>
      </form>
    </section>
  </main>
</template>
