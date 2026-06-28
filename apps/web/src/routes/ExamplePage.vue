<script setup lang="ts">
import type { TodoItem, UpdateTodoRequest } from "@app/api-contract";
import {
  createTodo,
  deleteTodo,
  listTodos,
  queryGatewayInfoPointPeriod,
  updateTodo,
} from "@/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { Check, Pencil, Play, Plus, Trash2, X } from "lucide-vue-next";
import { computed, reactive, ref } from "vue";

const queryClient = useQueryClient();
const newTodoTitle = ref("");
const editingTodo = reactive({
  id: 0,
  title: "",
});
const errorMessage = ref("");
const gatewayResult = ref("");
const gatewayErrorMessage = ref("");
const todoColumns = [
  {
    title: "状态",
    dataIndex: "completed",
    width: 140,
    minWidth: 140,
    resizable: false,
  },
  {
    title: "标题",
    dataIndex: "title",
    minWidth: 240,
    ellipsis: true,
  },
  {
    title: "操作",
    dataIndex: "actions",
    width: 200,
    minWidth: 200,
    align: "right",
    resizable: false,
  },
];

const todosQuery = useQuery({
  queryKey: ["todos"],
  queryFn: listTodos,
});

const todos = computed(() => todosQuery.data.value?.items ?? []);

const unfinishedCount = computed(
  () => todos.value.filter((todo) => !todo.completed).length,
);

function invalidateTodos() {
  return queryClient.invalidateQueries({ queryKey: ["todos"] });
}

const createTodoMutation = useMutation({
  mutationFn: createTodo,
  onSuccess: async () => {
    newTodoTitle.value = "";
    errorMessage.value = "";
    await invalidateTodos();
  },
  onError: (error) => {
    errorMessage.value = error instanceof Error ? error.message : "新增失败";
  },
});

const updateTodoMutation = useMutation({
  mutationFn: ({ id, payload }: { id: number; payload: UpdateTodoRequest }) =>
    updateTodo(id, payload),
  onSuccess: async () => {
    editingTodo.id = 0;
    editingTodo.title = "";
    errorMessage.value = "";
    await invalidateTodos();
  },
  onError: (error) => {
    errorMessage.value = error instanceof Error ? error.message : "更新失败";
  },
});

const deleteTodoMutation = useMutation({
  mutationFn: deleteTodo,
  onSuccess: async () => {
    errorMessage.value = "";
    await invalidateTodos();
  },
  onError: (error) => {
    errorMessage.value = error instanceof Error ? error.message : "删除失败";
  },
});

const gatewayTestMutation = useMutation({
  mutationFn: queryGatewayInfoPointPeriod,
  onSuccess: (result) => {
    gatewayResult.value = JSON.stringify(result, null, 2);
    gatewayErrorMessage.value = "";
  },
  onError: (error) => {
    gatewayResult.value = "";
    gatewayErrorMessage.value = error instanceof Error ? error.message : "网关请求失败";
  },
});

/** 新建 todo 时先做前端空值约束，再交给契约 schema 做最终校验。 */
function submitTodo() {
  const title = newTodoTitle.value.trim();
  if (!title) {
    errorMessage.value = "请输入 todo 标题。";
    return;
  }

  createTodoMutation.mutate({ title });
}

function startEditing(todo: TodoItem) {
  editingTodo.id = todo.id;
  editingTodo.title = todo.title;
}

function cancelEditing() {
  editingTodo.id = 0;
  editingTodo.title = "";
}

function saveEditing(id: number) {
  const title = editingTodo.title.trim();
  if (!title) {
    errorMessage.value = "todo 标题不能为空。";
    return;
  }

  updateTodoMutation.mutate({ id, payload: { title } });
}

function toggleTodo(todo: TodoItem) {
  updateTodoMutation.mutate({
    id: todo.id,
    payload: { completed: !todo.completed },
  });
}

function checkboxState(todo: TodoItem) {
  return todo.completed ? "checked" : "uncheck";
}
</script>

