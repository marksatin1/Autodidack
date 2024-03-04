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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 w-full h-full overflow-scroll">
      {galleries.map((g: Gallery, i: number) => {
        return (
          <div key={g.id} className="grid w-full h-full">
            <Link href={`/galleries/${g.id}/${g.name}`}>
              <Image
                src={g.cover_url}
                width={g.cover_width_px}
                height={g.cover_height_px}
                alt={g.description}
                className="max-w-[90%] mx-auto shadow-[-3px_5px_10px_black]"
                priority={i === 0}
              />
            </Link>
            <h2 className="text-2xl text-center font-extrabold mt-4 mb-12">{g.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
