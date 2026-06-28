import { describe, expect, it } from "vitest";
import {
  createTodoRequestSchema,
  loginRequestSchema,
  todoItemSchema,
  updateTodoRequestSchema,
} from "./index";

describe("loginRequestSchema", () => {
  it("accepts a valid login payload", () => {
    expect(
      loginRequestSchema.parse({
        username: "admin",
        password: "password",
        tenantId: "tenant-a",
      }),
    ).toEqual({
      username: "admin",
      password: "password",
      tenantId: "tenant-a",
    });
  });
});

describe("todo schemas", () => {
  it("accepts a todo item returned by the API", () => {
    expect(
      todoItemSchema.parse({
        id: 1,
        tenantId: "tenant-a",
        title: "确认数据库连接",
        completed: false,
        createdAt: "2026-06-25T08:00:00.000Z",
        updatedAt: "2026-06-25T08:00:00.000Z",
      }),
    ).toMatchObject({
      id: 1,
      tenantId: "tenant-a",
      title: "确认数据库连接",
      completed: false,
    });
  });

  it("validates create and update payloads", () => {
    expect(createTodoRequestSchema.parse({ title: "新增任务" })).toEqual({
      title: "新增任务",
    });
    expect(updateTodoRequestSchema.parse({ completed: true })).toEqual({
      completed: true,
    });
  });
});