<template>
  <section class="space-y-5">
    <div class="rounded-lg border border-slate-200 bg-white p-5">
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 class="text-lg font-semibold">Data Service 网关测试</h2>
          <p class="mt-1 text-sm text-slate-500">
            调用 data-service 的 POST /rwd/ipcal/point/queryInfoPointPeroid 接口。
          </p>
        </div>
      </div>

      <div class="mt-4 flex flex-col gap-3 md:flex-row md:justify-end">
        <button
          type="button"
          class="inline-flex h-9 min-w-[132px] items-center justify-center gap-1 whitespace-nowrap rounded-md border border-blue-200 bg-white px-4 text-sm font-medium text-blue-700 transition hover:border-blue-300 hover:bg-blue-50 disabled:cursor-not-allowed disabled:border-blue-100 disabled:text-blue-300"
          :disabled="gatewayTestMutation.isPending.value"
          @click="gatewayTestMutation.mutate()"
        >
          <Play class="h-4 w-4" />
          <span>{{ gatewayTestMutation.isPending.value ? "请求中" : "测试网关请求" }}</span>
        </button>
      </div>

      <pre
        v-if="gatewayResult"
        class="mt-4 max-h-72 overflow-auto rounded-md bg-slate-950 p-3 text-xs leading-5 text-slate-50"
      >{{ gatewayResult }}</pre>
      <p
        v-if="gatewayErrorMessage"
        class="mt-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700"
      >
        {{ gatewayErrorMessage }}
      </p>
    </div>

    <div class="rounded-lg border border-slate-200 bg-white p-5">
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 class="text-xl font-semibold">Example Todo</h2>
          <p class="mt-1 text-sm text-slate-500">
            基于 MySQL todo 表的增删改查示例。
          </p>
        </div>
        <div class="rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-600">
          未完成：<span class="font-semibold text-blue-700">{{ unfinishedCount }}</span>
        </div>
      </div>

      <form class="mt-5 flex flex-col gap-3 md:flex-row" @submit.prevent="submitTodo">
        <MInput
          v-model="newTodoTitle"
          class="min-w-0 flex-1"
          width="100%"
          placeholder="输入新的 todo"
        />
        <button
          type="submit"
          class="inline-flex h-9 min-w-24 items-center justify-center gap-1 rounded-md bg-blue-600 px-4 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
          :disabled="createTodoMutation.isPending.value"
        >
          <Plus class="h-4 w-4" />
          <span>{{ createTodoMutation.isPending.value ? "新增中" : "新增" }}</span>
        </button>
      </form>

      <p v-if="errorMessage" class="mt-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
        {{ errorMessage }}
      </p>
    </div>

    <div class="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <MTable
        :columns="todoColumns"
        :data-source="todos"
        :resizable="false"
        :even-color="true"
        empty-text="-"
      >
        <template #completed="todo">
          <MCheckbox
            :model-value="checkboxState(todo)"
            :disabled="updateTodoMutation.isPending.value"
            @change="toggleTodo(todo)"
          >
            {{ todo.completed ? "已完成" : "待处理" }}
          </MCheckbox>
        </template>

        <template #title="todo">
          <div v-if="editingTodo.id === todo.id" class="min-w-0">
            <MInput v-model="editingTodo.title" width="100%" />
          </div>
          <div v-else class="min-w-0">
            <p
              class="truncate text-sm font-medium"
              :class="todo.completed ? 'text-slate-400 line-through' : 'text-slate-900'"
            >
              {{ todo.title }}
            </p>
            <p class="mt-1 text-xs text-slate-400">#{{ todo.id }}</p>
          </div>
        </template>

        <template #actions="todo">
          <div class="flex justify-end gap-2">
            <button
              v-if="editingTodo.id === todo.id"
              type="button"
              class="inline-flex h-8 min-w-[72px] items-center justify-center gap-1 whitespace-nowrap rounded-md bg-blue-600 px-3 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
              :disabled="updateTodoMutation.isPending.value"
              @click="saveEditing(todo.id)"
            >
              <Check class="h-4 w-4" />
              <span>保存</span>
            </button>
            <button
              v-if="editingTodo.id === todo.id"
              type="button"
              class="inline-flex h-8 min-w-[72px] items-center justify-center gap-1 whitespace-nowrap rounded-md border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              @click="cancelEditing"
            >
              <X class="h-4 w-4" />
              <span>取消</span>
            </button>
            <button
              v-if="editingTodo.id !== todo.id"
              type="button"
              class="inline-flex h-8 min-w-[72px] items-center justify-center gap-1 whitespace-nowrap rounded-md border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              @click="startEditing(todo)"
            >
              <Pencil class="h-4 w-4" />
              <span>编辑</span>
            </button>
            <button
              v-if="editingTodo.id !== todo.id"
              type="button"
              class="inline-flex h-8 min-w-[72px] items-center justify-center gap-1 whitespace-nowrap rounded-md border border-red-200 bg-white px-3 text-sm font-medium text-red-600 transition hover:border-red-300 hover:bg-red-50 disabled:cursor-not-allowed disabled:border-red-100 disabled:text-red-300"
              :disabled="deleteTodoMutation.isPending.value"
              @click="deleteTodoMutation.mutate(todo.id)"
            >
              <Trash2 class="h-4 w-4" />
              <span>删除</span>
            </button>
          </div>
        </template>

        <template #nodata>
          <div class="px-4 py-8 text-center text-sm text-slate-500">
            {{ todosQuery.isLoading.value ? "加载中" : "暂无 todo" }}
          </div>
        </template>
      </MTable>
    </div>
  </section>
</template>
