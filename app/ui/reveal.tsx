"use client";

import { Photo } from "../lib/definitions";
import { useRef, useEffect, useState } from "react";
import { MouseEvent } from "react";
import { checkTransparency } from "../lib/utils";
import Image from "next/image";

export default function ImageReveal({ image }: { image: Photo }) {
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
  }, [image.width, image.height, image.url]);

  const revealImage = (e: MouseEvent) => {
    let { offsetX: x, offsetY: y } = e.nativeEvent;
    const eraserSize = image.width * 0.8;

    canvasContext?.clearRect(x - eraserSize / 2, y - eraserSize / 2, eraserSize, eraserSize);
    if (checkTransparency(canvasContext, image.width, image.height)) {
      setAnimation("transitionTest");
      setHideCanvas(true);
    }
  };

  return (
    <div className={`flex items-center justify-center h-screen ${animation}`}>
      <div className="relative w-screen h-full">
        <Image
          src={image.url}
          width={image.width}
          height={image.height}
          alt={image.description}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          hidden={imageLoading}
        />
        <canvas
          width={image.width}
          height={image.height}
          ref={topRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          "
          onMouseMove={revealImage}
          hidden={hideCanvas}
        >
          A white rectangle
        </canvas>
      </div>
    </div>
  );
}
