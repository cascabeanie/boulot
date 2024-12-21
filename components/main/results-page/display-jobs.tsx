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
                className="cursor-pointer rounded-md border bg-white p-6 shadow-lg hover:animate-pulse xl:p-8"
                onClick={() => {
                  setSelectedJob(job);
                  setModalVisibility(true);
                }}
              >
                <ul className="flex flex-col">
                  <li>
                    <h3 className="mb-2 text-xl font-semibold">
                      {job.jobTitle}
                    </h3>
                  </li>
                  <li>
                    <p className="mb-2 text-gray-600">{job.employerName}</p>
                  </li>
                  <li className="mb-2 flex items-center gap-1 text-gray-500">
                    <MapPin size={18} />
                    <p>{job.locationName}</p>
                  </li>
                  <li className="flex items-center gap-1 text-gray-500">
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
