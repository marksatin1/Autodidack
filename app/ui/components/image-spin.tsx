"use client";

import { ImageType } from "../../lib/definitions";
import Image from "next/image";
import { motion } from "framer-motion";
import { tiltSpinVariants } from "../../lib/motion-variants";

export default function ImageSpin({ image }: { image: ImageType }) {
  function handleRedirect() {
    window.location.href = "/";
  }

  return (
    <motion.div
      initial="initial"
      animate="end"
      transition={{
        ease: "easeIn",
        duration: 10,
        delay: 0.5,
      }}
      variants={tiltSpinVariants}
      onAnimationComplete={handleRedirect}
      className="h-full flex justify-center items-center"
    >
      <Image
        src={image.url}
        width={image.width}
        height={image.height}
        alt={image.description}
        priority
        className="w-auto max-h-[600px]"
      />
    </motion.div>
  );
}
