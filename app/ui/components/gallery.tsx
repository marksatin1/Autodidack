import Link from "next/link";
import Image from "next/image";
import { GalleryType } from "../../lib/definitions";

export default function Gallery({ gallery }: { gallery: GalleryType }) {
  return (
    <section className="h-[200px] md:h-[400px]">
      <Link href={`photo/${gallery.id}/${gallery.name}`} className="relative overflow-hidden h-full flex flex-col justify-end items-center">
        {gallery.image_url && (
          <Image
            src={gallery.image_url}
            alt={gallery.image_description}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
          />
        )}
        <h2 className="absolute py-4 text-slate-100 font-extrabold text-center text-content-shadow text-4xl">
          {gallery.name.replaceAll("-", "  ")}
        </h2>
      </Link>
    </section >
  );
}
