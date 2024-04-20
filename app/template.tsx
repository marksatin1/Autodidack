"use client";

import { motion } from "framer-motion";
import { pageTransitionVariants } from "./lib/context/animate-context";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ ease: "easeInOut", duration: 0.75 }}
      variants={pageTransitionVariants}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
