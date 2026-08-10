export interface UploadImage {
  id: string;

  file: File;

  url: string;

  name: string;

  size: number;

  type: string;

  width?: number;

  height?: number;
}