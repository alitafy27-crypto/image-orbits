import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import ToolCard from "@/components/ui/ToolCard";

import { tools } from "@/data/tools";

export default function PopularTools() {
  // 1. تصفية الأدوات الشائعة
  const popularTools = tools
    .filter(
      (tool) =>
        tool.category === "convert" ||
        tool.category === "compress" ||
        tool.category === "resize"
    )
    .slice(0, 6);

  // 2. عدد الأدوات الشائعة
  const toolCount = popularTools.length;

  return (
    <Section 
      aria-label="Popular Image Tools"
      className="bg-slate-50"
    >
      {/* 3. Heading مع كلمات مفتاحية محسنة */}
      <Heading
        badge={`${toolCount} Popular Tools`}
        title="Most Popular Free Image Tools"
        description="Convert, compress and optimize your images with our most frequently used online tools. Fast, private and completely free. No registration required."
      />

      {/* 4. Tools Grid */}
      <div 
        className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        role="list"
        aria-label="List of popular image tools"
      >
        {popularTools.map((tool) => (
          <div key={tool.slug} role="listitem">
            <ToolCard
              title={tool.title}
              description={tool.description}
              href={`/tools/${tool.slug}`}
              icon={tool.icon}
            />
          </div>
        ))}
      </div>

      {/* 5. View all tools link */}
      <div className="mt-12 text-center">
        <a
          href="/tools"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
          aria-label="View all free image tools"
        >
          View All {tools.length} Tools →
        </a>
      </div>

      {/* 6-20. Schema Markup */}
      
      {/* 6. ItemList Schema for popular tools */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Popular Image Tools",
            "description": "Most popular free online image conversion and optimization tools",
            "numberOfItems": toolCount,
            "itemListElement": popularTools.map((tool, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": tool.title,
              "description": tool.description,
              "url": `https://pngjpgconvert.com/tools/${tool.slug}`,
            })),
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
                "name": "Popular Tools",
                "item": "https://pngjpgconvert.com/popular",
              },
            ],
          }),
        }}
      />

      {/* 8. WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Popular Image Tools",
            "description": "Most popular free online image conversion and optimization tools",
            "url": "https://pngjpgconvert.com/popular",
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