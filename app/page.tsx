import { Metadata } from "next";

import Hero from "@/components/home/Hero";
import PopularTools from "@/components/home/PopularTools";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import AboutSection from "@/components/home/AboutSection";
import FeaturedTools from "@/components/home/FeaturedTools";
import SupportedFormats from "@/components/home/SupportedFormats";
import FAQSection from "@/components/home/FAQSection";
import SEOFooter from "@/components/home/SEOFooter";

// 1. تحسين metadata مع كلمات مفتاحية إضافية
export const metadata: Metadata = {
  title: "Free Online Image Converter - PNG, JPG, WEBP, AVIF Converter | 100% Private & Secure",
  description: "Convert PNG, JPG, WEBP, AVIF and more online free. 100% private browser-based image converter. No uploads, no registration, unlimited usage. Best free image converter tool for all formats.",
  keywords: [
    "image converter online",
    "free image converter",
    "png to jpg",
    "jpg to png",
    "webp to png",
    "png to webp",
    "avif to jpg",
    "jpg to avif",
    "convert image free",
    "online image tools",
    "image compression",
    "resize image online",
    "crop image online",
    "rotate image online",
    "flip image online",
    "image optimizer",
    "photo converter",
    "best image converter",
    "free online tools",
    "browser-based converter",
    "private image converter",
    "image editing online",
    "image format converter",
    "convert photos online",
    "free image editor",
    "online photo tools",
    "image resizer",
    "image cropper",
    "image compressor",
  ],
  openGraph: {
    title: "Free Online Image Converter - Convert PNG, JPG, WEBP, AVIF | 100% Private",
    description: "Convert images online free. PNG to JPG, JPG to PNG, WEBP to PNG, AVIF to JPG and more. 100% private browser-based converter. No uploads, no registration.",
    url: "https://pngjpgconvert.com",
    type: "website",
    siteName: "PNG JPG Convert",
    locale: "en_US",
    images: [
      {
        url: "/og-image-home.jpg",
        width: 1200,
        height: 630,
        alt: "Free Online Image Converter - Convert PNG, JPG, WEBP, AVIF Online Free",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pngjpgconvert",
    creator: "@pngjpgconvert",
    title: "Free Online Image Converter - PNG, JPG, WEBP, AVIF Converter",
    description: "Convert images online free. 100% private browser-based image converter. No uploads, no registration, unlimited usage.",
    images: ["/og-image-home.jpg"],
  },
  alternates: {
    canonical: "https://pngjpgconvert.com",
    languages: {
      "en-US": "https://pngjpgconvert.com",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Technology",
  classification: "Image Converter & Image Tools",
  authors: [{ name: "PNG JPG Convert" }],
  creator: "PNG JPG Convert",
  publisher: "PNG JPG Convert",
  applicationName: "PNG JPG Convert",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    title: "PNG JPG Convert",
    statusBarStyle: "default",
    capable: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function HomePage() {
  return (
    <>
      {/* 2. Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:p-4 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* 3. Hero section with main keywords */}
      <Hero />

      {/* 4. Popular Tools section with internal linking */}
      <section aria-label="Popular Image Converter Tools" className="scroll-mt-16">
        <PopularTools />
      </section>

      {/* 5. Why Choose Us - Value proposition */}
      <section aria-label="Why Choose PNG JPG Convert" className="scroll-mt-16">
        <WhyChooseUs />
      </section>

      {/* 6. How It Works - Step by step guide */}
      <section aria-label="How to Convert Images Online" className="scroll-mt-16">
        <HowItWorks />
      </section>

      {/* 7. About Section - Company information */}
      <section aria-label="About PNG JPG Convert" className="scroll-mt-16">
        <AboutSection />
      </section>

      {/* 8. Featured Tools - Highlighted tools */}
      <section aria-label="Featured Image Tools" className="scroll-mt-16">
        <FeaturedTools />
      </section>

      {/* 9. Supported Formats - All formats */}
      <section aria-label="Supported Image Formats" className="scroll-mt-16">
        <SupportedFormats />
      </section>

      {/* 10. FAQ Section - Rich snippets */}
      <section aria-label="Frequently Asked Questions" className="scroll-mt-16">
        <FAQSection />
      </section>

      {/* 11. SEO Footer - Additional links */}
      <SEOFooter />

      {/* 12. Schema Markup - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PNG JPG Convert",
            "url": "https://pngjpgconvert.com",
            "logo": "https://pngjpgconvert.com/logo.png",
            "description": "Free online image converter and image tools. Convert PNG, JPG, WEBP, AVIF and more.",
            "sameAs": [
              "https://twitter.com/pngjpgconvert",
              "https://facebook.com/pngjpgconvert",
            ],
          }),
        }}
      />

      {/* 13. Schema Markup - WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "PNG JPG Convert",
            "url": "https://pngjpgconvert.com",
            "description": "Free online image converter and image tools.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://pngjpgconvert.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* 14. Schema Markup - Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://pngjpgconvert.com",
              },
            ],
          }),
        }}
      />

      {/* 15. إضافة main content ID للـ Skip link */}
      <div id="main-content" className="sr-only">Main Content</div>
    </>
  );
}