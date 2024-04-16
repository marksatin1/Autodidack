"use client";

import { ImageType } from "../lib/definitions";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { pageTransitionVariants } from "../lib/context/animate-context";

// LEVERS
const FADE_INTERVAL = 15000;

export default function AutoCarouselTest({ images }: { images: ImageType[] }) {
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentPage(prev => (prev + 1) % images.length);
    }, FADE_INTERVAL);
  }, [currentPage]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={images[currentPage].id}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ ease: "easeInOut", duration: FADE_INTERVAL / 1000 }}
        variants={pageTransitionVariants}
        className="flex justify-center items-center w-full h-full"
      >
        <Image
          src={images[currentPage].path}
          width={images[currentPage].width}
          height={images[currentPage].height}
          alt={images[currentPage].description}
          priority
          className="w-full h-full object-contain"
        />
      </motion.div>
    </AnimatePresence>
  );
}
