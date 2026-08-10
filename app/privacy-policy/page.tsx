import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Read the Image-Orbits Privacy Policy to learn how we protect your privacy and handle your information.",
  path: "/privacy-policy",
  keywords: [
    "Privacy Policy",
    "Image-Orbits Privacy",
    "Data Protection",
  ],
});

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      <div className="text-center">

        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Privacy Policy
        </span>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900">
          Privacy Policy
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Your privacy is important to us. This page explains how
          Image-Orbits collects, uses and protects information.
        </p>

      </div>

      <article className="prose prose-slate mx-auto mt-20 max-w-none">

        <h2>Information We Collect</h2>

        <p>
          Image-Orbits is designed to process images directly in your browser.
          We do not intentionally collect or store your image files.
        </p>

        <h2>How We Use Information</h2>

        <p>
          We may collect anonymous analytics data to improve the performance,
          reliability and usability of our services.
        </p>

        <h2>Cookies</h2>

        <p>
          Our website may use cookies and similar technologies to improve user
          experience and website functionality.
        </p>

        <h2>Third-Party Services</h2>

        <p>
          We may use third-party services such as Google Analytics or similar
          providers to understand website traffic and improve our services.
        </p>

        <h2>Data Security</h2>

        <p>
          Protecting your privacy is one of our priorities. Whenever possible,
          image processing happens locally inside your browser.
        </p>

        <h2>Contact</h2>

        <p>
          If you have any questions regarding this Privacy Policy,
          you can contact us at{" "}
          <a href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>.
        </p>

      </article>

    </main>
  );
}