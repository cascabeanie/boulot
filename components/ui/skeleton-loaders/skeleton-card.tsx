export default function SkeletonCard() {
  return (
    <>
      <span className="flex flex-col gap-6 rounded-md border bg-white p-6 shadow-lg xl:p-8">
        <div className="flex flex-col">
          <span className="mb-2 h-8 max-w-96 animate-pulse rounded-xl bg-gray-300/50" />

          <span className="mb-2 h-5 w-60 animate-pulse rounded-2xl bg-gray-300/50" />

          <span className="mb-2 h-5 w-48 animate-pulse rounded-2xl bg-gray-300/50" />

          <span className="mb-2 h-5 w-52 animate-pulse rounded-2xl bg-gray-300/50" />
        </div>
      </span>
    </>
  );
}
