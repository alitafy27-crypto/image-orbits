import { createCanvas, loadImage } from "./canvas";
import { ResizeOptions } from "./types";

export async function resizeImage(
  file: File,
  options: ResizeOptions
): Promise<Blob> {
  const image = await loadImage(file);

  const { canvas, context } = createCanvas(
    options.width,
    options.height
  );

  context.drawImage(
    image,
    0,
    0,
    options.width,
    options.height
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(
          new Error(
            "Resize failed."
          )
        );

        return;
      }

      resolve(blob);
    });
  });
}