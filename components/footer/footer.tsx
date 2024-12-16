import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="flex items-center justify-between px-3 text-sm tracking-tight font-light text-zinc-700">
        <p>© 2024 Boulet. All rights reserved.</p>

        <Link
          href="https://github.com/cascabeanie"
          className="flex gap-2 items-center hover:animate-pulse"
        >
          <p>made by cascabeanie</p>
          <SiGithub size={18} />
        </Link>
      </footer>
    </>
  );
}
