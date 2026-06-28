import { PrismaClient } from "@prisma/client";

/**
 * 创建绑定指定 datasource URL 的 Prisma 客户端。
 *
 * @param datasourceUrl 由共享配置派生出的 MySQL 连接字符串。
 */
export function createPrismaClient(datasourceUrl: string) {
  return new PrismaClient({
    datasourceUrl,
  });
}
