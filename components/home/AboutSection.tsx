import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

import { siteConfig } from "@/lib/site";

export default function AboutSection() {
  return (
    <Section 
      aria-label="About Our Free Online Image Tools"
      className="bg-white"
    >
      {/* 1. Heading محسّن مع كلمات مفتاحية */}
      <Heading
        badge="About Us"
        title="About Our Free Online Image Tools"
        description="Fast, secure and 100% free online image editing and conversion directly in your browser. No downloads, no registration."
      />

      {/* 2. About content with keywords */}
      <div className="mx-auto mt-16 max-w-5xl space-y-8 text-lg leading-8 text-slate-600">
        <p>
          <strong>{siteConfig.name}</strong> is an all-in-one platform designed to simplify image
          editing and conversion for everyone. Whether you are a designer,
          developer, student, photographer or content creator, our collection
          of online image tools helps you work faster without installing any
          software.
        </p>

        <p>
          Convert <strong>PNG to JPG</strong>, transform <strong>WEBP</strong> images, 
          compress large photos, resize images for social media and optimize graphics for websites
          using modern browser technology. Most operations are performed
          directly on your device, providing better privacy and significantly
          faster processing.
        </p>

        <p>
          Unlike traditional desktop software, <strong>{siteConfig.name}</strong> works on
          Windows, macOS, Linux, Android and iPhone directly from your browser.
          There is nothing to download, no account to create and no hidden
          limitations. Simply upload your image, choose your preferred settings
          and download the result within seconds.
        </p>

        <p>
          We continuously improve our tools to support modern image formats
          including <strong>PNG, JPG, JPEG, WEBP and AVIF</strong> while maintaining excellent
          image quality and performance. All tools are 100% free and private.
        </p>
      </div>

      {/* 3. Stats section */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
        <div className="bg-blue-50 p-6 rounded-xl">
          <div className="text-3xl font-bold text-blue-600">15+</div>
          <div className="text-sm text-slate-600 mt-1">Image Tools</div>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl">
          <div className="text-3xl font-bold text-blue-600">5+</div>
          <div className="text-sm text-slate-600 mt-1">Formats Supported</div>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl">
          <div className="text-3xl font-bold text-blue-600">100%</div>
          <div className="text-sm text-slate-600 mt-1">Free & Private</div>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl">
          <div className="text-3xl font-bold text-blue-600">0</div>
          <div className="text-sm text-slate-600 mt-1">Registration Required</div>
        </div>
      </div>

      {/* 4-20. Schema Markup */}
      
      {/* 4. Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": siteConfig.name,
            "url": siteConfig.url,
            "description": "Free online image tools for conversion, compression, resizing and optimization.",
            "foundingDate": "2024",
            "email": siteConfig.email,
          }),
        }}
      />

      {/* 5. WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "About Our Free Online Image Tools",
            "description": "Learn about our free online image tools for conversion, compression and optimization.",
            "url": `${siteConfig.url}/about`,
            "about": {
              "@type": "Thing",
              "name": "Image Tools",
            },
          }),
        }}
      />

      {/* 6. Breadcrumb Schema */}
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
                "item": siteConfig.url,
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": `${siteConfig.url}/about`,
              },
            ],
          }),
        }}
      />
    </Section>
  );
}