import AutoCarousel from "./ui/auto-carousel";
import { getHomePhotos } from "./lib/actions";
import Collage from "./ui/collage";
import { collageImages } from "./lib/data";

export default async function Home() {
  const homePhotos = await getHomePhotos();

  return (
    <section className="h-full">
      {homePhotos && <AutoCarousel images={homePhotos} />}

      <div className="appear-in h-full flex justify-center items-center">
        <Collage images={collageImages} />
      </div>
    </section>
  );
}
