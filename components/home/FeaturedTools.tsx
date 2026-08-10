import Link from "next/link";

import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

import { tools } from "@/data/tools";

export default function FeaturedTools() {
  return (
    <Section className="bg-slate-50">
      <Heading
        badge="Featured Tools"
        title="Explore Our Most Popular Image Tools"
        description="Quick access to the most frequently used online image tools."
      />

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
          >
            <div className="text-4xl">
              {tool.icon}
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              {tool.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {tool.description}
            </p>

            <span className="mt-6 inline-flex font-semibold text-blue-600">
              Open Tool →
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}