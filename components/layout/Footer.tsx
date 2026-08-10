import Link from "next/link";

import { tools } from "@/data/tools";
import { siteConfig } from "@/lib/site";

const popularTools = tools
  .filter((tool) => tool.category === "convert")
  .slice(0, 6);

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {siteConfig.name}
            </h2>

            <p className="mt-4 max-w-md leading-7 text-slate-600">
              Free online image tools to convert, compress,
              resize and optimize PNG, JPG, WEBP and AVIF
              images directly in your browser.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Popular Tools
            </h3>

            <ul className="mt-5 space-y-3">
              {popularTools.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="text-slate-600 transition hover:text-blue-600"
                  >
                    {tool.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/tools"
                  className="text-slate-600 transition hover:text-blue-600"
                >
                  All Tools
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-slate-600 transition hover:text-blue-600"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-slate-600 transition hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-600 transition hover:text-blue-600"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="text-slate-600 transition hover:text-blue-600"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>

      </div>
    </footer>
  );
}