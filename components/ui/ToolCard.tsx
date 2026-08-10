import Link from "next/link";

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export default function ToolCard({
  title,
  description,
  href,
  icon,
}: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl transition-colors duration-300 group-hover:bg-blue-100">
        {icon}
      </div>

      <h3 className="mt-8 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          Browser
        </span>

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
          Free
        </span>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
          Fast
        </span>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span className="text-sm font-semibold text-blue-600 transition-transform duration-300 group-hover:translate-x-1">
          Open Tool →
        </span>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
          →
        </div>
      </div>
    </Link>
  );
}