"use client";

import { useEffect, useRef } from "react";

import { z } from "zod";
import { resultSchema } from "@/lib/zod-schemas";

import { SquareX } from "lucide-react";
import { BadgePoundSterling } from "lucide-react";
import { MapPin } from "lucide-react";
import { Briefcase } from "lucide-react";
import SecondaryButton from "../buttons/secondary-button";

type ResultType = z.infer<typeof resultSchema>;

type FormModalProps = {
  job: ResultType | null;
  openModal: boolean;
  closeModal: () => void;
};

export default function JobModal({
  job,
  openModal,
  closeModal,
}: FormModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openModal) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [openModal]);

  return (
    <>
      <dialog
        ref={modalRef}
        onCancel={closeModal}
        className="fixed inset-0 sm:w-full sm:max-w-xl md:max-w-3xl border-2 border-zinc-900 rounded-lg p-8  backdrop:bg-gray-300/80 gap-8 focus:outline-none"
      >
        <div className="flex justify-end">
          <SquareX
            className="cursor-pointer hover:stroke-zinc-700"
            onClick={closeModal}
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
              {job?.jobTitle}
            </h3>
            <span className="flex flex-col sm:flex-row gap-1 sm:gap-4">
              <p>Posted: {job?.date}</p>
              <p>Expires: {job?.expirationDate}</p>
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="flex items-center text-gray-500 gap-1">
              <Briefcase size={18} />
              <p>{job?.employerName}</p>
            </span>

            <span className="flex items-center text-gray-500 gap-1">
              <MapPin size={18} />
              <p>{job?.locationName}</p>
            </span>

            <span className="flex items-center text-gray-500 gap-1">
              <BadgePoundSterling size={18} />
              <p>
                £ {job?.minimumSalary} - £ {job?.maximumSalary}
              </p>
            </span>
          </div>

          <hr />

          <div>{job?.jobDescription}</div>

          <div className="flex justify-center focus:outline-none">
            <a
              href={`${job?.jobUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SecondaryButton>View Job Post</SecondaryButton>
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
