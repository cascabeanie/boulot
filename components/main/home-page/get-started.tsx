import PrimaryButton from "@/components/ui/buttons/primary-button";
import Link from "next/link";

export default function GetStarted() {
  return (
    <>
      <section className="flex w-full justify-center bg-zinc-900 py-12 text-white md:py-24 lg:py-32">
        <div className="container flex flex-col items-center px-4 text-center md:px-6">
          <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Start Your Job Search Today
          </h2>
          <p className="mb-8 max-w-[700px] text-lg text-gray-300">
            Your dream career is waiting, start with Boulot now.
          </p>

          <Link href="#home">
            <PrimaryButton>Get Started</PrimaryButton>
          </Link>
        </div>
      </section>
    </>
  );
}
