"use client";

import AutoCarousel from "./ui/auto-carousel";
import { motion } from "framer-motion";
import { loadingVariants } from "./lib/context/animate-context";
import { flags } from "./lib/data";

export default function Loading() {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <motion.div animate="grow" transition={{ duration: 20 }} variants={loadingVariants}>
        {<AutoCarousel images={flags} fadeInterval={150} variants="" />}
      </motion.div>
    </section>
  );
}
