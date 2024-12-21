import Link from "next/link";

import { House } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-10 shadow-lg">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-2xl font-semibold sm:text-3xl">404 Not Found</h2>
          <p className="text-xl font-medium">
            Could not find requested resource
          </p>
        </div>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-3 text-lg font-medium text-white shadow-zinc-900 hover:bg-zinc-700"
        >
          <House />
          Return Home
        </Link>
      </section>
    </>
  );
}
