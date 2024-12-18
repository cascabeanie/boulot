import { z } from "zod";
import { jobsSchema } from "@/lib/zod-schemas";
import { SearchParamsType } from "@/lib/job-types";

import DisplayJobs from "@/components/main/results-page/display-jobs";
import Filters from "@/components/main/results-page/filters";
import SearchBar from "@/components/main/results-page/search-bar";

type ResultPageProps = {
  searchParams: Promise<SearchParamsType>;
  params: Promise<{ slug: string }>;
};

type JobType = z.infer<typeof jobsSchema>;

async function getJobs(
  userQuery: SearchParamsType
): Promise<JobType | undefined> {
  try {
    const params = new URLSearchParams(userQuery as Record<string, string>);

    const res = await fetch(
      `http://localhost:3000/api/search?${params.toString().toLowerCase()}`,
      {
        method: "GET",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch jobs");
    }

    const data: unknown = await res.json();
    const validatedJobs = jobsSchema.safeParse(data);

    if (!validatedJobs.success) {
      console.error(validatedJobs.error);
    }

    return validatedJobs.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return undefined;
  }
}

export default async function ResultsPage({
  searchParams,
  params,
}: ResultPageProps) {
  const userQuery = await searchParams;
  const jobs = await getJobs(userQuery);

  const pageNum = (await params).slug;

  return (
    <>
      <main className="grid grid-cols-1 grid-rows-[auto_auto_1fr] md:grid-cols-[32rem_1fr] md:grid-rows-[4rem_1fr] min-h-svh bg-gray-200/50 shadow-lg">
        <section className="flex items-center justify-center md:justify-start p-2 md:order-2">
          <SearchBar />
        </section>

        <section className="p-2 md:row-span-2 md:order-1">
          <Filters />
        </section>

        <section className="p-2  md:order-3">
          <div>
            {jobs ? (
              <DisplayJobs jobs={jobs} pageNum={pageNum} />
            ) : (
              <p>No jobs found or error loading jobs</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
