"use client";

import Link from "next/link";
import { internalNavLinks } from "../lib/data";
import {
  faMusic,
  faDrumSteelpan,
  faMicrophone,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Permanent_Marker } from "next/font/google";
import { useState } from "react";

const marker = Permanent_Marker({ weight: "400", subsets: ["latin"] });

export default function NavBar() {
  const [icon, setIcon] = useState(faMicrophone);

  function changeIcon() {
    setIcon(icon === faMicrophone ? faMicrophoneSlash : faMicrophone);
  }

  return (
    <div className="grid grid-cols-4">
      <div className="col-start-2 col-span-2 gap-8 h-full flex justify-center items-center lg:gap-24">
        {internalNavLinks.map(l => (
          <Link key={l.name} href={l.href}>
            <span
              className={`${marker.className} text-3xl md:text-4xl xl:text-6xl lg:font-extrabold unblur fade-in-out hover:text-amber-500 stroke-base`}
            >
              {l.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="col-span-1 flex justify-center items-center">
        {/* <FontAwesomeIcon icon={icon} className="unblur" onClick={changeIcon} /> */}
      </div>
    </div>
  );
}
