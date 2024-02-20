"use client";

import { useEffect, useState } from "react";
import { bgPhotos } from "../lib/data";
import Image from "next/image";

export default function BackgroundCarousel() {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % bgPhotos.length);
    }, 20000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full overflow-hidden">
      {bgPhotos.map((p, i) => {
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
