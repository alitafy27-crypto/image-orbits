export type ImageOperation =
  | "convert"
  | "compress"
  | "resize"
  | "crop"
  | "rotate"
  | "watermark";

export interface ProcessImageOptions {
  operation: ImageOperation;

  options: {
    format?: string;
    quality?: number;

    width?: number;
    height?: number;

    rotation?: number;

    backgroundColor?: string;

    cropX?: number;
    cropY?: number;
    cropWidth?: number;
    cropHeight?: number;

    watermarkText?: string;
  };
}

export async function processImage(
  file: File,
  config: ProcessImageOptions
): Promise<Blob> {
  const bitmap = await createImageBitmap(file);

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas is not supported.");
  }

  let width = bitmap.width;
  let height = bitmap.height;

  if (config.operation === "resize") {
    width = config.options.width ?? bitmap.width;
    height = config.options.height ?? bitmap.height;
  }

  if (config.operation === "crop") {
    width =
      config.options.cropWidth ??
      bitmap.width;

    height =
      config.options.cropHeight ??
      bitmap.height;
  }

  canvas.width = width;
  canvas.height = height;

  const rotation =
    config.options.rotation ?? 0;

  if (rotation !== 0) {
    ctx.translate(
      canvas.width / 2,
      canvas.height / 2
    );

    ctx.rotate(
      (rotation * Math.PI) / 180
    );

    ctx.translate(
      -canvas.width / 2,
      -canvas.height / 2
    );
  }

  const format =
    config.options.format?.toLowerCase() ??
    "png";

  if (
    format === "jpg" ||
    format === "jpeg"
  ) {
    ctx.fillStyle =
      config.options.backgroundColor ??
      "#ffffff";

    ctx.fillRect(
      0,
      0,
      canvas.width,
      canvas.height
    );
  }

  if (config.operation === "crop") {
    ctx.drawImage(
      bitmap,
      config.options.cropX ?? 0,
      config.options.cropY ?? 0,
      width,
      height,
      0,
      0,
      width,
      height
    );
  } else {
    ctx.drawImage(
      bitmap,
      0,
      0,
      width,
      height
    );
  }

  if (
    config.operation === "watermark" &&
    config.options.watermarkText
  ) {
    ctx.font = "32px sans-serif";
    ctx.fillStyle =
      "rgba(255,255,255,.8)";
    ctx.textAlign = "right";

    ctx.fillText(
      config.options.watermarkText,
      canvas.width - 20,
      canvas.height - 20
    );
  }

  bitmap.close();

  return new Promise<Blob>(
    (resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(
              new Error(
                "Unable to generate image."
              )
            );
            return;
          }

          resolve(blob);
        },
        getMimeType(format),
        config.options.quality ?? 0.92
      );
    }
  );
}

export function getMimeType(
  format: string
) {
  switch (format.toLowerCase()) {
    case "jpg":
    case "jpeg":
      return "image/jpeg";

    case "png":
      return "image/png";

    case "webp":
      return "image/webp";

    case "avif":
      return "image/avif";

    default:
      return "image/png";
  }
}

export function changeExtension(
  filename: string,
  extension: string
) {
  const index =
    filename.lastIndexOf(".");

  if (index === -1) {
    return `${filename}.${extension}`;
  }

  return (
    filename.substring(0, index) +
    "." +
    extension
  );
}