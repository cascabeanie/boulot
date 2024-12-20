import { CornerRightUp } from "lucide-react";
import { SearchX } from "lucide-react";

export default function NoResults() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4">
        <div>
          <span className="fixed top-16 right-6 flex items-center gap-2 text-lg">
            <p>You can try another search here!</p>
            <CornerRightUp size={35} className="mb-4" />
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <h2 className="text-3xl font-bold">
            There are no results for your search
          </h2>
          <SearchX size={35} />
        </div>
        <div>
          <p className="text-xl font-medium">
            Please try again with a different search term
          </p>
        </div>
      </section>
    </>
  );
}
