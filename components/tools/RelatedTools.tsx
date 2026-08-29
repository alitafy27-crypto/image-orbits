import Link from "next/link";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

import { tools } from "@/data/tools";
import type { ToolItem } from "@/data/tools";

interface RelatedToolsProps {
  currentTool?: ToolItem;
}

export default function RelatedTools({ currentTool }: RelatedToolsProps) {
  const filteredTools = tools
    .filter((tool) => tool.slug !== currentTool?.slug)
    .slice(0, 4);

  const displayTools = currentTool ? filteredTools : tools.slice(0, 4);

  const sectionTitle = currentTool 
    ? `Related Tools for ${currentTool.title}`
    : "Related Image Tools";

  const sectionDescription = currentTool
    ? `Explore more free image converters and optimization tools related to ${currentTool.title}. Convert images online free with 100% privacy.`
    : "Explore other free image converters and optimization tools available on PNG JPG Convert.";

  const keywords = currentTool
    ? [
        currentTool.title,
        `related ${currentTool.title} tools`,
        `similar to ${currentTool.title}`,
        "image converter",
        "free image tools",
        "online image converter",
      ]
    : [
        "related image tools",
        "image converter",
        "free image tools",
        "online image converter",
        "PNG to JPG",
        "JPG to PNG",
        "PNG to WEBP",
        "WEBP to PNG",
      ];

  return (
    <Section aria-label="Related Image Tools">
      <Heading
        badge="More Tools"
        title={sectionTitle}
        description={sectionDescription}
      />

      <div 
        className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4"
        role="list"
        aria-label="List of related image tools"
      >
        {displayTools.map((tool, index) => (
          // ✅ role="listitem" على عنصر div وليس Card
          <div key={tool.slug} role="listitem">
            <Card
              className="flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-4xl mb-2" aria-hidden="true">
                {tool.icon || "🖼️"}
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {tool.title}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-slate-600">
                {tool.description}
              </p>

              <Link
                href={`/tools/${tool.slug}`}
                className="mt-8 inline-flex font-semibold text-blue-600 transition hover:text-blue-700"
                aria-label={`Open ${tool.title} tool`}
              >
                Open Tool →
              </Link>
            </Card>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          All Image Tools
        </h4>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {tools.slice(0, 8).map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="inline-block px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              {tool.title}
            </Link>
          ))}
          {tools.length > 8 && (
            <Link
              href="/tools"
              className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
            >
              View All {tools.length} Tools →
            </Link>
          )}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": sectionTitle,
            "description": sectionDescription,
            "numberOfItems": displayTools.length,
            "itemListElement": displayTools.map((tool, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": tool.title,
              "description": tool.description,
              "url": `https://pngjpgconvert.com/tools/${tool.slug}`,
            })),
          }),
        }}
      />

      <meta name="keywords" content={keywords.join(", ")} />

      {currentTool && (
        <link
          rel="canonical"
          href={`https://pngjpgconvert.com/tools/${currentTool.slug}`}
        />
      )}

      <meta property="og:title" content={sectionTitle} />
      <meta property="og:description" content={sectionDescription} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={sectionTitle} />
      <meta name="twitter:description" content={sectionDescription} />

      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
    </Section>
  );
}