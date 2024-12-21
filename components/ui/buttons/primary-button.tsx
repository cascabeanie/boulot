type PrimaryButtonProps = {
  children?: string;
};

export default function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
    <>
      <button
        type="button"
        className="rounded-lg bg-white px-4 py-3 text-sm font-medium text-zinc-900 shadow-white hover:bg-zinc-300"
      >
        {children}
      </button>
    </>
  );
}
