export function createCanvas(
  width: number,
  height: number
) {
  const canvas =
    document.createElement("canvas");

  canvas.width = width;
  canvas.height = height;

  const context =
    canvas.getContext("2d");

  if (!context) {
    throw new Error(
      "Canvas context not available."
    );
  }

  return {
    canvas,
    context,
  };
}

export async function loadImage(
  file: File
): Promise<HTMLImageElement> {
  return new Promise<HTMLImageElement>(
    (resolve, reject) => {
      const url =
        URL.createObjectURL(file);

      const image = new Image();

      image.onload = () => {
        URL.revokeObjectURL(url);
        resolve(image);
      };

      image.onerror = () => {
        URL.revokeObjectURL(url);

        reject(
          new Error(
            "Failed to load image."
          )
        );
      };

      image.src = url;
    }
  );
}