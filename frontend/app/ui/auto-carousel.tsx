"use client";

import { ImageType } from "../lib/definitions";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function AutoCarousel({
  images,
  fadeInterval,
  variants,
}: {
  images: ImageType[];
  fadeInterval: number;
  variants: {};
}) {
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentPage(prev => (prev + 1) % images.length);
    }, fadeInterval);
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
          duration: fadeInterval / 1000,
        }}
        variants={variants}
        className="flex justify-center items-center w-full h-full"
      >
        <img
          src={images[currentPage].path}
          width={images[currentPage].width}
          height={images[currentPage].height}
          alt={images[currentPage].description}
          className="w-full h-full object-contain"
          // priority
        />
      </motion.div>
    </AnimatePresence>
  );
}