import Link from "next/link";

export default function HeroUpload() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* 1. Main upload card */}
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-2xl">
        <div className="flex h-44 items-center justify-center rounded-2xl border-2 border-dashed border-blue-300 bg-slate-50">
          <div className="text-center">
            {/* 2. Icon with aria-hidden */}
            <div className="text-6xl" aria-hidden="true">
              🖼️
            </div>

            {/* 3. Heading with keywords */}
            <h3 className="mt-6 text-3xl font-bold text-slate-900">
              Drop Your Images Here
            </h3>

            {/* 4. Supported formats */}
            <p className="mt-3 text-slate-500">
              <strong>PNG</strong> • <strong>JPG</strong> • <strong>WEBP</strong> • <strong>AVIF</strong>
            </p>

            {/* 5. Description with privacy emphasis */}
            <p className="mt-2 text-sm text-slate-400">
              Fast, secure and processed directly in your browser. 
              <strong> 100% private</strong> • <strong>No uploads</strong>
            </p>

            {/* 6. CTA Button */}
            <Link
              href="/tools/png-to-jpg"
              className="mt-8 inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg"
              aria-label="Try PNG to JPG converter free online"
            >
              Try PNG to JPG Converter →
            </Link>
          </div>
        </div>
      </div>

      {/* 7. Floating badge - Fast Conversion */}
      <div className="absolute -left-6 top-8 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-xl">
        ⚡ Fast Conversion
      </div>

      {/* 8. Floating badge - Private Processing */}
      <div className="absolute -bottom-6 right-0 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-xl">
        🔒 Private Processing
      </div>

      {/* 9-20. Schema Markup */}
      
      {/* 9. WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "PNG to JPG Converter",
            "description": "Convert PNG to JPG online free. Fast, secure, and 100% private.",
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

      {/* 10. HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Convert PNG to JPG Online",
            "description": "Simple steps to convert PNG images to JPG format",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Upload your PNG image",
                "text": "Select or drag and drop your PNG image file"
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Choose output format",
                "text": "Select JPG as your output format"
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Convert image",
                "text": "Click convert and download your JPG image instantly"
              },
            ],
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
                "name": "PNG to JPG Converter",
                "item": "https://pngjpgconvert.com/tools/png-to-jpg",
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
            "name": "PNG to JPG Converter",
            "description": "Convert PNG images to JPG format online free. Fast, secure, and 100% private.",
            "url": "https://pngjpgconvert.com/tools/png-to-jpg",
            "about": {
              "@type": "Thing",
              "name": "PNG to JPG Conversion",
            },
          }),
        }}
      />
    </div>
  );
}