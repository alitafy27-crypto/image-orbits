import { createCanvas, loadImage } from "./canvas";
import { CropOptions } from "./types";

export async function cropImage(
  file: File,
  options: CropOptions
): Promise<Blob> {
  const image = await loadImage(file);

  const { canvas, context } =
    createCanvas(
      options.width,
      options.height
    );

  context.drawImage(
    image,
    options.x,
    options.y,
    options.width,
    options.height,
    0,
    0,
    options.width,
    options.height
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(
          new Error("Crop failed.")
        );
        return;
      }

      resolve(blob);
    });
  });
}