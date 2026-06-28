import { afterEach, describe, expect, it, vi } from "vitest";
import {
  createDataServiceApi,
  requestGateway,
  requireTenantId,
} from "./index";

describe("requireTenantId", () => {
  it("normalizes a tenant id", () => {
    expect(requireTenantId(" tenant-a ")).toBe("tenant-a");
  });

  it("rejects an empty tenant id", () => {
    expect(() => requireTenantId(" ")).toThrow("Tenant id is required");
  });
});

describe("requestGateway", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("sends gateway requests with required env-derived headers", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ success: true }), { status: 200 }),
    );
    vi.stubGlobal("fetch", fetchMock);

    await expect(
      requestGateway(
        {
          baseUrl: "https://qa-gw.meos.net.cn",
          token: "gateway-token",
          groupCode: "XNJT",
          projectId: "Pj1101050060",
        },
        {
          path: "/ipcal/data/queryRealTimeIpData",
          body: { infoCode: "P" },
        },
      ),
    ).resolves.toEqual({ success: true });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://qa-gw.meos.net.cn/ipcal/data/queryRealTimeIpData",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ infoCode: "P" }),
      }),
    );

    const headers = fetchMock.mock.calls[0]?.[1]?.headers;
    expect(headers).toBeInstanceOf(Headers);
    expect((headers as Headers).get("token")).toBe("gateway-token");
    expect((headers as Headers).get("group-code")).toBe("XNJT");
    expect((headers as Headers).get("project-id")).toBe("Pj1101050060");
    expect((headers as Headers).get("content-type")).toBe("application/json");
  });

  it("appends query values for gateway GET requests", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ regionNo: 1 }), { status: 200 }),
    );
    vi.stubGlobal("fetch", fetchMock);

    await requestGateway(
      {
        baseUrl: "https://qa-gw.meos.net.cn",
        token: "gateway-token",
        groupCode: "XNJT",
        projectId: "Pj1101050060",
      },
      {
        path: "/iot/data/getRegionNo",
        method: "GET",
        query: { objectId: "Eq1" },
      },
    );

    expect(fetchMock).toHaveBeenCalledWith(
      "https://qa-gw.meos.net.cn/iot/data/getRegionNo?objectId=Eq1",
      expect.objectContaining({ method: "GET", body: undefined }),
    );
  });
});

describe("createDataServiceApi", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("creates a data-service request object from the shared gateway config", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ rows: [] }), { status: 200 }),
    );
    vi.stubGlobal("fetch", fetchMock);

    const dataServiceApi = createDataServiceApi({
      baseUrl: "https://qa-gw.meos.net.cn",
      token: "gateway-token",
      groupCode: "XNJT",
      projectId: "Pj1101050060",
    });

    await dataServiceApi.ipcalDataQueryRealTimeIpData({});

    expect(fetchMock).toHaveBeenCalledWith(
      "https://qa-gw.meos.net.cn/dtp-persist-server/ipcal/data/queryRealTimeIpData?groupCode=XNJT&projectId=Pj1101050060",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({}),
      }),
    );
  });

  it("creates GET data-service methods with query parameters", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ regionNo: 1 }), { status: 200 }),
    );
    vi.stubGlobal("fetch", fetchMock);

    const dataServiceApi = createDataServiceApi({
      baseUrl: "https://qa-gw.meos.net.cn",
      token: "gateway-token",
      groupCode: "XNJT",
      projectId: "Pj1101050060",
    });

    await dataServiceApi.iotDataGetRegionNo({ objectId: "Eq1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://qa-gw.meos.net.cn/iot/data/getRegionNo?objectId=Eq1",
      expect.objectContaining({ method: "GET", body: undefined }),
    );
  });
});
