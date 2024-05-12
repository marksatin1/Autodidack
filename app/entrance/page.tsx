import ImageReveal from "../ui/components/image-reveal";
import { getOnePhoto, getPageMetadata } from "../lib/actions";
import { Metadata } from "next";
import LoadingAnimation from "../ui/loading-animation";
import Head from "next/head";

export async function generateMetadata(): Promise<Metadata> {
  const entrancePage = await getPageMetadata(16);

  return {
    title: `Autodidack | ${entrancePage[0].name.replace("-", " ")}`,
    description: entrancePage[0].description,
    keywords: entrancePage[0].keywords,
  };
}

export default async function Page() {
  const entrancePhoto = await getOnePhoto(283);

  return (
    <>
      <Head>
        <title>Autodidack | Entrance</title>
        <meta property="og:title" name="title" content="Autodidack | Entrance" />
        <meta
          property="og:description"
          name="description"
          content="Entrance page for Autodidack."
        />
        <meta property="og:author" name="author" content="Mark Satin" />
      </Head>
      <section className="w-full h-full">
        {/* <ImageReveal image={entrancePhoto!} eraserSizeFactor={0.2} /> */}
        <LoadingAnimation />
      </section>
    </>
  );
}
