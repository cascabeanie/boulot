import { LoaderCircle } from "lucide-react";

import SkeletonCard from "@/components/ui/skeleton-loaders/skeleton-card";

export default function ResultsSkeleton() {
  return (
    <>
      <section className="bg-gray-200/50 shadow-lg flex flex-col justify-center p-4">
        <div>
          <span className="fixed flex items-center justify-center h-10 w-10 rounded-md z-10 top-2 right-5 bg-white border">
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

          <div className="flex justify-center gap-2 items-center">
            <div className="flex items-center justify-center border rounded bg-white min-w-24 min-h-10">
              <span className="w-12 h-3 bg-gray-300/50 rounded-2xl animate-pulse" />
            </div>

            <span className="w-3 h-5 bg-gray-300/50 rounded-2xl animate-pulse"></span>

            <div className="flex items-center justify-center border rounded bg-white min-w-24 min-h-10">
              <span className="w-12 h-3 bg-gray-300/50 rounded-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
