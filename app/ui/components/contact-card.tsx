"use client";

import Image from "next/image";
import ContactForm from "../forms/contact-form";
import { ImageType } from "../../lib/definitions";
import { motion } from "framer-motion";
import { useState } from "react";
import { dissolveVariants } from "../../lib/motion-variants";

export default function ContactCard({
  bgImage,
  bannerImage,
}: {
  bgImage: ImageType;
  bannerImage: ImageType;
}) {
  const [showOnHover, setShowOnHover] = useState<boolean>(false);

  return (
    <article
      onMouseEnter={() => setShowOnHover(true)}
      onMouseLeave={() => {
        setShowOnHover(false);
      }}
      className="relative overflow-y-scroll"
    >
      <Image
        src={bgImage.url}
        width={800}
        height={600}
        alt={bgImage.description}
        className="w-full md:w-auto md:max-h-[600px] grayscale-[75%] opacity-75 rounded-lg"
      />
      {!showOnHover && (
        <motion.h3
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeInOut", duration: 0.5 }}
          variants={dissolveVariants}
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-bolder text-white text-2xl tracking-widest title-shadow cursor-pointer"
        >
          Contact
        </motion.h3>
      )}
      {showOnHover && (
        <motion.article
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeInOut", duration: 1 }}
          variants={dissolveVariants}
          className="absolute top-0 w-full h-full p-4 sm:p-8 md:grid grid-rows-[auto_1fr] overflow-y-scroll"
        >
          <div className="overflow-y-scroll">
            <section className="flex flex-col gap-2">
              <article className="flex flex-col justify-center items-center">
                <h3 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold occupation-shadow sm:mb-3">
                  Mark Satin
                </h3>
              </article>
              <article className="border-4 border-[#800080] overflow-clip">
                <Image
                  src={bannerImage.url}
                  width={800}
                  height={600}
                  alt={bannerImage.description}
                  className="relative h-[250px] sm:h-[500px]"
                />
              </article>
              <article className="occupation-shadow text-lg w-full sm:text-2xl md:text-4xl md:my-1 text-center tracking-wide sm:tracking-widest xl:tracking-wide">
                <h4>
                  Photographer
                </h4>
              </article>
            </section>
            <ContactForm className="bg-slate-200" />
          </div>
        </motion.article>
      )}
    </article>
  );
}
