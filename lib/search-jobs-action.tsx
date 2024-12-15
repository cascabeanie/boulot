"use server";

import { StateType } from "@/lib/job-types";

import { redirect } from "next/navigation";

const formNames = [
  "keywords",
  "locationName",
  "minimumSalary",
  "permanent",
  "partTime",
  "temp",
];

export async function SearchJobsAction(
  prevState: StateType,
  formData: FormData
) {
  let searchParams: URLSearchParams;

  try {
    const formValues = Object.fromEntries(
      formNames.map((item) => [item, formData.get(item)])
    );

    if (!formValues.keywords) {
      return {
        message: "Error",
        error: "At least one job keyword is required",
      };
    }

    searchParams = new URLSearchParams();

    searchParams.set("keywords", formValues.keywords.toString());

    if (formValues.locationName) {
      searchParams.set("locationName", formValues.locationName.toString());
    }
    if (formValues.minimumSalary) {
      searchParams.set("minimumSalary", formValues.minimumSalary.toString());
    }
    if (formValues.permanent) {
      searchParams.set("permanent", formValues.permanent.toString());
    }
    if (formValues.partTime) {
      searchParams.set("partTime", formValues.partTime.toString());
    }
    if (formValues.temp) {
      searchParams.set("temp", formValues.temp.toString());
    }

    //dev: current default
    searchParams.set("resultsToTake", "5");
  } catch (error) {
    return {
      message: "Error",
      error: `Failed to process search`,
    };
  }

  redirect(`/results/1?${searchParams.toString()}`);
}
