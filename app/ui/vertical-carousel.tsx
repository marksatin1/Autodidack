"use client";

import { useEffect, useState } from "react";
import { ImageType } from "../lib/definitions";
import Image from "next/image";

const imagesPerSlide = 4;

export default function VerticalCarousel({
  images,
  slideHeight,
}: {
  images: ImageType[];
  slideHeight: number | undefined;
}) {
  const [slides, setSlides] = useState<ImageType[][]>([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  useEffect(() => {
    const initialSlides = [];
    for (let i = 0; i < images.length; i += imagesPerSlide) {
      const slideImages = images.slice(i, Math.min(i + imagesPerSlide, images.length));
      initialSlides.push(slideImages);
    }
    setSlides([...initialSlides]);
  }, [images]);

  return (
    <main className="bsg h-screen flex flex-col gap-y-3">
      {slides.map((slide: ImageType[], slideIdx: number) => (
        <div key={slideIdx} className="bso h-screen flex justify-center gap-x-6">
          {slide.map((image: ImageType) => (
            <Image
              key={image.id}
              src={image.path}
              width={100}
              height={100}
              alt={image.description}
              className="object-contain"
            />
          ))}
        </div>
      ))}
    </main>
  );
}
