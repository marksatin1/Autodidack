import { NavLink } from "../../lib/definitions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AudioPlayer from "./audio-player";

export default function InternalNavbarDropdown({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  return (
    <nav className="w-full">
      <ul className="absolute z-50 top-20 left-0 border-2 bg-gradient-to-tr from-white via-amber-200 to-white rounded-sm shadow-xl w-screen p-4 flex justify-between gap-6 sm:gap-16 lg:gap-32 items-end">
        <div className="flex items-center gap-6">
          {links.map(l => {
            const disabled = l.name === "Web" || l.name === "Store";
            return (
              <li
                key={l.id}
                className="text-xl tracking-wider title-shadow hover:text-[#f59e0b] hover:scale-[1.2] duration-200"
              >
                <h2>
                  <Link
                    href={disabled ? "" : l.href}
                    className={`${pathname.slice(1) === l.name.toLowerCase() && "link-selected"} ${
                      disabled && "line-through decoration-[#f59e0b] decoration-wavy cursor-help"
                    }`}
                  >
                    {l.name}
                  </Link>
                </h2>
              </li>
            );
          })}
        </div>
        <li>
          <AudioPlayer />
        </li>
      </ul>
    </nav>
  );
}
