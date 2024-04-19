"use client";

import { externalNavLinks, internalNavLinks } from "../../lib/data";
import AudioPlayer from "./audio-player";
import ExternalNavbar from "./external-navbar";
import InternalNavbar from "./internal-navbar";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { footerVariants } from "@/app/lib/context/animate-context";

// LEVER
const animationDuration = 2000;

export default function Footer() {
  const pathCheck = new RegExp("/[A-Za-z0-9]+/[0-9]+/[A-Za-z]+");
  const pathname = usePathname();
  const currentPathsMatch = useMemo(() => pathCheck.test(pathname), [pathname]);
  const [hideTrigger, setHideTrigger] = useState<boolean>(false);

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
        className={`${
          hideTrigger ? "hidden" : "block"
        } flex flex-col justify-center items-center space-y-3 px-6 py-4`}
      >
        <InternalNavbar links={internalNavLinks} />
        <hr className="w-1/4 border-slate-500" />
        <div className="w-full grid grid-cols-3">
          <div className="justify-self-start self-end">
            <ExternalNavbar links={externalNavLinks} />
          </div>
          <div className="flex flex-col justify-center items-center text-slate-500">
            <small>Designed by Mark Satin</small>
            <small>&copy; 2024</small>
          </div>
          <div className="justify-self-end self-end">
            <AudioPlayer />
          </div>
        </div>
      </motion.footer>
    </AnimatePresence>
  );
}
