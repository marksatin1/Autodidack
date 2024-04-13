"use client";

import Image from "next/image";
import Link from "next/link";
import { getGalleriesPagePhotos } from "../lib/actions";
import { ImageType } from "../lib/definitions";
import { useState, useEffect, useRef, useContext } from "react";
import { usePathname } from "next/navigation";
import { AnimationContext } from "../lib/context/AnimationContext";

const growthDuration = 2000;

export default function Page() {
  const [galleries, setGalleries] = useState<ImageType[]>([]);
  const [hoveredImageId, setHoveredImageId] = useState<number | null>(null);
  const pathname = usePathname();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getGalleriesPagePhotos();
      data && setGalleries(data);
    })();
  }, []);

  return (
    <section ref={sectionRef} className="h-full">
      <div className="grid grid-cols-4 gap-4 justify-items-center h-full p-4 overflow-scroll">
        {galleries.map((g: ImageType) => {
          return (
            <Link
              key={g.id}
              href={`${pathname}/${g.id}/${g.name}`}
              onMouseEnter={() => setHoveredImageId(g.id)}
              onMouseLeave={() => setHoveredImageId(null)}
              className="relative flex justify-center hover:scale-105 duration-700"
            >
              <Image
                src={g.path}
                width={g.width}
                height={g.height}
                alt={g.description}
                priority
                className="shadow-gallerySm"
              />
              {hoveredImageId === g.id && (
                <h2 className="absolute top-0 left-0 w-full h-full flex items-center text-center text-white text-[12rem] leading-[8rem] text-wrap break-all font-extrabold title-shadow hover:shadow-galleryMd overflow-clip">
                  {g.name}
                </h2>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
