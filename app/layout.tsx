import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import {
  OrganizationSchema,
  WebsiteSchema,
  SearchActionSchema,
} from "@/components/seo";

import { siteConfig } from "@/lib/site";

const GA_MEASUREMENT_ID = "G-SFH99K0BK1";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// 1. تحسين metadata مع كلمات مفتاحية إضافية وفوائد
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "PNG JPG Convert - Free Online Image Converter & Image Tools",
    template: `%s | PNG JPG Convert - Free Image Converter Online`,
  },

  description: "Convert PNG, JPG, WEBP, AVIF and more online free. 100% private browser-based image converter. No uploads, no registration, unlimited usage. Best free image converter tool.",

  keywords: [
    "image converter",
    "png to jpg",
    "jpg to png",
    "webp to png",
    "png to webp",
    "convert image online",
    "free image converter",
    "image compression",
    "resize image",
    "crop image",
    "rotate image",
    "flip image",
    "image optimization",
    "webp converter",
    "avif converter",
    "pdf to image",
    "image to pdf",
    "merge images",
    "watermark image",
    "free online tools",
    "browser-based converter",
    "no upload image converter",
    "private image converter",
    "image editing tools",
    "photo converter",
    "batch image converter",
    "free image optimizer",
    "best image converter tool",
    "online image editor",
    "image format converter",
    ...siteConfig.keywords,
  ],

  authors: [
    {
      name: siteConfig.creator,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.creator,

  publisher: siteConfig.creator,

  applicationName: "PNG JPG Convert",

  generator: "Next.js",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en-US": siteConfig.url,
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: "PNG JPG Convert",
    title: "PNG JPG Convert - Free Online Image Converter & Image Tools",
    description: "Convert PNG, JPG, WEBP, AVIF and more online free. 100% private browser-based image converter. No uploads, no registration, unlimited usage.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "PNG JPG Convert - Free Online Image Converter Tool",
        type: "image/png",
      },
    ],
    emails: ["support@pngjpgconvert.com"],
    phoneNumbers: [],
    faxNumbers: [],
    countryName: "United States",
   
  },

  twitter: {
    card: "summary_large_image",
    site: "@pngjpgconvert",
    creator: "@pngjpgconvert",
    title: "PNG JPG Convert - Free Online Image Converter & Image Tools",
    description: "Convert PNG, JPG, WEBP, AVIF and more online free. 100% private browser-based image converter. No uploads, no registration.",
    images: [
      {
        url: siteConfig.ogImage,
        alt: "PNG JPG Convert - Free Online Image Converter Tool",
      },
    ],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#3b82f6",
      },
    ],
  },

  manifest: "/manifest.json",

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },

  category: "Technology",

  classification: "Image Converter & Image Tools",

  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // me: ["your-email@example.com"],
  },

  appleWebApp: {
    title: "PNG JPG Convert",
    statusBarStyle: "default",
    capable: true,
  },

  assets: ["/images/", "/icons/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.locale.split("-")[0]} suppressHydrationWarning>
      <head>
        {/* 2. Preconnect for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* 3. DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* 4. Preload critical assets */}
        <link rel="preload" href="/favicon.ico" as="image" />
        
        {/* 5. Additional meta tags */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content="PNG JPG Convert" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* 6. Open Graph additional tags */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="PNG JPG Convert - Free Online Image Converter Tool" />
        <meta property="og:site_name" content="PNG JPG Convert" />
        
        {/* 7. Twitter additional tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pngjpgconvert" />
        <meta name="twitter:creator" content="@pngjpgconvert" />
        
        {/* 8. Dublin Core metadata */}
        <meta name="DC.title" content="PNG JPG Convert - Free Online Image Converter" />
        <meta name="DC.creator" content={siteConfig.creator} />
        <meta name="DC.type" content="Tool" />
        <meta name="DC.language" content="en" />
        
        {/* 9. Geo tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="37.7749;-122.4194" />
        <meta name="ICBM" content="37.7749, -122.4194" />
        
        {/* 10. Copyright */}
        <meta name="copyright" content={`© ${new Date().getFullYear()} PNG JPG Convert. All rights reserved.`} />
        
        {/* 11. Author meta */}
        <meta name="author" content={siteConfig.creator} />
        <meta name="designer" content={siteConfig.creator} />
        <meta name="web_author" content={siteConfig.creator} />
        
        {/* 12. Distribution and rating */}
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 days" />
        
        {/* 13. Language and locale */}
        <meta name="language" content="en" />
        <meta name="locale" content="en_US" />
        <meta httpEquiv="Content-Language" content="en" />
        
        {/* 14. Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* 15. Resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* 16. Sitemap link */}
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        
        {/* 17. Author link */}
        <link rel="author" href={`${siteConfig.url}/about`} />
        <link rel="publisher" href={`${siteConfig.url}/about`} />
        
        {/* 18. Index and follow */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 font-sans text-slate-900 antialiased`}
      >
        {/* 19. Google Analytics with optimized loading */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
          id="gtag-script"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `}
        </Script>

        {/* 20. Schema Components */}
        <OrganizationSchema />
        <WebsiteSchema />
        <SearchActionSchema />

        <div className="flex min-h-screen flex-col">
          <Header />

          <main className="flex-1" id="main-content" role="main">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}