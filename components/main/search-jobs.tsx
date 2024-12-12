"use client";

import { useActionState } from "react";
import { SearchJobsAction } from "@/lib/search-jobs-action";

import { CircleAlert } from "lucide-react";

type stateType = {
  message?: string;
  error?: string | null;
};

export default function SearchJobs() {
  const [state, formAction, isPending] = useActionState<stateType, FormData>(
    SearchJobsAction,
    {
      message: "",
      error: null,
    }
  );

  return (
    <>
      <form
        action={formAction}
        className="flex flex-col items-center gap-6 p-96"
      >
        <div className="flex items-center justify-center gap-2">
          <input
            type="text"
            name="keywords"
            placeholder="Search job keywords"
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="locationName"
            placeholder="town or city"
            className="p-2 border rounded"
          />

          <button type="submit" className="p-2 border rounded">
            {isPending ? <span>Searching...</span> : <span>Find jobs</span>}
          </button>
        </div>
        <div>
          {state?.error && (
            <div className="flex items-center text-xl font-light text-red-500 gap-2">
              <CircleAlert />
              <p>{state.error}</p>
            </div>
          )}
        </div>
      </form>
    </>
  );
}
