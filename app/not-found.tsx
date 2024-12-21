import Link from "next/link";

import { House } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-10 shadow-lg">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-2xl sm:text-3xl font-semibold">404 Not Found</h2>
          <p className="text-xl font-medium">
            Could not find requested resource
          </p>
        </div>
        <Link
          href="/"
          className="flex items-center bg-zinc-900 text-white text-lg font-medium  rounded-lg py-3 px-4 shadow-zinc-900 hover:bg-zinc-700 gap-2"
        >
          <House />
          Return Home
        </Link>
      </section>
    </>
  );
}
