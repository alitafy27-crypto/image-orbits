import { SITE } from "./metadata";

export function absoluteUrl(
  path = ""
) {
  return `${SITE.url}${path}`;
}

export function canonical(
  path = ""
) {
  return absoluteUrl(path);
}

export function imageUrl(
  image = SITE.image
) {
  return image.startsWith("http")
    ? image
    : `${SITE.url}${image}`;
}

export function pageTitle(
  title?: string
) {
  if (!title) return SITE.title;

  return `${title} | ${SITE.name}`;
}

export function pageDescription(
  description?: string
) {
  return (
    description ??
    SITE.description
  );
}