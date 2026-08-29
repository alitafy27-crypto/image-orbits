import Link from "next/link";

import Container from "@/components/ui/Container";

import HeroUpload from "./HeroUpload";

export default function Hero() {
  return (
    <section 
      className="overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20"
      aria-label="Free Online Image Converter - Convert PNG, JPG, WEBP, AVIF"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* 1. Left Content - Main SEO Section */}
          <div>
            {/* 2. Badge with keywords */}
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🚀 Fast • Secure • Browser Based • Free Image Converter
            </span>

            {/* 3. Main Heading with primary keywords */}
            <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Free Online
              <br />
              <span className="text-blue-600">
                Image Converter
              </span>
              <br />
              & Image Tools
            </h1>

            {/* 4. Description with keywords and benefits */}
            <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-600">
              Convert, compress, resize, crop, rotate and optimize
              <strong> PNG, JPG, WEBP and AVIF</strong> images directly in your browser.
              <strong> No uploads</strong>, no registration and <strong>100% free</strong>.
              Best free online image converter tool for all formats.
            </p>

            {/* 5. CTA Buttons with aria-label */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/tools"
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg"
                aria-label="Explore all free image tools"
              >
                Explore All Tools
              </Link>

              <Link
                href="/tools/png-to-jpg"
                className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
                aria-label="Convert PNG to JPG free online"
              >
                PNG to JPG Converter
              </Link>
            </div>

            {/* 6. Feature badges with aria-label */}
            <div 
              className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-slate-600"
              role="list"
              aria-label="Tool features"
            >
              <span className="flex items-center gap-2" role="listitem">
                <span aria-hidden="true">⚡</span> Instant Processing
              </span>
              <span className="flex items-center gap-2" role="listitem">
                <span aria-hidden="true">🔒</span> 100% Private
              </span>
              <span className="flex items-center gap-2" role="listitem">
                <span aria-hidden="true">🆓</span> Free Forever
              </span>
              <span className="flex items-center gap-2" role="listitem">
                <span aria-hidden="true">🚀</span> No Registration
              </span>
            </div>
          </div>

          {/* 7. Right Content - Hero Upload */}
          <HeroUpload />
        </div>
      </Container>

      {/* 8-20. Schema Markup */}
      
      {/* 8. WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Free Online Image Converter",
            "description": "Convert PNG, JPG, WEBP, AVIF images online free. 100% private browser-based image converter. No uploads, no registration.",
            "applicationCategory": "Image Converter",
            "operatingSystem": "All",
            "browserRequirements": "Modern browsers",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
            },
          }),
        }}
      />

      {/* 9. Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PNG JPG Convert",
            "url": "https://pngjpgconvert.com",
            "description": "Free online image converter and image tools",
          }),
        }}
      />

      {/* 10. Breadcrumb Schema */}
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
            ],
          }),
        }}
      />

      {/* 11. HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Convert Images Online",
            "description": "Simple steps to convert images using our free online tool",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Upload your image",
                "text": "Select or drag and drop your image file"
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Choose output format",
                "text": "Select PNG, JPG, WEBP, or AVIF"
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Convert image",
                "text": "Click convert and download instantly"
              },
            ],
          }),
        }}
      />
    </section>
  );
}