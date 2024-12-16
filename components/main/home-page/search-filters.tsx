"use client";

import { useState } from "react";

import FilterButton from "@/components/ui/buttons/filter-button";
import FormModal from "@/components/ui/modals/form-modal";
import SubmitButton from "@/components/ui/buttons/submit-button";

type SearchFiltersProps = {
  isPending: boolean;
};

export default function SearchFilters({ isPending }: SearchFiltersProps) {
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
        <SubmitButton isPending={isPending}>Find Jobs</SubmitButton>
      </FormModal>
    </>
  );
}
