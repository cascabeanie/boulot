import { useFormStatus } from "react-dom";

import { Search } from "lucide-react";
import { LoaderCircle } from "lucide-react";

type SubmitButtonProps = {
  children?: string;
};

export default function SubmitButton({ children }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        type="submit"
        className="bg-zinc-900 text-white border rounded-lg py-2 px-2 shadow hover:bg-zinc-800 text-sm"
      >
        {pending ? (
          <span className="flex items-center gap-1">
            <LoaderCircle size={15} stroke={"white"} className="animate-spin" />
            Searching
          </span>
        ) : (
          <span className="flex items-center gap-1">
            <Search size={15} stroke={"white"} />
            {children}
          </span>
        )}
      </button>
    </>
  );
}
