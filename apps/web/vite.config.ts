import vue from "@vitejs/plugin-vue";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath, URL } from "node:url";
import { defineConfig, type Plugin } from "vite";

const rootPackage = JSON.parse(
  readFileSync(fileURLToPath(new URL("../../package.json", import.meta.url)), "utf8"),
) as { name: string };
const webAppName = `${rootPackage.name}-web`;
const serverAppName = `${rootPackage.name}-server`;

function readEnvFile(fileUrl: URL): Record<string, string> {
  const filePath = fileURLToPath(fileUrl);
  if (!existsSync(filePath)) return {};

  return Object.fromEntries(
    readFileSync(filePath, "utf8")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"))
      .map((line) => {
        const separatorIndex = line.indexOf("=");
        if (separatorIndex === -1) return null;

        const key = line.slice(0, separatorIndex).trim();
        const value = line.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");
        return key ? [key, value] : null;
      })
      .filter((entry): entry is [string, string] => entry !== null),
  );
}

function devRequestHeadersPlugin(): Plugin {
  return {
    name: "dev-request-headers",
    apply: "serve",
    transformIndexHtml() {
      return [
        {
          tag: "script",
          attrs: { src: "/dev-config.js" },
          injectTo: "head",
        },
      ];
    },
    configureServer(server) {
      server.middlewares.use("/dev-config.js", (_request, response) => {
        const localEnv = loadRootEnv();
        const headers = {
          ...(localEnv.DEV_REQUEST_TOKEN ? { token: localEnv.DEV_REQUEST_TOKEN } : {}),
          ...(localEnv.DEV_GROUP_CODE ? { "group-code": localEnv.DEV_GROUP_CODE } : {}),
          ...(localEnv.DEV_PROJECT_ID ? { "project-id": localEnv.DEV_PROJECT_ID } : {}),
          ...(localEnv.DEV_TENANT_ID ? { "x-tenant-id": localEnv.DEV_TENANT_ID } : {}),
        };

        response.setHeader("content-type", "application/javascript; charset=utf-8");
        response.end(`globalThis.__DEV_REQUEST_HEADERS__ = ${JSON.stringify(headers)};\n`);
      });
    },
  };
}

function loadRootEnv(): Record<string, string | undefined> {
  return {
    ...readEnvFile(new URL("../../.env", import.meta.url)),
    ...readEnvFile(new URL("../../.env.sandbox.local", import.meta.url)),
    ...process.env,
  };
}

function gatewayRequestHeaders(env: Record<string, string | undefined>): Record<string, string> {
  return {
    ...(env.GW_TOKEN ? { token: env.GW_TOKEN } : {}),
    ...(env.GW_GROUP_CODE ? { "group-code": env.GW_GROUP_CODE } : {}),
    ...(env.GW_PROJECT_ID ? { "project-id": env.GW_PROJECT_ID } : {}),
  };
}

const rootEnv = loadRootEnv();

export default defineConfig({
  base: `/${webAppName}/`,
  define: {
    __API_BASE_URL__: JSON.stringify(`/${serverAppName}`),
    __GW_BASE_URL__: JSON.stringify(rootEnv.GW_BASE_URL ?? ""),
    __GW_REQUEST_HEADERS__: JSON.stringify(gatewayRequestHeaders(rootEnv)),
  },
  plugins: [devRequestHeadersPlugin(), vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: webAppName,
  },
  server: {
    port: 3200,
    proxy: {
      [`/${serverAppName}`]: {
        target: "http://127.0.0.1:3201",
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp(`^/${rootPackage.name}/${serverAppName}`), ""),
      },
    },
  },
});
