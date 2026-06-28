import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * 合并 Tailwind className，后出现的冲突工具类会覆盖前面的工具类。
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
