import { getImagesInSequentialOrder, getImagesInRandomOrder } from "./lib/actions";
import { homeBackgroundVariants } from "./lib/context/animate-context";
import AutoCarousel from "./ui/auto-carousel";
import Collage from "./ui/collage";

export default async function Page() {
  const backgroundPhotos = await getImagesInRandomOrder(8);
  const collagePhotos = await getImagesInSequentialOrder(7);

  return (
    <section className="relative w-full h-full">
      <AutoCarousel images={backgroundPhotos} fadeInterval={12000} variants={homeBackgroundVariants}/>
      <div className="appear-in absolute top-0 w-full h-full">
        <Collage images={collagePhotos} />
      </div>
    </section>
  );
}
