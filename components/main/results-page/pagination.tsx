"use client";

import { RESULTS_PER_PAGE } from "@/lib/constants";

import { useRouter, useSearchParams, useParams } from "next/navigation";

type PaginationProps = {
  totalResults: number;
};

export default function Pagination({ totalResults }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { slug } = useParams<{ slug: string }>();
  const currentPageNum = Number(slug);

  const totalPages = Math.ceil(totalResults / RESULTS_PER_PAGE);

  const nextoffset = String(RESULTS_PER_PAGE * currentPageNum);
  const prevoffset = String(RESULTS_PER_PAGE * (currentPageNum - 2));

  const params = new URLSearchParams(searchParams);

  function nextPage() {
    params.set("resultsToSkip", nextoffset);
    router.push(`${(currentPageNum + 1).toString()}?${params}`);
  }

  function previousPage() {
    params.set("resultsToSkip", prevoffset);
    router.push(`${(currentPageNum - 1).toString()}?${params}`);
  }

  return (
    <>
      <div className="flex items-center gap-2">
        <button
          disabled={currentPageNum === 1}
          className="min-w-24 rounded border bg-white p-2"
          onClick={previousPage}
        >
          Prev Page
        </button>

        <p className="text-xl">{currentPageNum}</p>

        <button
          disabled={currentPageNum >= totalPages}
          className="min-w-24 rounded border bg-white p-2"
          onClick={nextPage}
        >
          Next Page
        </button>
      </div>
    </>
  );
}
