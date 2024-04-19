"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { ImageType } from "../lib/definitions";
import Image from "next/image";
import { icons } from "../lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { carouselVariants } from "../lib/context/animate-context";

export default function Carousel({ slides }: { slides: ImageType[] }) {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Focus to <section> when component mounts
  useEffect(() => {
    sectionRef.current?.focus();
  }, []);

  function handleNextImage() {
    setCurrentIdx(prev => (prev + 1) % slides.length);
  }

  function handlePrevImage() {
    setCurrentIdx(prev => (prev - 1 + slides.length) % slides.length);
  }

  function handleKeyDown(e: KeyboardEvent) {
    switch (e.key) {
      case "ArrowLeft":
        handlePrevImage();
        break;
      case "ArrowRight":
        handleNextImage();
        break;
      default:
        console.log("Some other key was pressed.");
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.section
        tabIndex={0} // makes <section> focusable
        ref={sectionRef}
        onKeyDown={handleKeyDown}
        layout
        initial="initial"
        animate="animate"
        transition={{ duration: 2.3 }}
        variants={carouselVariants}
        className="w-full h-full outline-none grid grid-rows-[1fr_auto]"
      >
        <div className="relative w-full h-full">
          {slides.map((p: ImageType, i: number) => (
            <Image
              key={p.id}
              src={p.path}
              width={p.width}
              height={p.height}
              alt={p.description}
              className={`absolute w-full h-full object-contain ${
                i === currentIdx ? "opacity-100" : "opacity-0"
              } duration-[2s]`}
              priority={i === 0}
            />
          ))}
        </div>
        <div className="flex justify-center gap-8 my-4">
          <Image
            src={icons.arrowLeftThin.path}
            width={icons.arrowLeftThin.width}
            height={icons.arrowLeftThin.height}
            alt={icons.arrowLeftThin.description}
            onClick={handlePrevImage}
            className="w-[48px] cursor-pointer"
          />
          <Image
            src={icons.arrowRightThin.path}
            width={icons.arrowRightThin.width}
            height={icons.arrowRightThin.height}
            alt={icons.arrowRightThin.description}
            onClick={handleNextImage}
            className="w-[48px] cursor-pointer"
          />
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
