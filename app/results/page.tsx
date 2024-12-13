import { SearchParamsType } from "@/lib/job-types";

import DisplayJobs from "@/components/main/display-jobs";

async function getJobs(userQuery: SearchParamsType): Promise<unknown> {
  /////////////////////////
  //dev: for testing
  //console.log(userQuery);

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
    return res.json();
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
}

export default async function ResultsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParamsType>;
}) {
  const userQuery = await searchParams;

  const jobs = await getJobs(userQuery);

  return (
    <>
      <div>
        <div>
          <h2>Job Results</h2>
        </div>
        <div>
          <DisplayJobs jobs={jobs} />
        </div>
      </div>
    </>
  );
}
