"use client";

import { ImageType } from "../../lib/definitions";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

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
  }, [currentPage, images.length, fadeInterval]);

  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={images[currentPage].id}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{
          ease: "easeInOut",
          duration: fadeInterval / 1000,
        }}
        variants={variants}
        className="px-2 flex justify-center items-center w-full h-full"
      >
        <Image
          src={images[currentPage].path}
          width={images[currentPage].width}
          height={images[currentPage].height}
          alt={images[currentPage].description}
          loading="eager"
          className="w-full h-full object-contain"
          loading="eager"
        />
      </motion.article>
    </AnimatePresence>
  );
}
