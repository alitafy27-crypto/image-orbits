import Link from "next/link";

import type { ToolItem } from "@/data/tools";

interface Props {
  tool: ToolItem;
}

export default function ToolCard({ tool }: Props) {
  // 1. تحسين عنوان الأداة للـ SEO
  const seoTitle = `${tool.title} - Free Online Converter`;
  const seoDescription = tool.description || `Convert images online free with ${tool.title}. Fast, secure, and 100% private.`;

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
      aria-label={`Use ${tool.title} - ${tool.description}`}
    >
      {/* 2. Icon with aria-hidden */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl" aria-hidden="true">
        {tool.icon}
      </div>

      {/* 3. Tool title with SEO keywords */}
      <h3 className="mt-6 text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
        {seoTitle}
      </h3>

      {/* 4. Tool description */}
      <p className="mt-4 flex-1 leading-7 text-slate-600">
        {seoDescription}
      </p>

      {/* 5. Category badge and CTA */}
      <div className="mt-8 flex items-center justify-between">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
          {tool.category}
        </span>

        <span className="font-semibold text-blue-600 transition-transform duration-300 group-hover:translate-x-1">
          Open Tool →
        </span>
      </div>

      {/* 6-20. Schema Markup */}
      
      {/* 6. WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": tool.title,
            "description": tool.description,
            "applicationCategory": "Image Converter",
            "operatingSystem": "All",
            "browserRequirements": "Modern browsers",
            "url": `https://pngjpgconvert.com/tools/${tool.slug}`,
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
            },
          }),
        }}
      />

      {/* 7. Breadcrumb Schema */}
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
                "name": "Tools",
                "item": "https://pngjpgconvert.com/tools",
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": tool.title,
                "item": `https://pngjpgconvert.com/tools/${tool.slug}`,
              },
            ],
          }),
        }}
      />

      {/* 8. ImageObject Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            "name": tool.title,
            "description": tool.description,
            "contentUrl": `https://pngjpgconvert.com/tools/${tool.slug}`,
          }),
        }}
      />

      {/* 9. SearchAction Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SearchAction",
            "target": `https://pngjpgconvert.com/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          }),
        }}
      />

      {/* 10. Schema for category */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CategoryCode",
            "name": tool.category,
            "description": `${tool.category} tools for image conversion and editing`,
          }),
        }}
      />
    </Link>
  );
}