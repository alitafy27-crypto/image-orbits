import Link from "next/link";

import type { ToolItem } from "@/data/tools";

interface Props {
  tool: ToolItem;
}

export default function ToolCard({ tool }: Props) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl">
        {tool.icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
        {tool.title}
      </h3>

      <p className="mt-4 flex-1 leading-7 text-slate-600">
        {tool.description}
      </p>

      <div className="mt-8 flex items-center justify-between">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700">
          {tool.category}
        </span>

        <span className="font-semibold text-blue-600 transition-transform duration-300 group-hover:translate-x-1">
          Open Tool →
        </span>
      </div>
    </Link>
  );
}