"use client";

import { useEffect } from "react";

import { CircleX } from "lucide-react";
import { RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-10 shadow-lg">
        <div className="flex items-center gap-2">
          <CircleX size={30} />
          <h2 className="text-2xl font-medium sm:text-3xl">
            Something went wrong!
          </h2>
        </div>
        <button
          type="button"
          className="shadow--zinc-900 hover:white group flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-3 text-sm font-medium text-white"
          onClick={() => reset()}
        >
          <RefreshCcw className="group-hover:animate-spin" /> Try again
        </button>
      </section>
    </>
  );
}
