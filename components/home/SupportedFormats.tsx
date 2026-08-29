import Link from "next/link";

import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

const formats = [
  {
    title: "PNG",
    description:
      "PNG is the best choice for transparent images, graphics, logos and screenshots without quality loss. Convert PNG to JPG, WEBP, or AVIF.",
    href: "/tools/png-to-jpg",
    keywords: ["PNG converter", "PNG to JPG", "PNG to WEBP", "PNG to AVIF"],
  },
  {
    title: "JPG",
    description:
      "JPG is the most popular image format for photography thanks to its excellent compression. Convert JPG to PNG, WEBP, or AVIF.",
    href: "/tools/jpg-to-png",
    keywords: ["JPG converter", "JPG to PNG", "JPG to WEBP", "JPG to AVIF"],
  },
  {
    title: "WEBP",
    description:
      "WEBP provides smaller file sizes while maintaining excellent image quality for modern websites. Convert WEBP to PNG, JPG, or AVIF.",
    href: "/tools/webp-to-png",
    keywords: ["WEBP converter", "WEBP to PNG", "WEBP to JPG", "WEBP to AVIF"],
  },
  {
    title: "AVIF",
    description:
      "AVIF is a next-generation image format offering superior compression and quality compared to older formats. Convert AVIF to PNG, JPG, or WEBP.",
    href: "/tools/png-to-webp",
    keywords: ["AVIF converter", "AVIF to PNG", "AVIF to JPG", "AVIF to WEBP"],
  },
];

export default function SupportedFormats() {
  return (
    <Section 
      className="bg-white"
      aria-label="Supported Image Formats - PNG, JPG, WEBP, AVIF"
    >
      {/* 1. Heading with keywords */}
      <Heading
        badge="Supported Formats"
        title="Work With Every Popular Image Format"
        description="PNG JPG Convert supports today's most common image formats for web, design and photography. Convert PNG, JPG, WEBP, AVIF and more."
      />

      {/* 2. Formats Grid */}
      <div 
        className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2"
        role="list"
        aria-label="List of supported image formats"
      >
        {formats.map((format) => (
          <div
            key={format.title}
            className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-500"
            role="listitem"
          >
            {/* 3. Format title with strong tag */}
            <h3 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
              <strong>{format.title}</strong>
            </h3>

            {/* 4. Format description with keywords */}
            <p className="mt-4 leading-8 text-slate-600">
              {format.description}
            </p>

            {/* 5. Link with keywords */}
            <Link
              href={format.href}
              className="mt-6 inline-flex font-semibold text-blue-600 transition-transform duration-300 group-hover:translate-x-1 hover:text-blue-700"
              aria-label={`Explore ${format.title} conversion tools`}
            >
              Explore {format.title} Tools →
            </Link>

            {/* 6. Hidden keywords for SEO */}
            <div className="sr-only" aria-hidden="true">
              {format.keywords?.join(", ")}
            </div>
          </div>
        ))}
      </div>

      {/* 7. Additional SEO content */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h4 className="text-xl font-bold text-slate-900 mb-4">
          Convert Between All Major Image Formats
        </h4>
        <p className="text-slate-600 leading-relaxed">
          Whether you need to convert <strong>PNG to JPG</strong>, 
          <strong> JPG to PNG</strong>, <strong>WEBP to PNG</strong>, or 
          <strong> AVIF to JPG</strong>, our free online tools make it easy. 
          All conversions are <strong>100% private</strong>, 
          <strong> free</strong>, and require <strong>no registration</strong>.
        </p>
      </div>

      {/* 8-20. Schema Markup */}
      
      {/* 8. ItemList Schema for formats */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Supported Image Formats",
            "description": "Image formats supported by PNG JPG Convert",
            "numberOfItems": formats.length,
            "itemListElement": formats.map((format, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": format.title,
              "description": format.description,
              "url": `https://pngjpgconvert.com${format.href}`,
            })),
          }),
        }}
      />

      {/* 9. Breadcrumb Schema */}
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
                "name": "Supported Formats",
                "item": "https://pngjpgconvert.com/formats",
              },
            ],
          }),
        }}
      />

      {/* 10. WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Supported Image Formats",
            "description": "Image formats supported by PNG JPG Convert - PNG, JPG, WEBP, AVIF",
            "url": "https://pngjpgconvert.com/formats",
            "about": {
              "@type": "Thing",
              "name": "Image Formats",
            },
          }),
        }}
      />
    </Section>
  );
}