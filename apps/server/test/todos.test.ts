import { TENANT_HEADER } from "@app/shared";
import { describe, expect, it } from "vitest";
import { buildApp, type AppDependencies } from "../src/app.js";
import { loadServerConfig } from "../src/config/env.js";
import { testConnectionEnv } from "./testEnv.js";

function testConfig() {
  return loadServerConfig({
    ...testConnectionEnv,
    NODE_ENV: "test",
    HOST: "127.0.0.1",
    PORT: "3201",
  });
}

describe("todo routes", () => {
  it("serves tenant-scoped todo CRUD operations", async () => {
    const calls: string[] = [];
    const dependencies: AppDependencies = {
      todoService: {
        async list(tenantId) {
          calls.push(`list:${tenantId}`);
          return [
            {
              id: 1,
              tenantId,
              title: "确认数据库连接",
              completed: false,
              createdAt: new Date("2026-06-25T08:00:00.000Z"),
              updatedAt: new Date("2026-06-25T08:00:00.000Z"),
            },
          ];
        },
        async create(tenantId, payload) {
          calls.push(`create:${tenantId}:${payload.title}`);
          return {
            id: 2,
            tenantId,
            title: payload.title,
            completed: false,
            createdAt: new Date("2026-06-25T08:01:00.000Z"),
            updatedAt: new Date("2026-06-25T08:01:00.000Z"),
          };
        },
        async update(tenantId, id, payload) {
          calls.push(`update:${tenantId}:${id}:${String(payload.completed)}`);
          return {
            id,
            tenantId,
            title: payload.title ?? "确认数据库连接",
            completed: payload.completed ?? false,
            createdAt: new Date("2026-06-25T08:00:00.000Z"),
            updatedAt: new Date("2026-06-25T08:02:00.000Z"),
          };
        },
        async remove(tenantId, id) {
          calls.push(`remove:${tenantId}:${id}`);
        },
      },
    };
    const app = await buildApp(testConfig(), dependencies);
    const headers = { [TENANT_HEADER]: "tenant-a" };

    const listResponse = await app.inject({
      method: "GET",
      url: "/todos",
      headers,
    });
    const createResponse = await app.inject({
      method: "POST",
      url: "/todos",
      headers,
      payload: { title: "新增任务" },
    });
    const updateResponse = await app.inject({
      method: "PATCH",
      url: "/todos/2",
      headers,
      payload: { completed: true },
    });
    const deleteResponse = await app.inject({
      method: "DELETE",
      url: "/todos/2",
      headers,
    });

    await app.close();

    expect(listResponse.statusCode).toBe(200);
    expect(listResponse.json()).toMatchObject({
      items: [{ id: 1, tenantId: "tenant-a", title: "确认数据库连接" }],
    });
    expect(createResponse.statusCode).toBe(201);
    expect(createResponse.json()).toMatchObject({
      id: 2,
      tenantId: "tenant-a",
      title: "新增任务",
      completed: false,
    });
    expect(updateResponse.statusCode).toBe(200);
    expect(updateResponse.json()).toMatchObject({
      id: 2,
      completed: true,
    });
    expect(deleteResponse.statusCode).toBe(204);
    expect(calls).toEqual([
      "list:tenant-a",
      "create:tenant-a:新增任务",
      "update:tenant-a:2:true",
      "remove:tenant-a:2",
    ]);
  });
});
