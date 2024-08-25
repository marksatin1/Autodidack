"use client";

import { motion } from "framer-motion";
import AutoCarousel from "./auto-carousel";
import { loadingVariants } from "../../lib/motion-variants";
import { flags } from "../../lib/data";

export default function LoadingAnimation() {
  return (
    <motion.div animate="grow" transition={{ duration: 20 }} variants={loadingVariants}>
      <AutoCarousel images={flags} fadeInterval={150} variants="" />
    </motion.div>
  );
}
