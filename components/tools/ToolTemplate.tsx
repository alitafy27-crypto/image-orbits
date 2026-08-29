import ToolHero from "@/components/tools/ToolHero";
import ConvertPanel from "@/components/tools/ConvertPanel";
import ToolFeatures from "@/components/tools/ToolFeatures";
import RelatedTools from "@/components/tools/RelatedTools";
import ToolFAQ from "@/components/tools/ToolFAQ";

interface Props {
  title: string;
  description: string;
  inputFormat: string;
  outputFormat: string;
}

export default function ToolTemplate({
  title,
  description,
  inputFormat,
  outputFormat,
}: Props) {
  // 1. تحسين المتغيرات للـ SEO
  const inputLabel = inputFormat.toUpperCase();
  const outputLabel = outputFormat.toUpperCase();
  const toolName = `${inputLabel} to ${outputLabel} Converter`;

  // 2. تحسين وصف الأداة
  const enhancedDescription = description || 
    `Convert ${inputLabel} images to ${outputLabel} online free. Fast, secure, and 100% private browser-based ${toolName}. No uploads, no registration.`;

  return (
    <>
      {/* 3. ToolHero مع كلمات مفتاحية محسنة */}
      <ToolHero
        title={`${toolName} - Free ${inputLabel} to ${outputLabel} Converter`}
        description={`${enhancedDescription} Perfect for ${inputLabel} to ${outputLabel} conversion with maximum quality.`}
      />

      {/* 4. ConvertPanel */}
      <ConvertPanel
        inputFormat={inputFormat}
        outputFormat={outputFormat}
      />

      {/* 5. ToolFeatures */}
      <ToolFeatures />

      {/* 6. RelatedTools */}
      <RelatedTools />

      {/* 7. ToolFAQ مع أسئلة محسنة */}
      <ToolFAQ
        items={[
          {
            question: `How do I convert ${inputLabel} to ${outputLabel} online for free?`,
            answer: `Simply upload your ${inputLabel} image, click the Convert button, and download your ${outputLabel} file instantly. The entire process takes just seconds and happens locally in your browser for maximum privacy.`,
          },
          {
            question: `Is ${toolName} completely free to use?`,
            answer: "Yes, absolutely! All tools on PNG JPG Convert are 100% free with no hidden charges, no limits, and no registration required. You can convert unlimited images without any cost.",
          },
          {
            question: `Are my ${inputLabel} images uploaded to your server?`,
            answer: "No! Everything happens locally in your browser using advanced WebAssembly technology. Your images never leave your device, ensuring complete privacy and security.",
          },
          {
            question: `What is the best quality setting for ${inputLabel} to ${outputLabel} conversion?`,
            answer: `For high-quality photos, use 85-95% quality. For web use, 75-85% offers a good balance. For email or sharing, 60-75% reduces file size while maintaining decent quality.`,
          },
          {
            question: `Does ${toolName} work on mobile devices?`,
            answer: "Yes, all PNG JPG Convert tools work seamlessly on desktop, tablet, and mobile browsers. Convert images on the go with your smartphone or tablet.",
          },
          {
            question: `Can I convert multiple ${inputLabel} images at once?`,
            answer: "Yes, you can convert multiple images one at a time with unlimited usage. Our tools support batch processing for efficient workflow.",
          },
        ]}
      />

      {/* 8-20. Schema Markup */}
      
      {/* 8. WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": toolName,
            "description": enhancedDescription,
            "applicationCategory": "Image Converter",
            "operatingSystem": "All",
            "browserRequirements": "Modern browsers",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
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
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Tools",
                "item": "https://pngjpgconvert.com/tools",
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": toolName,
                "item": `https://pngjpgconvert.com/tools/${inputFormat.toLowerCase()}-to-${outputFormat.toLowerCase()}`,
              },
            ],
          }),
        }}
      />

      {/* 10. HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": `How to Convert ${inputLabel} to ${outputLabel}`,
            "description": `Simple steps to convert ${inputLabel} images to ${outputLabel}`,
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Upload your image",
                "text": `Select or drag and drop your ${inputLabel} image file`
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Choose output format",
                "text": `Select ${outputLabel} as your output format`
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Convert image",
                "text": `Click convert and download your ${outputLabel} image instantly`
              },
            ],
          }),
        }}
      />
    </>
  );
}