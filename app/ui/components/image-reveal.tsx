"use client";

import { ImageType } from "../../lib/definitions";
import { useRef, useEffect, useState } from "react";
import { MouseEvent } from "react";
import { isTransparent } from "../../lib/utils";
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
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const [hideCanvas, setHideCanvas] = useState<boolean>(false);

  useEffect(() => {
    const top = topRef.current as HTMLCanvasElement;

    /* willReadFrequently creates canvas powered by CPU rather than GPU ->
       better performance when constantly reading values w/ isTransparentFunction */
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
    if (isTransparent(canvasContext, image.width, image.height)) {
      setHideCanvas(true);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="relative w-full h-full">
        <img
          src={image.path}
          width={image.width}
          height={image.height}
          alt={image.description}
          hidden={imageLoading}
          // priority
          className="bsg w-auto h-full relative z-0"
        />
        <canvas
          width={image.width}
          height={image.height}
          ref={topRef}
          className={`${hideCanvas && "hidden"} bsb w-auto h-full absolute top-0 z-20`}
          onMouseMove={revealImage}
          // hidden
        >
          A white rectangle
        </canvas>
      </div>
    </div>
  );
}
