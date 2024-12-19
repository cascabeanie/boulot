"use client";

/* import { StateType } from "@/lib/job-types"; */
/* import { useActionState } from "react"; */
/* import { SearchJobsAction } from "@/lib/search-jobs-action"; */
import Form from "next/form";

import TextInput from "@/components/ui/inputs/text-input";
import SubmitButton from "@/components/ui/buttons/submit-button";
import Filters from "@/components/main/results-page/filters";

/* import { CircleAlert } from "lucide-react"; */

export default function ResultsSearch() {
  /* const [state, formAction, isPending] = useActionState<StateType, FormData>(
    SearchJobsAction,
    {
      message: null,
      error: null,
    }
  ); */

  return (
    <>
      <Form
        action="/results/1?"
        className="flex flex-col gap-8 lg:gap-10 w-full items-center"
      >
        <div className="flex flex-col items-center gap-3 lg:flex-row sm:gap-2">
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

        <div className="flex justify-center w-full">
          <Filters />
        </div>

        <input type="hidden" name="resultsToTake" value={"5"} />
      </Form>

      {/*  <div>
        {state?.error && (
          <div className="flex items-center text-xl font-light text-red-500 gap-2">
            <CircleAlert />
            <p>{state.error}</p>
          </div>
        )}
      </div> */}
    </>
  );
}
