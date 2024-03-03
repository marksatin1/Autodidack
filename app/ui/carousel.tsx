"use client";

import { MouseEventHandler, useState } from "react";
import Image from "next/image";
import { Photo } from "../lib/definitions";

export default function Carousel({ slides }: { slides: Photo[] }) {
  const [current, setCurrent] = useState<number>(0);

  let prevSlide: MouseEventHandler<HTMLButtonElement> = () =>
    current === 0 ? setCurrent(slides.length - 1) : setCurrent(prev => prev - 1);
  let nextSlide: MouseEventHandler<HTMLButtonElement> = () =>
    current === slides.length - 1 ? setCurrent(0) : setCurrent(prev => prev + 1);

  return (
    <div className="mx-auto">
      <div
        className="transition ease-out duration-400"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map(p => {
          return (
            <Image key={p.id} src={p.url} layout="fill" objectFit="contain" alt={p.description} />
          );
        })}
      </div>
      <div className="grid grid-cols-2 ">
        <button onClick={prevSlide} className="text-xl">
          Previous
        </button>
        <button onClick={nextSlide} className="text-xl">
          Next
        </button>
      </div>
    </div>
  );
}
