"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { ImageType } from "../lib/definitions";
import Image from "next/image";

export default function Carousel({ slides }: { slides: ImageType[] }) {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const mainRef = useRef<HTMLDivElement>(null);

  // Focus to <main> when component mounts
  useEffect(() => {
    mainRef.current?.focus();
  }, []);

  function handleKeyDown(e: KeyboardEvent) {
    switch (e.key) {
      case "ArrowLeft":
        setCurrentIdx(prev => (prev - 1 + slides.length) % slides.length);
        break;
      case "ArrowRight":
        setCurrentIdx(prev => (prev + 1) % slides.length);
        break;
      default:
        console.log("Some other key was pressed.");
    }
  }

  return (
    <main
      tabIndex={0} // makes <main> focusable
      onKeyDown={handleKeyDown}
      ref={mainRef}
      className="bsg relative p-4 outline-none w-full h-full flex items-center justify-center"
    >
      {slides.map((p: ImageType, i: number) => (
        <div
          key={p.id}
          className="absolute w-1/2 h-auto flex items-center justify-center overflow-hidden"
        >
          <Image
            src={p.path}
            width={p.width}
            height={p.height}
            alt={p.description}
            className={`bso object-contain ${
              i === currentIdx ? "opacity-100" : "opacity-0"
            } duration-[3s]`}
            priority={i === 0}
          />
        </div>
      ))}
    </main>
  );
}
