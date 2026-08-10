import { siteConfig } from "./site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: siteConfig.name,
    url: siteConfig.url,

    logo: `${siteConfig.url}${siteConfig.logo}`,

    description: siteConfig.description,

    sameAs: [
      siteConfig.social.github,
      siteConfig.social.twitter,
      siteConfig.social.linkedin,
    ].filter(Boolean),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: siteConfig.name,

    url: siteConfig.url,

    description: siteConfig.description,

    inLanguage: "en",

    potentialAction: {
      "@type": "SearchAction",

      target: `${siteConfig.url}/tools?search={search_term_string}`,

      "query-input": "required name=search_term_string",
    },
  };
}

export function webApplicationSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",

    "@type": "WebApplication",

    name,

    description,

    url,

    applicationCategory: "MultimediaApplication",

    operatingSystem: "Any",

    browserRequirements: "Requires JavaScript",

    offers: {
      "@type": "Offer",

      price: "0",

      priceCurrency: "USD",
    },
  };
}

export function softwareApplicationSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",

    "@type": "SoftwareApplication",

    name,

    description,

    url,

    applicationCategory: "MultimediaApplication",

    operatingSystem: "Web Browser",

    offers: {
      "@type": "Offer",

      price: "0",

      priceCurrency: "USD",
    },
  };
}

export function breadcrumbSchema(
  items: {
    name: string;
    url: string;
  }[]
) {
  return {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name: item.name,

      item: item.url,
    })),
  };
}

export function faqSchema(
  faqs: {
    question: string;
    answer: string;
  }[]
) {
  return {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: faqs.map((faq) => ({
      "@type": "Question",

      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",

        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(
  title: string,
  description: string,
  url: string,
  image: string,
  datePublished: string,
  dateModified: string
) {
  return {
    "@context": "https://schema.org",

    "@type": "Article",

    headline: title,

    description,

    image,

    datePublished,

    dateModified,

    author: {
      "@type": "Organization",

      name: siteConfig.name,
    },

    publisher: {
      "@type": "Organization",

      name: siteConfig.name,

      logo: {
        "@type": "ImageObject",

        url: `${siteConfig.url}${siteConfig.logo}`,
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",

      "@id": url,
    },
  };
}
export function imageObjectSchema(
  name: string,
  image: string,
  description: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",

    name,

    description,

    contentUrl: image,

    thumbnailUrl: image,

    license: `${siteConfig.url}/terms`,

    acquireLicensePage: `${siteConfig.url}/terms`,
  };
}