import JsonLd from "./JsonLd";
import { SITE } from "@/lib/metadata";

interface Props {
  title: string;
  description: string;
  path: string;
}

export default function SoftwareSchema({
  title,
  description,
  path,
}: Props) {
  const url = `${SITE.url}${path}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",

        "@type": "SoftwareApplication",

        "@id": `${url}#software`,

        name: title,

        applicationCategory:
          "MultimediaApplication",

        applicationSubCategory:
          "Image Converter",

        operatingSystem: "Web Browser",

        softwareVersion: "1.0",

        browserRequirements:
          "Requires JavaScript. Works in Chrome, Edge, Firefox and Safari.",

        offers: {
          "@type": "Offer",

          price: "0",

          priceCurrency: "USD",
        },

        isAccessibleForFree: true,

        creator: {
          "@id": `${SITE.url}#organization`,
        },

        publisher: {
          "@id": `${SITE.url}#organization`,
        },

        url,

        image: `${SITE.url}${SITE.image}`,

        description,

        featureList: [
          "Convert images instantly",
          "Browser based processing",
          "No upload required",
          "Privacy friendly",
          "Multiple file support",
          "High quality conversion",
        ],
      }}
    />
  );
}