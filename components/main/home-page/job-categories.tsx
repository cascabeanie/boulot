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
      <section className="flex justify-center py-12 md:py-24 lg:py-32 bg-gray-200/50 w-full">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Job Categories
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-full">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer rounded-lg border md:max-w-md w-full group"
                onClick={() => {
                  router.push(
                    `/results/page/1?keywords=${category.title}&resultsToTake=5`
                  );
                }}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <span className="w-16 h-16 bg-gray-300/50 rounded-full flex items-center justify-center mb-4 transition-colors group-hover:bg-gray-300 hover:animate-pulse">
                    {category.icon}
                  </span>
                  <h3 className="text-lg font-bold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">
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
