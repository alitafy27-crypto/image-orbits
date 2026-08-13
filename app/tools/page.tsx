import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";

import ToolHero from "@/components/tools/ToolHero";
import ToolsGrid from "@/components/tools/ToolsGrid";
import ToolsContent from "@/components/tools/ToolsContent";

export const metadata: Metadata = createMetadata({
  title: "Free Online Image Tools",
  description:
    "Browse all ImageOrbits tools including image converters, compressors, resizers and editors.",
  path: "/tools",
  keywords: [
    "Image Tools",
    "PNG Converter",
    "JPG Converter",
    "WEBP Converter",
    "Image Compressor",
    "Resize Image",
    "Crop Image",
  ],
});

export default function ToolsPage() {
  return (
    <>
      <ToolHero
        title="Free Online Image Tools"
        description="Convert, compress, resize, crop and optimize PNG, JPG, WEBP and AVIF images directly in your browser."
      />

      <ToolsGrid />

      <ToolsContent />
    </>
  );
}