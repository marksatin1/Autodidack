"use client";

import { MouseEventHandler, useState } from "react";
import { Photo } from "../lib/definitions";
import Image from "next/image";
import { slides } from "../lib/data";

export default function Carousel() {
  const [current, setCurrent] = useState<number>(0);

  let prevSlide: MouseEventHandler<HTMLButtonElement> = () =>
    current === 0 ? setCurrent(slides.length - 1) : setCurrent(prev => prev - 1);
  let nextSlide: MouseEventHandler<HTMLButtonElement> = () =>
    current === slides.length - 1 ? setCurrent(0) : setCurrent(prev => prev + 1);

  return (
    <div className="w-[600px] mx-auto my-12 overflow-hidden">
      <div
        className="flex transition ease-out duration-400"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map(p => {
          return (
            <Image key={p.id} src={p.url} width={p.width} height={p.height} alt={p.description} />
          );
        })}
      </div>
      <div>
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
}
