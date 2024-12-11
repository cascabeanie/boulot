import Link from "next/link";

import { BriefcaseBusiness } from "lucide-react";

export default function NavBar() {
  return (
    <>
      <nav className="flex items-center justify-between px-4 lg:px-6">
        <Link href="/" className="flex gap-2 items-center">
          <BriefcaseBusiness />
          <h1 className="text-lg font-bold">Boulot</h1>
        </Link>
        <div>
          <ul>
            <li className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer">
              How it Works
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
