import { LoaderCircle } from "lucide-react";

import SkeletonCard from "@/components/ui/skeleton-loaders/skeleton-card";

export default function ResultsSkeleton() {
  return (
    <>
      <section className="flex flex-col justify-center bg-gray-200/50 p-4 shadow-lg">
        <div>
          <span className="fixed right-5 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-md border bg-white">
            <LoaderCircle
              size={30}
              stroke="rgb(229 231 235 / .8)"
              className="animate-spin"
            />
          </span>
        </div>

        <div className="flex flex-col gap-6">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />

          <div className="flex items-center justify-center gap-2">
            <div className="flex min-h-10 min-w-24 items-center justify-center rounded border bg-white">
              <span className="h-3 w-12 animate-pulse rounded-2xl bg-gray-300/50" />
            </div>

            <span className="h-5 w-3 animate-pulse rounded-2xl bg-gray-300/50"></span>

            <div className="flex min-h-10 min-w-24 items-center justify-center rounded border bg-white">
              <span className="h-3 w-12 animate-pulse rounded-2xl bg-gray-300/50" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
