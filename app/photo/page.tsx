"use client";

import Image from "next/image";
import Link from "next/link";
import { getGalleriesPagePhotos } from "../lib/actions";
import { GalleryCover } from "../lib/definitions";
import { useState, useEffect } from "react";

export default function Page() {
  const [galleries, setGalleries] = useState<GalleryCover[]>([]);
  const [hoveredImageId, setHoveredImageId] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getGalleriesPagePhotos();
      data && setGalleries(data);
    })();
  }, []);

  function handleNameDisplay(id: number) {
    setHoveredImageId(id);
  }

  return (
    <section className="h-full">
      <div className="grid grid-cols-4 gap-4 h-full p-4 overflow-scroll">
        {galleries.map((g: GalleryCover, i: number) => {
          return (
            <Link
              key={g.id}
              href={`/galleries/${g.id}/${g.name}`}
              onMouseEnter={() => handleNameDisplay(g.id)}
              onMouseLeave={() => setHoveredImageId(null)}
              className="relative flex justify-center hover:scale-105 duration-700"
            >
              <Image
                src={g.path}
                width={g.width}
                height={g.height}
                alt={g.description}
                priority={i === 0}
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
