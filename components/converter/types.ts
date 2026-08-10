export type ImageFormat =
  | "png"
  | "jpg"
  | "jpeg"
  | "webp"
  | "avif";

export type ToolOperation =
  | "convert"
  | "compress"
  | "resize"
  | "crop"
  | "rotate"
  | "watermark";

export interface ConverterImage {
  readonly id: string;
  readonly file: File;
  readonly name: string;
  readonly size: number;
  readonly type: string;
  readonly preview: string;
}

export interface ConvertedImage {
  readonly id: string;
  readonly blob: Blob;
  readonly url: string;
  readonly filename: string;
  readonly originalSize: number;
  readonly convertedSize: number;
}

export interface ConverterSettings {
  quality: number;
  backgroundColor: string;
}

export interface ConverterState {
  readonly processing: boolean;
  readonly progress: number;
  readonly completed: number;
  readonly total: number;
}

export type QueueStatus =
  | "waiting"
  | "processing"
  | "completed"
  | "failed";

export interface QueueItem {
  readonly id: string;
  readonly name: string;
  status: QueueStatus;
}