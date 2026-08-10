"use client";

import { useState } from "react";

import type {
  ConverterImage,
  QueueItem,
  QueueStatus,
} from "@/components/converter/types";

export default function useQueue() {
  const [queue, setQueue] =
    useState<QueueItem[]>([]);

  function addMany(
    images: ConverterImage[]
  ) {
    setQueue(
      images.map((image) => ({
        id: image.id,
        name: image.name,
        status: "waiting",
      }))
    );
  }

  function updateStatus(
    id: string,
    status: QueueStatus
  ) {
    setQueue((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status,
            }
          : item
      )
    );
  }

  function clear() {
    setQueue([]);
  }

  return {
    queue,
    addMany,
    updateStatus,
    clear,
  };
}