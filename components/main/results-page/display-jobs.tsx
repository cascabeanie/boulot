import { z } from "zod";
import { jobsSchema } from "@/lib/zod-schemas";

import Pagination from "./pagination";

import { MapPin } from "lucide-react";
import { BadgePoundSterling } from "lucide-react";

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
        <div className="flex flex-col gap-6">
          {jobs.results.map((job) => (
            <div
              key={job.jobId}
              className="border border-zinc-800 rounded-md shadow-lg p-6 lg:max-w-3xl"
            >
              <ul className="flex flex-col">
                <li>
                  <h3 className="text-xl font-semibold mb-2">{job.jobTitle}</h3>
                </li>
                <li>
                  <p className="text-gray-600 mb-2">{job.employerName}</p>
                </li>
                <li className="flex items-center text-gray-500 mb-2 gap-1">
                  <MapPin size={18} />
                  <p>{job.locationName}</p>
                </li>
                <li className="flex items-center text-gray-500 gap-1">
                  <BadgePoundSterling size={18} />
                  <span>
                    £ {job.minimumSalary} - £ {job.maximumSalary}
                  </span>
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
