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
        className={`w-full grow ${
          hideTrigger ? "hidden" : "block"
        } flex flex-col justify-end items-center space-y-3 py-3`}
      >
        <article className="hidden sm:block">
          <InternalNavbar links={internalNavLinks} />
        </article>
        <div className="w-full px-8 flex flex-col justify-center items-center sm:items-end gap-3 sm:grid sm:grid-cols-3 sm:justify-between">
          <article className="justify-self-start">
            <SocialsNavbar links={externalNavLinks} />
          </article>
          <article className="">
            <hr className="my-3 border-slate-500" />
            <div className="flex flex-col justify-center items-center text-slate-500">
              <small>Designed by Mark Satin</small>
              <small>&copy; 2024</small>
            </div>
          </article>
          <article className="hidden sm:block sm:justify-self-end">
            <AudioPlayer />
          </article>
        </div>
      </motion.footer>
    </AnimatePresence>
  );
}
