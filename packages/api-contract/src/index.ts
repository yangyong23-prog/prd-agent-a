import { z } from "zod";

/**
 * 健康检查接口响应契约。
 */
export const healthResponseSchema = z.object({
  status: z.literal("ok"),
  service: z.string(),
  timestamp: z.string().datetime(),
});

/**
 * 健康检查接口响应类型。
 */
export type HealthResponse = z.infer<typeof healthResponseSchema>;

/**
 * 登录接口请求体契约。
 */
export const loginRequestSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
  tenantId: z.string().min(1),
});

/**
 * 登录接口请求体类型。
 */
export type LoginRequest = z.infer<typeof loginRequestSchema>;

/**
 * 登录接口响应契约。
 */
export const loginResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  user: z.object({
    id: z.string(),
    name: z.string(),
    roles: z.array(z.string()),
    tenantId: z.string(),
  }),
});

/**
 * 登录接口响应类型。
 */
export type LoginResponse = z.infer<typeof loginResponseSchema>;

/**
 * 租户摘要响应契约。
 */
export const tenantSummarySchema = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
});

/**
 * 租户摘要类型。
 */
export type TenantSummary = z.infer<typeof tenantSummarySchema>;

/**
 * Todo 明细响应契约。
 */
export const todoItemSchema = z.object({
  id: z.number().int().positive(),
  tenantId: z.string().min(1),
  title: z.string().min(1),
  completed: z.boolean(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

/**
 * Todo 明细类型。
 */
export type TodoItem = z.infer<typeof todoItemSchema>;

/**
 * Todo 列表响应契约。
 */
export const todoListResponseSchema = z.object({
  items: z.array(todoItemSchema),
});

/**
 * Todo 列表响应类型。
 */
export type TodoListResponse = z.infer<typeof todoListResponseSchema>;

/**
 * 新增 Todo 请求体契约。
 */
export const createTodoRequestSchema = z.object({
  title: z.string().trim().min(1).max(200),
});

/**
 * 新增 Todo 请求体类型。
 */
export type CreateTodoRequest = z.infer<typeof createTodoRequestSchema>;

/**
 * 更新 Todo 请求体契约，至少需要提供一个可更新字段。
 */
export const updateTodoRequestSchema = z
  .object({
    title: z.string().trim().min(1).max(200).optional(),
    completed: z.boolean().optional(),
  })
  .refine((value) => value.title !== undefined || value.completed !== undefined, {
    message: "At least one todo field must be provided.",
  });

/**
 * 更新 Todo 请求体类型。
 */
export type UpdateTodoRequest = z.infer<typeof updateTodoRequestSchema>;
