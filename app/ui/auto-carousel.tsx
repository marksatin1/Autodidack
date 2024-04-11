"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ImageType } from "../lib/definitions";

export default function AutoCarousel({ images }: { images: ImageType[] }) {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 20000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative">
      {images.map((p, i) => {
        return (
          <Image
            key={p.id}
            src={p.path}
            width={p.width}
            height={p.height}
            alt={p.description}
            className={`absolute object-cover object-center ${
              i === current ? "bg-fade" : "opacity-0"
            }`}
            priority={i === 0}
          />
        );
      })}
    </div>
  );
}
