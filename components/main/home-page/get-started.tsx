import PrimaryButton from "@/components/ui/buttons/primary-button";
import Link from "next/link";

export default function GetStarted() {
  return (
    <>
      <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
        <div className="container flex flex-col items-center px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Start Your Job Search Today
          </h2>
          <p className="max-w-[700px] text-lg text-gray-300 mb-8">
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
