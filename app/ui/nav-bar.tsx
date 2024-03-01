"use client";

import Link from "next/link";
import { navLinks } from "../lib/data";
import {
  faMusic,
  faDrumSteelpan,
  faMicrophone,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Permanent_Marker } from "next/font/google";
import { useState } from "react";
import Image from "next/image";

const perm = Permanent_Marker({ weight: "400", subsets: ["latin"] });

export default function NavBar() {
  const [icon, setIcon] = useState(faMicrophone);

  function changeIcon() {
    setIcon(icon === faMicrophone ? faMicrophoneSlash : faMicrophone);
  }

  return (
    <div className="p-4 grid grid-cols-4">
      <div className="col-start-2 col-span-2 gap-8 flex justify-center items-center lg:gap-24">
        {navLinks.map(l => (
          <Link key={l.name} href={l.href}>
            <span
              className={`${perm.className} text-2xl lg:text-6xl stroke-base font-extrabold unblur fade-in-out hover:text-amber-500`}
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
