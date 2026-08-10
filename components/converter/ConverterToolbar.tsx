import type {
  ConverterImage,
} from "./types";

interface Props {
  images: ConverterImage[];

  processing: boolean;

  onConvert(): void;

  onClear(): void;
}

export default function ConverterToolbar({
  images,
  processing,
  onConvert,
  onClear,
}: Props) {
  const disabled =
    processing || images.length === 0;

  return (
    <section className="flex flex-wrap items-center justify-center gap-4">

      <button
        type="button"
        onClick={onConvert}
        disabled={disabled}
        className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {processing
          ? "Converting..."
          : "Convert Images"}
      </button>

      <button
        type="button"
        onClick={onClear}
        disabled={disabled}
        className="rounded-xl border border-slate-300 px-8 py-3 font-semibold transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Clear
      </button>

    </section>
  );
}