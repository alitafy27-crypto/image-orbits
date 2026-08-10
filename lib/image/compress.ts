import { createCanvas, loadImage } from "./canvas";
import { CompressOptions } from "./types";

export async function compressImage(
  file: File,
  options: CompressOptions
): Promise<Blob> {
  const image = await loadImage(file);

  const { canvas, context } = createCanvas(
    image.width,
    image.height
  );

  context.drawImage(
    image,
    0,
    0
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(
            new Error(
              "Compression failed."
            )
          );

          return;
        }

        resolve(blob);
      },
      "image/jpeg",
      options.quality
    );
  });
}