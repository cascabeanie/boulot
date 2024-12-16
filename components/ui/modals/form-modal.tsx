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
        className="fixed inset-0 sm:w-full sm:max-w-xl md:max-w-3xl border-2 border-zinc-900 rounded-lg p-8  backdrop:bg-gray-300/80 z-20"
      >
        <div className="flex justify-end mb-6">
          <SquareX
            className="cursor-pointer hover:stroke-zinc-700"
            onClick={closeModal}
          />
        </div>

        <div className="grid grid-cols-2 items-center gap-y-10">
          <label htmlFor="min-salary" className="text-sm text-zinc-900">
            Salary
          </label>
          <select
            name="minimumSalary"
            id="min-salary"
            className="bg-zinc-100 rounded-sm cursor-pointer pl-1"
          >
            <option value="">Any amount</option>
            <option value="20000">£20,000+</option>
            <option value="25000">£25,000+</option>
            <option value="30000">£30,000+</option>
            <option value="30000">£35,000+</option>
            <option value="40000">£40,000+</option>
            <option value="50000">£50,000+</option>
          </select>

          <label htmlFor="permanent-checkBox" className="text-sm text-zinc-900">
            Permanent position
          </label>
          <input
            type="checkbox"
            value={"true"}
            id="permanent-checkBox"
            name="permanent"
            className="accent-zinc-500 cursor-pointer"
          />

          <label htmlFor="part-time-checkBox" className="text-sm text-zinc-900">
            Part time position
          </label>
          <input
            type="checkbox"
            value={"true"}
            id="part-time-checkBox"
            name="partTime"
            className="accent-zinc-500 cursor-pointer"
          />

          <label htmlFor="temp-checkBox" className="text-sm text-zinc-900">
            Temp position
          </label>
          <input
            type="checkbox"
            value={"true"}
            id="temp-checkBox"
            name="temp"
            className="accent-zinc-500 cursor-pointer"
          />
        </div>

        <div className="flex justify-center mt-6">{children}</div>
      </dialog>
    </>
  );
}
