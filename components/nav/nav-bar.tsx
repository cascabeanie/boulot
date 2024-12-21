import Link from "next/link";

import { BriefcaseBusiness } from "lucide-react";

export default function NavBar() {
  return (
    <>
      <nav id="home" className="flex items-center px-4 lg:px-6">
        <Link href="/" className="flex items-center gap-2">
          <BriefcaseBusiness />
          <h2 className="text-lg font-bold">Boulot</h2>
        </Link>
      </nav>
    </>
  );
}
