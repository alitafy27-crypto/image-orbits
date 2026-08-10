"use client";

import { useState } from "react";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

import UploadZone from "@/components/upload/UploadZone";
import UploadPreview from "@/components/upload/UploadPreview";

import type { UploadImage } from "@/components/upload/types";

import { useImageConverter } from "@/components/hooks/useImageConverter";

interface Props {
  inputFormat: string;
  outputFormat: string;
}

export default function ConvertPanel({
  inputFormat,
  outputFormat,
}: Props) {
  const [images, setImages] = useState<UploadImage[]>([]);

  const {
    processing,
    convert,
  } = useImageConverter();

  function handleImagesChange(files: File[]) {
    const newImages: UploadImage[] = files.map((file) => ({
      id: crypto.randomUUID(),
      file,
      url: URL.createObjectURL(file),
      name: file.name,
      size: file.size,
      type: file.type,
    }));

    setImages(newImages);
  }

  async function handleConvert() {
    if (!images.length) return;

    await convert(
      images,
      outputFormat as
        | "png"
        | "jpg"
        | "jpeg"
        | "webp"
        | "avif"
    );
  }

  return (
    <Section className="pb-24">
      <UploadZone
        onImagesChange={handleImagesChange}
      />

      <UploadPreview
        images={images}
      />

      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Ready to Convert
            </h2>

            <p className="mt-2 text-slate-500">
              {images.length} image
              {images.length !== 1 ? "s" : ""} selected
            </p>
          </div>

          <Button
            onClick={handleConvert}
            disabled={
              images.length === 0 ||
              processing
            }
          >
            {processing
              ? "Converting..."
              : `Convert ${inputFormat.toUpperCase()} → ${outputFormat.toUpperCase()}`}
          </Button>
        </div>
      </div>
    </Section>
  );
}