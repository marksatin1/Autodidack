"use client";

import Image from "next/image";
import { galleries } from "../lib/data";
import Link from "next/link";

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-8 p-8 ">
      {galleries.map(g => {
        return (
          <div key={g.id}>
            <Link href={g.path}>
              <Image
                src={g.photo.url}
                width={g.photo.width}
                height={g.photo.height}
                alt={g.photo.description}
              />
            </Link>
            <h2 className="text-center font-extrabold">{g.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
