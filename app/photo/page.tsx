"use client";

import Image from "next/image";
import Link from "next/link";
import { getGalleryCoverPhotos } from "../lib/actions";
import { ImageType } from "../lib/definitions";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import PhotoPageAnimation from "./photo-page-animation";
import { motion } from "framer-motion";
import { galleryTitleVariants } from "../lib/context/animate-context";

export default function Page() {
  const [galleries, setGalleries] = useState<ImageType[]>([]);
  const pathname = usePathname();

  // must encapsulate async functionality because this is a Client Component
  useEffect(() => {
    (async () => {
      const data = await getGalleryCoverPhotos();
      data && setGalleries(data);
    })();
  }, []);

  return (
    <section className="grid gap-y-6 h-full overflow-y-auto overscroll-y-contain snap-mandatory snap-y">
      {galleries.map((g: ImageType) => {
        return (
          <PhotoPageAnimation key={g.id} className="snap-always snap-center px-12">
            <Link href={`${pathname}/${g.id}/${g.name}`}>
              <Image
                src={g.path}
                width={g.width}
                height={g.height}
                alt={g.description}
                priority
                className="w-full max-h-[75vh]"
              />
              <motion.h2
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.75 }}
                variants={galleryTitleVariants}
                className="w-fit h-fit pt-8 text-white font-extrabold text-content-shadow text-[12rem] leading-[8rem] text-wrap break-all overflow-clip"
              >
                {g.name}
              </motion.h2>
            </Link>
          </PhotoPageAnimation>
        );
      })}
    </section>
  );
}
