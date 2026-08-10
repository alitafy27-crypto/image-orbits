import { createCanvas, loadImage } from "./canvas";

export async function rotateImage(
  file: File,
  angle: number
): Promise<Blob> {
  const image = await loadImage(file);

  const radians = (angle * Math.PI) / 180;

  const swap =
    angle === 90 ||
    angle === 270 ||
    angle === -90;

  const width = swap
    ? image.height
    : image.width;

  const height = swap
    ? image.width
    : image.height;

  const { canvas, context } =
    createCanvas(width, height);

  context.translate(
    canvas.width / 2,
    canvas.height / 2
  );

  context.rotate(radians);

  context.drawImage(
    image,
    -image.width / 2,
    -image.height / 2
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(
          new Error("Rotation failed.")
        );
        return;
      }

      resolve(blob);
    });
  });
}