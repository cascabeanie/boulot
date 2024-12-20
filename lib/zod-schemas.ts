import { z } from "zod";

export const resultSchema = z.object({
  applications: z.number().or(z.null()),
  currency: z.string().or(z.null()),
  date: z.string().or(z.null()),
  employerId: z.number().or(z.null()),
  employerName: z.string().or(z.null()),
  employerProfileId: z.number().or(z.null()),
  employerProfileName: z.string().or(z.null()),
  expirationDate: z.string().or(z.null()),
  jobDescription: z.string().or(z.null()),
  jobId: z.number().or(z.null()),
  jobTitle: z.string().or(z.null()),
  jobUrl: z.string().url().or(z.null()),
  locationName: z.string().or(z.null()),
  maximumSalary: z.number().or(z.null()),
  minimumSalary: z.number().or(z.null()),
});

const resultsSchema = z.array(resultSchema);

export const jobsSchema = z.object({
  ambiguousLocations: z.array(z.string()),
  results: resultsSchema,
  totalResults: z.number(),
});
