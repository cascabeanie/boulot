type SecondaryButtonProps = {
  children?: string;
};

export default function SecondaryButton({ children }: SecondaryButtonProps) {
  return (
    <>
      <button
        type="button"
        className="rounded-lg bg-zinc-900 px-4 py-3 text-sm font-medium text-white shadow-zinc-900 hover:bg-zinc-700"
      >
        {children}
      </button>
    </>
  );
}
