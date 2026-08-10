"use client";

import { useRef, useState } from "react";

interface Props {
  onImagesChange: (files: File[]) => void;
}

export default function UploadZone({
  onImagesChange,
}: Props) {
  const inputRef =
    useRef<HTMLInputElement>(null);

  const [dragging, setDragging] =
    useState(false);

  function openFilePicker() {
    inputRef.current?.click();
  }

  function handleFiles(
    files: FileList | null
  ) {
    if (!files || files.length === 0) return;

    const images = Array.from(files).filter(
      (file) =>
        file.type.startsWith("image/")
    );

    if (images.length === 0) return;

    onImagesChange(images);
  }

  function handleDrop(
    e: React.DragEvent<HTMLDivElement>
  ) {
    e.preventDefault();

    setDragging(false);

    handleFiles(e.dataTransfer.files);
  }

  return (
    <section
      className="mt-12"
      aria-labelledby="upload-heading"
    >
      <div
        role="button"
        tabIndex={0}
        aria-label="Upload image files"
        onClick={openFilePicker}
        onKeyDown={(e) => {
          if (
            e.key === "Enter" ||
            e.key === " "
          ) {
            e.preventDefault();
            openFilePicker();
          }
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() =>
          setDragging(false)
        }
        onDrop={handleDrop}
        className={`cursor-pointer rounded-3xl border-2 border-dashed p-14 text-center transition-all duration-200
        ${
          dragging
            ? "border-blue-600 bg-blue-50 scale-[1.01]"
            : "border-slate-300 bg-white hover:border-blue-500 hover:bg-slate-50"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          hidden
          multiple
          accept="image/*"
          onChange={(e) =>
            handleFiles(e.target.files)
          }
        />

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-5xl">
          📁
        </div>

        <h2
          id="upload-heading"
          className="mt-8 text-3xl font-bold text-slate-900"
        >
          Drop your images here
        </h2>

        <p className="mt-4 text-slate-600">
          Drag &amp; Drop your images or click
          anywhere to browse your device.
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Your images are processed locally in
          your browser and are never uploaded to
          any server.
        </p>

        <p className="mt-3 text-sm text-slate-500">
          Supports PNG, JPG, JPEG, WEBP and AVIF
          image formats.
        </p>

        <div className="mt-8">
          <button
            type="button"
            className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Choose Images
          </button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "PNG",
            "JPG",
            "JPEG",
            "WEBP",
            "AVIF",
          ].map((format) => (
            <span
              key={format}
              className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
            >
              {format}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}