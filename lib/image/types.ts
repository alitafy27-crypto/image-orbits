export type ImageFormat =
  | "png"
  | "jpg"
  | "jpeg"
  | "webp"
  | "avif";

export interface ConvertOptions {
  readonly format: ImageFormat;
  readonly quality?: number;
  readonly backgroundColor?: string;
}

export interface ResizeOptions {
  readonly width: number;
  readonly height: number;
}

export interface CompressOptions {
  readonly quality: number;
}

export interface CropOptions {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
}

export interface WatermarkOptions {
  readonly text: string;
  readonly x?: number;
  readonly y?: number;
  readonly color?: string;
  readonly font?: string;
}