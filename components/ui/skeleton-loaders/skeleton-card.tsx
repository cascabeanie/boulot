export default function SkeletonCard() {
  return (
    <>
      <span className="flex flex-col gap-6 border rounded-md shadow-lg p-6 xl:p-8 bg-white">
        <div className="flex flex-col">
          <span className="max-w-96 h-8 bg-gray-300/50 mb-2 rounded-xl animate-pulse" />

          <span className="w-60 h-5 bg-gray-300/50 mb-2 rounded-2xl animate-pulse" />

          <span className="w-48 h-5 bg-gray-300/50 mb-2 rounded-2xl animate-pulse" />

          <span className="w-52 h-5 bg-gray-300/50 mb-2 rounded-2xl animate-pulse" />
        </div>
      </span>
    </>
  );
}
