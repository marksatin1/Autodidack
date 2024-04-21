import Carousel from "../../../ui/carousel";
import { getGalleriesData, getImagesInRandomOrder } from "../../../lib/actions";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: number; name: string };
}): Promise<Metadata> {
  const { id: galleryID, name: galleryName } = params;
  const gallery = await getGalleriesData(Number(galleryID));

  return {
    title: `Autodidack | ${galleryName.toUpperCase().replace("-", " ")}`,
    description: gallery.description,
    keywords: gallery.keywords,
    metadataBase: new URL("https://autodidack.com"),
  };
}

export default async function Page({ params }: { params: { id: number } }) {
  const photos = await getImagesInRandomOrder(params.id);

  return <div className="w-full h-full">{photos && <Carousel slides={photos} />}</div>;
}
