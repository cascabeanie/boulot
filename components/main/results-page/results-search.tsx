"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

import { StateType } from "@/lib/job-types";
import { SearchJobsAction } from "@/lib/search-jobs-action";

import TextInput from "@/components/ui/inputs/text-input";
import SubmitButton from "@/components/ui/buttons/submit-button";
import Filters from "@/components/main/results-page/filters";

import { CircleAlert } from "lucide-react";

export default function ResultsSearch() {
  const [state, formAction, isPending] = useActionState<StateType, FormData>(
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
      <div className="flex flex-col">
        <form
          action={formAction}
          className="flex w-full flex-col items-center gap-8 lg:gap-10"
        >
          <div className="flex flex-col items-center gap-3 sm:gap-2 lg:flex-row">
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

            <SubmitButton>Find Jobs</SubmitButton>
          </div>

          <div className="flex w-full justify-center">
            <Filters />
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
    </>
  );
}
