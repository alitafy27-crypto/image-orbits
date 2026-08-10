import { createCanvas, loadImage } from "./canvas";
import type { ConvertOptions } from "./types";

const MIME_TYPES = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  webp: "image/webp",
  avif: "image/avif",
} as const;

export async function convertImage(
  file: File,
  options: ConvertOptions
): Promise<Blob> {
  const image = await loadImage(file);

  const { canvas, context } = createCanvas(
    image.width,
    image.height
  );

  const isJpeg =
    options.format === "jpg" ||
    options.format === "jpeg";

  if (isJpeg) {
    context.fillStyle =
      options.backgroundColor ?? "#ffffff";

    context.fillRect(
      0,
      0,
      canvas.width,
      canvas.height
    );
  }

  context.drawImage(
    image,
    0,
    0,
    canvas.width,
    canvas.height
  );

  const mime = MIME_TYPES[options.format];

  const quality = options.quality ?? 0.92;

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(
            new Error(
              "Failed to convert image."
            )
          );
          return;
        }

        resolve(blob);
      },
      mime,
      quality
    );
  });
}

export function changeExtension(
  filename: string,
  extension: string
) {
  return filename.replace(
    /\.[^.]+$/,
    `.${extension}`
  );
}