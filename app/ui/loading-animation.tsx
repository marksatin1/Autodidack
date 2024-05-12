"use client";

import { motion } from "framer-motion";
import AutoCarousel from "./components/auto-carousel";
import { loadingVariants } from "../lib/animate-context";
import { useEffect, useState } from "react";
import { getImagesInSequentialOrder } from "../lib/actions";
import { ImageType } from "../lib/definitions";

export default function LoadingAnimation() {
  const [loadingImages, setLoadingImages] = useState<ImageType[] | null>(null);

  useEffect(() => {
    (async () => {
      const flags = await getImagesInSequentialOrder(11);
      setLoadingImages(flags);
    })();
  }, []);

  return (
    <motion.div animate="grow" transition={{ duration: 20 }} variants={loadingVariants}>
      {loadingImages && <AutoCarousel images={loadingImages} fadeInterval={150} variants="" />}
    </motion.div>
  );
}
