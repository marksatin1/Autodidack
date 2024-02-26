import Carousel from "../../../ui/carousel";
import { getGalleryPhotos } from "@/app/lib/actions";

export default async function Page({ params }: { params: { id: number } }) {
  const photos = await getGalleryPhotos(params.id);

  return <div>{photos && <Carousel slides={photos} />}</div>;
}
