import { z } from "zod";
import { jobsSchema } from "@/lib/zod-schemas";

type JobType = z.infer<typeof jobsSchema>;

type DisplayJobsProps = {
  jobs: JobType;
};

export default function DisplayJobs({ jobs }: DisplayJobsProps) {
  /////////////////////////
  // dev: for testing
  //console.log(jobs);

  return (
    <>
      <div>
        {jobs.results.map((job) => (
          <div key={job.jobId}>
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
    </>
  );
}
