export const siteConfig = {
  name: "My Site",

  shortName: "My Site",

  description:
    "Free online image tools to convert, compress, resize, crop, rotate and optimize PNG, JPG, WEBP and AVIF images directly in your browser. Fast, private and secure.",

  url: "https://mysite.com",

  logo: "/images/logo.svg",

  ogImage: "/images/og-image.png",

  locale: "en_US",

  creator: "My Site",

  email: "support@mysite.com",

  keywords: [
    "My Site",
    "Image Converter",
    "Image Tools",
    "Online Image Converter",
    "Free Image Converter",
    "PNG to JPG",
    "JPG to PNG",
    "PNG to WEBP",
    "WEBP to PNG",
    "AVIF Converter",
    "Image Compressor",
    "Compress Image",
    "Resize Image",
    "Crop Image",
    "Rotate Image",
    "Online Image Editor",
    "Convert Images Online",
    "Optimize Images",
    "Free Online Tools",
  ],

  social: {
    github: "",
    twitter: "",
    linkedin: "",
  },

  navigation: [
    {
      title: "Tools",
      href: "/tools",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],

  footer: {
    tools: [
      {
        title: "PNG to JPG",
        href: "/tools/png-to-jpg",
      },
      {
        title: "JPG to PNG",
        href: "/tools/jpg-to-png",
      },
      {
        title: "PNG to WEBP",
        href: "/tools/png-to-webp",
      },
      {
        title: "WEBP to PNG",
        href: "/tools/webp-to-png",
      },
      {
        title: "Image Compressor",
        href: "/tools/compress",
      },
      {
        title: "Resize Image",
        href: "/tools/resize",
      },
    ],

    company: [
      {
        title: "All Tools",
        href: "/tools",
      },
      {
        title: "About",
        href: "/about",
      },
      {
        title: "Contact",
        href: "/contact",
      },
    ],

    legal: [
      {
        title: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        title: "Terms of Service",
        href: "/terms",
      },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;