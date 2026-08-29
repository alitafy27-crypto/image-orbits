import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Converter from "@/components/converter/Converter";
import ToolHero from "@/components/tools/ToolHero";
import ToolFeatures from "@/components/tools/ToolFeatures";
import ToolFAQ from "@/components/tools/ToolFAQ";
import RelatedTools from "@/components/tools/RelatedTools";

// ✅ استيراد tools من data/tools (وليس toolsList)
import { tools } from "@/data/tools";
// ✅ استيراد ToolItem من data/tools (نفس الملف)
import type { ToolItem } from "@/data/tools";

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

// 1. generateStaticParams
export async function generateStaticParams() {
  return tools.map((tool: ToolItem) => ({
    slug: tool.slug,
  }));
}

// 2. generateMetadata
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const tool = tools.find(
    (item: ToolItem) => item.slug === slug
  );

  if (!tool) {
    return createMetadata({
      title: "Tool Not Found",
      description: "The requested tool does not exist.",
      path: "/tools",
    });
  }

  // 3. كلمات مفتاحية محسنة
  const keywords = [
    tool.title,
    `${tool.title} online`,
    `${tool.title} free`,
    `${tool.title} converter`,
    ...(tool.inputFormat && tool.outputFormat ? [
      `convert ${tool.inputFormat} to ${tool.outputFormat}`,
      `${tool.inputFormat} to ${tool.outputFormat} converter`,
      `${tool.inputFormat} converter`,
      `${tool.outputFormat} converter`,
    ] : []),
    "Image Converter",
    "Image Tools",
    "Free Online Converter",
    "Browser-based Converter",
    "Image Conversion Tool",
    "Convert Images Online",
    "Free Image Converter",
    "No Upload Image Converter",
    "Private Image Converter",
    "Online Image Tools",
    "Free Image Tools",
    "Best Image Converter",
  ];

  // 4. وصف محسّن
  const description = tool.description || 
    `Convert images online free with ${tool.title}. Fast, secure, and 100% private browser-based tool. No uploads, no registration.`;

  // 5. عنوان محسّن
  const title = `${tool.title} - Free Online Image Tool | 100% Private & Secure`;

  return createMetadata({
    title: title,
    description: description,
    path: `/tools/${tool.slug}`,
    keywords: keywords,
  });
}

export default async function ToolPage({
  params,
}: Props) {
  const { slug } = await params;

  const tool = tools.find(
    (item: ToolItem) => item.slug === slug
  );

  if (!tool) {
    notFound();
  }

  const pageUrl = `https://pngjpgconvert.com/tools/${tool.slug}`;

  // 6. Breadcrumb Schema
  const breadcrumb = breadcrumbSchema([
    {
      name: "Home",
      url: "https://pngjpgconvert.com",
    },
    {
      name: "Image Tools",
      url: "https://pngjpgconvert.com/tools",
    },
    {
      name: tool.title,
      url: pageUrl,
    },
  ]);

  // 7. Software Schema
  const software = softwareApplicationSchema(
    tool.title,
    tool.description,
    pageUrl
  );

  // 8. FAQ Schema
  const faq = faqSchema([
    {
      question: `How do I use ${tool.title} online for free?`,
      answer: `Simply upload your image, choose your preferred settings, click the process button, and download your result instantly. The entire process takes just seconds and happens locally in your browser.`,
    },
    {
      question: `Is ${tool.title} completely free to use?`,
      answer: "Yes, absolutely! All tools on PNG JPG Convert are 100% free with no hidden charges, no limits, and no registration required. You can use them unlimited times without any cost.",
    },
    {
      question: `Are my images uploaded to your server?`,
      answer: "No! Everything happens locally in your browser using advanced technology. Your images never leave your device, ensuring complete privacy and security.",
    },
    {
      question: `Does ${tool.title} work on mobile devices?`,
      answer: "Yes, all PNG JPG Convert tools work seamlessly on desktop, tablet, and mobile browsers. Use our tools on the go with your smartphone or tablet.",
    },
    {
      question: `Can I use ${tool.title} without creating an account?`,
      answer: "Yes! No registration or account is required. Simply visit the tool page and start using it immediately.",
    },
  ]);

  const schemas = [breadcrumb, software, faq];

  // 9. تحديد اسم الأداة للعرض
  const toolName = tool.title;
  const inputFormat = tool.inputFormat || "image";
  const outputFormat = tool.outputFormat || "image";

  return (
    <>
      {/* Schema scripts */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      {/* 10. ToolHero */}
      <ToolHero
        title={`${toolName} - Free Online Image Tool`}
        description={tool.description || `Use ${toolName} online free. Fast, secure, and 100% private. No uploads, no registration.`}
      />

      {/* 11. Converter */}
      <Converter
        operation={tool.operation}
        inputFormat={tool.inputFormat}
        outputFormat={tool.outputFormat}
      />

      {/* 12. ToolFeatures */}
      <ToolFeatures />

      {/* 13. ToolFAQ */}
      <ToolFAQ />

      {/* 14. RelatedTools */}
      <RelatedTools currentTool={tool} />

      {/* 15-20. محتوى إضافي للـ SEO */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why Use {toolName}?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">100% Free</h3>
              <p className="text-gray-600">
                {toolName} is completely free with no hidden charges, 
                no limits, and no registration required.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">Private & Secure</h3>
              <p className="text-gray-600">
                Your images never leave your device. All processing happens 
                locally in your browser for maximum privacy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">Fast & Easy</h3>
              <p className="text-gray-600">
                Process your images in seconds with our simple and intuitive 
                interface. No technical skills required.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-2">No Uploads</h3>
              <p className="text-gray-600">
                Everything runs directly in your browser. Your images are 
                never uploaded to any server.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <a 
              href="#converter" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Using {toolName} Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}