import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact ImageOrbits",
  description:
    "Get in touch with the ImageOrbits team. We'd love to hear your questions, suggestions and feedback.",
  path: "/contact",
  keywords: [
    "Contact IImageOrbits",
    "ImageOrbits Support",
    "Contact",
    "Support",
  ],
});

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      <div className="text-center">

        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Contact Us
        </span>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900">
          We'd Love to Hear From You
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Have a question, suggestion or found a bug?
          Feel free to contact us anytime.
        </p>

      </div>

      <div className="mx-auto mt-20 max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

        <h2 className="text-2xl font-bold text-slate-900">
          Email Support
        </h2>

        <p className="mt-4 leading-8 text-slate-600">
          You can contact us directly by email.
          We usually respond within 24–48 hours.
        </p>

        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          {siteConfig.email}
        </a>

      </div>

    </main>
  );
}