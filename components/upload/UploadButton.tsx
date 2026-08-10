"use client";

interface Props {
  onClick: () => void;
}

export default function UploadButton({
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
    >
      Upload Images
    </button>
  );
}