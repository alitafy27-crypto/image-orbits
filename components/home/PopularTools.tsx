import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import ToolCard from "@/components/ui/ToolCard";

import { tools } from "@/data/tools";

export default function PopularTools() {
  const popularTools = tools
    .filter(
      (tool) =>
        tool.category === "convert" ||
        tool.category === "compress" ||
        tool.category === "resize"
    )
    .slice(0, 6);

  return (
    <Section>

      <Heading
        badge="Popular Tools"
        title="Most Popular Image Tools"
        description="Convert, compress and optimize your images with our most frequently used online tools. Fast, private and completely free."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {popularTools.map((tool) => (
          <ToolCard
            key={tool.slug}
            title={tool.title}
            description={tool.description}
            href={`/tools/${tool.slug}`}
            icon={tool.icon}
          />
        ))}
      </div>

    </Section>
  );
}