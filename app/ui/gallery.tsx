"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { dissolveVariants, galleryTitleVariants, pageTransitionVariants } from "../lib/animate-context";
import { Gallery as ImageGallery } from "../lib/definitions";

export default function Gallery({ gallery }: { gallery: ImageGallery }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ ease: "easeInOut", duration: 0.75 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
      whileTap={{ scale: 0.75, transition: { duration: 0.75 } }}
      variants={pageTransitionVariants}
      className="snap-always snap-center px-4 lg:px-12"
    >
      <Link href={`photo/${gallery.id}/${gallery.name}`}>
        <motion.div initial="hidden" animate="visible" variants={dissolveVariants}>
          <Image
            src={gallery.image_path}
            width={gallery.image_width}
            height={gallery.image_height}
            alt={gallery.image_description}
            priority
            className="w-full max-h-[75vh] object-fill"
          />
        </motion.div>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.75 }}
          variants={galleryTitleVariants}
          className="w-fit h-fit px-2 pt-8 pb-24 text-slate-100 font-extrabold text-content-shadow text-[6rem] lg:text-[8rem] xl:text-[10rem] leading-[8rem] text-nowrap overflow-clip"
        >
          {gallery.name.replace("-", "  ")}
        </motion.h2>
      </Link>
    </motion.div>
  );
}
