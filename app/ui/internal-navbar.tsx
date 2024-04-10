import { NavLink } from "../lib/definitions";
import Link from "next/link";

export default function InternalNavbar({ links }: { links: NavLink[] }) {
  return (
    <nav>
      <ul className="flex items-center justify-center space-x-32">
        {links.map(l => {
          return (
            <li key={l.id}>
              <Link href={l.href} className="text-5xl drop-shadow-md">
                {l.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
