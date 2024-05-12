import Image from "next/image";
import { NavLink } from "../../lib/definitions";
import Link from "next/link";

export default function SocialsNavbar({ links }: { links: NavLink[] }) {
  return (
    <nav aria-label="secondary" className="h-fit">
      <ul className="flex items-center justify-center gap-x-8">
        {links.map(l => {
          return (
            <li key={l.id} className="hover:scale-125 duration-700">
              <Link
                href={l.href}
                aria-label="opens in new tab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={l.image!.path}
                  alt={l.image!.description}
                  width={l.image!.width}
                  height={l.image!.height}
                  className="w-5 md:w-[24px] md:h-[24px]"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
