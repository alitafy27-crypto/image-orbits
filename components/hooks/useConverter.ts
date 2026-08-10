"use client";

import { useState } from "react";

import type {
  ConverterImage,
  ConvertedImage,
  ConverterSettings,
  ImageFormat,
  ToolOperation,
} from "@/components/converter/types";

import {
  processImage,
  changeExtension,
} from "@/lib/image";

export default function useConverter() {
  const [processing, setProcessing] =
    useState(false);

  const [progress, setProgress] =
    useState(0);

  const [results, setResults] =
    useState<ConvertedImage[]>([]);

  async function convert(
    images: ConverterImage[],
    operation: ToolOperation,
    format: ImageFormat,
    settings: ConverterSettings,
    onProgress?: (
      current: number,
      total: number
    ) => void
  ) {
    if (images.length === 0) return;

    results.forEach((result) => {
      URL.revokeObjectURL(result.url);
    });

    setResults([]);
    setProgress(0);
    setProcessing(true);

    const output: ConvertedImage[] = [];

    try {
      for (
        let i = 0;
        i < images.length;
        i++
      ) {
        const image = images[i];

        const blob =
          await processImage(
            image.file,
            {
              operation,
              options: {
                format,
                quality:
                  settings.quality /
                  100,
                backgroundColor:
                  settings.backgroundColor,
              },
            }
          );

        output.push({
          id: image.id,
          blob,
          url: URL.createObjectURL(
            blob
          ),
          filename:
            changeExtension(
              image.name,
              format
            ),
          originalSize:
            image.size,
          convertedSize:
            blob.size,
        });

        const current = i + 1;

        setProgress(
          Math.round(
            (current /
              images.length) *
              100
          )
        );

        onProgress?.(
          current,
          images.length
        );
      }

      setResults(output);
    } catch (error) {
      console.error(
        "Image processing failed:",
        error
      );
    } finally {
      setProcessing(false);
    }
  }

  function clearResults() {
    results.forEach((result) => {
      URL.revokeObjectURL(
        result.url
      );
    });

    setResults([]);
    setProgress(0);
  }

  return {
    processing,
    progress,
    results,
    convert,
    clearResults,
  };
}