export function downloadBlob(
  blob: Blob,
  filename: string
) {
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = filename;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}

export function downloadMany(
  files: {
    blob: Blob;
    filename: string;
  }[]
) {
  for (const file of files) {
    downloadBlob(
      file.blob,
      file.filename
    );
  }
}