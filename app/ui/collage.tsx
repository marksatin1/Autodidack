"use client";

import { CollageImage } from "../lib/definitions";
import { RefObject, createRef, useEffect, useState } from "react";

export default function Collage({ images }: { images: CollageImage[] }) {
  const [audioRefs, setAudioRefs] = useState<RefObject<HTMLAudioElement>[]>([]);

  useEffect(() => {
    setAudioRefs(prev =>
      Array(images.length)
        .fill(null)
        .map((_, i) => prev[i] || createRef())
    );
  }, [images.length]);

  function playImageAudio(imageIndex: number) {
    const audio = audioRefs[imageIndex].current;
    if (audio) {
      audio.src = images[imageIndex].audio_path;
      audio.load();
      audio.play();
    }
  }

  function pauseImageAudio(imageIndex: number) {
    const audio = audioRefs[imageIndex].current;
    audio && audio.pause();
  }

  return (
    <article className="w-full h-full">
      <svg
        viewBox="0 0 2700 1900"
        xmlns="http://www.w3.org/2000/svg"
        className="object-contain w-1/2 h-full m-auto"
      >
        {images.map((i: CollageImage, idx: number) => {
          return (
            <image
              key={i.id}
              href={i.path}
              width={i.width}
              height={i.height}
              x={i.x_coord + "px"}
              y={i.y_coord + "px"}
              onMouseEnter={() => playImageAudio(idx)}
              onMouseLeave={() => pauseImageAudio(idx)}
            />
          );
        })}
      </svg>
      {images.map((_, idx: number) => (
        <audio key={idx} ref={audioRefs[idx]} loop preload="auto">
          <source src="/_E.mp3" type="audio/mpeg" />
        </audio>
      ))}
    </article>
  );
}
