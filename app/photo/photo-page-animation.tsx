"use client";

import { motion } from "framer-motion";
import { pageTransitionVariants } from "../lib/context/animate-context";

export default function PhotoPageAnimation({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ ease: "easeInOut", duration: 0.75 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      whileTap={{ scale: 2, transition: { duration: 1 } }}
      variants={pageTransitionVariants}
    >
      {children}
    </motion.div>
  );
}
