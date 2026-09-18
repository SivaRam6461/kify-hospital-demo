import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const BASE_PATH = "/kify-hospital-demo";

export function asset(path: string) {
  if (path.startsWith("http") || path.startsWith("data:")) return path;
  return `${BASE_PATH}${path}`;
}
