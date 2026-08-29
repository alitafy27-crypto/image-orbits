import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 1. جميع محركات البحث
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          // 2. منع فهرسة المسارات الداخلية
          "/api/",
          "/_next/",
          "/admin/",
          "/dashboard/",
          "/login/",
          "/register/",
          "/reset-password/",
          "/forgot-password/",
          "/profile/",
          "/settings/",
          "/account/",
          // 3. منع فهرسة الملفات المؤقتة
          "*.tmp$",
          "*.log$",
          "*.bak$",
          // 4. منع فهرسة الصور المؤقتة
          "*/temp/*",
          "*/cache/*",
          "*/thumbnails/*",
          // 5. منع فهرسة صفحات معينة
          "/404",
          "/500",
          "/error",
          "/under-construction",
          "/maintenance",
        ],
      },

      // 6. جوجل بوت مع إعدادات محسنة
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/dashboard/",
          "/login/",
          "/register/",
        ],
        // 7. إضافة crawl-delay لجوجل
        crawlDelay: 1,
      },

      // 8. بينج بوت
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
        crawlDelay: 1,
      },

      // 9. ياندكس بوت
      {
        userAgent: "YandexBot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
        crawlDelay: 1,
      },

      // 10. بايدو سبايدر
      {
        userAgent: "Baiduspider",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
        crawlDelay: 2,
      },

      // 11. SEO بوت (Ahrefs, Semrush, Moz)
      {
        userAgent: "AhrefsBot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
        crawlDelay: 2,
      },

      {
        userAgent: "SemrushBot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
        crawlDelay: 2,
      },

      {
        userAgent: "MozBot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
        crawlDelay: 1,
      },

      // 12. روبوتات الصور (Googlebot-Image)
      {
        userAgent: "Googlebot-Image",
        allow: "/",
        disallow: [
          "*/temp/*",
          "*/cache/*",
          "*/thumbnails/*",
        ],
      },

      // 13. روبوتات الفيديو
      {
        userAgent: "Googlebot-Video",
        allow: "/",
      },

      // 14. روبوتات الجوال
      {
        userAgent: "Googlebot-Mobile",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
      },

      // 15. روبوتات الأخبار
      {
        userAgent: "Googlebot-News",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
      },

      // 16. روبوتات الإعلانات
      {
        userAgent: "AdsBot-Google",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
      },

      // 17. روبوتات أخرى
      {
        userAgent: "Twitterbot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
      },

      {
        userAgent: "facebookexternalhit",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
      },

      {
        userAgent: "LinkedInBot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
      },

      {
        userAgent: "Pinterestbot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
      },

      // 18. روبوتات سيئة (روابط غير مرغوب فيها)
      {
        userAgent: "MJ12bot",
        disallow: "/",
      },

      {
        userAgent: "DotBot",
        disallow: "/",
      },

      {
        userAgent: "BLEXBot",
        disallow: "/",
      },

      {
        userAgent: "YandexImages",
        disallow: "/",
      },

      // 19. روبوتات الزحف غير المرغوب فيها
      {
        userAgent: "Exabot",
        disallow: "/",
      },

      {
        userAgent: "Proximic",
        disallow: "/",
      },

      {
        userAgent: "spbot",
        disallow: "/",
      },
    ],

    // 20. خريطة الموقع والهوست
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}