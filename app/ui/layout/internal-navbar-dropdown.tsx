"use client";

import { NavLink } from "../../lib/definitions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AudioPlayer from "../components/audio-player";
import { AnimatePresence, motion } from "framer-motion";
import { dissolveVariants } from "../../lib/motion-variants";

export default function InternalNavbarDropdown({
  links,
  setShowMenu,
}: {
  links: NavLink[];
  setShowMenu: any;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <motion.nav
        key="dropdown"
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ ease: "easeIn", duration: 0.5 }}
        variants={dissolveVariants}
        aria-label="primary"
        className="w-full"
      >
        <ul className="absolute z-10 top-16 left-0 border-2 bg-gradient-to-tr from-white via-amber-400 to-white rounded-sm shadow-2xl w-screen p-4 flex justify-between gap-6 sm:gap-16 lg:gap-32 items-end">
          <div className="flex items-center gap-6">
            {links.map(l => {
              return (
                <li key={l.id} className="text-xl tracking-wider">
                  <h2
                    className={`${
                      l.disabled ? "link-disabled cursor-help" : " hover:scale-110 duration-200"
                    }`}
                  >
                    <Link
                      href={l.disabled ? "" : l.href}
                      tabIndex={l.disabled ? -1 : 0}
                      onClick={() => setShowMenu(false)}
                      className={`${pathname.slice(1) == l.name.toLowerCase() && ""} ${
                        l.disabled
                          ? "link-disabled cursor-help"
                          : "title-shadow hover:text-accent-dark hover:drop-shadow-lg hover:blur-lg duration-500"
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
      </motion.nav>
    </AnimatePresence>
  );
}
