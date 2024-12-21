"use client";

import { useState } from "react";

import ResultsSearch from "@/components/main/results-page/results-search";

import { PanelRightOpen } from "lucide-react";
import { PanelRightClose } from "lucide-react";

export default function SideBar() {
  const [isSideOpen, setIsSideOpen] = useState(false);

  function sideBarHandler() {
    isSideOpen === false ? setIsSideOpen(true) : setIsSideOpen(false);
  }

  return (
    <>
      <aside
        className={`fixed ${
          isSideOpen === false ? "-right-full" : "right-0"
        } z-50 min-h-svh w-full border bg-white p-4 transition-all sm:w-3/4 sm:p-8 xl:w-1/2`}
      >
        <div className="mt-5 flex justify-center">
          <span className="fixed right-5 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-md border bg-white">
            {isSideOpen === false ? (
              <PanelRightOpen size={30} onClick={sideBarHandler} />
            ) : (
              <PanelRightClose
                className="animate-pulse"
                size={30}
                onClick={sideBarHandler}
              />
            )}
          </span>

          <ResultsSearch />
        </div>
      </aside>
    </>
  );
}
