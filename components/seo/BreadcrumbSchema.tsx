import JsonLd from "./JsonLd";
import { SITE } from "@/lib/metadata";

interface Item {
  name: string;
  path: string;
}

interface Props {
  items: Item[];
}

export default function BreadcrumbSchema({
  items,
}: Props) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",

        "@type": "BreadcrumbList",

        itemListElement: items.map(
          (item, index) => ({
            "@type": "ListItem",

            position: index + 1,

            name: item.name,

            item: `${SITE.url}${item.path}`,
          })
        ),
      }}
    />
  );
}