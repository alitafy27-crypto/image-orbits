import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

const faqs = [
  {
    question: "Is Image-Orbits completely free?",
    answer:
      "Yes. All image tools are free to use without creating an account.",
  },
  {
    question: "Are my images uploaded to a server?",
    answer:
      "No. Most image processing happens directly inside your browser, keeping your files private and secure.",
  },
  {
    question: "Which image formats are supported?",
    answer:
      "Image-Orbits supports PNG, JPG, JPEG, WEBP and AVIF, with more formats coming soon.",
  },
  {
    question: "Can I convert multiple images at once?",
    answer:
      "Yes. Most conversion tools support batch processing so you can convert several images in one operation.",
  },
  {
    question: "Do I lose image quality after conversion?",
    answer:
      "Image quality depends on the selected format and compression settings. We always aim to preserve the highest possible quality.",
  },
  {
    question: "Does Image-Orbits work on mobile devices?",
    answer:
      "Yes. The website is fully responsive and works on phones, tablets and desktop computers.",
  },
];

export default function FAQSection() {
  return (
    <Section className="bg-white">
      <Heading
        badge="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about Image-Orbits."
      />

      <div className="mx-auto mt-16 max-w-4xl space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
          >
            <h3 className="text-xl font-semibold text-slate-900">
              {faq.question}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}