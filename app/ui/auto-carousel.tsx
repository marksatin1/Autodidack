"use client";

import { ImageType } from "../lib/definitions";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { autoCarouselVariants } from "../lib/context/animate-context";

// LEVER
const FADE_INTERVAL = 12000;

export default function AutoCarouselTest({ images }: { images: ImageType[] }) {
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentPage(prev => (prev + 1) % images.length);
    }, FADE_INTERVAL);
  }, [currentPage, images.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={images[currentPage].id}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{
          ease: "easeInOut",
          duration: FADE_INTERVAL / 1000,
        }}
        variants={autoCarouselVariants}
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
