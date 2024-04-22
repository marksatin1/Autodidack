import { getPageMetadata, getGalleryMetadata } from "../lib/actions";
import { GalleryType } from "../lib/definitions";
import { Metadata } from "next";
import Gallery from "../ui/gallery";

export async function generateMetadata(): Promise<Metadata> {
  const photoPage = await getPageMetadata(19);

  return {
    title: `Autodidack | ${photoPage[0].name.toUpperCase().replace("-", " ")}`,
    description: photoPage[0].description,
    keywords: photoPage[0].keywords,
    metadataBase: new URL("https://autodidack.com"),
  };
}

export default async function Page() {
  const galleries = await getGalleryMetadata();

  return (
    <section className="grid gap-y-6 w-full h-full overflow-x-hidden overflow-y-auto overscroll-y-contain snap-mandatory snap-y">
      {galleries.map((g: GalleryType) => {
        return <Gallery key={g.id} gallery={g} />;
      })}
    </section>
  );
}
