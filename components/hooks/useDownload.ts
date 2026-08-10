"use client";

interface DownloadItem {
  blob: Blob;
  filename: string;
}

export default function useDownload() {
  function download({
    blob,
    filename,
  }: DownloadItem) {
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = filename;

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);
  }

  function downloadAll(
    items: DownloadItem[]
  ) {
    items.forEach((item, index) => {
      setTimeout(() => {
        download(item);
      }, index * 200);
    });
  }

  return {
    download,
    downloadAll,
  };
}