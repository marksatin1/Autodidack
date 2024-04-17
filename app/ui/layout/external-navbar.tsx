import Image from "next/image";
import { NavLink } from "../../lib/definitions";
import Link from "next/link";

export default function ExternalNavbar({ links }: { links: NavLink[] }) {
  return (
    <nav>
      <ul className="flex items-center justify-center space-x-8">
        {links.map(l => {
          return (
            <li key={l.id} className="hover:scale-125 duration-700">
              <Link href={l.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={l.image!.path}
                  alt={l.image!.description}
                  width={l.image!.width}
                  height={l.image!.height}
                  className="w-[24px] h-[24px]"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
