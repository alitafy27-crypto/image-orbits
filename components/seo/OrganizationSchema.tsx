import JsonLd from "./JsonLd";
import { SITE } from "@/lib/metadata";

export default function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",

        "@id": `${SITE.url}#organization`,

        name: SITE.name,

        url: SITE.url,

        logo: `${SITE.url}/logo.png`,

        image: `${SITE.url}${SITE.image}`,

        description: SITE.description,

        email: "contact@My Site.com",

        foundingDate: "2026",

        knowsAbout: [
          "Image Conversion",
          "Image Compression",
          "Image Optimization",
          "PNG",
          "JPG",
          "WEBP",
          "AVIF",
        ],

        sameAs: [
          "https://twitter.com/My Site",
          "https://github.com/My Site",
        ],
      }}
    />
  );
}