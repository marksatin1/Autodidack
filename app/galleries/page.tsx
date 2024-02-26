"use client";

import Image from "next/image";
import Link from "next/link";
import { getGalleriesPagePhotos } from "../lib/actions";
import { Gallery } from "../lib/definitions";
import { useState, useEffect } from "react";

export default function Page() {
  const [galleries, setGalleries] = useState<Gallery[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getGalleriesPagePhotos();
      data && setGalleries(data);
    })();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-8 h-[75vh] overflow-scroll *:border-2 *:border-black">
      {galleries.map((g: Gallery) => {
        return (
          <div key={g.id} className="grid justify-center">
            <Link href={`/galleries/${g.name}`}>
              <Image
                src={g.cover_url}
                width={g.cover_width_px}
                height={g.cover_height_px}
                alt={g.description}
              />
            </Link>
            <h2 className="text-center font-extrabold">{g.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
