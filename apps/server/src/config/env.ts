import {
  loadApplicationConfig,
  type ApplicationConfig,
} from "@app/config";
import { z } from "zod";

/**
 * 服务端运行环境变量 schema。
 */
const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  HOST: z.string().default("127.0.0.1"),
  PORT: z.coerce.number().int().positive().default(3201),
});

/**
 * 服务端运行环境配置类型。
 */
export type AppEnv = z.infer<typeof envSchema>;

/**
 * 读取并校验服务端运行环境变量。
 */
export function loadEnv(input = process.env): AppEnv {
  return envSchema.parse(input);
}

/**
 * 服务端完整配置，包含共享应用配置与数据库连接串。
 */
export type ServerConfig = AppEnv & {
  application: ApplicationConfig;
  database: {
    url: string;
  };
};

function encodeUrlPart(value: string): string {
  return encodeURIComponent(value);
}

function buildMysqlUrl(mysql: ApplicationConfig["mysql"]): string {
  return `mysql://${encodeUrlPart(mysql.username)}:${encodeUrlPart(mysql.password)}@${mysql.host}:${mysql.port}/${mysql.database}`;
}

/**
 * 读取服务端最终配置，并派生数据库连接串。
 */
export function loadServerConfig(input = process.env): ServerConfig {
  const env = loadEnv(input);
  const application = loadApplicationConfig(input);

  return {
    ...env,
    application,
    database: {
      url: buildMysqlUrl(application.mysql),
    },
  };
}
