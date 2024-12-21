import { SlidersHorizontal } from "lucide-react";

type FilterButtonProps = {
  children: string;
};

export default function FilterButton({ children }: FilterButtonProps) {
  return (
    <>
      <button
        type="button"
        className="rounded-lg border bg-zinc-100 px-2 py-2 text-sm text-black shadow hover:bg-zinc-300"
      >
        <span className="flex items-center gap-2">
          <SlidersHorizontal size={14} />
          {children}
        </span>
      </button>
    </>
  );
}
