import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About My Site",
  description:
    "Learn more about My Site and our mission to provide fast, secure and free online image tools.",
  path: "/about",
  keywords: [
    "About My Site",
    "My Site",
    "Online Image Tools",
    "Free Image Converter",
  ],
});

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      <div className="text-center">

        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          About My Site
        </span>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900">
          Free Online Image Tools
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          My Site is an online platform designed to help anyone
          convert, compress, resize, crop and optimize images quickly,
          securely and completely free.
        </p>

      </div>

      <section className="mt-20 space-y-8">

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Our Mission
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Our mission is simple: provide fast, reliable and privacy-first
            image tools that work directly inside your browser without
            requiring registration or software installation.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Why My Site?
          </h2>

          <ul className="mt-6 space-y-4 text-slate-600">

            <li>✅ Fast browser-based processing.</li>

            <li>✅ No uploads whenever possible.</li>

            <li>✅ No registration required.</li>

            <li>✅ Completely free.</li>

            <li>✅ Modern support for PNG, JPG, WEBP and AVIF.</li>

          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Privacy First
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            We believe your images belong to you.
            Most processing happens directly inside your browser,
            helping keep your files private and secure.
          </p>
        </div>

      </section>

    </main>
  );
}