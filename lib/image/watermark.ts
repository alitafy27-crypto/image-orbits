import { createCanvas, loadImage } from "./canvas";
import { WatermarkOptions } from "./types";

export async function watermarkImage(
  file: File,
  options: WatermarkOptions
): Promise<Blob> {
  const image = await loadImage(file);

  const { canvas, context } =
    createCanvas(
      image.width,
      image.height
    );

  context.drawImage(
    image,
    0,
    0
  );

  context.font =
    options.font ??
    "36px Arial";

  context.fillStyle =
    options.color ??
    "#ffffff";

  context.fillText(
    options.text,
    options.x ?? 20,
    options.y ??
      image.height - 30
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(
          new Error(
            "Watermark failed."
          )
        );
        return;
      }

      resolve(blob);
    });
  });
}