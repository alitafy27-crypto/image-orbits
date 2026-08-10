import Link from "next/link";

export default function HeroUpload() {
  return (
    <div className="relative mx-auto w-full max-w-xl">

      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-2xl">

        <div className="flex h-44 items-center justify-center rounded-2xl border-2 border-dashed border-blue-300 bg-slate-50">

          <div className="text-center">

            <div className="text-6xl">
              🖼️
            </div>

            <h3 className="mt-6 text-3xl font-bold text-slate-900">
              Drop your images here
            </h3>

            <p className="mt-3 text-slate-500">
              PNG • JPG • WEBP • AVIF
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Fast, secure and processed directly in your browser.
            </p>

            <Link
              href="/tools/png-to-jpg"
              className="mt-8 inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Try PNG to JPG
            </Link>

          </div>

        </div>

      </div>

      <div className="absolute -left-6 top-8 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-xl">
        ⚡ Fast Conversion
      </div>

      <div className="absolute -bottom-6 right-0 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-xl">
        🔒 Private Processing
      </div>

    </div>
  );
}