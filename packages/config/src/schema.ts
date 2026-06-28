import { z } from "zod";

/**
 * 原始环境变量 schema，负责校验 `.env` 与 `process.env` 中的扁平配置。
 */
export const runtimeEnvSchema = z.object({
  APP_NAME: z.string().min(1).default("yushu-full"),
  GW_BASE_URL: z.string().url(),
  GW_TOKEN: z.string().min(1),
  GW_GROUP_CODE: z.string().min(1),
  GW_PROJECT_ID: z.string().min(1),
  MYSQL_HOST: z.string().min(1),
  MYSQL_PORT: z.coerce.number().int().positive().default(3306),
  MYSQL_USERNAME: z.string().min(1),
  MYSQL_PASSWORD: z.string().min(1),
  MYSQL_DATABASE: z.string().min(1),
  MYSQL_DRIVER_CLASS_NAME: z.string().min(1).default("com.mysql.cj.jdbc.Driver"),
  MYSQL_POOL_INITIAL_SIZE: z.coerce.number().int().nonnegative().default(5),
  MYSQL_POOL_MIN_IDLE: z.coerce.number().int().nonnegative().default(5),
  MYSQL_POOL_MAX_ACTIVE: z.coerce.number().int().positive().default(20),
  MYSQL_POOL_MAX_WAIT: z.coerce.number().int().nonnegative().default(60000),
});

/**
 * 应用结构化配置 schema，作为前后端读取共享配置的稳定形状。
 */
export const applicationConfigSchema = z.object({
  project: z.object({
    name: z.string().min(1),
  }),
  gateway: z.object({
    baseUrl: z.string().url(),
    token: z.string().min(1),
    groupCode: z.string().min(1),
    projectId: z.string().min(1),
  }),
  mysql: z.object({
    host: z.string().min(1),
    port: z.coerce.number().int().positive(),
    username: z.string().min(1),
    password: z.string().min(1),
    database: z.string().min(1),
    driverClassName: z.string().min(1),
    pool: z.object({
      initialSize: z.coerce.number().int().nonnegative(),
      minIdle: z.coerce.number().int().nonnegative(),
      maxActive: z.coerce.number().int().positive(),
      maxWait: z.coerce.number().int().nonnegative(),
    }),
  }),
});

/**
 * 原始环境变量配置类型。
 */
export type RuntimeEnvConfig = z.infer<typeof runtimeEnvSchema>;

/**
 * 应用结构化配置类型。
 */
export type ApplicationConfig = z.infer<typeof applicationConfigSchema>;
