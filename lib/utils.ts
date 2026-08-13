import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `https://ImageOrbits.com${path}`;
}

export function formatFileSize(bytes: number) {
  if (bytes === 0) {
    return "0 Bytes";
  }

  const k = 1024;

  const sizes = [
    "Bytes",
    "KB",
    "MB",
    "GB",
  ];

  const i = Math.floor(
    Math.log(bytes) / Math.log(k)
  );

  return `${parseFloat(
    (bytes / Math.pow(k, i)).toFixed(2)
  )} ${sizes[i]}`;
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

export function sleep(ms: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}