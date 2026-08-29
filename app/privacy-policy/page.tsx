import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

// 1. تحسين metadata مع كلمات مفتاحية محسنة
export const metadata: Metadata = createMetadata({
  title: "Privacy Policy - PNG JPG Convert | Data Protection & Security",
  description: "Read the PNG JPG Convert Privacy Policy to learn how we protect your privacy, handle your data, and ensure secure image processing. 100% browser-based, no uploads.",
  path: "/privacy-policy",
  keywords: [
    "Privacy Policy",
    "PNG JPG Convert Privacy",
    "Data Protection",
    "Image Privacy",
    "Secure Image Processing",
    "Browser-based Privacy",
    "No Upload Policy",
    "Data Security",
    "Privacy Statement",
    "Image Data Protection",
    "Cookie Policy",
    "GDPR Compliance",
    "Privacy Policy Page",
    "Data Collection Policy",
    "Image Privacy Policy",
    "Secure Image Tools",
    "Privacy First",
    "Data Handling Policy",
    "Privacy Notice",
    "Image Converter Privacy",
  ],
});

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20" id="main-content">
      {/* 2. Hero Section with main heading */}
      <div className="text-center">
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Privacy Policy
        </span>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900">
          Privacy Policy
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Your privacy is our priority. This page explains how PNG JPG Convert 
          collects, uses, and protects your information. We are committed to 
          keeping your images private and secure.
        </p>
      </div>

      {/* 3. Last Updated */}
      <div className="mt-8 text-center text-sm text-slate-500">
        Last Updated: {new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </div>

      {/* 4. Privacy Policy Content */}
      <article className="prose prose-slate mx-auto mt-12 max-w-none">
        {/* 5. Information We Collect */}
        <section>
          <h2>1. Information We Collect</h2>
          <p>
            PNG JPG Convert is designed to process images directly in your browser. 
            We do not intentionally collect, store, or share your image files. 
            All processing happens locally on your device.
          </p>
          <ul>
            <li><strong>Images:</strong> Your images are processed locally in your browser and are never uploaded to our servers.</li>
            <li><strong>Analytics Data:</strong> We may collect anonymous usage data to improve our services.</li>
            <li><strong>Cookies:</strong> We use cookies to enhance user experience and analyze website traffic.</li>
          </ul>
        </section>

        {/* 6. How We Use Information */}
        <section>
          <h2>2. How We Use Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide and maintain our image conversion services</li>
            <li>Improve website performance and user experience</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Communicate updates and important information</li>
          </ul>
        </section>

        {/* 7. Cookies */}
        <section>
          <h2>3. Cookies</h2>
          <p>
            Our website uses cookies and similar technologies to improve user experience 
            and website functionality. Cookies are small text files stored on your device.
          </p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
          </ul>
          <p>
            You can control cookie preferences through your browser settings.
          </p>
        </section>

        {/* 8. Third-Party Services */}
        <section>
          <h2>4. Third-Party Services</h2>
          <p>
            We may use third-party services to improve our services:
          </p>
          <ul>
            <li><strong>Google Analytics:</strong> To understand website traffic and user behavior</li>
            <li><strong>Vercel/Netlify:</strong> For website hosting and deployment</li>
            <li><strong>Email Services:</strong> For customer support and communications</li>
          </ul>
          <p>
            These services may collect anonymous usage data in accordance with their privacy policies.
          </p>
        </section>

        {/* 9. Data Security */}
        <section>
          <h2>5. Data Security</h2>
          <p>
            Protecting your privacy is one of our top priorities. Here's how we ensure your data stays secure:
          </p>
          <ul>
            <li>✅ Images are processed locally in your browser</li>
            <li>✅ No uploads to our servers</li>
            <li>✅ HTTPS encryption for all connections</li>
            <li>✅ No permanent storage of user images</li>
            <li>✅ Regular security updates and monitoring</li>
          </ul>
        </section>

        {/* 10. Your Rights */}
        <section>
          <h2>6. Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access the data we collect about you</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of analytics tracking</li>
            <li>Control cookie preferences</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information below.
          </p>
        </section>

        {/* 11. Children's Privacy */}
        <section>
          <h2>7. Children's Privacy</h2>
          <p>
            Our services are not directed at children under 13 years of age. 
            We do not knowingly collect personal information from children.
          </p>
        </section>

        {/* 12. Changes to Policy */}
        <section>
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We encourage you to 
            review this page periodically for any changes. The date at the top of 
            this page indicates when it was last updated.
          </p>
        </section>

        {/* 13. Contact */}
        <section>
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy, 
            please contact us:
          </p>
          <ul>
            <li>📧 Email: <a href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline">{siteConfig.email}</a></li>
            <li>🌐 Website: <a href={siteConfig.url} className="text-blue-600 hover:underline">{siteConfig.url}</a></li>
          </ul>
        </section>
      </article>

      {/* 14-20. Schema Markup */}
      
      {/* 14. Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PNG JPG Convert",
            "url": "https://pngjpgconvert.com",
            "email": siteConfig.email,
          }),
        }}
      />

      {/* 15. WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "description": "Read the PNG JPG Convert Privacy Policy to learn how we protect your privacy and handle your data.",
            "url": "https://pngjpgconvert.com/privacy-policy",
            "about": {
              "@type": "Thing",
              "name": "Privacy Policy",
            },
          }),
        }}
      />

      {/* 16. Breadcrumb Schema */}
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
                "name": "Privacy Policy",
                "item": "https://pngjpgconvert.com/privacy-policy",
              },
            ],
          }),
        }}
      />
    </main>
  );
}