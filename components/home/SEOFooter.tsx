import Link from "next/link";

import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

const toolLinks = [
  { name: "PNG to JPG Converter", href: "/tools/png-to-jpg" },
  { name: "JPG to PNG Converter", href: "/tools/jpg-to-png" },
  { name: "PNG to WEBP Converter", href: "/tools/png-to-webp" },
  { name: "WEBP to PNG Converter", href: "/tools/webp-to-png" },
  { name: "Image Compressor Free", href: "/tools/compress" },
  { name: "Resize Image Online", href: "/tools/resize" },
  { name: "Crop Image Tool", href: "/tools/crop" },
  { name: "Rotate Image Tool", href: "/tools/rotate" },
];

const pages = [
  { name: "About Us", href: "/about" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Contact Us", href: "/contact" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
];

export default function SEOFooter() {
  return (
    <Section 
      className="border-t border-slate-200 bg-slate-50"
      aria-label="Footer navigation and additional tools"
    >
      {/* 1. Heading with keywords */}
      <Heading
        badge="Explore More"
        title="Discover More Free Image Tools"
        description="Browse our growing collection of free online image utilities. Convert PNG, JPG, WEBP, AVIF and more."
      />

      {/* 2. Footer Links Grid */}
      <div className="mx-auto mt-16 grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-3">
        {/* 3. Popular Tools Column */}
        <div>
          <h3 className="mb-6 text-2xl font-bold text-slate-900">
            Popular Image Tools
          </h3>

          <ul className="space-y-3" role="list">
            {toolLinks.map((tool) => (
              <li key={tool.href} role="listitem">
                <Link
                  href={tool.href}
                  className="text-slate-600 transition hover:text-blue-600 hover:underline"
                  aria-label={`Use ${tool.name}`}
                >
                  {tool.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Website Pages Column */}
        <div>
          <h3 className="mb-6 text-2xl font-bold text-slate-900">
            About & Legal
          </h3>

          <ul className="space-y-3" role="list">
            {pages.map((page) => (
              <li key={page.href} role="listitem">
                <Link
                  href={page.href}
                  className="text-slate-600 transition hover:text-blue-600 hover:underline"
                  aria-label={`Go to ${page.name}`}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 5. Additional SEO Content Column */}
        <div>
          <h3 className="mb-6 text-2xl font-bold text-slate-900">
            Quick Links
          </h3>

          <ul className="space-y-3" role="list">
            <li role="listitem">
              <span className="text-slate-600">📧 support@pngjpgconvert.com</span>
            </li>
            <li role="listitem">
              <span className="text-slate-600">🌐 pngjpgconvert.com</span>
            </li>
            <li role="listitem">
              <Link
                href="/tools"
                className="text-blue-600 font-semibold hover:underline"
                aria-label="View all tools"
              >
                View All Tools →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* 6. Footer Description */}
      <div className="mx-auto mt-16 max-w-5xl text-center text-slate-600 leading-8 border-t border-slate-200 pt-8">
        <p>
          <strong>PNG JPG Convert</strong> is a free online platform that helps users 
          <strong> convert PNG to JPG</strong>, <strong>JPG to PNG</strong>, 
          <strong> compress images</strong>, <strong>resize images</strong>, 
          <strong> crop images</strong>, <strong>rotate images</strong>, 
          and <strong>optimize images</strong> without installing software. 
          Every tool is designed for speed, privacy and ease of use, making 
          image editing accessible on any device. <strong>100% free</strong>, 
          <strong> no registration</strong>, <strong> completely private</strong>.
        </p>
      </div>

      {/* 7-20. Schema Markup */}
      
      {/* 7. Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PNG JPG Convert",
            "url": "https://pngjpgconvert.com",
            "description": "Free online image converter and image tools",
            "email": "support@pngjpgconvert.com",
            "sameAs": [
              "https://twitter.com/pngjpgconvert",
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
            "name": "Free Online Image Tools",
            "description": "Free online image conversion and optimization tools",
            "url": "https://pngjpgconvert.com",
            "about": {
              "@type": "Thing",
              "name": "Image Tools",
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
            ],
          }),
        }}
      />

      {/* 10. ItemList Schema for tools */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Popular Image Tools",
            "description": "Popular free online image conversion tools",
            "numberOfItems": toolLinks.length,
            "itemListElement": toolLinks.map((tool, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": tool.name,
              "url": `https://pngjpgconvert.com${tool.href}`,
            })),
          }),
        }}
      />
    </Section>
  );
}