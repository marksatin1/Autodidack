import { getGalleryPhotos } from "@/app/lib/actions";
import Carousel from "@/app/ui/carousel";

export default async function Page({ params }: { params: { id: number } }) {
  const photos = await getGalleryPhotos(params.id);

  return <div className="w-full h-full">{photos && <Carousel slides={photos} />}</div>;
}
