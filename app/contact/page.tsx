import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

// 1. تحسين metadata مع كلمات مفتاحية محسنة
export const metadata: Metadata = createMetadata({
  title: "Contact Us - PNG JPG Convert | Support & Feedback",
  description: "Get in touch with the PNG JPG Convert team. Have questions, suggestions, or feedback? Contact us anytime. We respond within 24-48 hours.",
  path: "/contact",
  keywords: [
    "Contact PNG JPG Convert",
    "PNG JPG Convert Support",
    "Contact",
    "Support",
    "Feedback",
    "Help",
    "Customer Support",
    "Email Support",
    "Image Converter Help",
    "Contact Support",
    "Get Help",
    "Contact Form",
    "Support Team",
    "Technical Support",
    "Image Tools Support",
    "Bug Report",
    "Feature Request",
    "Feedback Form",
    "Contact Us",
    "Support Email",
  ],
});

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20" id="main-content">
      {/* 2. Hero Section with main heading */}
      <div className="text-center">
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Contact Us
        </span>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900">
          We'd Love to Hear From You
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Have a question, suggestion, found a bug, or want to share feedback? 
          We're here to help. Contact us anytime and we'll respond within 24–48 hours.
        </p>
      </div>

      {/* 3. Contact Options Section */}
      <div className="mx-auto mt-20 max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        {/* 4. Email Support */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            📧 Email Support
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            For general inquiries, support requests, or feedback, send us an email.
            We usually respond within 24–48 hours.
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            aria-label={`Send email to ${siteConfig.email}`}
          >
            {siteConfig.email}
          </a>
        </div>

        {/* 5. Response Times */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">
            ⏱️ Response Times
          </h3>
          <ul className="mt-4 space-y-2 text-slate-600">
            <li>✅ General inquiries: 24-48 hours</li>
            <li>✅ Bug reports: 24-48 hours</li>
            <li>✅ Feature requests: 48-72 hours</li>
            <li>✅ Technical support: 24-48 hours</li>
          </ul>
        </div>

        {/* 6. FAQ Quick Links */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">
            📖 Frequently Asked Questions
          </h3>
          <p className="mt-2 text-slate-600">
            Before contacting us, you might find answers in our 
            <a href="/faq" className="text-blue-600 hover:underline ml-1">
              FAQ page
            </a>
            .
          </p>
        </div>

        {/* 7. Social Media Links */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">
            📱 Connect With Us
          </h3>
          <p className="mt-2 text-slate-600">
            Follow us on social media for updates and news:
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <a 
              href="https://twitter.com/pngjpgconvert" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
              aria-label="Follow us on Twitter"
            >
              🐦 Twitter
            </a>
            <a 
              href="https://facebook.com/pngjpgconvert" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
              aria-label="Follow us on Facebook"
            >
              📘 Facebook
            </a>
          </div>
        </div>

        {/* 8. Contact Information */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">
            📍 Contact Information
          </h3>
          <ul className="mt-4 space-y-2 text-slate-600">
            <li>📧 Email: <a href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline">{siteConfig.email}</a></li>
            <li>🌐 Website: <a href={siteConfig.url} className="text-blue-600 hover:underline">{siteConfig.url}</a></li>
          </ul>
        </div>

        {/* 9-20. Schema Markup */}
        
        {/* 9. Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PNG JPG Convert",
              "url": "https://pngjpgconvert.com",
              "email": siteConfig.email,
              "contactPoint": {
                "@type": "ContactPoint",
                "email": siteConfig.email,
                "contactType": "customer support",
                "availableLanguage": ["English"],
                "areaServed": "Worldwide",
              },
            }),
          }}
        />

        {/* 10. ContactPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact PNG JPG Convert",
              "description": "Contact the PNG JPG Convert team for support, feedback, or inquiries.",
              "url": "https://pngjpgconvert.com/contact",
              "mainEntity": {
                "@type": "Organization",
                "name": "PNG JPG Convert",
                "email": siteConfig.email,
              },
            }),
          }}
        />

        {/* 11. WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Contact PNG JPG Convert",
              "description": "Contact the PNG JPG Convert team for support, feedback, or inquiries.",
              "url": "https://pngjpgconvert.com/contact",
              "about": {
                "@type": "Organization",
                "name": "PNG JPG Convert",
              },
            }),
          }}
        />

        {/* 12. Breadcrumb Schema */}
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
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Contact",
                  "item": "https://pngjpgconvert.com/contact",
                },
              ],
            }),
          }}
        />

        {/* 13. FAQ Schema for quick help */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does it take to get a response?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We typically respond within 24-48 hours for general inquiries and bug reports."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I contact PNG JPG Convert?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contact us via email at support@pngjpgconvert.com. We respond within 24-48 hours."
                  }
                }
              ]
            }),
          }}
        />
      </div>
    </main>
  );
}