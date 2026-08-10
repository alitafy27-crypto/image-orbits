import Link from "next/link";

import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

const formats = [
  {
    title: "PNG",
    description:
      "PNG is the best choice for transparent images, graphics, logos and screenshots without quality loss.",
    href: "/tools/png-to-jpg",
  },
  {
    title: "JPG",
    description:
      "JPG is the most popular image format for photography thanks to its excellent compression.",
    href: "/tools/jpg-to-png",
  },
  {
    title: "WEBP",
    description:
      "WEBP provides smaller file sizes while maintaining excellent image quality for modern websites.",
    href: "/tools/webp-to-png",
  },
  {
    title: "AVIF",
    description:
      "AVIF is a next-generation image format offering superior compression and quality compared to older formats.",
    href: "/tools/png-to-webp",
  },
];

export default function SupportedFormats() {
  return (
    <Section>
      <Heading
        badge="Supported Formats"
        title="Work With Every Popular Image Format"
        description="My Site supports today's most common image formats for web, design and photography."
      />

      <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2">
        {formats.map((format) => (
          <div
            key={format.title}
            className="rounded-3xl border border-slate-200 bg-white p-8"
          >
            <h3 className="text-2xl font-bold">
              {format.title}
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              {format.description}
            </p>

            <Link
              href={format.href}
              className="mt-6 inline-flex font-semibold text-blue-600 hover:text-blue-700"
            >
              Explore Tools →
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}