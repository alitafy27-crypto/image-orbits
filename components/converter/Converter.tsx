"use client";

import { useState } from "react";

import UploadZone from "@/components/upload/UploadZone";

import ConverterHeader from "./ConverterHeader";
import ConverterSettings from "./ConverterSettings";
import ConverterPreview from "./ConverterPreview";
import ConverterToolbar from "./ConverterToolbar";
import ConverterProgress from "./ConverterProgress";
import ConverterResult from "./ConverterResult";
import ConverterStats from "./ConverterStats";
import ConverterEmpty from "./ConverterEmpty";
import ConverterQueue from "./ConverterQueue";

import type {
  ConverterSettings as Settings,
  ImageFormat,
  ToolOperation,
} from "./types";

import useUploader from "@/components/hooks/useUploader";
import useConverter from "@/components/hooks/useConverter";
import useDownload from "@/components/hooks/useDownload";
import useQueue from "@/components/hooks/useQueue";

interface Props {
  operation?: ToolOperation;
  inputFormat: string;
  outputFormat: string;
}

const DEFAULT_SETTINGS: Settings = {
  quality: 92,
  backgroundColor: "#ffffff",
};

export default function Converter({
  operation = "convert",
  inputFormat,
  outputFormat,
}: Props) {
  const [settings, setSettings] =
    useState(DEFAULT_SETTINGS);

  const {
    images,
    addFiles,
    removeImage,
    clearImages,
  } = useUploader();

  const {
    processing,
    progress,
    results,
    convert,
  } = useConverter();

  const { downloadAll } =
    useDownload();

  const queue = useQueue();

  const hasImages =
    images.length > 0;

  const hasResults =
    results.length > 0;

  async function handleConvert() {
    if (!hasImages) return;

    queue.clear();

    queue.addMany(images);

    await convert(
      images,
      operation,
      outputFormat as ImageFormat,
      settings,
      (current) => {
        const image =
          images[current - 1];

        if (image) {
          queue.updateStatus(
            image.id,
            "completed"
          );
        }
      }
    );
  }

  function handleDownloadAll() {
    if (!hasResults) return;

    downloadAll(
      results.map((result) => ({
        blob: result.blob,
        filename: result.filename,
      }))
    );
  }

  return (
    <div className="space-y-10">

      <ConverterHeader
        inputFormat={inputFormat}
        outputFormat={outputFormat}
      />

      <UploadZone
        onImagesChange={addFiles}
      />

      {!hasImages ? (
        <ConverterEmpty />
      ) : (
        <>
          <ConverterPreview
            images={images}
            onRemove={removeImage}
          />

          <ConverterStats
            images={images}
          />
        </>
      )}

      <ConverterSettings
        settings={settings}
        onChange={setSettings}
      />

      <ConverterToolbar
        images={images}
        processing={processing}
        onConvert={handleConvert}
        onClear={clearImages}
      />

      <ConverterProgress
        state={{
          processing,
          progress,
          completed: results.length,
          total: images.length,
        }}
      />

      <ConverterQueue
        queue={queue.queue}
      />

      <ConverterResult
        results={results}
      />

      {results.length > 1 && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleDownloadAll}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Download All
          </button>
        </div>
      )}

    </div>
  );
}