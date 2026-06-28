import { describe, expect, it } from "vitest";
import { createMemoryHistory } from "vue-router";

import { createAppRouter, routeDefinitions } from "./router";

describe("web router", () => {
  it("defines the dashboard and login routes", () => {
    expect(routeDefinitions.map((route) => route.path)).toEqual(["/", "/login"]);
    expect(routeDefinitions[0]?.children?.[0]?.path).toBe("");
    expect(routeDefinitions[0]?.children?.[1]?.path).toBe("example");
    expect(routeDefinitions[0]?.children?.[1]?.name).toBe("example");
  });

  it("uses the provided Vite base URL as router history base", () => {
    const router = createAppRouter(
      "/admin-web/",
      createMemoryHistory("/admin-web/"),
    );

    expect(router.options.history.base).toBe("/admin-web");
  });
});
