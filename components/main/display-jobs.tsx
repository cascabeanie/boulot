export default function DisplayJobs({ jobs }: { jobs: any }) {
  // dev: for testing
  //console.log(jobs.results);

  return (
    <>
      <div>
        {jobs.results.map((job: any) => (
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
