"use client";

import { StateType } from "@/lib/job-types";

import { useActionState } from "react";
import { SearchJobsAction } from "@/lib/search-jobs-action";

import { CircleAlert } from "lucide-react";
import { ChevronsDown } from "lucide-react";

export default function SearchJobs() {
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
        className="flex flex-col items-center gap-6 p-20"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
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
            placeholder="Town or city"
            className="p-2 border rounded"
          />

          <button type="submit" className="p-2 border rounded">
            {isPending ? <span>Searching...</span> : <span>Find jobs</span>}
          </button>
        </div>

        <div className="flex flex-col items-center gap-8 w-full">
          {/* dev: will be click to show */}
          <div
            className="flex
          flex-col items-center gap-1"
          >
            <h3>Show/hide filters</h3>
            <ChevronsDown className="cursor-pointer" />
          </div>

          <div className="grid grid-cols-2 items-center gap-y-8 w-full max-w-md">
            <label htmlFor="min-salary" className="text-sm text-gray-400">
              Salary
            </label>
            <select
              name="minimumSalary"
              id="min-salary"
              className="bg-zinc-300 rounded-sm cursor-pointer"
            >
              <option value="">Any amount</option>
              <option value="20000">£20,000+</option>
              <option value="25000">£25,000+</option>
              <option value="30000">£30,000+</option>
              <option value="30000">£35,000+</option>
              <option value="40000">£40,000+</option>
              <option value="50000">£50,000+</option>
            </select>

            <label
              htmlFor="permanent-checkBox"
              className="text-sm text-gray-400"
            >
              Permanent position
            </label>
            <input
              type="checkbox"
              value={"true"}
              id="permanent-checkBox"
              name="permanent"
              className="bg-zinc-300 accent-zinc-700 cursor-pointer"
            />

            <label
              htmlFor="part-time-checkBox"
              className="text-sm text-gray-400"
            >
              Part time position
            </label>
            <input
              type="checkbox"
              value={"true"}
              id="part-time-checkBox"
              name="partTime"
              className="bg-zinc-300 accent-zinc-700 cursor-pointer"
            />

            <label htmlFor="temp-checkBox" className="text-sm text-gray-400">
              Temp position
            </label>
            <input
              type="checkbox"
              value={"true"}
              id="temp-checkBox"
              name="temp"
              className="bg-zinc-300 accent-zinc-700 cursor-pointer"
            />
          </div>
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
