import type { Metadata } from "next";

export const SITE = {
  name: "My Site",

  shortName: "My Site",

  url: "https://mysite.com",

  title: "My Site",

  description:
    "Free online image tools to convert, compress, resize and optimize images directly in your browser. Fast, secure and privacy-friendly.",

  keywords: [
    "Image Converter",
    "PNG to JPG",
    "JPG to PNG",
    "PNG to WEBP",
    "WEBP to PNG",
    "Image Compressor",
    "Resize Image",
    "Crop Image",
    "Rotate Image",
    "Watermark Image",
    "Online Image Tools",
    "Free Image Converter",
  ],

  locale: "en_US",

  type: "website",

  twitter: "@mysite",

  author: "My Site",

  themeColor: "#2563eb",

  image: "/images/og-image.png",
};

interface MetadataProps {
  title?: string;

  description?: string;

  path?: string;

  image?: string;

  keywords?: string[];

  noIndex?: boolean;
}

export function createMetadata({
  title,
  description,
  path = "",
  image = SITE.image,
  keywords = [],
  noIndex = false,
}: MetadataProps): Metadata {
  const url = `${SITE.url}${path}`;

  return {
    metadataBase: new URL(SITE.url),

    applicationName: SITE.name,

    title: title
      ? `${title} | ${SITE.name}`
      : SITE.title,

    description:
      description ??
      SITE.description,

    keywords: [
      ...SITE.keywords,
      ...keywords,
    ],

    authors: [
      {
        name: SITE.author,
        url: SITE.url,
      },
    ],

    creator: SITE.author,

    publisher: SITE.author,

    alternates: {
      canonical: url,
    },

    category: "technology",

    openGraph: {
      type: "website",

      locale: SITE.locale,

      url,

      title:
        title ??
        SITE.title,

      description:
        description ??
        SITE.description,

      siteName: SITE.name,

      images: [
        {
          url: image,

          width: 1200,

          height: 630,

          alt:
            title ??
            SITE.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      creator: SITE.twitter,

      title:
        title ??
        SITE.title,

      description:
        description ??
        SITE.description,

      images: [image],
    },

    robots: {
      index: !noIndex,

      follow: !noIndex,

      nocache: false,

      googleBot: {
        index: !noIndex,

        follow: !noIndex,

        "max-image-preview": "large",

        "max-snippet": -1,

        "max-video-preview": -1,
      },
    },

    icons: {
      icon: "/favicon.ico",

      shortcut: "/favicon.ico",

      apple: "/apple-touch-icon.png",
    },

    appleWebApp: {
      capable: true,

      title: SITE.name,

      statusBarStyle: "default",
    },

    formatDetection: {
      telephone: false,

      address: false,

      email: false,
    },
  };
}

export const defaultMetadata =
  createMetadata({});