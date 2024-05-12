"use client";

import AboutSummary from "../about-summary";
import Image from "next/image";
import { ImageType } from "../../lib/definitions";
import { useState } from "react";
import { motion } from "framer-motion";
import { dissolveVariants } from "../../lib/animate-context";

export default function AboutCard({ bgImage }: { bgImage: ImageType }) {
  const [showOnHover, setShowOnHover] = useState<boolean>(false);

  return (
    <section
      onMouseEnter={() => setShowOnHover(true)}
      onMouseLeave={() => {
        setShowOnHover(false);
      }}
      className="relative"
    >
      <>
        <Image
          src={bgImage.path}
          width={bgImage.width}
          height={bgImage.height}
          alt={bgImage.description}
          className="w-full md:w-auto md:max-h-[600px] hue-rotate-180 rounded-lg"
        />
        {!showOnHover && (
          <motion.h3
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeInOut", duration: 0.5 }}
            variants={dissolveVariants}
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-bolder text-white text-2xl tracking-widest title-shadow md:hidden cursor-pointer"
          >
            About
          </motion.h3>
        )}
        {showOnHover && (
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeInOut", duration: 1 }}
            variants={dissolveVariants}
            className="absolute top-0 w-full h-full p-6 sm:p-8 overflow-hidden"
          >
            <div className="overflow-y-scroll w-full h-full">
              <AboutSummary />
            </div>
          </motion.div>
        )}
      </>
    </section>
  );
}
