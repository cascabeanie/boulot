"use server";

import { StateType } from "@/lib/job-types";

import { redirect } from "next/navigation";

export async function SearchJobsAction(
  prevState: StateType,
  formData: FormData
) {
  let keywords;
  let location;

  try {
    keywords = formData.get("keywords");
    location = formData.get("locationName");

    if (!keywords) {
      return {
        message: "Error",
        error: "At least one job keyword is required",
      };
    }
  } catch (error) {
    return {
      message: "Error",
      error: `Failed to process search`,
    };
  }

  const params = new URLSearchParams();

  params.set("keywords", keywords.toString());

  if (location) {
    params.set("locationName", location.toString());
  }

  redirect(`/results?${params.toString()}`);
}
