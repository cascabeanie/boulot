import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="flex items-center justify-between px-1 text-sm font-light tracking-tight text-zinc-700 sm:px-3">
        <p>© 2024 Boulet. All rights reserved.</p>

        <Link
          href="https://github.com/cascabeanie"
          className="flex items-center gap-1 hover:animate-pulse sm:gap-2"
        >
          <p>made by cascabeanie</p>
          <SiGithub size={18} />
        </Link>
      </footer>
    </>
  );
}
