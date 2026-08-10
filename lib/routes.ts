export const routes = {
  home: "/",

  tools: "/tools",

  blog: "/blog",

  about: "/about",

  contact: "/contact",

  privacy: "/privacy-policy",

  terms: "/terms",
} as const;

export const toolRoutes = {
  pngToJpg: "/tools/png-to-jpg",

  jpgToPng: "/tools/jpg-to-png",

  pngToWebp: "/tools/png-to-webp",

  webpToPng: "/tools/webp-to-png",

  avifToJpg: "/tools/avif-to-jpg",

  avifToPng: "/tools/avif-to-png",

  imageCompressor: "/tools/image-compressor",

  resizeImage: "/tools/resize-image",

  cropImage: "/tools/crop-image",

  rotateImage: "/tools/rotate-image",
} as const;