"use client";

import { StateType } from "@/lib/job-types";
import { useActionState } from "react";
import { SearchJobsAction } from "@/lib/search-jobs-action";

import TextInput from "@/components/ui/inputs/text-input";
import SubmitButton from "@/components/ui/buttons/submit-button";

import { CircleAlert } from "lucide-react";

export default function SearchBar() {
  const [state, formAction, isPending] = useActionState<StateType, FormData>(
    SearchJobsAction,
    {
      message: null,
      error: null,
    }
  );

  return (
    <>
      <form
        action={formAction}
        className="flex flex-col items-center gap-3 sm:flex-row sm:gap-2"
      >
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

        <SubmitButton isPending={isPending}>Find Jobs</SubmitButton>
      </form>

      <div>
        {state?.error && (
          <div className="flex items-center text-xl font-light text-red-500 gap-2">
            <CircleAlert />
            <p>{state.error}</p>
          </div>
        )}
      </div>
    </>
  );
}
