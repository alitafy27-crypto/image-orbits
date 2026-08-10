import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const classes =
    variant === "outline"
      ? `inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 ${className}`
      : `inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...props}
      className={classes}
    >
      {children}
    </button>
  );
}