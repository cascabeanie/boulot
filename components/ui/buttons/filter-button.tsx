import { SlidersHorizontal } from "lucide-react";

type FilterButtonProps = {
  children: string;
};

export default function FilterButton({ children }: FilterButtonProps) {
  return (
    <>
      <button
        type="button"
        className="bg-zinc-100 text-black border rounded-lg py-2 px-2 shadow hover:bg-zinc-300 text-sm"
      >
        <span className="flex items-center gap-2">
          <SlidersHorizontal size={14} />
          {children}
        </span>
      </button>
    </>
  );
}
