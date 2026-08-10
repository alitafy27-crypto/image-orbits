export default function Loading() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6">
      <div className="flex flex-col items-center">

        <div className="h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

        <h2 className="mt-8 text-2xl font-semibold text-slate-900">
          Loading...
        </h2>

        <p className="mt-3 text-slate-500">
          Preparing your page...
        </p>

      </div>
    </main>
  );
}