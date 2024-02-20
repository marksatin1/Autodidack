import Link from "next/link";
import { navLinks } from "../lib/data";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full p-8 grid grid-cols-4">
      <div className="col-span-1 flex items-center">Autodidack (Logo)</div>
      <div className="col-span-2 gap-24 flex justify-center items-center">
        {navLinks.map(l => (
          <Link
            key={l.name}
            href={l.href}
            style={{
              transform: "scale(1.2, 1.5)",
            }}
          >
            <span className="text-2xl text-slate-400 font-extrabold drop-shadow-2xl">{l.name}</span>
          </Link>
        ))}
      </div>
      <div className="col-span-1 flex justify-end items-center">Sound Icon</div>
    </footer>
  );
}
