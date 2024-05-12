import { NavLink } from "../../lib/definitions";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function InternalNavbar({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  return (
    <nav aria-label="primary" className="w-full h-full flex flex-col items-center justify-center">
      <ul className="w-full py-4 flex flex-col sm:flex-row gap-24 lg:gap-32 xl:gap-64">
        {links.map(l => {
          return (
            <li key={l.id}>
              <h2
                className={
                  l.disabled
                    ? "link-disabled cursor-help"
                    : "text-center title-shadow tracking-widest text-3xl lg:text-4xl"
                }
              >
                <Link
                  href={l.disabled ? "#" : l.href}
                  tabIndex={l.disabled ? -1 : 0}
                  role={l.disabled ? "decoration" : ""}
                  className={`${pathname.slice(1) === l.name.toLowerCase() && "text-accent"} ${
                    l.disabled
                      ? "link-disabled cursor-help"
                      : "title-shadow hover:text-accent hover:drop-shadow-lg duration-400"
                  }`}
                >
                  {l.name}
                </Link>
              </h2>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
