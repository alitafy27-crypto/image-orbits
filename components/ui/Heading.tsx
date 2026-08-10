import Badge from "./Badge";

interface HeadingProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function Heading({
  badge,
  title,
  description,
  center = true,
}: HeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {badge && <Badge>{badge}</Badge>}

      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}