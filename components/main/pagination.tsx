"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { z } from "zod";
import { jobsSchema } from "@/lib/zod-schemas";

type JobType = z.infer<typeof jobsSchema>;

type DisplayJobsProps = {
  jobs: JobType;
  pageNum: string;
};

export default function Pagination({ jobs, pageNum }: DisplayJobsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const totalPages = Math.ceil(jobs.totalResults / 5);

  const currentPageNum = parseInt(pageNum);
  const nextoffset = String(5 * currentPageNum);
  const prevoffset = String(5 * (currentPageNum - 2));

  function nextPage() {
    params.set("resultsToSkip", nextoffset);
    router.push(`/results/${currentPageNum + 1}?${params}`);
  }

  function previousPage() {
    params.set("resultsToSkip", prevoffset);
    router.push(`/results/${currentPageNum - 1}?${params}`);
  }
  return (
    <>
      <div className="flex gap-2 items-center">
        <button
          disabled={currentPageNum === 1}
          className="p-2 border rounded"
          onClick={previousPage}
        >
          Previous Page
        </button>

        <p className="text-xl">{currentPageNum}</p>

        <button
          disabled={currentPageNum >= totalPages}
          className="p-2 border rounded"
          onClick={nextPage}
        >
          Next Page
        </button>
      </div>
    </>
  );
}
