"use client";

import { useRouter } from "next/navigation";

import { Cpu } from "lucide-react";
import { HeartPulse } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Landmark } from "lucide-react";
import { Presentation } from "lucide-react";
import { ShoppingBag } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Technology",
    icon: <Cpu />,
  },
  {
    id: 2,
    title: "Healthcare",
    icon: <HeartPulse />,
  },
  {
    id: 3,
    title: "Education",
    icon: <GraduationCap />,
  },
  {
    id: 4,
    title: "Finance",
    icon: <Landmark />,
  },
  {
    id: 5,
    title: "Marketing",
    icon: <Presentation />,
  },
  {
    id: 6,
    title: "Retail",
    icon: <ShoppingBag />,
  },
];

export default function JobCategories() {
  const router = useRouter();

  return (
    <>
      <section className="flex w-full justify-center bg-gray-200/50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Job Categories
          </h2>
          <div className="grid w-full justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group w-full cursor-pointer rounded-lg border bg-white transition-shadow duration-300 hover:shadow-lg md:max-w-md"
                onClick={() => {
                  router.push(
                    `/results/page/1?keywords=${category.title}&resultsToTake=5`,
                  );
                }}
              >
                <div className="flex flex-col items-center p-6 text-center">
                  <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-300/50 transition-colors hover:animate-pulse group-hover:bg-gray-300">
                    {category.icon}
                  </span>
                  <h3 className="mb-2 text-lg font-bold">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    Explore jobs in {category.title.toLowerCase()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
