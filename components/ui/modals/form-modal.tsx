"use client";

import { useEffect, useRef } from "react";

import { SquareX } from "lucide-react";

type FormModalProps = {
  children: React.ReactNode;
  openModal: boolean;
  closeModal: () => void;
};

export default function FormModal({
  children,
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
        className="fixed inset-0 gap-8 rounded-lg border-2 border-zinc-900 p-8 backdrop:bg-gray-300/80 sm:w-full sm:max-w-xl md:max-w-3xl"
      >
        <div className="flex justify-end">
          <SquareX
            className="cursor-pointer hover:stroke-zinc-700"
            onClick={closeModal}
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="mb-2 text-xl font-bold">Filters</h2>

            <h3 className="text-lg font-medium">Job Type</h3>

            <span className="flex items-center gap-2">
              <input
                type="checkbox"
                value={"true"}
                id="permanent-checkBox"
                name="permanent"
                className="cursor-pointer accent-zinc-900"
              />
              <label
                htmlFor="permanent-checkBox"
                className="text-sm text-zinc-900"
              >
                Permanent position
              </label>
            </span>

            <span className="flex items-center gap-2">
              <input
                type="checkbox"
                value={"true"}
                id="part-time-checkBox"
                name="partTime"
                className="cursor-pointer accent-zinc-900"
              />
              <label
                htmlFor="part-time-checkBox"
                className="text-sm text-zinc-900"
              >
                Part time position
              </label>
            </span>

            <span className="flex items-center gap-2">
              <input
                type="checkbox"
                value={"true"}
                id="temp-checkBox"
                name="temp"
                className="cursor-pointer accent-zinc-900"
              />
              <label htmlFor="temp-checkBox" className="text-sm text-zinc-900">
                Temp position
              </label>
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-medium">Salary</h3>

            <span className="flex items-center gap-2">
              <select
                name="minimumSalary"
                id="min-salary"
                className="cursor-pointer rounded-sm bg-zinc-100 pl-1"
              >
                <option value="">Any amount</option>
                <option value="20000">£20,000+</option>
                <option value="25000">£25,000+</option>
                <option value="30000">£30,000+</option>
                <option value="30000">£35,000+</option>
                <option value="40000">£40,000+</option>
                <option value="50000">£50,000+</option>
              </select>

              <label htmlFor="min-salary" className="text-sm text-zinc-900">
                Starting Salary
              </label>
            </span>
          </div>

          <div className="mt-4 flex justify-center">{children}</div>
        </div>
      </dialog>
    </>
  );
}
