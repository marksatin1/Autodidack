"use client";

import { externalNavLinks, internalNavLinks } from "../lib/data";
import ExternalNavbar from "./external-navbar";
import InternalNavbar from "./internal-navbar";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [audioIconPath, setAudioIconPath] = useState<string>("/icons/2x/128/Quiet.png");

  function updateAudioIcon() {
    audioIconPath === "/icons/2x/128/Quiet.png"
      ? setAudioIconPath("/icons/2x/128/Listening.png")
      : setAudioIconPath("/icons/2x/128/Quiet.png");
  }

  return (
    <footer className="flex flex-col justify-center items-center space-y-3 px-6 py-4">
      <InternalNavbar links={internalNavLinks} />
      <hr className="w-1/4 border-slate-500" />
      <div className="w-full grid grid-cols-3">
        <div className="justify-self-start self-end">
          <ExternalNavbar links={externalNavLinks} />
        </div>
        <div className="flex flex-col justify-center items-center text-slate-500">
          <p>Designed by Mark Satin</p>
          <p>&copy; 2024</p>
        </div>
        <div className="justify-self-end self-end">
          <Image
            src={audioIconPath}
            alt="Black and white icon signalling audio status"
            width={24}
            height={24}
            onClick={updateAudioIcon}
          />
        </div>
      </div>
    </footer>
  );
}
