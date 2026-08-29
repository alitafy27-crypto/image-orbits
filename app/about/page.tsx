import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";

// 1. تحسين metadata مع كلمات مفتاحية محسنة
export const metadata: Metadata = createMetadata({
  title: "About Us - PNG JPG Convert | Free Online Image Converter & Image Tools",
  description: "Learn about PNG JPG Convert, the leading free online image converter. Convert PNG, JPG, WEBP, AVIF and more. 100% private, no uploads, no registration.",
  path: "/about",
  keywords: [
    "About PNG JPG Convert",
    "PNG JPG Convert",
    "Online Image Tools",
    "Free Image Converter",
    "Image Conversion Platform",
    "Image Tools About",
    "Free Image Tools",
    "Browser-based Image Converter",
    "Image Converter Team",
    "PNG to JPG About",
    "Image Optimization Tools",
    "Free Online Converter",
    "Image Converter Mission",
    "Privacy First Image Tools",
    "Image Converter Company",
    "Best Image Converter",
    "Image Tools Platform",
    "Convert Images Online",
    "Free Image Editor",
    "Image Converter About Us",
  ],
});

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20" id="main-content">
      {/* 2. Hero Section with main heading */}
      <div className="text-center">
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          About PNG JPG Convert
        </span>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900">
          Free Online Image Tools for Everyone
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          PNG JPG Convert is an online platform designed to help anyone
          convert, compress, resize, crop and optimize images quickly,
          securely and completely free. No uploads, no registration required.
        </p>
      </div>

      {/* 3. Our Mission Section */}
      <section className="mt-20 space-y-12" aria-label="Our Mission">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Our Mission
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Our mission is simple: provide fast, reliable and privacy-first
            image tools that work directly inside your browser without
            requiring registration or software installation. We believe 
            everyone should have access to professional image conversion 
            tools without paying a cent.
          </p>
        </div>

        {/* 4. Why PNG JPG Convert Section */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Why PNG JPG Convert?
          </h2>

          <ul className="mt-6 space-y-4 text-slate-600">
            <li>✅ Fast browser-based image processing</li>
            <li>✅ No uploads - everything runs locally</li>
            <li>✅ No registration required</li>
            <li>✅ Completely free with no limits</li>
            <li>✅ Support for PNG, JPG, WEBP, AVIF and more</li>
            <li>✅ 100% private and secure</li>
            <li>✅ Works on all devices (desktop, tablet, mobile)</li>
          </ul>
        </div>

        {/* 5. Privacy First Section */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Privacy First
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            We believe your images belong to you. That's why most processing 
            happens directly inside your browser, helping keep your files 
            private and secure. Your images are never uploaded to our servers 
            - they stay on your device throughout the entire process.
          </p>
        </div>

        {/* 6. Our Values Section */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Our Core Values
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">🔒 Privacy</h3>
              <p className="text-slate-600">
                Your images never leave your device. All processing is done locally.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">⚡ Speed</h3>
              <p className="text-slate-600">
                Convert images in seconds with our optimized browser-based tools.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">💰 Free</h3>
              <p className="text-slate-600">
                All tools are completely free with no limits or hidden charges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">🌍 Accessibility</h3>
              <p className="text-slate-600">
                Use our tools on any device, anywhere in the world, without installation.
              </p>
            </div>
          </div>
        </div>

        {/* 7. Our Tools Section */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Our Tools
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            We offer a wide range of image conversion and optimization tools, including:
          </p>

          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-600">
            <li>🖼️ PNG to JPG Converter</li>
            <li>🖼️ JPG to PNG Converter</li>
            <li>🖼️ PNG to WEBP Converter</li>
            <li>🖼️ WEBP to PNG Converter</li>
            <li>🖼️ PNG to AVIF Converter</li>
            <li>🖼️ AVIF to PNG Converter</li>
            <li>🖼️ JPG to WEBP Converter</li>
            <li>🖼️ WEBP to JPG Converter</li>
            <li>🗜️ Image Compressor</li>
            <li>📐 Image Resizer</li>
            <li>✂️ Image Cropper</li>
            <li>🔄 Image Rotator</li>
            <li>↔️ Image Flipper</li>
            <li>💧 Image Watermark</li>
          </ul>
        </div>

        {/* 8. Contact Section */}
        <div className="bg-blue-50 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Have Questions?
          </h2>
          <p className="mt-2 text-slate-600">
            We'd love to hear from you! Contact us at:
          </p>
          <a 
            href="mailto:support@pngjpgconvert.com" 
            className="mt-4 inline-block text-blue-600 font-semibold hover:text-blue-700"
          >
            support@pngjpgconvert.com
          </a>
        </div>
      </section>

      {/* 9-20. Schema Markup */}
      
      {/* 9. Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PNG JPG Convert",
            "url": "https://pngjpgconvert.com",
            "logo": "https://pngjpgconvert.com/logo.png",
            "description": "Free online image converter and image tools. Convert PNG, JPG, WEBP, AVIF and more.",
            "email": "support@pngjpgconvert.com",
            "foundingDate": "2024",
            "founder": {
              "@type": "Person",
              "name": "PNG JPG Convert Team"
            },
            "sameAs": [
              "https://twitter.com/pngjpgconvert",
            ],
          }),
        }}
      />

      {/* 10. AboutPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About PNG JPG Convert",
            "description": "Learn about PNG JPG Convert, the leading free online image converter.",
            "url": "https://pngjpgconvert.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "PNG JPG Convert",
            },
          }),
        }}
      />

      {/* 11. Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://pngjpgconvert.com",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://pngjpgconvert.com/about",
              },
            ],
          }),
        }}
      />

      {/* 12. WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "About PNG JPG Convert",
            "description": "Learn about PNG JPG Convert, the leading free online image converter.",
            "url": "https://pngjpgconvert.com/about",
            "about": {
              "@type": "Organization",
              "name": "PNG JPG Convert",
            },
          }),
        }}
      />
    </main>
  );
}