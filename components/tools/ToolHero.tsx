import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

interface ToolHeroProps {
  title: string;
  description: string;
}

export default function ToolHero({
  title,
  description,
}: ToolHeroProps) {
  // 1. تحسين العنوان للـ SEO
  const seoTitle = title.includes("Converter") 
    ? title 
    : `${title} - Free Online Tool`;

  // 2. تحسين الوصف للـ SEO
  const seoDescription = description || 
    `Use ${title} online free. Fast, secure, and 100% private browser-based tool. No uploads, no registration.`;

  return (
    <Section 
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-slate-50 py-20"
      aria-label={`${title} - Free Online Tool`}
    >
      {/* 3. Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_60%)]" />

      {/* 4. Main heading with SEO optimization */}
      <Heading
        badge="Free Online Image Tool"
        title={seoTitle}
        description={seoDescription}
      />

      {/* 5. Features badges with aria-label */}
      <div 
        className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-600"
        role="list"
        aria-label="Tool features"
      >
        <span className="flex items-center gap-2" role="listitem">
          <span aria-hidden="true">⚡</span> Fast Processing
        </span>
        <span className="flex items-center gap-2" role="listitem">
          <span aria-hidden="true">🔒</span> Privacy First
        </span>
        <span className="flex items-center gap-2" role="listitem">
          <span aria-hidden="true">🆓</span> Free Forever
        </span>
        <span className="flex items-center gap-2" role="listitem">
          <span aria-hidden="true">🌍</span> Works in Every Browser
        </span>
      </div>

      {/* 6. إضافة كلمات مفتاحية مخفية للـ SEO */}
      <div className="sr-only" aria-hidden="true">
        <span>image converter, online tool, free image converter, browser-based tool</span>
      </div>

      {/* 7. إضافة رابط للقسم الرئيسي */}
      <div className="mt-8 text-center">
        <a 
          href="#converter" 
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
          aria-label="Start using this tool now"
        >
          Start Converting Now →
        </a>
      </div>

      {/* 8. Schema Markup للـ Tool */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": seoTitle,
            "description": seoDescription,
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
                "name": "Tools",
                "item": "https://pngjpgconvert.com/tools",
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": seoTitle,
                "item": `https://pngjpgconvert.com/tools/${title.toLowerCase().replace(/\s+/g, '-')}`,
              },
            ],
          }),
        }}
      />

      {/* 10. إضافة روابط Schema للموقع */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "PNG JPG Convert",
            "url": "https://pngjpgconvert.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://pngjpgconvert.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </Section>
  );
}