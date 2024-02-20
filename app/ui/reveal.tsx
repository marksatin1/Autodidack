"use client";

import { Photo } from "../lib/definitions";
import { useRef, useEffect, useState } from "react";
import { MouseEvent } from "react";
import { checkTransparency } from "../lib/utils";

const hiddenImg: Photo = {
  id: 1,
  url: "/Waterfall-Md.jpg",
  width: 525,
  height: 640,
  description: "A waterfall on Mt. Algonquin in the Adirondacks",
};

export default function ImageReveal() {
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

    const image = new Image(hiddenImg.width, hiddenImg.height);
    image.src = hiddenImg.url;
    image.onload = () => {
      bottomCtx.drawImage(image, 0, 0);
    };

    topCtx.fillStyle = "white";
    topCtx.fillRect(0, 0, hiddenImg.width, hiddenImg.height);
    setCanvasContext(topCtx);
  }, []);

  const revealImage = (e: MouseEvent) => {
    let { offsetX: x, offsetY: y } = e.nativeEvent;
    const eraserSize = hiddenImg.width * 0.9;

    canvasContext?.clearRect(x - eraserSize / 2, y - eraserSize / 2, eraserSize, eraserSize);
    if (checkTransparency(canvasContext, hiddenImg.width, hiddenImg.height)) {
      setAnimation("transition");
      setHidden(true);
    }
  };

  return (
    <div className="relative flex justify-center h-screen align-middle">
      <canvas
        width={hiddenImg.width}
        height={hiddenImg.height}
        ref={bottomRef}
        className={`absolute ${animation}`}
      >
        {hiddenImg.description}
      </canvas>
      <canvas
        width={hiddenImg.width}
        height={hiddenImg.height}
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
