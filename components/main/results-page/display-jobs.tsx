"use client";

import { useState } from "react";

import { z } from "zod";
import { jobsSchema, resultSchema } from "@/lib/zod-schemas";

import Pagination from "./pagination";
import JobModal from "@/components/ui/modals/job-modal";

import { MapPin } from "lucide-react";
import { BadgePoundSterling } from "lucide-react";
import NoResults from "./no-results";

type JobType = z.infer<typeof jobsSchema>;
type ResultType = z.infer<typeof resultSchema>;

type DisplayJobsProps = {
  jobs: JobType;
};

export default function DisplayJobs({ jobs }: DisplayJobsProps) {
  const [selectedJob, setSelectedJob] = useState<ResultType | null>(null);
  const [modalVisibility, setModalVisibility] = useState(false);

  /////////////////////////
  // dev: for testing
  //console.log(jobs);
  const totalResults = jobs.totalResults;

  return (
    <>
      <JobModal
        job={selectedJob}
        openModal={modalVisibility}
        closeModal={() => {
          setSelectedJob(null);
          setModalVisibility(false);
        }}
      />

      {!jobs.totalResults ? (
        <NoResults />
      ) : (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            {jobs.results.map((job) => (
              <div
                key={job.jobId}
                className="border rounded-md shadow-lg p-6 xl:p-8 bg-white cursor-pointer hover:animate-pulse"
                onClick={() => {
                  setSelectedJob(job);
                  setModalVisibility(true);
                }}
              >
                <ul className="flex flex-col">
                  <li>
                    <h3 className="text-xl font-semibold mb-2">
                      {job.jobTitle}
                    </h3>
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

          <div className="flex justify-center">
            <Pagination totalResults={totalResults} />
          </div>
        </div>
      )}
    </>
  );
}
