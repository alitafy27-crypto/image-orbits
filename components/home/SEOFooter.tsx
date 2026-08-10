import Link from "next/link";

import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

const toolLinks = [
  { name: "PNG to JPG", href: "/tools/png-to-jpg" },
  { name: "JPG to PNG", href: "/tools/jpg-to-png" },
  { name: "PNG to WEBP", href: "/tools/png-to-webp" },
  { name: "WEBP to PNG", href: "/tools/webp-to-png" },
  { name: "Image Compressor", href: "/tools/compress" },
  { name: "Resize Image", href: "/tools/resize" },
];

const pages = [
  { name: "About", href: "/about" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Contact", href: "/contact" },
];

export default function SEOFooter() {
  return (
    <Section className="border-t border-slate-200 bg-slate-50">
      <Heading
        badge="Explore More"
        title="Discover More Image Tools"
        description="Browse our growing collection of free online image utilities."
      />

      <div className="mx-auto mt-16 grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-6 text-2xl font-bold">
            Popular Tools
          </h3>

          <ul className="space-y-3">
            {toolLinks.map((tool) => (
              <li key={tool.href}>
                <Link
                  href={tool.href}
                  className="text-slate-600 transition hover:text-blue-600"
                >
                  {tool.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-bold">
            Website
          </h3>

          <ul className="space-y-3">
            {pages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="text-slate-600 transition hover:text-blue-600"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl text-center text-slate-600 leading-8">
        <p>
          My Site is a free online platform that helps users convert,
          compress, resize and optimize images without installing software.
          Every tool is designed for speed, privacy and ease of use, making
          image editing accessible on any device.
        </p>
      </div>
    </Section>
  );
}