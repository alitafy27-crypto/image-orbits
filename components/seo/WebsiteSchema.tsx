import JsonLd from "./JsonLd";
import { SITE } from "@/lib/metadata";

export default function WebsiteSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",

        "@type": "WebSite",

        "@id": `${SITE.url}#website`,

        url: SITE.url,

        name: SITE.name,

        description: SITE.description,

        publisher: {
          "@id": `${SITE.url}#organization`,
        },

        inLanguage: "en",

        potentialAction: {
          "@type": "SearchAction",

          target: `${SITE.url}/tools?search={search_term_string}`,

          "query-input":
            "required name=search_term_string",
        },
      }}
    />
  );
}