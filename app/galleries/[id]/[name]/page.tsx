import Stack from "@/app/ui/stack";
import { getGalleryPhotos } from "@/app/lib/actions";

export default async function Page({ params }: { params: { id: number } }) {
  const photos = await getGalleryPhotos(params.id);

  return <div>{photos && <Stack photos={photos} />}</div>;
}
