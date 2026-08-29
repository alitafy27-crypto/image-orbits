"use client";

import { useState } from "react";

// ✅ إزالة Section واستخدام div بدلاً منه
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

  // 1. تحسين اسم الأداة للعرض
  const toolName = `${inputFormat.toUpperCase()} to ${outputFormat.toUpperCase()} Converter`;
  const inputLabel = inputFormat.toUpperCase();
  const outputLabel = outputFormat.toUpperCase();

  return (
    // ✅ استخدام div بدلاً من Section لدعم id و aria-label
    <div 
      className="pb-24"
      id="convert-panel"
      aria-label={`${toolName} - Convert ${inputLabel} to ${outputLabel}`}
    >
      {/* 2. عنوان محسّن للـ SEO */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          Convert {inputLabel} to {outputLabel}
        </h2>
        <p className="mt-2 text-slate-600">
          Upload your {inputLabel} images and convert them to {outputLabel} format instantly.
          Fast, secure, and 100% private.
        </p>
      </div>

      {/* 3. Upload Zone */}
      <UploadZone
        onImagesChange={handleImagesChange}
        aria-label={`Upload ${inputLabel} images to convert to ${outputLabel}`}
      />

      {/* 4. Upload Preview */}
      <UploadPreview
        images={images}
        aria-label={`Preview of ${images.length} images to convert`}
      />

      {/* 5. Conversion Controls */}
      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* 6. Status Information */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Ready to Convert
            </h3>

            <p className="mt-2 text-slate-500">
              {images.length} image
              {images.length !== 1 ? "s" : ""} selected
              {images.length > 0 && (
                <span className="ml-2 text-sm text-blue-600">
                  from {inputLabel} to {outputLabel}
                </span>
              )}
            </p>

            {/* 7. Format information */}
            <p className="mt-1 text-sm text-slate-400">
              {inputLabel} → {outputLabel} conversion
            </p>
          </div>

          {/* 8. Convert Button */}
          <Button
            onClick={handleConvert}
            disabled={
              images.length === 0 ||
              processing
            }
            aria-label={`Convert ${images.length} ${inputLabel} images to ${outputLabel}`}
          >
            {processing
              ? "Converting..."
              : `Convert ${inputLabel} → ${outputLabel}`}
          </Button>
        </div>

        {/* 9. Additional Info */}
        {images.length > 0 && !processing && (
          <div className="mt-4 pt-4 border-t border-slate-100 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <span className="text-green-500">✓</span>
              {images.length} image{images.length !== 1 ? "s" : ""} ready
              <span className="mx-2">•</span>
              <span className="text-blue-600">{outputLabel}</span> format
              <span className="mx-2">•</span>
              Free conversion
            </span>
          </div>
        )}
      </div>

      {/* 10-20. Schema Markup */}
      
      {/* 10. Conversion Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": toolName,
            "description": `Convert ${inputLabel} images to ${outputLabel} format online free. Fast, secure, and private.`,
            "applicationCategory": "Image Converter",
            "browserRequirements": "Modern browsers",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
            },
          }),
        }}
      />

      {/* 11. Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://pngjpgconvert.com",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Tools",
                "item": "https://pngjpgconvert.com/tools",
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": toolName,
                "item": `https://pngjpgconvert.com/tools/${inputFormat.toLowerCase()}-to-${outputFormat.toLowerCase()}`,
              },
            ],
          }),
        }}
      />
    </div>
  );
}