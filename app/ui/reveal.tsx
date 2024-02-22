"use client";

import { Photo } from "../lib/definitions";
import { useRef, useEffect, useState } from "react";
import { MouseEvent } from "react";
import { checkTransparency } from "../lib/utils";

export default function ImageReveal({ image }: { image: Photo }) {
  const bottomRef = useRef<HTMLCanvasElement>(null);
  const topRef = useRef<HTMLCanvasElement>(null);
  const [canvasContext, setCanvasContext] = useState<CanvasRenderingContext2D | null>(null);
  const [hidden, setHidden] = useState<boolean>(false);
  const [animation, setAnimation] = useState<string>("");

  useEffect(() => {
    const bottom = bottomRef.current as HTMLCanvasElement;
    const top = topRef.current as HTMLCanvasElement;

    /* willReadFrequently creates canvas powered by CPU rather than GPU ->
       better performance when constantly reading values w/ checkTransparencyFunction */
    const bottomCtx = bottom.getContext("2d");
    const topCtx = top.getContext("2d", { willReadFrequently: true });
    if (!bottomCtx || !topCtx) return;

    const newImg = new Image(image.width, image.height);
    newImg.src = image.url;
    newImg.onload = () => {
      bottomCtx.drawImage(newImg, 0, 0);
    };

    topCtx.fillStyle = "white";
    topCtx.fillRect(0, 0, image.width, image.height);
    setCanvasContext(topCtx);
  }, [image.width, image.height, image.url]);

  const revealImage = (e: MouseEvent) => {
    let { offsetX: x, offsetY: y } = e.nativeEvent;
    const eraserSize = image.width * 0.9;

    canvasContext?.clearRect(x - eraserSize / 2, y - eraserSize / 2, eraserSize, eraserSize);
    if (checkTransparency(canvasContext, image.width, image.height)) {
      setAnimation("transition");
      setHidden(true);
    }
  };

  return (
    <div className="relative flex justify-center h-screen align-middle">
      <canvas
        width={image.width}
        height={image.height}
        ref={bottomRef}
        className={`absolute ${animation}`}
      >
        {image.description}
      </canvas>
      <canvas
        width={image.width}
        height={image.height}
        ref={topRef}
        className="absolute"
        onMouseMove={revealImage}
        hidden={hidden}
      >
        A white rectangle
      </canvas>
    </div>
  );
}
