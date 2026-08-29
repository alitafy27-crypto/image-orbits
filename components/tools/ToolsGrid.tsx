import ToolCard from "./ToolCard";

import { tools } from "@/data/tools";

import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

export default function ToolsGrid() {
  // 1. تصنيف الأدوات حسب الفئة للـ SEO
  const categories = [...new Set(tools.map(t => t.category))];

  // 2. عدد الأدوات
  const toolCount = tools.length;

  return (
    <Section 
      aria-label="All Free Online Image Tools"
      className="bg-white"
    >
      {/* 3. Heading محسّن مع كلمات مفتاحية */}
      <Heading
        badge={`${toolCount} Free Tools`}
        title="Explore Every Free Online Image Tool"
        description={`Convert, compress, resize, crop and optimize images online with our growing collection of ${toolCount} free browser-based tools. All tools are 100% private and require no registration.`}
      />

      {/* 4. Categories filter for SEO */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <span className="px-3 py-1 text-sm bg-blue-600 text-white rounded-full">
          All Tools
        </span>
        {categories.map((category) => (
          <span 
            key={category}
            className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        ))}
      </div>

      {/* 5. Tools Grid */}
      <div className="mx-auto mt-12 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard
            key={tool.slug}
            tool={tool}
          />
        ))}
      </div>

      {/* 6. Additional SEO content */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Free Online Image Tools for Every Need
        </h2>
        <p className="text-slate-600 leading-relaxed">
          PNG JPG Convert offers a complete suite of free online image tools. 
          Whether you need to convert PNG to JPG, compress images, resize photos, 
          crop pictures, or rotate images, our tools are fast, secure, and 100% private.
        </p>
      </div>

      {/* 7-20. Schema Markup */}
      
      {/* 7. ItemList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Free Online Image Tools",
            "description": `Collection of ${toolCount} free online image conversion and optimization tools`,
            "numberOfItems": toolCount,
            "itemListElement": tools.map((tool, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": tool.title,
              "description": tool.description,
              "url": `https://pngjpgconvert.com/tools/${tool.slug}`,
            })),
          }),
        }}
      />

      {/* 8. WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "PNG JPG Convert Tools",
            "description": `Collection of ${toolCount} free online image conversion and optimization tools`,
            "applicationCategory": "Image Converter",
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
            "name": "Free Online Image Tools",
            "description": `Collection of ${toolCount} free online image conversion and optimization tools`,
            "url": "https://pngjpgconvert.com/tools",
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