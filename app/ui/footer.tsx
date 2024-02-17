import Link from "next/link";
import { navLinks } from "../lib/data";

export default function Footer() {
  return (
    <div>
      {navLinks.map(l => (
        <Link key={l.name} href={l.href}>
          {l.name}
        </Link>
      ))}
    </div>
  );
}
