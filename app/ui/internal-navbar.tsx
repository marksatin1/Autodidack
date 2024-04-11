import { NavLink } from "../lib/definitions";
import Link from "next/link";

export default function InternalNavbar({ links }: { links: NavLink[] }) {
  return (
    <nav>
      <ul className="flex items-center justify-center space-x-32 title-shadow">
        {links.map(l => {
          return (
            <li key={l.id}>
              <Link href={l.href} className="text-4xl hover:text-slate-400">
                {l.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
