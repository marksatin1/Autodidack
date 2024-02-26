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
    <div className="grid grid-cols-2 gap-8 p-4 h-[75vh] overflow-scroll">
      {galleries.map((g: Gallery) => {
        return (
          <div key={g.id} className="grid justify-center">
            <Link href={`/galleries/${g.id}/${g.name}`}>
              <Image
                src={g.cover_url}
                width={g.cover_width_px}
                height={g.cover_height_px}
                alt={g.description}
                className="shadow-[-3px_5px_10px_black]"
                style={{
                  width: "auto",
                  height: 600,
                }}
              />
            </Link>
            <h2 className="text-2xl text-center font-extrabold my-4">{g.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
