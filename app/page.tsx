import { getImagesInRandomOrder } from "./lib/actions";
import AutoCarousel from "./ui/auto-carousel";
import Collage from "./ui/collage";

export default async function Page() {
  const backgroundPhotos = await getImagesInRandomOrder(8);
  const collagePhotos = await getImagesInRandomOrder(7);

  return (
    <section className="relative w-full h-full">
      <AutoCarousel images={backgroundPhotos} />
      <div className="appear-in absolute top-0 w-full h-full">
        <Collage images={collagePhotos} />
      </div>
    </section>
  );
}
