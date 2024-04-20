"use client";

import Image from "next/image";
import Link from "next/link";
import { getGalleriesData } from "../lib/actions";
import { ImageType, Gallery } from "../lib/definitions";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import PhotoPageAnimation from "./photo-page-animation";
import { motion } from "framer-motion";
import { galleryTitleVariants } from "../lib/context/animate-context";

export default function Page() {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const pathname = usePathname();

  // must encapsulate async functionality because this is a Client Component
  useEffect(() => {
    (async () => {
      const data = await getGalleriesData();
      data && setGalleries(data);
    })();
  }, []);

  return (
    <section className="grid gap-y-6 h-full overflow-y-auto overscroll-y-contain snap-mandatory snap-y">
      {galleries.map((g: Gallery) => {
        return (
          <PhotoPageAnimation key={g.id} className="snap-always snap-center px-12">
            <Link href={`${pathname}/${g.id}/${g.name}`}>
              <Image
                src={g.image_path}
                width={g.image_width}
                height={g.image_height}
                alt={g.image_description}
                priority
                className="w-full max-h-[75vh]"
              />
              <motion.h2
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.75 }}
                variants={galleryTitleVariants}
                className="w-fit h-full p-4 text-white font-extrabold text-content-shadow text-[12rem] leading-[8rem] text-wrap break-all overflow-clip"
              >
                {g.name.replace("-", "  ")}
              </motion.h2>
            </Link>
          </PhotoPageAnimation>
        );
      })}
    </section>
  );
}
