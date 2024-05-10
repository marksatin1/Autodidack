"use client";

import { externalNavLinks, internalNavLinks } from "../../lib/data";
import AudioPlayer from "./audio-player";
import SocialsNavbar from "./socials-navbar";
import InternalNavbar from "./internal-navbar";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { footerVariants } from "../../lib/animate-context";
import Image from "next/image";

const pathCheck = new RegExp("/[A-Za-z0-9]+/[0-9]+/[A-Za-z]+");

export default function Footer({ animationDuration }: { animationDuration: number }) {
  const pathname = usePathname();
  const currentPathsMatch = useMemo(() => pathCheck.test(pathname), [pathname]);

  const [hideTrigger, setHideTrigger] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  // Footer hide/show animation control
  useEffect(() => {
    currentPathsMatch &&
      setTimeout(() => {
        setHideTrigger(true);
      }, animationDuration - 700);

    // resets footer as block before moving to next page
    return () => setHideTrigger(false);
  }, [currentPathsMatch]);

  return (
    <AnimatePresence mode="wait">
      <motion.footer
        animate={currentPathsMatch ? "hidden" : "visible"}
        transition={{ duration: animationDuration / 1000 }}
        variants={footerVariants}
        className={`grow ${
          hideTrigger ? "hidden" : "block"
        } flex flex-col justify-end items-center space-y-3 py-3`}
      >
        {showMenu && <InternalNavbar links={internalNavLinks} />}
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <SocialsNavbar links={externalNavLinks} />
          <hr className="w-3/4 lg:w-1/4 border-slate-500" />
          <article className="flex flex-col justify-center items-center text-center text-slate-500">
            <small>Designed by Mark Satin</small>
            <small>&copy; 2024</small>
          </article>
          <div className="justify-self-end self-end">
            <AudioPlayer />
            <Image
              src="/icons/svg/HamburgerRight.svg"
              width={64}
              height={64}
              alt="Hamburger menu"
              onClick={() => setShowMenu(!showMenu)}
              className="w-8"
            />
          </div>
        </div>
      </motion.footer>
    </AnimatePresence>
  );
}
