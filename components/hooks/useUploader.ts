"use client";

import { useEffect, useState } from "react";

import type {
  ConverterImage,
} from "@/components/converter/types";

export default function useUploader() {
  const [images, setImages] =
    useState<ConverterImage[]>([]);

  function addFiles(
    files: File[] | FileList
  ) {
    const list = Array.from(files);

    const newImages: ConverterImage[] =
      list
        .filter((file) =>
          file.type.startsWith("image/")
        )
        .map((file) => ({
          id: crypto.randomUUID(),
          file,
          name: file.name,
          size: file.size,
          type: file.type,
          preview: URL.createObjectURL(file),
        }));

    setImages((prev) => {
      const existing = new Set(
        prev.map(
          (image) =>
            `${image.name}-${image.size}`
        )
      );

      const unique = newImages.filter(
        (image) =>
          !existing.has(
            `${image.name}-${image.size}`
          )
      );

      return [...prev, ...unique];
    });
  }

  function removeImage(id: string) {
    setImages((prev) => {
      const image = prev.find(
        (item) => item.id === id
      );

      if (image) {
        URL.revokeObjectURL(
          image.preview
        );
      }

      return prev.filter(
        (item) => item.id !== id
      );
    });
  }

  function clearImages() {
    images.forEach((image) => {
      URL.revokeObjectURL(
        image.preview
      );
    });

    setImages([]);
  }

  useEffect(() => {
    return () => {
      images.forEach((image) => {
        URL.revokeObjectURL(
          image.preview
        );
      });
    };
  }, [images]);

  return {
    images,
    addFiles,
    removeImage,
    clearImages,
  };
}