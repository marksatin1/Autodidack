import { NavLink } from "../../lib/definitions";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function InternalNavbar({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  return (
    <nav className="w-full h-full flex flex-col items-center justify-center">
      <ul className="w-full h-full flex flex-col md:grid grid-cols-4 gap-8 lg:gap-32 items-center justify-center title-shadow">
        {links.map(l => {
          const disabled = l.name === "Web" || l.name === "Store";
          return (
            <li key={l.id} className="text-3xl tracking-widest">
              <h2 className="text-center">
                <Link
                  href={disabled ? "" : l.href}
                  className={`${
                    pathname.slice(1) === l.name.toLowerCase() ? "link-selected" : "link"
                  } ${disabled && "line-through decoration-black decoration-wavy cursor-help"}`}
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
