"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { ImageType } from "../../lib/definitions";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Carousel({ slides }: { slides: ImageType[] }) {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number>(0);
  const [touchEndX, setTouchEndX] = useState<number>(0);
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
        return;
    }
  }

  function handleSwipe() {
    touchEndX > touchStartX ? handleNextImage() : handlePrevImage();
  }

  return (
    <motion.article
      tabIndex={0} // makes <section> focusable
      ref={sectionRef}
      onKeyDown={handleKeyDown}
      onTouchStart={(e: any) => {
        setTouchStartX(e.touches[0].clientX);
      }}
      onTouchMove={(e: any) => setTouchEndX(e.touches[0].clientX)}
      onTouchEnd={handleSwipe}
      layout
      className="w-full h-full outline-none"
    >
      <section className="relative w-full h-full sm:h-full">
        {slides.map((p: ImageType, i: number) => (
          <Image
            key={p.id}
            src={p.url}
            width={800}
            height={800}
            alt={p.description}
            className={`absolute w-full h-full object-contain ${i === currentIdx ? "opacity-100" : "opacity-0"
              } duration-[2s]`}
          />
        ))}
      </section>
    </motion.article>
  );
}
