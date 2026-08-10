import { convertImage } from "./convert";
import { resizeImage } from "./resize";
import { compressImage } from "./compress";
import { rotateImage } from "./rotate";
import { cropImage } from "./crop";
import { watermarkImage } from "./watermark";

import type {
  ConvertOptions,
  ResizeOptions,
  CompressOptions,
  CropOptions,
  WatermarkOptions,
} from "./types";

export interface RotateOptions {
  angle: number;
}

export type ImageOperation =
  | "convert"
  | "resize"
  | "compress"
  | "rotate"
  | "crop"
  | "watermark";

interface EngineOptions {
  operation: ImageOperation;

  options:
    | ConvertOptions
    | ResizeOptions
    | CompressOptions
    | RotateOptions
    | CropOptions
    | WatermarkOptions;
}

export async function processImage(
  file: File,
  config: EngineOptions
): Promise<Blob> {
  switch (config.operation) {
    case "convert":
      return convertImage(
        file,
        config.options as ConvertOptions
      );

    case "resize":
      return resizeImage(
        file,
        config.options as ResizeOptions
      );

    case "compress":
      return compressImage(
        file,
        config.options as CompressOptions
      );

    case "rotate":
      return rotateImage(
        file,
        (config.options as RotateOptions).angle
      );

    case "crop":
      return cropImage(
        file,
        config.options as CropOptions
      );

    case "watermark":
      return watermarkImage(
        file,
        config.options as WatermarkOptions
      );

    default:
      throw new Error(
        "Unknown image operation."
      );
  }
}