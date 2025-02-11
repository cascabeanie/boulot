"use client";

import { useRouter } from "next/navigation";

import { StateType } from "@/lib/job-types";
import { useActionState, useEffect } from "react";
import { SearchJobsAction } from "@/lib/search-jobs-action";

import { CircleAlert } from "lucide-react";

import TextInput from "@/components/ui/inputs/text-input";
import SubmitButton from "@/components/ui/buttons/submit-button";
import SearchFilters from "./search-filters";

export default function SearchJobs() {
  const [state, formAction] = useActionState<StateType, FormData>(
    SearchJobsAction,
    {
      message: null,
      error: null,
      data: null,
    },
  );

  const router = useRouter();

  useEffect(() => {
    if (state.data) {
      router.push(`/results/page/1?${state.data}`);
    }
  }, [state]);

  return (
    <>
      <section className="flex justify-center py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container flex flex-col items-center gap-4 px-4 md:px-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Find Your Dream Job
            </h1>
            <p className="max-w-[700px] md:text-xl">
              Search thousands of job listings in your area and take the next
              step in your career.
            </p>
          </div>

          <div>
            <form action={formAction}>
              <div className="flex flex-col items-center gap-3 md:flex-row md:gap-2">
                <TextInput
                  name="keywords"
                  placeholder="Search job keywords"
                  required={false}
                />
                <TextInput
                  name="locationName"
                  placeholder="Town or city"
                  required={false}
                />

                <SearchFilters />

                <SubmitButton>Find Jobs</SubmitButton>
              </div>
            </form>

            <div className="mt-10 flex justify-center">
              {state?.error && (
                <div className="flex items-center gap-2 text-xl font-light text-red-500">
                  <CircleAlert />
                  <p>{state.error}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
