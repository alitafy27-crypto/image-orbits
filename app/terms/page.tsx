import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description:
    "Read the Terms of Service for using Image-Orbits online image tools.",
  path: "/terms",
  keywords: [
    "Terms of Service",
    "Image-Orbits Terms",
    "Website Terms",
  ],
});

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      <div className="text-center">

        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Terms of Service
        </span>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900">
          Terms of Service
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          By accessing and using Image-Orbits, you agree to the following
          terms and conditions.
        </p>

      </div>

      <article className="prose prose-slate mx-auto mt-20 max-w-none">

        <h2>Acceptance of Terms</h2>

        <p>
          By using Image-Orbits, you agree to comply with these Terms of
          Service and all applicable laws and regulations.
        </p>

        <h2>Use of the Service</h2>

        <p>
          Our tools are provided free of charge for personal and commercial
          use unless otherwise stated.
        </p>

        <h2>User Responsibilities</h2>

        <p>
          You are responsible for ensuring that you have the necessary rights
          to process any files you upload or use with our services.
        </p>

        <h2>Availability</h2>

        <p>
          We strive to keep our services available at all times, but we do not
          guarantee uninterrupted access.
        </p>

        <h2>Limitation of Liability</h2>

        <p>
          Image-Orbits is provided "as is" without warranties of any kind. We
          are not liable for any direct or indirect damages resulting from the
          use of our services.
        </p>

        <h2>Changes</h2>

        <p>
          We reserve the right to update these Terms of Service at any time.
          Continued use of the website constitutes acceptance of the updated
          terms.
        </p>

        <h2>Contact</h2>

        <p>
          Questions regarding these Terms may be sent to{" "}
          <a href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>.
        </p>

      </article>

    </main>
  );
}