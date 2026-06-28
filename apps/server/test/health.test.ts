import { describe, expect, it } from "vitest";
import { buildApp } from "../src/app.js";
import { loadServerConfig } from "../src/config/env.js";
import { testConnectionEnv } from "./testEnv.js";

describe("health route", () => {
  it("returns service health", async () => {
    const app = await buildApp(loadServerConfig({
      ...testConnectionEnv,
      NODE_ENV: "test",
      HOST: "127.0.0.1",
      PORT: "3201",
    }));

    const response = await app.inject({
      method: "GET",
      url: "/health",
    });

    await app.close();

    expect(response.statusCode).toBe(200);
    expect(response.json()).toMatchObject({
      status: "ok",
      service: "server",
    });
  });

  it("returns service health under the ingress server prefix", async () => {
    const app = await buildApp(loadServerConfig({
      ...testConnectionEnv,
      NODE_ENV: "test",
      HOST: "127.0.0.1",
      PORT: "3201",
    }));

    const response = await app.inject({
      method: "GET",
      url: "/yushu-app-server/health",
    });

    await app.close();

    expect(response.statusCode).toBe(200);
    expect(response.json()).toMatchObject({
      status: "ok",
      service: "server",
    });
  });
});
