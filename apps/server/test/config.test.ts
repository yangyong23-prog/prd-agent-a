import { describe, expect, it } from "vitest";
import { loadServerConfig } from "../src/config/env.js";
import { testConnectionEnv } from "./testEnv.js";

describe("loadServerConfig", () => {
  it("builds database url from @app/config application values", () => {
    const config = loadServerConfig({
      ...testConnectionEnv,
      NODE_ENV: "test",
      HOST: "127.0.0.1",
      PORT: "3201",
      MYSQL_PASSWORD: "p@ss word",
    });

    expect(config.database.url).toBe(
      "mysql://app_user:p%40ss%20word@mysql.internal:3307/app_db",
    );
    expect(config.application.mysql.host).toBe("mysql.internal");
  });

  it("keeps the configured database name in the mysql datasource url", () => {
    const config = loadServerConfig({
      ...testConnectionEnv,
      NODE_ENV: "test",
      HOST: "127.0.0.1",
      PORT: "3201",
      MYSQL_DATABASE: "sandbox",
    });

    expect(config.database.url).toBe(
      "mysql://app_user:mysql%20secret@mysql.internal:3307/sandbox",
    );
  });
});
