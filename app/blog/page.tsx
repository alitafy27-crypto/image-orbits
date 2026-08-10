import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "My Site blog.",
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="text-5xl font-bold">
        My Site Blog
      </h1>

      <p className="mt-6 text-lg text-slate-600">
        Helpful tutorials, image editing guides, and tips will be published here soon.
      </p>
    </main>
  );
}