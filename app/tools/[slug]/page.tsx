import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Converter from "@/components/converter/Converter";
import ToolHero from "@/components/tools/ToolHero";
import ToolFeatures from "@/components/tools/ToolFeatures";
import ToolFAQ from "@/components/tools/ToolFAQ";
import RelatedTools from "@/components/tools/RelatedTools";

import { tools } from "@/data/tools";

import { createMetadata } from "@/lib/metadata";

import {
  breadcrumbSchema,
  faqSchema,
  softwareApplicationSchema,
} from "@/lib/schema";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const tool = tools.find(
    (item) => item.slug === slug
  );

  if (!tool) {
    return createMetadata({
      title: "Tool Not Found",
      description:
        "The requested tool does not exist.",
      path: "/tools",
    });
  }

  return createMetadata({
    title: tool.title,
    description: tool.description,
    path: `/tools/${tool.slug}`,
    keywords: [
      tool.title,
      `${tool.title} online`,
      `${tool.title} free`,
      "Image Converter",
      "Image Tools",
    ],
  });
}

export default async function ToolPage({
  params,
}: Props) {
  const { slug } = await params;

  const tool = tools.find(
    (item) => item.slug === slug
  );

  if (!tool) {
    notFound();
  }

  const pageUrl = `https://Image-Orbits.com/tools/${tool.slug}`;

  const breadcrumb = breadcrumbSchema([
    {
      name: "Home",
      url: "https://Image-Orbits.com",
    },
    {
      name: "Tools",
      url: "https://Image-Orbits.com/tools",
    },
    {
      name: tool.title,
      url: pageUrl,
    },
  ]);

  const software =
    softwareApplicationSchema(
      tool.title,
      tool.description,
      pageUrl
    );

  const faq = faqSchema([
    {
      question: `How do I use ${tool.title}?`,
      answer:
        "Upload your image, choose your preferred settings, convert it and download the result instantly.",
    },
    {
      question: "Is this tool free?",
      answer:
        "Yes. All Image-Orbits tools are completely free.",
    },
    {
      question: "Are my images private?",
      answer:
        "Yes. Your images stay on your device whenever possible and are never shared.",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumb
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            software
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faq
          ),
        }}
      />

      <ToolHero
        title={tool.title}
        description={tool.description}
      />

      <Converter
        operation={tool.operation}
        inputFormat={tool.inputFormat}
        outputFormat={tool.outputFormat}
      />

      <ToolFeatures />

      <ToolFAQ />

      <RelatedTools />
    </>
  );
}