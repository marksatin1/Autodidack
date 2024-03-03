"use client";

import { Photo } from "../lib/definitions";
import Image from "next/image";
import { useState, useEffect } from "react";
import Draggable from "./draggable";

export default function Stack({ photos }: { photos: Photo[] }) {
  const [photosLoading, setPhotosLoading] = useState<boolean>(true);

  useEffect(() => {
    setPhotosLoading(false);
  }, []);

  return (
    <div hidden={photosLoading}>
      <Draggable />
    </div>
  );
}
