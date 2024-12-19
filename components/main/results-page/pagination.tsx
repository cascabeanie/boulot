"use client";

import { useRouter, useSearchParams, useParams } from "next/navigation";

type PaginationProps = {
  totalResults: number;
};

export default function Pagination({ totalResults }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { slug } = useParams<{ slug: string }>();
  const currentPageNum = Number(slug);

  const totalPages = Math.ceil(totalResults / 5);

  const nextoffset = String(5 * currentPageNum);
  const prevoffset = String(5 * (currentPageNum - 2));

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
      <div className="flex gap-2 items-center">
        <button
          disabled={currentPageNum === 1}
          className="p-2 border rounded bg-white min-w-24"
          onClick={previousPage}
        >
          Prev Page
        </button>

        <p className="text-xl">{currentPageNum}</p>

        <button
          disabled={currentPageNum >= totalPages}
          className="p-2 border rounded bg-white min-w-24"
          onClick={nextPage}
        >
          Next Page
        </button>
      </div>
    </>
  );
}
