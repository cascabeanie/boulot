"use server";

import { RESULTS_PER_PAGE } from "./constants";

import { StateType } from "@/lib/job-types";

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

    searchParams = new URLSearchParams();

    if (formValues.keywords) {
      searchParams.set("keywords", formValues.keywords.toString());
    }
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

    searchParams.set("resultsToTake", RESULTS_PER_PAGE.toString());

    return {
      message: null,
      error: null,
      data: searchParams.toString(),
    };
  } catch (error) {
    return {
      message: "Error",
      error: `Failed to process search`,
      data: null,
    };
  }
}
