import JsonLd from "./JsonLd";
import { SITE } from "@/lib/metadata";

export default function SearchActionSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",

        "@type": "SearchAction",

        target: `${SITE.url}/tools?search={search_term_string}`,

        "query-input":
          "required name=search_term_string",
      }}
    />
  );
}