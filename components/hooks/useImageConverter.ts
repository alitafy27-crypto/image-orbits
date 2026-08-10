"use client";

import { useState } from "react";

import {
  changeExtension,
  convertImage,
} from "@/lib/image/convert";

import { downloadBlob } from "@/lib/image/download";

import type { UploadImage } from "@/components/upload/types";

export type OutputFormat =
  | "png"
  | "jpg"
  | "jpeg"
  | "webp"
  | "avif";

export function useImageConverter() {
  const [processing, setProcessing] =
    useState(false);

  async function convert(
    images: UploadImage[],
    output: OutputFormat
  ) {
    if (images.length === 0) {
      return;
    }

    setProcessing(true);

    try {
      for (const image of images) {
        const blob = await convertImage(
          image.file,
          {
            format: output,
          }
        );

        const filename = changeExtension(
          image.file.name,
          output
        );

        downloadBlob(blob, filename);
      }
    } catch (error) {
      console.error(
        "Image conversion failed:",
        error
      );
    } finally {
      setProcessing(false);
    }
  }

  return {
    processing,
    convert,
  };
}