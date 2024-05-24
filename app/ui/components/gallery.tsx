"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  dissolveVariants,
  galleryTitleVariants,
  pageTransitionVariants,
} from "../../lib/motion-variants";
import { GalleryType } from "../../lib/definitions";

export default function Gallery({ key, gallery }: { key: number; gallery: GalleryType }) {
  return (
    <motion.article
      initial="hidden"
      animate="visible"
      transition={{ ease: "easeInOut", duration: 0.75 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
      whileTap={{ scale: 0.75, transition: { duration: 0.75 } }}
      variants={pageTransitionVariants}
      className="snap-always snap-start pt-24 sm:pt-0 lg:px-12"
    >
      <Link href={`photo/${gallery.id}/${gallery.name}`}>
        <motion.div initial="hidden" animate="visible" variants={dissolveVariants}>
          {gallery.image_path && (
            <Image
              src={gallery.image_path}
              width={gallery.image_width}
              height={gallery.image_height}
              alt={gallery.image_description}
              className="w-full h-full md:max-h-[75vh] object-cover"
            />
          )}
        </motion.div>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.75 }}
          variants={galleryTitleVariants}
          className="w-fit h-fit pl-4 sm:pl-8 pt-16 sm:pt-24 md:pt-8 lg:pt-4 xl:pt-0 text-slate-100 font-extrabold text-content-shadow text-4xl sm:text-5xl md:text-[6rem] lg:text-[8rem] xl:text-[10rem] leading-[8rem] text-nowrap overflow-clip"
        >
          {gallery.name.replace("-", "  ")}
        </motion.h2>
      </Link>
    </motion.article>
  );
}
