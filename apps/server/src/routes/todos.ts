import {
  createTodoRequestSchema,
  todoItemSchema,
  todoListResponseSchema,
  updateTodoRequestSchema,
} from "@app/api-contract";
import type { FastifyInstance } from "fastify";
import { z } from "zod";
import type { TodoRecord, TodoService } from "../services/todoService.js";

const todoParamsSchema = z.object({
  id: z.coerce.number().int().positive(),
});

function serializeTodo(todo: TodoRecord) {
  return todoItemSchema.parse({
    ...todo,
    createdAt: todo.createdAt.toISOString(),
    updatedAt: todo.updatedAt.toISOString(),
  });
}

/**
 * Registers tenant-scoped todo CRUD routes. The tenant plugin must have already
 * populated request.tenantContext for these protected endpoints.
 */
export async function registerTodoRoutes(
  app: FastifyInstance,
  todoService: TodoService,
) {
  app.get("/todos", async (request) => {
    const tenantId = request.tenantContext?.tenantId;
    if (!tenantId) {
      throw app.httpErrors.unauthorized("Tenant context is required.");
    }

    const items = await todoService.list(tenantId);
    return todoListResponseSchema.parse({
      items: items.map(serializeTodo),
    });
  });

  app.post("/todos", async (request, reply) => {
    const tenantId = request.tenantContext?.tenantId;
    if (!tenantId) {
      throw app.httpErrors.unauthorized("Tenant context is required.");
    }

    const payload = createTodoRequestSchema.parse(request.body);
    const todo = await todoService.create(tenantId, payload);
    return reply.code(201).send(serializeTodo(todo));
  });

  app.patch("/todos/:id", async (request) => {
    const tenantId = request.tenantContext?.tenantId;
    if (!tenantId) {
      throw app.httpErrors.unauthorized("Tenant context is required.");
    }

    const { id } = todoParamsSchema.parse(request.params);
    const payload = updateTodoRequestSchema.parse(request.body);
    const todo = await todoService.update(tenantId, id, payload);
    return serializeTodo(todo);
  });

  app.delete("/todos/:id", async (request, reply) => {
    const tenantId = request.tenantContext?.tenantId;
    if (!tenantId) {
      throw app.httpErrors.unauthorized("Tenant context is required.");
    }

    const { id } = todoParamsSchema.parse(request.params);
    await todoService.remove(tenantId, id);
    return reply.code(204).send();
  });
}
