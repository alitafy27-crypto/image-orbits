import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

const faqs = [
  {
    question: "Is PNG JPG Convert completely free to use?",
    answer:
      "Yes. All image tools are 100% free to use without creating an account or paying any fees. Unlimited conversions with no hidden charges.",
  },
  {
    question: "Are my images uploaded to a server?",
    answer:
      "No. Most image processing happens directly inside your browser, keeping your files private and secure. Your images never leave your device.",
  },
  {
    question: "Which image formats are supported?",
    answer:
      "PNG JPG Convert supports PNG, JPG, JPEG, WEBP and AVIF formats, with more formats coming soon. We support all modern image formats.",
  },
  {
    question: "Can I convert multiple images at once?",
    answer:
      "Yes. Most conversion tools support batch processing so you can convert several images in one operation, saving valuable time.",
  },
  {
    question: "Do I lose image quality after conversion?",
    answer:
      "Image quality depends on the selected format and compression settings. We always aim to preserve the highest possible quality with adjustable settings.",
  },
  {
    question: "Does PNG JPG Convert work on mobile devices?",
    answer:
      "Yes. The website is fully responsive and works on phones, tablets and desktop computers using any modern browser including Chrome, Safari and Firefox.",
  },
  {
    question: "How fast is the image conversion?",
    answer:
      "Most conversions complete in seconds using advanced browser technology. Convert images instantly with no waiting time.",
  },
];

export default function FAQSection() {
  // 1. تحسين البيانات للـ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  // 2. استخراج الأسئلة للكلمات المفتاحية
  const faqKeywords = faqs
    .map(faq => faq.question.replace(/\?/g, '').toLowerCase())
    .join(', ');

  return (
    <Section 
      className="bg-white"
      aria-label="Frequently Asked Questions"
    >
      {/* 3. Heading مع كلمات مفتاحية محسنة */}
      <Heading
        badge="FAQ"
        title="Frequently Asked Questions About Image Conversion"
        description="Everything you need to know about PNG JPG Convert free online image tools."
      />

      {/* 4. FAQ List */}
      <div 
        className="mx-auto mt-16 max-w-4xl space-y-6"
        role="list"
        aria-label="List of frequently asked questions"
      >
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:shadow-md"
            role="listitem"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            {/* 5. Question with schema */}
            <h3 className="text-xl font-semibold text-slate-900" itemProp="name">
              {faq.question}
            </h3>

            {/* 6. Answer with schema */}
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p className="mt-3 leading-7 text-slate-600" itemProp="text">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 7. Additional SEO content */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <p className="text-slate-600">
          Still have questions? Contact us at{' '}
          <a href="mailto:support@pngjpgconvert.com" className="text-blue-600 hover:underline">
            support@pngjpgconvert.com
          </a>
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
    </Section>
  );
}