import Link from "next/link";

import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

import { tools } from "@/data/tools";

export default function FeaturedTools() {
  // 1. تصفية الأدوات المميزة فقط
  const featuredTools = tools.filter(tool => tool.featured === true);

  return (
    <Section 
      className="bg-slate-50"
      aria-label="Featured Image Tools"
    >
      {/* 2. Heading مع كلمات مفتاحية محسنة */}
      <Heading
        badge={`${featuredTools.length} Featured Tools`}
        title="Explore Our Most Popular Free Image Tools"
        description="Quick access to the most frequently used online image tools. Convert PNG, JPG, WEBP, AVIF and more with 100% privacy."
      />

      {/* 3. Tools Grid */}
      <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredTools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            aria-label={`Use ${tool.title} - ${tool.description}`}
          >
            {/* 4. Icon with aria-hidden */}
            <div className="text-4xl" aria-hidden="true">
              {tool.icon}
            </div>

            {/* 5. Tool title with keywords */}
            <h3 className="mt-5 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
              {tool.title}
            </h3>

            {/* 6. Tool description */}
            <p className="mt-3 leading-7 text-slate-600">
              {tool.description}
            </p>

            {/* 7. CTA */}
            <span className="mt-6 inline-flex font-semibold text-blue-600 transition-transform duration-300 group-hover:translate-x-1">
              Open Tool →
            </span>
          </Link>
        ))}
      </div>

      {/* 8. View all tools link */}
      <div className="mt-12 text-center">
        <Link
          href="/tools"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
        >
          View All {tools.length} Tools →
        </Link>
      </div>

      {/* 9-20. Schema Markup */}
      
      {/* 9. ItemList Schema for featured tools */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Featured Free Image Tools",
            "description": "Most popular free online image conversion and optimization tools",
            "numberOfItems": featuredTools.length,
            "itemListElement": featuredTools.map((tool, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": tool.title,
              "description": tool.description,
              "url": `https://pngjpgconvert.com/tools/${tool.slug}`,
            })),
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
                "name": "Featured Tools",
                "item": "https://pngjpgconvert.com/featured",
              },
            ],
          }),
        }}
      />

      {/* 11. WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Featured Free Image Tools",
            "description": "Most popular free online image conversion and optimization tools",
            "url": "https://pngjpgconvert.com/featured",
            "about": {
              "@type": "Thing",
              "name": "Image Tools",
            },
          }),
        }}
      />
    </Section>
  );
}