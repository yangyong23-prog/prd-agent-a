import type { PrismaClient } from "@prisma/client";
import type { CreateTodoRequest, UpdateTodoRequest } from "@app/api-contract";
import { createPrismaClient } from "../lib/prisma.js";

/**
 * Todo 数据记录，与数据库表结构保持一致。
 */
export type TodoRecord = {
  id: number;
  tenantId: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Todo 服务接口，封装 tenant 维度的增删改查操作。
 */
export type TodoService = {
  list(tenantId: string): Promise<TodoRecord[]>;
  create(tenantId: string, payload: CreateTodoRequest): Promise<TodoRecord>;
  update(
    tenantId: string,
    id: number,
    payload: UpdateTodoRequest,
  ): Promise<TodoRecord>;
  remove(tenantId: string, id: number): Promise<void>;
};

/**
 * 创建按租户隔离的 Todo 服务。
 *
 * 读写操作都会显式携带 tenantId，避免仅凭业务主键跨租户访问。
 */
export function createTodoService(
  datasourceUrl: string,
  prisma: PrismaClient = createPrismaClient(datasourceUrl),
): TodoService {
  return {
    async list(tenantId) {
      return prisma.todo.findMany({
        where: { tenantId },
        orderBy: [{ completed: "asc" }, { createdAt: "desc" }],
      });
    },

    async create(tenantId, payload) {
      return prisma.todo.create({
        data: {
          tenantId,
          title: payload.title,
        },
      });
    },

    async update(tenantId, id, payload) {
      await prisma.todo.updateMany({
        where: { id, tenantId },
        data: payload,
      });

      return prisma.todo.findFirstOrThrow({
        where: { id, tenantId },
      });
    },

    async remove(tenantId, id) {
      await prisma.todo.deleteMany({
        where: { id, tenantId },
      });
    },
  };
}
