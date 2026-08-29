import Section from "@/components/ui/Section";

export default function ToolsContent() {
  return (
    <Section 
      className="bg-white"
      aria-label="Free Online Image Tools Information"
    >
      <div className="mx-auto max-w-5xl space-y-12">
        {/* 1. Main section with primary keywords */}
        <div>
          <h2 className="text-4xl font-bold text-slate-900">
            Free Online Image Tools for Every Need
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            PNG JPG Convert provides a complete collection of professional image
            tools that work directly inside your browser. Whether you need to
            convert images between formats like PNG to JPG, JPG to PNG, WEBP to PNG, 
            reduce file size, resize photos, crop pictures or optimize images for 
            the web, every tool is designed to be fast, secure and easy to use.
          </p>
        </div>

        {/* 2. Why Choose section with keywords */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Why Choose PNG JPG Convert?
          </h2>

          <ul className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
            <li>✅ No software installation required - works in any browser</li>
            <li>✅ Works on Windows, macOS, Linux, Android and iPhone</li>
            <li>✅ Fast browser-based image processing</li>
            <li>✅ Supports PNG, JPG, JPEG, WEBP and AVIF formats</li>
            <li>✅ Batch image conversion for multiple files</li>
            <li>✅ Private processing with no unnecessary uploads</li>
            <li>✅ Completely free to use - no registration required</li>
          </ul>
        </div>

        {/* 3. Supported formats with keywords */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Supported Image Formats
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our image tools support all modern image formats including PNG,
            JPG, JPEG, WEBP and AVIF. Whether you need maximum quality,
            transparency support or smaller file sizes for web optimization, 
            PNG JPG Convert provides the right converter for every situation.
          </p>
        </div>

        {/* 4. Speed and Privacy section */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Built for Speed and Privacy
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Privacy is one of our highest priorities. Most image processing is
            performed directly in your browser whenever possible, allowing you
            to convert and optimize images quickly while keeping your files
            completely secure and private.
          </p>
        </div>

        {/* 5. Additional SEO content - How it works */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            How Our Image Converter Works
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Using our free online image converter is simple. Just upload your image, 
            select the output format you need (PNG, JPG, WEBP, or AVIF), and click 
            convert. Your image is processed instantly in your browser and ready 
            to download within seconds. No complicated steps, no registration, 
            no hidden fees.
          </p>
        </div>

        {/* 6. Who can benefit */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Who Can Benefit from Our Image Tools?
          </h2>

          <ul className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
            <li>📸 Photographers - Convert and optimize photos for web and print</li>
            <li>🎨 Designers - Work with multiple formats for design projects</li>
            <li>🌐 Web Developers - Optimize images for faster loading websites</li>
            <li>📱 Social Media Managers - Prepare images for all platforms</li>
            <li>📚 Students - Convert images for assignments and presentations</li>
            <li>🏢 Business Owners - Create professional images for marketing</li>
          </ul>
        </div>

        {/* 7-20. Schema Markup */}
        
        {/* 7. WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Free Online Image Tools - PNG JPG Convert",
              "description": "Complete collection of free online image tools for conversion, compression, resizing, cropping and optimization.",
              "url": "https://pngjpgconvert.com/tools",
              "about": {
                "@type": "Thing",
                "name": "Image Conversion Tools",
              },
            }),
          }}
        />

        {/* 8. Breadcrumb Schema */}
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
                  "name": "Tools",
                  "item": "https://pngjpgconvert.com/tools",
                },
              ],
            }),
          }}
        />

        {/* 9. HowTo Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Convert Images Online",
              "description": "Simple steps to convert images using PNG JPG Convert",
              "step": [
                {
                  "@type": "HowToStep",
                  "position": 1,
                  "name": "Upload your image",
                  "text": "Select or drag and drop your image file"
                },
                {
                  "@type": "HowToStep",
                  "position": 2,
                  "name": "Choose output format",
                  "text": "Select PNG, JPG, WEBP, or AVIF"
                },
                {
                  "@type": "HowToStep",
                  "position": 3,
                  "name": "Convert image",
                  "text": "Click convert and download instantly"
                },
              ],
            }),
          }}
        />

        {/* 10. ItemList Schema for tools */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Free Online Image Tools",
              "description": "List of image conversion and optimization tools",
              "numberOfItems": 8,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "PNG to JPG Converter"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "JPG to PNG Converter"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "PNG to WEBP Converter"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "WEBP to PNG Converter"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Image Compressor"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "Image Resizer"
                },
                {
                  "@type": "ListItem",
                  "position": 7,
                  "name": "Image Cropper"
                },
                {
                  "@type": "ListItem",
                  "position": 8,
                  "name": "Image Rotator"
                }
              ]
            }),
          }}
        />
      </div>
    </Section>
  );
}