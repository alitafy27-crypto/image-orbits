import ToolCard from "./ToolCard";

import { tools } from "@/data/tools";

import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

export default function ToolsGrid() {
  return (
    <Section>
      <Heading
        badge="All Tools"
        title="Explore Every Image Tool"
        description="Convert, compress, resize, crop and optimize images online with our growing collection of free browser-based tools."
      />

      <div className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard
            key={tool.slug}
            tool={tool}
          />
        ))}
      </div>
    </Section>
  );
}