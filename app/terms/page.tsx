import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

// 1. تحسين metadata مع كلمات مفتاحية محسنة
export const metadata: Metadata = createMetadata({
  title: "Terms of Service - PNG JPG Convert | Legal Terms & Conditions",
  description: "Read the Terms of Service for using PNG JPG Convert online image tools. Learn about user responsibilities, limitations, and legal terms.",
  path: "/terms",
  keywords: [
    "Terms of Service",
    "PNG JPG Convert Terms",
    "Website Terms",
    "Legal Terms",
    "Terms and Conditions",
    "User Agreement",
    "Service Terms",
    "Acceptable Use Policy",
    "Legal Policy",
    "Terms of Use",
    "Image Converter Terms",
    "Privacy Terms",
    "Legal Notice",
    "Disclaimer",
    "Liability Terms",
    "User Responsibilities",
    "Service Agreement",
    "Terms Page",
    "Legal Information",
    "Terms of Service Page",
  ],
});

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20" id="main-content">
      {/* 2. Hero Section with main heading */}
      <div className="text-center">
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Terms of Service
        </span>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900">
          Terms of Service
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          By accessing and using PNG JPG Convert, you agree to the following
          terms and conditions. Please read them carefully before using our services.
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

      {/* 4. Terms Content */}
      <article className="prose prose-slate mx-auto mt-12 max-w-none">
        {/* 5. Acceptance of Terms */}
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using PNG JPG Convert (the "Service"), you agree 
            to comply with these Terms of Service and all applicable laws and regulations. 
            If you do not agree with any of these terms, you are prohibited from using 
            this Service.
          </p>
        </section>

        {/* 6. Use of the Service */}
        <section>
          <h2>2. Use of the Service</h2>
          <p>
            Our tools are provided free of charge for personal and commercial use 
            unless otherwise stated. You may use the Service for any lawful purpose.
          </p>
          <ul>
            <li>✅ Convert images for personal use</li>
            <li>✅ Use for commercial projects and websites</li>
            <li>✅ Share converted images with others</li>
            <li>❌ Do not misuse or abuse the Service</li>
            <li>❌ Do not attempt to bypass any limitations</li>
          </ul>
        </section>

        {/* 7. User Responsibilities */}
        <section>
          <h2>3. User Responsibilities</h2>
          <p>
            You are responsible for ensuring that you have the necessary rights
            to process any files you upload or use with our services.
          </p>
          <ul>
            <li>You own the copyright to the images you convert</li>
            <li>You have permission to use the images</li>
            <li>You will not use the Service for illegal activities</li>
            <li>You will not upload malicious or harmful content</li>
          </ul>
        </section>

        {/* 8. Intellectual Property */}
        <section>
          <h2>4. Intellectual Property</h2>
          <p>
            All content, features, and functionality of the Service, including but 
            not limited to text, graphics, logos, and software, are owned by 
            PNG JPG Convert and are protected by copyright and intellectual property laws.
          </p>
        </section>

        {/* 9. Availability */}
        <section>
          <h2>5. Availability</h2>
          <p>
            We strive to keep our services available at all times, but we do not
            guarantee uninterrupted access. We reserve the right to:
          </p>
          <ul>
            <li>Suspend or terminate access to the Service at any time</li>
            <li>Perform maintenance and updates</li>
            <li>Change or discontinue features</li>
          </ul>
        </section>

        {/* 10. Disclaimer of Warranties */}
        <section>
          <h2>6. Disclaimer of Warranties</h2>
          <p>
            The Service is provided "as is" and "as available" without warranties of any kind, 
            either express or implied. We do not guarantee that:
          </p>
          <ul>
            <li>The Service will meet your requirements</li>
            <li>The Service will be uninterrupted or error-free</li>
            <li>The results will be accurate or reliable</li>
          </ul>
        </section>

        {/* 11. Limitation of Liability */}
        <section>
          <h2>7. Limitation of Liability</h2>
          <p>
            In no event shall PNG JPG Convert be liable for any direct, indirect, 
            incidental, special, consequential, or punitive damages resulting from 
            the use of our services.
          </p>
          <ul>
            <li>Loss of data or images</li>
            <li>Business interruption</li>
            <li>Loss of profits or revenue</li>
            <li>Any other damages arising from use</li>
          </ul>
        </section>

        {/* 12. Indemnification */}
        <section>
          <h2>8. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless PNG JPG Convert and its affiliates 
            from any claims, damages, or expenses arising from your use of the Service 
            or violation of these Terms.
          </p>
        </section>

        {/* 13. Changes to Terms */}
        <section>
          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms of Service at any time. 
            Changes will be effective immediately upon posting. Continued use of 
            the website constitutes acceptance of the updated terms.
          </p>
        </section>

        {/* 14. Governing Law */}
        <section>
          <h2>10. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the 
            laws of the United States, without regard to its conflict of law provisions.
          </p>
        </section>

        {/* 15. Contact */}
        <section>
          <h2>11. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding these Terms of Service, 
            please contact us:
          </p>
          <ul>
            <li>📧 Email: <a href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline">{siteConfig.email}</a></li>
            <li>🌐 Website: <a href={siteConfig.url} className="text-blue-600 hover:underline">{siteConfig.url}</a></li>
          </ul>
        </section>
      </article>

      {/* 16-20. Schema Markup */}
      
      {/* 16. Organization Schema */}
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

      {/* 17. WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service",
            "description": "Read the Terms of Service for using PNG JPG Convert online image tools.",
            "url": "https://pngjpgconvert.com/terms",
            "about": {
              "@type": "Thing",
              "name": "Terms of Service",
            },
          }),
        }}
      />

      {/* 18. Breadcrumb Schema */}
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
                "name": "Terms of Service",
                "item": "https://pngjpgconvert.com/terms",
              },
            ],
          }),
        }}
      />
    </main>
  );
}