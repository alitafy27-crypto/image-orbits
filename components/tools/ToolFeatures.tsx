import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description:
      "Convert your images in seconds using optimized browser technology with no waiting time.",
  },
  {
    icon: "🔒",
    title: "Privacy First",
    description:
      "Your files remain private. Most processing happens directly inside your browser whenever possible.",
  },
  {
    icon: "🆓",
    title: "100% Free",
    description:
      "Use all Image-Orbits tools without creating an account or paying subscription fees.",
  },
  {
    icon: "🌍",
    title: "Works Everywhere",
    description:
      "Compatible with Chrome, Edge, Firefox, Safari and all modern desktop and mobile browsers.",
  },
  {
    icon: "📦",
    title: "Batch Processing",
    description:
      "Convert multiple images at once and save valuable time with batch conversion support.",
  },
  {
    icon: "🎯",
    title: "High Quality",
    description:
      "Maintain excellent image quality while converting between PNG, JPG, WEBP and AVIF formats.",
  },
];

export default function ToolFeatures() {
  return (
    <Section className="bg-slate-50">
      <Heading
        badge="Why Choose Image-Orbits?"
        title="Everything You Need for Image Conversion"
        description="Professional tools designed to make image conversion fast, secure and effortless."
      />

      <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-5xl">
              {feature.icon}
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              {feature.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}