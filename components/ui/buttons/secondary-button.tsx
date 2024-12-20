type SecondaryButtonProps = {
  children?: string;
};

export default function SecondaryButton({ children }: SecondaryButtonProps) {
  return (
    <>
      <button
        type="button"
        className="bg-zinc-900 text-white rounded-lg py-3 px-4 shadow--zinc-900 hover:white text-sm font-medium"
      >
        {children}
      </button>
    </>
  );
}
