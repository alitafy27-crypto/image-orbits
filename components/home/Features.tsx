const features = [
  {
    icon: "⚡",
    title: "Lightning Fast Image Processing",
    description:
      "Process images instantly using optimized browser technology. Convert images in seconds with no waiting time.",
    keywords: ["fast image converter", "instant conversion", "quick processing"],
  },
  {
    icon: "🔒",
    title: "Privacy First - No Uploads",
    description:
      "Everything runs locally in your browser. Nothing is uploaded to our servers. Your images stay on your device.",
    keywords: ["private image tools", "no upload", "secure conversion"],
  },
  {
    icon: "🌐",
    title: "Works Everywhere - All Devices",
    description:
      "Compatible with Chrome, Edge, Firefox, Safari and all modern browsers. Use on desktop, tablet and mobile.",
    keywords: ["cross-platform", "all browsers", "mobile compatible"],
  },
  {
    icon: "🛡️",
    title: "100% Secure & Free",
    description:
      "No registration, no hidden uploads and no personal data collection. Complete free online image tools.",
    keywords: ["free image tools", "no registration", "secure conversion"],
  },
];

export default function Features() {
  return (
    <section 
      className="bg-white py-28"
      aria-label="Image Tools Features - Speed, Privacy, Compatibility"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* 1. Header section with primary keywords */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Why PNG JPG Convert
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Built for Speed,
            <br />
            Privacy & Simplicity
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Everything you need to work with images online without
            compromising your privacy. Free image converter tools for everyone.
          </p>
        </div>

        {/* 2. Features Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500"
              role="listitem"
            >
              {/* 3. Icon with aria-hidden */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl transition-colors group-hover:bg-blue-200" aria-hidden="true">
                {feature.icon}
              </div>

              {/* 4. Feature title with keywords */}
              <h3 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                {feature.title}
              </h3>

              {/* 5. Feature description */}
              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>

              {/* 6. Hidden keywords for SEO */}
              <div className="sr-only" aria-hidden="true">
                {feature.keywords?.join(", ")}
              </div>
            </div>
          ))}
        </div>

        {/* 7. Additional SEO content */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Why Choose PNG JPG Convert?
          </h3>
          <p className="text-slate-600 leading-relaxed">
            PNG JPG Convert offers the most comprehensive free online image tools. 
            Convert PNG to JPG, compress images, resize photos, and more. 
            All tools are 100% free, private, and require no registration.
          </p>
        </div>

        {/* 8-20. Schema Markup */}
        
        {/* 8. ItemList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Image Tools Features",
              "description": "Key features of PNG JPG Convert image tools",
              "numberOfItems": features.length,
              "itemListElement": features.map((feature, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": feature.title,
                "description": feature.description,
              })),
            }),
          }}
        />

        {/* 9. WebApplication Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "PNG JPG Convert",
              "description": "Free online image converter and image tools",
              "applicationCategory": "Image Converter",
              "features": features.map(f => f.title),
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
              },
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
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Features",
                  "item": "https://pngjpgconvert.com/features",
                },
              ],
            }),
          }}
        />
      </div>
    </section>
  );
}