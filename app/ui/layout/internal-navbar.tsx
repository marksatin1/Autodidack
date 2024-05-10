import { NavLink } from "../../lib/definitions";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function InternalNavbar({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  return (
    <nav className="w-full h-full flex flex-col items-center justify-center">
      <ul className="w-full py-4 flex flex-col sm:flex-row gap-24 lg:gap-32 xl:gap-64">
        {links.map(l => {
          const disabled = l.name === "Web" || l.name === "Store";
          return (
            <li key={l.id}>
              <h2 className="text-center title-shadow tracking-widest text-3xl lg:text-4xl">
                <Link
                  href={disabled ? "" : l.href}
                  className={`${
                    pathname.slice(1) === l.name.toLowerCase() ? "link-selected" : "link"
                  } ${disabled && "line-through decoration-[#f59e0b] decoration-wavy cursor-help"}`}
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
