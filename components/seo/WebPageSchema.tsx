import JsonLd from "./JsonLd";
import { SITE } from "@/lib/metadata";

interface Props {
  title: string;
  description: string;
  path: string;
}

export default function WebPageSchema({
  title,
  description,
  path,
}: Props) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",

        "@type": "WebPage",

        "@id": `${SITE.url}${path}`,

        url: `${SITE.url}${path}`,

        name: title,

        headline: title,

        description,

        isPartOf: {
          "@id": `${SITE.url}#website`,
        },

        about: {
          "@id": `${SITE.url}#organization`,
        },

        inLanguage: "en",
      }}
    />
  );
}