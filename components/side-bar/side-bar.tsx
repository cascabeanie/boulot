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
        } transition-all bg-white border min-h-svh w-full sm:w-3/4 xl:w-1/2 p-4 sm:p-8`}
      >
        <div className="flex justify-center mt-5}">
          {isSideOpen === false ? (
            <PanelRightOpen
              className="fixed z-50 top-3 right-5"
              size={30}
              onClick={sideBarHandler}
            />
          ) : (
            <PanelRightClose
              className="fixed z-50 top-3 right-5 animate-pulse"
              size={30}
              onClick={sideBarHandler}
            />
          )}

          <ResultsSearch />
        </div>
      </aside>
    </>
  );
}
