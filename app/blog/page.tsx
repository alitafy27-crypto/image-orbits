import type { Metadata } from "next";
import Link from "next/link";

// 1. تحسين metadata مع كلمات مفتاحية محسنة
export const metadata: Metadata = {
  title: "Image Converter Blog - PNG, JPG, WEBP, AVIF Tips & Tutorials",
  description: "Read the latest articles, tutorials, and guides about image conversion, optimization, and editing. Learn how to convert PNG, JPG, WEBP, AVIF and more.",
  keywords: [
    "image converter blog",
    "png to jpg tutorial",
    "image optimization tips",
    "image conversion guide",
    "how to convert images",
    "image editing tips",
    "webp converter guide",
    "avif converter tutorial",
    "image compression tips",
    "resize images guide",
    "crop images tutorial",
    "image tools blog",
    "free image converter",
    "online image tools",
    "image format guide",
    "best image converter",
    "image optimization blog",
    "photo editing tips",
    "image conversion tips",
    "PNG JPG Convert blog",
  ],
  openGraph: {
    title: "Image Converter Blog - Tips, Tutorials & Guides",
    description: "Read the latest articles about image conversion, optimization, and editing. Learn how to convert PNG, JPG, WEBP, AVIF and more.",
    url: "https://pngjpgconvert.com/blog",
    type: "website",
    images: [
      {
        url: "/og-image-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Image Converter Blog - Tips & Tutorials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Converter Blog - Tips, Tutorials & Guides",
    description: "Read the latest articles about image conversion, optimization, and editing.",
    images: ["/og-image-blog.jpg"],
  },
  alternates: {
    canonical: "https://pngjpgconvert.com/blog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// 2. بيانات المقالات (مؤقتة - سيتم جلبها من API لاحقاً)
const blogPosts = [
  {
    id: 1,
    title: "How to Convert PNG to JPG: The Complete Guide",
    excerpt: "Learn everything you need to know about converting PNG images to JPG format. Tips, quality settings, and best practices.",
    category: "Tutorial",
    readTime: "5 min read",
    date: "2024-01-15",
    slug: "how-to-convert-png-to-jpg",
    author: "PNG JPG Convert Team",
  },
  {
    id: 2,
    title: "PNG vs JPG: Which Image Format Should You Use?",
    excerpt: "Compare PNG and JPG formats to understand which one is best for your needs. Learn about quality, file size, and use cases.",
    category: "Guide",
    readTime: "7 min read",
    date: "2024-01-10",
    slug: "png-vs-jpg-which-format-to-use",
    author: "PNG JPG Convert Team",
  },
  {
    id: 3,
    title: "How to Convert WEBP to PNG: A Step-by-Step Tutorial",
    excerpt: "Convert WEBP images to PNG format easily. Learn about transparency support and lossless quality preservation.",
    category: "Tutorial",
    readTime: "4 min read",
    date: "2024-01-05",
    slug: "how-to-convert-webp-to-png",
    author: "PNG JPG Convert Team",
  },
  {
    id: 4,
    title: "Image Compression: How to Reduce File Size Without Losing Quality",
    excerpt: "Learn the best techniques for compressing images while maintaining quality. Tips for web optimization and faster loading.",
    category: "Guide",
    readTime: "6 min read",
    date: "2024-01-01",
    slug: "image-compression-guide",
    author: "PNG JPG Convert Team",
  },
  {
    id: 5,
    title: "AVIF vs WEBP: The Ultimate Image Format Comparison",
    excerpt: "Compare AVIF and WEBP formats to understand which offers better compression and quality for modern web applications.",
    category: "Comparison",
    readTime: "8 min read",
    date: "2023-12-28",
    slug: "avif-vs-webp-comparison",
    author: "PNG JPG Convert Team",
  },
  {
    id: 6,
    title: "How to Resize Images for Social Media: Complete Guide",
    excerpt: "Learn the optimal image sizes for Instagram, Facebook, Twitter, LinkedIn and more. Resize your images perfectly for each platform.",
    category: "Tutorial",
    readTime: "6 min read",
    date: "2023-12-20",
    slug: "resize-images-for-social-media",
    author: "PNG JPG Convert Team",
  },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24" id="main-content">
      {/* 3. Hero Section with main heading */}
      <div className="text-center">
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Latest Articles
        </span>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900">
          Image Converter Blog
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Helpful tutorials, image editing guides, tips, and best practices 
          for converting PNG, JPG, WEBP, AVIF and more.
        </p>
      </div>

      {/* 4. Categories Filter */}
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold">
          All
        </button>
        <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors">
          Tutorials
        </button>
        <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors">
          Guides
        </button>
        <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors">
          Comparisons
        </button>
      </div>

      {/* 5. Blog Posts Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
            {/* 6. Post Card Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-slate-500">
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              <p className="mt-3 text-slate-600 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* 7. Newsletter Section */}
      <div className="mt-20 bg-blue-50 rounded-2xl p-12 text-center">
        <h2 className="text-2xl font-bold text-slate-900">
          📬 Subscribe to Our Newsletter
        </h2>
        <p className="mt-2 text-slate-600">
          Get the latest image conversion tips and tutorials delivered to your inbox.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg border border-slate-300 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Email address for newsletter"
          />
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          No spam. Unsubscribe anytime.
        </p>
      </div>

      {/* 8-20. Schema Markup */}
      
      {/* 8. Blog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Image Converter Blog",
            "description": "Helpful tutorials and guides about image conversion, optimization, and editing.",
            "url": "https://pngjpgconvert.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "PNG JPG Convert",
            },
          }),
        }}
      />

      {/* 9. Breadcrumb Schema */}
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
                "name": "Blog",
                "item": "https://pngjpgconvert.com/blog",
              },
            ],
          }),
        }}
      />

      {/* 10-19. BlogPost Schemas for each post */}
      {blogPosts.map((post) => (
        <script
          key={`schema-${post.id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.date,
              "dateModified": post.date,
              "author": {
                "@type": "Person",
                "name": post.author,
              },
              "publisher": {
                "@type": "Organization",
                "name": "PNG JPG Convert",
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://pngjpgconvert.com/blog/${post.slug}`,
              },
            }),
          }}
        />
      ))}

      {/* 20. WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Image Converter Blog",
            "description": "Read the latest articles, tutorials, and guides about image conversion, optimization, and editing.",
            "url": "https://pngjpgconvert.com/blog",
            "about": {
              "@type": "Thing",
              "name": "Image Conversion",
            },
          }),
        }}
      />
    </main>
  );
}