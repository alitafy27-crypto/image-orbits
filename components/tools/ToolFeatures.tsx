import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

// 1. تحسين الميزات مع كلمات مفتاحية محسنة
const features = [
  {
    icon: "⚡",
    title: "Lightning Fast Image Conversion",
    description:
      "Convert your images in seconds using optimized browser technology with no waiting time. Fastest image converter online.",
    keywords: ["fast image converter", "quick conversion", "instant results"],
  },
  {
    icon: "🔒",
    title: "100% Private & Secure",
    description:
      "Your files remain private. Most processing happens directly inside your browser whenever possible. No uploads to servers.",
    keywords: ["private image converter", "secure conversion", "no upload"],
  },
  {
    icon: "🆓",
    title: "Completely Free Forever",
    description:
      "Use all PNG JPG Convert tools without creating an account or paying subscription fees. Unlimited free image conversion.",
    keywords: ["free image converter", "no registration", "unlimited usage"],
  },
  {
    icon: "🌍",
    title: "Works on All Devices",
    description:
      "Compatible with Chrome, Edge, Firefox, Safari and all modern desktop and mobile browsers. Use anywhere, anytime.",
    keywords: ["cross-platform", "mobile compatible", "all browsers"],
  },
  {
    icon: "📦",
    title: "Batch Processing Support",
    description:
      "Convert multiple images at once and save valuable time with batch conversion support. Bulk image converter.",
    keywords: ["batch conversion", "multiple images", "bulk converter"],
  },
  {
    icon: "🎯",
    title: "High Quality Output",
    description:
      "Maintain excellent image quality while converting between PNG, JPG, WEBP and AVIF formats. Lossless quality preservation.",
    keywords: ["high quality", "lossless conversion", "image quality"],
  },
];

export default function ToolFeatures() {
  return (
    <Section 
      className="bg-slate-50"
      aria-label="Image Converter Features"
    >
      {/* 2. Heading مع كلمات مفتاحية محسنة */}
      <Heading
        badge="Why Choose PNG JPG Convert?"
        title="Everything You Need for Professional Image Conversion"
        description="Professional tools designed to make image conversion fast, secure and effortless. Convert PNG, JPG, WEBP, AVIF and more."
      />

      {/* 3. Features Grid */}
      <div 
        className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3"
        role="list"
        aria-label="List of features"
      >
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            role="listitem"
          >
            {/* 4. Icon with aria-hidden */}
            <div className="text-5xl" aria-hidden="true">
              {feature.icon}
            </div>

            {/* 5. Feature title with keywords */}
            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              {feature.title}
            </h3>

            {/* 6. Feature description */}
            <p className="mt-4 leading-7 text-slate-600">
              {feature.description}
            </p>

            {/* 7. Hidden keywords for SEO */}
            <div className="sr-only" aria-hidden="true">
              {feature.keywords?.join(", ")}
            </div>
          </div>
        ))}
      </div>

      {/* 8. Additional SEO content */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Why Choose PNG JPG Convert?
        </h2>
        <p className="text-slate-600 leading-relaxed">
          PNG JPG Convert offers the most comprehensive image conversion tools online. 
          Whether you need to convert PNG to JPG, JPG to PNG, WEBP to PNG, or any other 
          format, our free online converter provides fast, secure, and high-quality results.
        </p>
      </div>

      {/* 9-20. Schema Markup */}
      
      {/* 9. ItemList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Image Converter Features",
            "description": "Key features of PNG JPG Convert image converter tools",
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

      {/* 10. WebApplication Schema */}
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
                "name": "Features",
                "item": "https://pngjpgconvert.com/features",
              },
            ],
          }),
        }}
      />
    </Section>
  );
}