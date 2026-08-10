import JsonLd from "./JsonLd";

interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  items: FAQ[];
}

export default function FAQSchema({
  items,
}: Props) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",

        "@type": "FAQPage",

        mainEntity: items.map((faq) => ({
          "@type": "Question",

          name: faq.question,

          acceptedAnswer: {
            "@type": "Answer",

            text: faq.answer,
          },
        })),
      }}
    />
  );
}