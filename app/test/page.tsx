"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { AnimationContext } from "../lib/context/AnimationContext";

export default function Test() {
  const [isPhotoEnlarged, setIsPhotoEnlarged] = useState<boolean>(false);
  const { setImageGrowth } = useContext(AnimationContext);

  function handlePhotoClick() {
    setImageGrowth(true);
    setIsPhotoEnlarged(prev => !prev);
  }

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <div className="bg-slate-600">Header</div>
      <div>
        <Image
          src={"/Profile-Pic_Square.jpeg"}
          alt="Profile Pic"
          width={1367}
          height={1367}
          onClick={handlePhotoClick}
          className={`w-full h-auto m-auto ${
            isPhotoEnlarged ? "scale-[12] duration-[2000ms] inset-0 z-50 overflow-visible" : ""
          }`}
          style={{ width: 400, height: 400 }}
        />
      </div>
      <div className="bg-slate-600">Footer</div>
    </div>
  );
}
