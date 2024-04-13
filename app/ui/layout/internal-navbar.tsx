import { NavLink } from "../../lib/definitions";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function InternalNavbar({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center justify-center space-x-32 title-shadow">
        {links.map(l => {
          return (
            <li key={l.id}>
              <Link
                href={l.href}
                className={`${
                  pathname.slice(1) === l.name.toLowerCase() && "link-selected"
                } text-4xl link`}
              >
                {l.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
