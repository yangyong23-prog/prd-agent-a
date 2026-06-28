import { afterEach, describe, expect, it, vi } from "vitest";

import {
  createTodo,
  deleteTodo,
  queryGatewayInfoPointPeriod,
  listTodos,
  mergeRequestHeaders,
  updateTodo,
} from "./api";

describe("api request headers", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("merges development request headers before per-request headers", () => {
    const headers = mergeRequestHeaders(
      {
        "tenant-id": "tenant-a",
        token: "request-token",
      },
      {
        "group-code": "XNJT",
        "project-id": "Pj1101050060",
        token: "dev-token",
      },
    );

    expect(headers.get("content-type")).toBe("application/json");
    expect(headers.get("group-code")).toBe("XNJT");
    expect(headers.get("project-id")).toBe("Pj1101050060");
    expect(headers.get("tenant-id")).toBe("tenant-a");
    expect(headers.get("token")).toBe("request-token");
  });

  it("calls todo CRUD endpoints through the shared request helper", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            items: [
              {
                id: 1,
                tenantId: "default",
                title: "确认数据库连接",
                completed: false,
                createdAt: "2026-06-25T08:00:00.000Z",
                updatedAt: "2026-06-25T08:00:00.000Z",
              },
            ],
          }),
          { status: 200 },
        ),
      )
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            id: 2,
            tenantId: "default",
            title: "新增任务",
            completed: false,
            createdAt: "2026-06-25T08:01:00.000Z",
            updatedAt: "2026-06-25T08:01:00.000Z",
          }),
          { status: 201 },
        ),
      )
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            id: 2,
            tenantId: "default",
            title: "新增任务",
            completed: true,
            createdAt: "2026-06-25T08:01:00.000Z",
            updatedAt: "2026-06-25T08:02:00.000Z",
          }),
          { status: 200 },
        ),
      )
      .mockResolvedValueOnce(new Response(null, { status: 204 }));
    vi.stubGlobal("fetch", fetchMock);

    await expect(listTodos()).resolves.toMatchObject({
      items: [{ id: 1, title: "确认数据库连接" }],
    });
    await expect(createTodo({ title: "新增任务" })).resolves.toMatchObject({
      id: 2,
      title: "新增任务",
    });
    await expect(updateTodo(2, { completed: true })).resolves.toMatchObject({
      id: 2,
      completed: true,
    });
    await expect(deleteTodo(2)).resolves.toBeUndefined();

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      expect.stringContaining("/todos"),
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      expect.stringContaining("/todos"),
      expect.objectContaining({ method: "POST" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      3,
      expect.stringContaining("/todos/2"),
      expect.objectContaining({ method: "PATCH" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      4,
      expect.stringContaining("/todos/2"),
      expect.objectContaining({ method: "DELETE" }),
    );
    const deleteHeaders = fetchMock.mock.calls[3]?.[1]?.headers;
    expect(deleteHeaders).toBeInstanceOf(Headers);
    expect((deleteHeaders as Headers).has("content-type")).toBe(false);
  });

  it("calls queryInfoPointPeroid without manual page parameters", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ code: 0, data: [] }), { status: 200 }),
    );
    vi.stubGlobal("fetch", fetchMock);

    await expect(queryGatewayInfoPointPeriod()).resolves.toEqual({
      code: 0,
      data: [],
    });

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "/rwd/ipcal/point/queryInfoPointPeroid?groupCode=",
      ),
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify(["Eq3204020001fe652d74590542e5bf2b111ed905c922"]),
      }),
    );
    const headers = fetchMock.mock.calls[0]?.[1]?.headers;
    expect(headers).toBeInstanceOf(Headers);
    expect((headers as Headers).get("token")).toBeTruthy();
    expect((headers as Headers).get("group-code")).toBeTruthy();
    expect((headers as Headers).get("project-id")).toBeTruthy();
  });
});
