import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

interface FAQItem {
  question: string;
  answer: string;
}

interface ToolFAQProps {
  items?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    question: "Is this image converter completely free to use?",
    answer:
      "Yes. PNG JPG Convert provides completely free online image conversion tools without requiring registration or payment. Unlimited conversions, no hidden fees.",
  },
  {
    question: "Are my images uploaded to your servers?",
    answer:
      "Privacy is our priority. Most image processing happens directly in your browser whenever possible, helping keep your files secure. Your images never leave your device.",
  },
  {
    question: "Which image formats are supported?",
    answer:
      "Our tools support PNG, JPG, JPEG, WEBP, AVIF and more. We continuously add new formats to support all your image conversion needs.",
  },
  {
    question: "Can I convert multiple images at once?",
    answer:
      "Yes. Batch conversion allows you to process multiple images in a single operation, saving valuable time. Convert unlimited images with our free tool.",
  },
  {
    question: "Will image quality decrease after conversion?",
    answer:
      "Image quality depends on the output format and compression level you choose. We optimize every conversion to preserve the best possible quality. Choose higher quality settings for better results.",
  },
  {
    question: "Do your tools work on mobile devices?",
    answer:
      "Yes. PNG JPG Convert works perfectly on desktop computers, tablets and smartphones using any modern browser including Chrome, Safari, Firefox and Edge.",
  },
  {
    question: "Do I need to create an account to use these tools?",
    answer:
      "No. All our image conversion tools are completely free and require no registration or account creation. Simply visit the tool page and start converting.",
  },
  {
    question: "How fast is the image conversion?",
    answer:
      "Our tools are optimized for speed. Most conversions complete in seconds using advanced browser technology. Convert images instantly with no waiting.",
  },
];

export default function ToolFAQ({
  items = defaultFaqs,
}: ToolFAQProps) {
  // 1. تحسين البيانات للـ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  // 2. استخراج الأسئلة للكلمات المفتاحية
  const faqKeywords = items
    .map(faq => faq.question.replace(/\?/g, '').toLowerCase())
    .join(', ');

  return (
    <Section 
      className="py-20"
      aria-label="Frequently Asked Questions about Image Conversion"
    >
      {/* 3. Heading مع كلمات مفتاحية محسنة */}
      <Heading
        badge="FAQ"
        title="Frequently Asked Questions About Image Conversion"
        description="Find answers to the most common questions about our free online image tools, formats, quality, and privacy."
      />

      {/* 4. FAQ List with semantic structure */}
      <div 
        className="mx-auto mt-16 max-w-4xl space-y-6"
        role="list"
        aria-label="List of frequently asked questions"
      >
        {items.map((faq, index) => (
          <div
            key={faq.question}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:shadow-md"
            role="listitem"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            {/* 5. Question with schema */}
            <h3 className="text-xl font-bold text-slate-900" itemProp="name">
              {faq.question}
            </h3>

            {/* 6. Answer with schema */}
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p className="mt-4 leading-7 text-slate-600" itemProp="text">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 7. Additional SEO content */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Still Have Questions?
        </h2>
        <p className="text-slate-600">
          Contact our support team at{' '}
          <a href="mailto:support@pngjpgconvert.com" className="text-blue-600 hover:underline">
            support@pngjpgconvert.com
          </a>
          {' '}and we'll respond within 24-48 hours.
        </p>
      </div>

      {/* 8. Hidden keywords for SEO */}
      <div className="sr-only" aria-hidden="true">
        {faqKeywords}
      </div>

      {/* 9-20. Schema Markup */}
      
      {/* 9. FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
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
                "name": "FAQ",
                "item": "https://pngjpgconvert.com/faq",
              },
            ],
          }),
        }}
      />

      {/* 11. WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Image Converter FAQ",
            "description": "Frequently asked questions about free online image conversion tools.",
            "url": "https://pngjpgconvert.com/faq",
          }),
        }}
      />

      {/* 12-20. Individual Question Schemas */}
      {items.map((faq, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            }),
          }}
        />
      ))}
    </Section>
  );
}