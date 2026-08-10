import Link from "next/link";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

const tools = [
  {
    title: "PNG to JPG",
    description: "Convert transparent PNG images into optimized JPG files.",
    href: "/tools/png-to-jpg",
  },
  {
    title: "JPG to PNG",
    description: "Convert JPG photos into high-quality PNG images.",
    href: "/tools/jpg-to-png",
  },
  {
    title: "PNG to WEBP",
    description: "Create lightweight WEBP images for modern websites.",
    href: "/tools/png-to-webp",
  },
  {
    title: "WEBP to PNG",
    description: "Convert WEBP images back to PNG without hassle.",
    href: "/tools/webp-to-png",
  },
];

export default function RelatedTools() {
  return (
    <Section>
      <Heading
        badge="More Tools"
        title="Related Image Tools"
        description="Explore other free image converters and optimization tools available on My Site."
      />

      <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool) => (
          <Card
            key={tool.href}
            className="flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-xl font-bold text-slate-900">
              {tool.title}
            </h3>

            <p className="mt-4 flex-1 leading-7 text-slate-600">
              {tool.description}
            </p>

            <Link
              href={tool.href}
              className="mt-8 inline-flex font-semibold text-blue-600 transition hover:text-blue-700"
            >
              Open Tool →
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}