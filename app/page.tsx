import { getImagesInRandomOrder } from "./lib/actions";
import AutoCarousel from "./ui/auto-carousel";
import Collage from "./ui/collage";
import { collageImages } from "./lib/data";

export default async function Page() {
  const backgroundPhotos = await getImagesInRandomOrder(8);

  return (
    <section className="relative w-full h-full">
      <AutoCarousel images={backgroundPhotos} />
      <div className="appear-in absolute top-0 w-full h-full">
        <Collage images={collageImages} />
      </div>
    </section>
  );
}
