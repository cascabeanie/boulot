"use client";

import { useState } from "react";

import FilterButton from "@/components/ui/buttons/filter-button";
import FormModal from "@/components/ui/modals/form-modal";
import SubmitButton from "@/components/ui/buttons/submit-button";

export default function SearchFilters() {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <>
      <div onClick={() => setModalVisibility(true)}>
        <FilterButton>Filters</FilterButton>
      </div>

      <FormModal
        openModal={modalVisibility}
        closeModal={() => setModalVisibility(false)}
      >
        <SubmitButton>Find Jobs</SubmitButton>
      </FormModal>
    </>
  );
}
