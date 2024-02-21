"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Photo } from "../lib/definitions";

export default function BackgroundCarousel({ images }: { images: Photo[] }) {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 20000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full overflow-hidden">
      {images.map((p, i) => {
        return (
          <Image
            key={p.id}
            src={p.url}
            width={p.width}
            height={p.height}
            alt={p.description}
            className={`absolute object-fill object-center w-[2000px] h-auto ${
              i === current ? "bg-fade" : "opacity-0"
            }`}
            style={{
              transform: "translateY(-30%)",
            }}
          />
        );
      })}
    </div>
  );
}
