"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/lib/site";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main Navigation"
      className="hidden items-center gap-8 lg:flex"
    >
      {siteConfig.navigation.map((item) => {
        const active = pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`text-sm font-medium transition-colors ${
              active
                ? "text-blue-600"
                : "text-slate-600 hover:text-blue-600"
            }`}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}