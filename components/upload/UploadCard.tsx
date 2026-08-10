"use client";

import Image from "next/image";

import type { UploadImage } from "./types";

interface Props {
  image: UploadImage;
}

function formatFileSize(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

export default function UploadCard({
  image,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-square bg-slate-100">
        <Image
  src={image.url}
  alt={image.name}
  fill
  className="object-cover"
/>
      </div>

      <div className="p-4">
        <h3
          className="truncate font-semibold text-slate-900"
          title={image.name}
        >
          {image.name}
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          {formatFileSize(image.size)}
        </p>

        {image.width && image.height && (
          <p className="mt-1 text-xs text-slate-400">
            {image.width} × {image.height}px
          </p>
        )}
      </div>
    </div>
  );
}