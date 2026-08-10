import Link from "next/link";

import Announcement from "./Announcement";
import Navigation from "./Navigation";

import { siteConfig } from "@/lib/site";

export default function Header() {
  return (
    <>
      <Announcement />

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label={`${siteConfig.name} Home`}
          >
            {/* ✅ تم حذف الصورة المكسورة */}
            {/* <img src="/logo.svg" alt={siteConfig.name} className="h-9 w-9" /> */}

            <span className="text-2xl font-bold tracking-tight text-slate-900">
              {siteConfig.name}
            </span>
          </Link>

          <Navigation />

          <div className="flex items-center gap-4">

            <Link
              href="/tools"
              className="hidden font-medium text-slate-600 transition hover:text-blue-600 md:block"
            >
              All Tools
            </Link>

            <Link
              href="/tools"
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Start Free
            </Link>

          </div>

        </div>
      </header>
    </>
  );
}