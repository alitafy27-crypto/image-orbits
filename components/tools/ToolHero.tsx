import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

interface ToolHeroProps {
  title: string;
  description: string;
}

export default function ToolHero({
  title,
  description,
}: ToolHeroProps) {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-slate-50 py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_60%)]" />

      <Heading
        badge="Free Online Image Tool"
        title={title}
        description={description}
      />

      <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-600">
        <span>⚡ Fast Processing</span>
        <span>🔒 Privacy First</span>
        <span>🆓 Free Forever</span>
        <span>🌍 Works in Every Browser</span>
      </div>
    </Section>
  );
}