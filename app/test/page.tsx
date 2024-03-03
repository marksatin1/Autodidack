"use client";

import Stack from "../ui/stack";

import { getGalleriesPagePhotos } from "../lib/actions";
import { useState, useEffect } from "react";

export default function Page() {
  const [photos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getGalleriesPagePhotos();
      data && setPhotos(data);
    })();
  }, []);

  return <>{photos && <Stack photos={photos} />}</>;
}
