import { Metadata } from "next";
import { getImagesInSequentialOrder, getImagesInRandomOrder } from "./lib/actions";
import { dissolveVariants } from "./lib/animate-context";
import AutoCarousel from "./ui/auto-carousel";
import Collage from "./ui/collage";

export const metadata: Metadata = {
  title: "Autodidack | Home",
  description: "Welcome to Autodidack, the photography and webdev portfolio of Mark Satin.",
  metadataBase: new URL("https://autodidack.com"),
};

export default async function Page() {
  const backgroundPhotos = await getImagesInRandomOrder(8);
  const collagePhotos = await getImagesInSequentialOrder(7);

  return (
    <section className="relative w-full h-full">
      <AutoCarousel images={backgroundPhotos} fadeInterval={12000} variants={dissolveVariants} />
      <div className="appear-in absolute top-0 w-full h-full flex justify-center items-center">
        <Collage images={collagePhotos} />
      </div>
    </section>
  );
}
