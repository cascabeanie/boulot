"use server";

import { redirect } from "next/navigation";

type stateType = {
  message?: string;
  error?: string | null;
};

export async function SearchJobsAction(
  prevState: stateType,
  formData: FormData
) {
  let keywords: FormDataEntryValue | null;
  let location: FormDataEntryValue | null;

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
