"use client";

import Image from "next/image";
import Link from "next/link";
import { getGalleryCoverPhotos } from "../lib/actions";
import { ImageType } from "../lib/definitions";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import PhotoPageAnimation from "./photo-page-animation";

export default function Page() {
  const [galleries, setGalleries] = useState<ImageType[]>([]);
  const [hoveredImageId, setHoveredImageId] = useState<number | null>(null);
  const pathname = usePathname();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // must encapsulate async functionality because this is a Client Component
  useEffect(() => {
    (async () => {
      const data = await getGalleryCoverPhotos();
      data && setGalleries(data);
    })();
  }, []);

  return (
    <section ref={sectionRef} className="h-full">
      <div className="grid grid-cols-3 gap-x-8 gap-y-16 justify-center items-center h-full p-4 overflow-scroll">
        {galleries.map((g: ImageType) => {
          return (
            <PhotoPageAnimation key={g.id}>
              <Link
                href={`${pathname}/${g.id}/${g.name}`}
                onMouseEnter={() => setHoveredImageId(g.id)}
                onMouseLeave={() => setHoveredImageId(null)}
                className="bsg relative flex justify-center items-center"
              >
                <Image
                  src={g.path}
                  width={g.width}
                  height={g.height}
                  alt={g.description}
                  priority
                  className="w-3/4 shadow-gallerySm"
                />
                {/* {hoveredImageId === g.id && (
                  <h2 className="absolute top-0 left-0 w-full h-full flex items-center text-center text-white text-[12rem] leading-[8rem] text-wrap break-all font-extrabold title-shadow hover:shadow-galleryMd overflow-clip">
                    {g.name}
                  </h2>
                )} */}
              </Link>
            </PhotoPageAnimation>
          );
        })}
      </div>
    </section>
  );
}
