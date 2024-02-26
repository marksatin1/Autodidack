import Link from "next/link";
import { navLinks } from "../lib/data";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Permanent_Marker } from "next/font/google";
import Logo from "./logo";

const perm = Permanent_Marker({ weight: "400", subsets: ["latin"] });

export default function NavBar() {
  return (
    <div className="fixed bottom-0 w-full p-8 grid grid-cols-4">
      <div className="col-span-1 flex justify-center items-center">
        <Link href="/">
          <Logo fontSize="48px" />
        </Link>
      </div>
      <div className="col-span-2 gap-24 flex justify-center items-center">
        {navLinks.map(l => (
          <Link key={l.name} href={l.href}>
            <span
              className={`${perm.className} text-6xl stroke-thin font-extrabold unblur fade-in-out hover:text-amber-500`}
            >
              {l.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <FontAwesomeIcon icon={faMusic} className="max-w-[40px]" />
      </div>
    </div>
  );
}
