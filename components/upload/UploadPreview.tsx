"use client";

import UploadCard from "./UploadCard";
import type { UploadImage } from "./types";

interface Props {
  images: UploadImage[];
}

export default function UploadPreview({
  images,
}: Props) {
  if (images.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Selected Images
        </h2>

        <p className="mt-2 text-slate-600">
          Review your images before converting.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image) => (
          <UploadCard
            key={image.id}
            image={image}
          />
        ))}
      </div>
    </section>
  );
}