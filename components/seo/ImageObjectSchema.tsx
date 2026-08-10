import JsonLd from "./JsonLd";
import { SITE } from "@/lib/metadata";

interface Props {
  title: string;
  image: string;
}

export default function ImageObjectSchema({
  title,
  image,
}: Props) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",

        "@type": "ImageObject",

        contentUrl: image.startsWith("http")
          ? image
          : `${SITE.url}${image}`,

        caption: title,

        creator: {
          "@id": `${SITE.url}#organization`,
        },

        creditText: SITE.name,

        license: SITE.url,
      }}
    />
  );
}