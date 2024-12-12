import DisplayJobs from "@/components/main/display-jobs";

type queryParams = {
  keywords: string;
  locationName?: string;
};

async function getJobs(userQuery: any) {
  console.log(userQuery);

  try {
    const params = new URLSearchParams(userQuery);
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
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const userQuery = await searchParams;

  //dev: for testing
  /* console.log(userQuery); */

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
