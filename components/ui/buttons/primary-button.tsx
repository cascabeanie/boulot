type PrimaryButtonProps = {
  children?: string;
};

export default function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
    <>
      <button
        type="submit"
        className="bg-white text-zinc-900 rounded-lg py-3 px-4 shadow-white hover:bg-zinc-300 text-sm font-medium"
      >
        {children}
      </button>
    </>
  );
}
