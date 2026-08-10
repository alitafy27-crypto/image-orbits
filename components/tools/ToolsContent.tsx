import Section from "@/components/ui/Section";

export default function ToolsContent() {
  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-5xl space-y-10">

        <div>
          <h2 className="text-4xl font-bold text-slate-900">
            Free Online Image Tools for Every Need
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Image-Orbits provides a complete collection of professional image
            tools that work directly inside your browser. Whether you need to
            convert images between formats, reduce file size, resize photos,
            crop pictures or optimize images for the web, every tool is designed
            to be fast, secure and easy to use.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Why Choose Image-Orbits?
          </h2>

          <ul className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
            <li>✅ No software installation required.</li>
            <li>✅ Works on Windows, macOS, Linux, Android and iPhone.</li>
            <li>✅ Fast browser-based processing.</li>
            <li>✅ Supports PNG, JPG, JPEG, WEBP and AVIF.</li>
            <li>✅ Batch image conversion.</li>
            <li>✅ Private processing with no unnecessary uploads.</li>
            <li>✅ Completely free to use.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Supported Image Formats
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our image tools support all modern image formats including PNG,
            JPG, JPEG, WEBP and AVIF. Whether you need maximum quality,
            transparency or smaller file sizes, Image-Orbits provides the right
            converter for every situation.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Built for Speed and Privacy
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Privacy is one of our highest priorities. Most image processing is
            performed directly in your browser whenever possible, allowing you
            to convert and optimize images quickly while keeping your files
            secure.
          </p>
        </div>

      </div>
    </Section>
  );
}