import Image from "next/image";
import type { ConverterImage } from "./types";

interface Props {
  images: ConverterImage[];
  onRemove(id: string): void;
}

export default function ConverterPreview({
  images,
  onRemove,
}: Props) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Selected Images
          </h2>

          <p className="mt-2 text-slate-500">
            Review your files before converting them.
          </p>
        </div>

        <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
          {images.length} {images.length === 1 ? "Image" : "Images"}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-square overflow-hidden bg-slate-100">
              <Image
                src={image.preview}
                alt={image.name}
                fill
                className="object-contain p-3"
                sizes="(max-width:768px) 100vw, 25vw"
              />
            </div>

            <div className="space-y-4 p-4">
              <div>
                <h3
                  className="truncate text-sm font-semibold text-slate-900"
                  title={image.name}
                >
                  {image.name}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {(image.size / 1024 / 1024).toFixed(2)} MB •{" "}
                  {image.type.replace("image/", "").toUpperCase()}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onRemove(image.id)}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
              >
                🗑 Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}