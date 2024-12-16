import GetStarted from "@/components/main/home-page/get-started";
import JobCategories from "@/components/main/home-page/job-categories";
import SearchJobs from "@/components/main/home-page/search-jobs";

export default function Home() {
  return (
    <>
      <main className="grid grid-rows-[repeat(3,_auto)]">
        <SearchJobs />

        <JobCategories />

        <GetStarted />
      </main>
    </>
  );
}
