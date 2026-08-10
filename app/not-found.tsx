import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[75vh] max-w-5xl items-center justify-center px-6">
      <div className="text-center">

        <div className="text-8xl font-extrabold text-blue-600">
          404
        </div>

        <h1 className="mt-6 text-4xl font-bold text-slate-900">
          Page Not Found
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Sorry, the page you are looking for doesn't exist,
          has been moved or the URL is incorrect.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Go Home
          </Link>

          <Link
            href="/tools"
            className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Browse Tools
          </Link>

        </div>

      </div>
    </main>
  );
}