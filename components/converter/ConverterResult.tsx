"use client";

import type { ConvertedImage } from "./types";

interface Props {
  results: ConvertedImage[];
}

export default function ConverterResult({
  results,
}: Props) {
  if (results.length === 0) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Converted Images
        </h2>

        <p className="mt-2 text-slate-600">
          Your images have been successfully converted and are ready to download.
        </p>
      </header>

      <div className="space-y-6">
        {results.map((result) => {
          const saved =
            result.originalSize -
            result.convertedSize;

          const percent =
            result.originalSize > 0
              ? (
                  (saved /
                    result.originalSize) *
                  100
                ).toFixed(1)
              : "0";

          const extension =
            result.filename
              .split(".")
              .pop()
              ?.toUpperCase() ?? "";

          return (
            <article
              key={result.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-lg"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                      ✅ Successfully Converted
                    </span>

                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                      {extension}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-semibold text-slate-900"
                    title={result.filename}
                  >
                    {result.filename}
                  </h3>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-sm text-slate-500">
                        Original
                      </p>

                      <p className="mt-1 text-lg font-bold text-slate-900">
                        {(result.originalSize / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-sm text-slate-500">
                        Converted
                      </p>

                      <p className="mt-1 text-lg font-bold text-slate-900">
                        {(result.convertedSize / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>

                    <div className="rounded-xl bg-green-50 p-4">
                      <p className="text-sm text-green-700">
                        Space Saved
                      </p>

                      <p className="mt-1 text-lg font-bold text-green-700">
                        {percent}%
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <a
                    href={result.url}
                    download={result.filename}
                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                  >
                    ⬇ Download Image
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}