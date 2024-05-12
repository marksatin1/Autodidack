import { Metadata } from "next";
import { getImagesInSequentialOrder, getImagesInRandomOrder, getPageMetadata } from "./lib/actions";
import { dissolveVariants } from "./lib/animate-context";
import AutoCarousel from "./ui/components/auto-carousel";
import Collage from "./ui/components/collage";
import Head from "next/head";

export async function generateMetadata(): Promise<Metadata> {
  const homePage = await getPageMetadata(17);

  return {
    title: `Autodidack | ${homePage[0].name.replace("-", " ")}`,
    description: homePage[0].description,
    keywords: homePage[0].keywords,
  };
}

export default async function Page() {
  const backgroundPhotos = await getImagesInRandomOrder(8);
  const collagePhotos = await getImagesInSequentialOrder(7);

  return (
    <>
      <Head>
        <title>Autodidack | Home</title>
        <meta property="og:title" name="title" content="Autodidack | Home" />
        <meta
          property="og:description"
          name="description"
          content="The web development and photography portfolio of Mark Satin."
        />
        <meta property="og:author" name="author" content="Mark Satin" />
      </Head>
      <section className="relative w-full h-full">
        <AutoCarousel images={backgroundPhotos} fadeInterval={15000} variants={dissolveVariants} />
        <div className="appear-in absolute top-0 w-full h-full flex justify-center items-center">
          <Collage images={collagePhotos} />
        </div>
      </section>
    </>
  );
}
