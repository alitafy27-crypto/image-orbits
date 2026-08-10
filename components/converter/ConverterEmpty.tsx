export default function ConverterEmpty() {
  return (
    <section className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-8 py-20 text-center">

      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-5xl">
        🖼️
      </div>

      <h2 className="mt-8 text-3xl font-bold text-slate-900">
        No Images Selected
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-lg leading-7 text-slate-600">
        Upload one or more images to start converting.
        Your files are processed locally in your browser,
        ensuring complete privacy and fast performance.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">

        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
          PNG
        </span>

        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
          JPG
        </span>

        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
          WEBP
        </span>

        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
          AVIF
        </span>

      </div>

    </section>
  );
}