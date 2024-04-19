"use client";

import { AnimatePresence, motion } from "framer-motion";
import { pageTransitionVariants } from "../lib/context/animate-context";

export default function PhotoPageAnimation({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ ease: "easeInOut", duration: 0.75 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
      whileTap={{ scale: 0.75, transition: { duration: 0.75 } }}
      variants={pageTransitionVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
