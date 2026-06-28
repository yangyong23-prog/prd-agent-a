import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import {
  applicationConfigSchema,
  runtimeEnvSchema,
  type ApplicationConfig,
} from "./schema.js";

type EnvSource = Record<string, string | undefined>;

function getWorkspaceRoot(): string {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  return join(currentDir, "..", "..", "..");
}

function parseEnvFile(filePath: string): EnvSource {
  if (!existsSync(filePath)) {
    return {};
  }

  return Object.fromEntries(
    readFileSync(filePath, "utf8")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"))
      .map((line) => {
        const separatorIndex = line.indexOf("=");
        if (separatorIndex === -1) {
          return null;
        }

        const key = line.slice(0, separatorIndex).trim();
        const value = line.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");
        return key ? [key, value] : null;
      })
      .filter((entry): entry is [string, string] => entry !== null),
  );
}

/**
 * 加载仓库根目录下的环境变量文件。
 *
 * 本地 `.env`、`.env.sandbox.local` 与进程环境会按顺序合并，后者覆盖前者。
 */
export function loadRuntimeEnv(input?: EnvSource): EnvSource {
  if (input) {
    return input;
  }

  const workspaceRoot = getWorkspaceRoot();

  return {
    ...parseEnvFile(join(workspaceRoot, ".env")),
    ...parseEnvFile(join(workspaceRoot, ".env.sandbox.local")),
    ...process.env,
  };
}

/**
 * 将扁平环境变量解析为结构化应用配置。
 *
 * @param env 原始环境变量输入，默认从 `.env` 与进程环境加载。
 * @returns 经过 schema 校验后的应用配置。
 */
function parseRuntimeEnv(input?: EnvSource) {
  return runtimeEnvSchema.parse(loadRuntimeEnv(input));
}

/**
 * 读取并校验当前应用可用的共享配置。
 *
 * @param env 原始环境变量输入。
 * @returns 结构化应用配置。
 */
export function loadApplicationConfig(env?: EnvSource): ApplicationConfig {
  const parsedEnv = parseRuntimeEnv(env);

  return applicationConfigSchema.parse({
    project: {
      name: parsedEnv.APP_NAME,
    },
    gateway: {
      baseUrl: parsedEnv.GW_BASE_URL,
      token: parsedEnv.GW_TOKEN,
      groupCode: parsedEnv.GW_GROUP_CODE,
      projectId: parsedEnv.GW_PROJECT_ID,
    },
    mysql: {
      host: parsedEnv.MYSQL_HOST,
      port: parsedEnv.MYSQL_PORT,
      username: parsedEnv.MYSQL_USERNAME,
      password: parsedEnv.MYSQL_PASSWORD,
      database: parsedEnv.MYSQL_DATABASE,
      driverClassName: parsedEnv.MYSQL_DRIVER_CLASS_NAME,
      pool: {
        initialSize: parsedEnv.MYSQL_POOL_INITIAL_SIZE,
        minIdle: parsedEnv.MYSQL_POOL_MIN_IDLE,
        maxActive: parsedEnv.MYSQL_POOL_MAX_ACTIVE,
        maxWait: parsedEnv.MYSQL_POOL_MAX_WAIT,
      },
    },
  });
}
