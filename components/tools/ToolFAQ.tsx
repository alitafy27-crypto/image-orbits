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
    question: "Is this image converter free?",
    answer:
      "Yes. My Site provides completely free online image conversion tools without requiring registration.",
  },
  {
    question: "Are my images uploaded to your servers?",
    answer:
      "Privacy is our priority. Most image processing happens directly in your browser whenever possible, helping keep your files secure.",
  },
  {
    question: "Which image formats are supported?",
    answer:
      "Our tools support PNG, JPG, JPEG, WEBP and AVIF. More formats will be added in future updates.",
  },
  {
    question: "Can I convert multiple images at once?",
    answer:
      "Yes. Batch conversion allows you to process multiple images in a single operation, saving valuable time.",
  },
  {
    question: "Will image quality decrease after conversion?",
    answer:
      "Image quality depends on the output format and compression level you choose. We optimize every conversion to preserve the best possible quality.",
  },
  {
    question: "Do your tools work on mobile devices?",
    answer:
      "Yes. My Site works perfectly on desktop computers, tablets and smartphones using any modern browser.",
  },
];

export default function ToolFAQ({
  items = defaultFaqs,
}: ToolFAQProps) {
  return (
    <Section className="py-20">
      <Heading
        badge="FAQ"
        title="Frequently Asked Questions"
        description="Find answers to the most common questions about our free online image tools."
      />

      <div className="mx-auto mt-16 max-w-4xl space-y-6">
        {items.map((faq) => (
          <div
            key={faq.question}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
          >
            <h3 className="text-xl font-bold text-slate-900">
              {faq.question}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}