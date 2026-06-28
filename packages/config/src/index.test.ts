import { describe, expect, it } from "vitest";

import { loadApplicationConfig, loadRuntimeEnv } from "./loader.js";

const requiredEnv = {
  GW_BASE_URL: "https://qa-gw.meos.net.cn",
  GW_TOKEN: "gateway-token",
  GW_GROUP_CODE: "XNJT",
  GW_PROJECT_ID: "Pj1101050060",
  MYSQL_HOST: "172.19.0.123",
  MYSQL_PORT: "9934",
  MYSQL_USERNAME: "root",
  MYSQL_PASSWORD: "mysql-secret",
  MYSQL_DATABASE: "sandbox",
};

describe("loadApplicationConfig", () => {
  it("loads application config directly from env values", () => {
    const config = loadApplicationConfig({
      ...requiredEnv,
      APP_NAME: "tenant-admin",
      MYSQL_POOL_MAX_ACTIVE: "30",
    });

    expect(config.project.name).toBe("tenant-admin");
    expect(config.gateway).toEqual({
      baseUrl: "https://qa-gw.meos.net.cn",
      token: "gateway-token",
      groupCode: "XNJT",
      projectId: "Pj1101050060",
    });
    expect(config.mysql).toMatchObject({
      host: "172.19.0.123",
      port: 9934,
      username: "root",
      password: "mysql-secret",
      database: "sandbox",
      driverClassName: "com.mysql.cj.jdbc.Driver",
    });
    expect(config.mysql.pool.maxActive).toBe(30);
  });

  it("requires explicit MySQL connection values", () => {
    expect(() => loadApplicationConfig({})).toThrow();
  });
});

describe("loadRuntimeEnv", () => {
  it("returns explicit input unchanged for deterministic callers", () => {
    expect(loadRuntimeEnv({ MYSQL_HOST: "mysql.internal" })).toEqual({
      MYSQL_HOST: "mysql.internal",
    });
  });
});
