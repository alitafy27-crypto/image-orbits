interface Props {
  inputFormat: string;
  outputFormat: string;
}

export default function ConverterHeader({
  inputFormat,
  outputFormat,
}: Props) {
  return (
    <section className="space-y-6 text-center">

      <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        ⚡ Free Online Image Converter
      </div>

      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
        {inputFormat.toUpperCase()} to{" "}
        {outputFormat.toUpperCase()} Converter
      </h1>

      <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
        Convert{" "}
        <strong>
          {inputFormat.toUpperCase()}
        </strong>{" "}
        images to{" "}
        <strong>
          {outputFormat.toUpperCase()}
        </strong>{" "}
        directly in your browser.
        No uploads, no registration and no watermarks.
        Fast, private and completely free.
      </p>

      <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-600">

        <span className="rounded-full bg-slate-100 px-4 py-2">
          ⚡ Fast
        </span>

        <span className="rounded-full bg-slate-100 px-4 py-2">
          🔒 Secure
        </span>

        <span className="rounded-full bg-slate-100 px-4 py-2">
          🖥 Browser Based
        </span>

        <span className="rounded-full bg-slate-100 px-4 py-2">
          🆓 Free Forever
        </span>

      </div>

    </section>
  );
}