"use client";

import { ImageType } from "../lib/definitions";
import { useRef, useEffect, useState } from "react";
import { MouseEvent } from "react";
import { checkTransparency } from "../lib/utils";
import Image from "next/image";

export default function ImageReveal({
  image,
  eraserSizeFactor,
}: {
  image: ImageType;
  eraserSizeFactor: number;
}) {
  const topRef = useRef<HTMLCanvasElement>(null);
  const [canvasContext, setCanvasContext] = useState<CanvasRenderingContext2D | null>(null);
  const [animation, setAnimation] = useState<string>("");
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const [hideCanvas, setHideCanvas] = useState<boolean>(false);

  useEffect(() => {
    const top = topRef.current as HTMLCanvasElement;

    /* willReadFrequently creates canvas powered by CPU rather than GPU ->
       better performance when constantly reading values w/ checkTransparencyFunction */
    const topCtx = top.getContext("2d", { willReadFrequently: true });
    if (!topCtx) return;

    topCtx.fillStyle = "white";
    topCtx.fillRect(0, 0, image.width, image.height);
    setCanvasContext(topCtx);
    setImageLoading(false);
  }, [image.width, image.height, image.path]);

  const revealImage = (e: MouseEvent) => {
    let { offsetX: x, offsetY: y } = e.nativeEvent;
    const eraserSize = image.width * eraserSizeFactor;

    canvasContext?.clearRect(x - eraserSize / 2, y - eraserSize / 2, eraserSize, eraserSize);
    if (checkTransparency(canvasContext, image.width, image.height)) {
      setAnimation("transitionTest");
      setHideCanvas(true);
    }
  };

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <Image
        src={image.path}
        width={image.width}
        height={image.height}
        alt={image.description}
        className={`relative z-0 w-auto max-h-[1150px]`}
        hidden={imageLoading}
        priority
      />
      <canvas
        width={image.width}
        height={image.height}
        ref={topRef}
        className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          "
        onMouseMove={revealImage}
        hidden={hideCanvas}
      >
        A white rectangle
      </canvas>
    </div>
  );
}
