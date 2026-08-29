import {
  Cpu,
  Download,
  Upload,
} from "lucide-react";

import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Images",
    description:
      "Choose one or multiple images from your computer. Supports PNG, JPG, WEBP, AVIF and more formats.",
    keywords: ["upload images", "select images", "drag and drop"],
  },
  {
    icon: Cpu,
    title: "Process Instantly",
    description:
      "Your browser converts the images instantly without uploading them to any server. 100% private and secure.",
    keywords: ["instant conversion", "browser processing", "no upload"],
  },
  {
    icon: Download,
    title: "Download Results",
    description:
      "Save the converted images individually or as a ZIP archive. Ready to use on any device or platform.",
    keywords: ["download images", "save files", "zip archive"],
  },
];

export default function HowItWorks() {
  return (
    <Section 
      className="py-24"
      aria-label="How to Convert Images Online - Three Simple Steps"
    >
      {/* 1. Heading with keywords */}
      <Heading
        badge="How It Works"
        title="Three Simple Steps to Convert Images"
        description="Convert your images in seconds without installing any software. Fast, secure, and 100% private."
      />

      {/* 2. Steps Grid */}
      <div 
        className="mt-20 grid gap-8 md:grid-cols-3"
        role="list"
        aria-label="Three simple steps to convert images"
      >
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="group relative rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500"
              role="listitem"
            >
              {/* 3. Step number */}
              <div className="absolute left-8 top-8 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {index + 1}
              </div>

              {/* 4. Icon container */}
              <div className="mx-auto mt-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-200">
                <Icon size={36} aria-hidden="true" />
              </div>

              {/* 5. Step title with keywords */}
              <h3 className="mt-8 text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                {step.title}
              </h3>

              {/* 6. Step description */}
              <p className="mt-4 leading-7 text-slate-600">
                {step.description}
              </p>

              {/* 7. Hidden keywords for SEO */}
              <div className="sr-only" aria-hidden="true">
                {step.keywords?.join(", ")}
              </div>
            </div>
          );
        })}
      </div>

      {/* 8. Additional SEO content */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h4 className="text-lg font-semibold text-slate-900 mb-2">
          Start Converting Images Now
        </h4>
        <p className="text-slate-600">
          Convert PNG to JPG, WEBP to PNG, or any other format with our 
          free online image converter. No registration, no uploads, completely private.
        </p>
      </div>

      {/* 9-20. Schema Markup */}
      
      {/* 9. HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Convert Images Online",
            "description": "Three simple steps to convert images using our free online tool",
            "step": steps.map((step, index) => ({
              "@type": "HowToStep",
              "position": index + 1,
              "name": step.title,
              "text": step.description,
            })),
          }),
        }}
      />

      {/* 10. ItemList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Image Conversion Steps",
            "description": "Three simple steps to convert images online",
            "numberOfItems": steps.length,
            "itemListElement": steps.map((step, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": step.title,
              "description": step.description,
            })),
          }),
        }}
      />

      {/* 11. Breadcrumb Schema */}
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
                "name": "How It Works",
                "item": "https://pngjpgconvert.com/how-it-works",
              },
            ],
          }),
        }}
      />
    </Section>
  );
}