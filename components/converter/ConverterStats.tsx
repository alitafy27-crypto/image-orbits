import type { ConverterImage } from "./types";

interface Props {
  images: ConverterImage[];
}

export default function ConverterStats({
  images,
}: Props) {
  const totalSize =
    images.reduce(
      (sum, image) => sum + image.size,
      0
    ) /
    1024 /
    1024;

  const averageSize =
    images.length > 0
      ? totalSize / images.length
      : 0;

  const stats = [
    {
      icon: "🖼️",
      title: "Images",
      value: images.length.toString(),
      subtitle: "Selected",
    },
    {
      icon: "💾",
      title: "Total Size",
      value: `${totalSize.toFixed(2)} MB`,
      subtitle: "Before conversion",
    },
    {
      icon: "⚡",
      title: "Average Size",
      value: `${averageSize.toFixed(2)} MB`,
      subtitle: "Per image",
    },
  ];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Image Statistics
        </h2>

        <p className="mt-2 text-slate-500">
          Quick overview of your selected files before conversion.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-200 hover:bg-blue-50"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
              {stat.icon}
            </div>

            <p className="text-sm font-medium text-slate-500">
              {stat.title}
            </p>

            <h3 className="mt-2 text-3xl font-bold text-slate-900">
              {stat.value}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {stat.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}