import { Metadata } from "next";
import { getImagesInSequentialOrder, getImagesInRandomOrder, getPageMetadata } from "./lib/actions";
import { dissolveVariants } from "./lib/animate-context";
import AutoCarousel from "./ui/components/auto-carousel";
import Collage from "./ui/components/collage";

// export async function generateMetadata(): Promise<Metadata> {
//   const homePage = await getPageMetadata(17);

//   return {
//     title: `Autodidack | ${homePage[0].replace("-", " ")}`,
//     description: homePage[0].description,
//     keywords: homePage[0].keywords,
//   };
// }

export default async function Page() {
  const backgroundPhotos = await getImagesInRandomOrder(8);
  const collagePhotos = await getImagesInSequentialOrder(7);

  return (
    <section className="relative w-full h-full">
      <AutoCarousel images={backgroundPhotos} fadeInterval={15000} variants={dissolveVariants} />
      <div className="appear-in absolute top-0 w-full h-full flex justify-center items-center">
        <Collage images={collagePhotos} />
      </div>
    </section>
  );
}
