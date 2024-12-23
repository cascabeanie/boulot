import { z } from "zod";
import { jobsSchema } from "@/lib/zod-schemas";
import { SearchParamsType } from "@/lib/job-types";

import DisplayJobs from "@/components/main/results-page/display-jobs";

import SideBar from "@/components/side-bar/side-bar";

type ResultPageProps = {
  searchParams: Promise<SearchParamsType>;
};

type JobType = z.infer<typeof jobsSchema>;

async function getJobs(
  userQuery: SearchParamsType,
): Promise<JobType | undefined> {
  try {
    const params = new URLSearchParams(userQuery as Record<string, string>);

    const res = await fetch(
      `${process.env.BASE_URL}/api/search?${params.toString().toLowerCase()}`,
      {
        method: "GET",
      },
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

export default async function ResultsPage({ searchParams }: ResultPageProps) {
  const userQuery = await searchParams;
  const jobs = await getJobs(userQuery);

  return (
    <>
      <SideBar />

      <main className="flex flex-col justify-center bg-gray-200/50 shadow-lg">
        <section className="p-4">
          {jobs ? (
            <DisplayJobs jobs={jobs} />
          ) : (
            <p>No jobs found or error loading jobs</p>
          )}
        </section>
      </main>
    </>
  );
}
