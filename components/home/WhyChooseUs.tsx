import {
  Globe,
  Lock,
  ShieldCheck,
  Zap,
} from "lucide-react";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Image Processing",
    description:
      "Process images instantly with optimized browser-based technology. Convert images in seconds with no waiting time.",
    keywords: ["fast image converter", "instant processing", "quick conversion"],
  },
  {
    icon: Lock,
    title: "Privacy First - No Uploads",
    description:
      "Your files never leave your device. Everything runs locally in your browser. 100% private and secure.",
    keywords: ["private image tools", "no upload", "secure conversion"],
  },
  {
    icon: Globe,
    title: "Works Everywhere - All Devices",
    description:
      "Compatible with Chrome, Edge, Firefox, Safari and all modern browsers. Use on desktop, tablet and mobile.",
    keywords: ["cross-platform", "all browsers", "mobile compatible"],
  },
  {
    icon: ShieldCheck,
    title: "100% Secure & Free",
    description:
      "No registration, no hidden uploads and no personal data collection. Complete free online image tools.",
    keywords: ["free image tools", "no registration", "secure conversion"],
  },
];

export default function WhyChooseUs() {
  return (
    <Section 
      className="bg-slate-50 py-24"
      aria-label="Why Choose PNG JPG Convert - Speed, Privacy, Security"
    >
      {/* 1. Heading with keywords */}
      <Heading
        badge="Why Choose Us"
        title="Built for Speed, Privacy & Security"
        description="Professional online image tools designed with performance, security and simplicity in mind. Free and private image converter."
      />

      {/* 2. Features Grid */}
      <div 
        className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        role="list"
        aria-label="Key features of PNG JPG Convert"
      >
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500"
              role="listitem"
            >
              {/* 3. Icon container */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-200">
                <Icon size={28} aria-hidden="true" />
              </div>

              {/* 4. Feature title with keywords */}
              <h3 className="mt-6 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                {feature.title}
              </h3>

              {/* 5. Feature description */}
              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>

              {/* 6. Hidden keywords for SEO */}
              <div className="sr-only" aria-hidden="true">
                {feature.keywords?.join(", ")}
              </div>
            </div>
          );
        })}
      </div>

      {/* 7. Additional SEO content */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h4 className="text-xl font-bold text-slate-900 mb-4">
          Why PNG JPG Convert is the Best Free Image Converter
        </h4>
        <p className="text-slate-600 leading-relaxed">
          PNG JPG Convert offers the most comprehensive free online image tools. 
          Convert <strong>PNG to JPG</strong>, <strong>JPG to PNG</strong>, 
          <strong> WEBP to PNG</strong>, <strong>AVIF to JPG</strong>, compress images, 
          resize photos, crop pictures, rotate images, and more. 
          All tools are <strong>100% free</strong>, <strong>private</strong>, 
          and require <strong>no registration</strong>.
        </p>
      </div>

      {/* 8-20. Schema Markup */}
      
      {/* 8. ItemList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Image Tools Features",
            "description": "Key features of PNG JPG Convert image tools",
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

      {/* 9. WebApplication Schema */}
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
                "name": "Why Choose Us",
                "item": "https://pngjpgconvert.com/why-choose-us",
              },
            ],
          }),
        }}
      />
    </Section>
  );
}