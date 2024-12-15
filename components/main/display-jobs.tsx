import { z } from "zod";
import { jobsSchema } from "@/lib/zod-schemas";

import Pagination from "./pagination";

type JobType = z.infer<typeof jobsSchema>;

type DisplayJobsProps = {
  jobs: JobType;
  pageNum: string;
};

export default function DisplayJobs({ jobs, pageNum }: DisplayJobsProps) {
  /////////////////////////
  // dev: for testing
  //console.log(jobs);
  const totalResults = jobs.totalResults;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col gap-6 py-6">
          {jobs.results.map((job) => (
            <div key={job.jobId} className="border border-green-400">
              <ul className="flex flex-col gap-3">
                <li>
                  <h3>{job.jobTitle}</h3>
                </li>
                <li>
                  <p>{job.employerName}</p>
                </li>
                <li>
                  <p>{job.locationName}</p>
                </li>
                <li>
                  <p>
                    £ {job.minimumSalary} - £ {job.maximumSalary}
                  </p>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mb-6">
          <Pagination totalResults={totalResults} pageNum={pageNum} />
        </div>
      </div>
    </>
  );
}
