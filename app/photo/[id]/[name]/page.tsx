import Carousel from "../../../ui/components/carousel";
import { getGalleryMetadata, getImagesInRandomOrder } from "../../../lib/actions";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: number; name: string };
}): Promise<Metadata> {
  const { id: galleryID, name: galleryName } = params;
  const gallery = await getGalleryMetadata(Number(galleryID));

  return {
    title: `Autodidack | ${galleryName.replace("-", " ")}`,
    description: gallery[0].description,
    keywords: gallery[0].keywords,
  };
}

export default async function Page({ params }: { params: { id: number } }) {
  const photos = await getImagesInRandomOrder(params.id);

  return (
    <div className="w-full h-full oveflow-y-scroll">{photos && <Carousel slides={photos} />}</div>
  );
}
