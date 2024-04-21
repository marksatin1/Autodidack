import { getGalleriesData } from "../lib/actions";
import { Gallery as ImageGallery } from "../lib/definitions";
import { Metadata } from "next";
import Gallery from "../ui/gallery";

export const metadata: Metadata = {
  title: "Photo",
  description:
    "The photo galleries of Mark Satin featuring analog film photography in 6x7 and 35mm formats.",
  metadataBase: new URL("https://autodidack.com"),
};

export default async function Page() {
  const galleries = await getGalleriesData();

  return (
    <section className="grid gap-y-6 w-full h-full overflow-x-hidden overflow-y-auto overscroll-y-contain snap-mandatory snap-y">
      {galleries?.map((g: ImageGallery) => {
        return <Gallery key={g.id} gallery={g} />;
      })}
    </section>
  );
}
