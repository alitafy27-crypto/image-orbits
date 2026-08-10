import Link from "next/link";

export default function Announcement() {
  return (
    <div className="border-b border-blue-100 bg-blue-600 text-white">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-center px-5 text-center text-sm">
        <span className="font-medium">
          ✨ New:
        </span>

        <span className="ml-2">
          PNG, JPG, WEBP & AVIF tools are now available.
        </span>

        <Link
          href="/tools"
          className="ml-4 font-semibold underline underline-offset-4"
        >
          Explore →
        </Link>
      </div>
    </div>
  );
}