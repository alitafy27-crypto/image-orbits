import Link from "next/link";

import Container from "@/components/ui/Container";

import HeroUpload from "./HeroUpload";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>

            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🚀 Fast • Secure • Browser Based
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Free Online
              <br />

              <span className="text-blue-600">
                Image Converter
              </span>

              <br />

              & Image Tools
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-600">
              Convert, compress, resize, crop, rotate and optimize
              PNG, JPG, WEBP and AVIF images directly in your browser.
              No uploads, no registration and completely free.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/tools"
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Explore Tools
              </Link>

              <Link
                href="/tools/png-to-jpg"
                className="rounded-xl border border-slate-300 px-8 py-4 font-semibold transition hover:bg-slate-100"
              >
                PNG to JPG
              </Link>

            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-slate-600">

              <span>⚡ Instant Processing</span>

              <span>🔒 100% Private</span>

              <span>🆓 Free Forever</span>

              <span>🚀 No Registration</span>

            </div>

          </div>

          <HeroUpload />

        </div>
      </Container>
    </section>
  );
}