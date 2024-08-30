import { getPageMetadata, getGalleriesInfo } from "../lib/actions";
import { GalleryType } from "../lib/definitions";
import { Metadata } from "next";
import Gallery from "../ui/components/gallery";
import Head from "next/head";
import CardTilt from "../ui/components/card-tilt";

export async function generateMetadata(): Promise<Metadata> {
  const photoPage = await getPageMetadata(19);

  return {
    title: `Autodidack | ${photoPage[0].name.replace("-", " ")}`,
    description: photoPage[0].description,
    keywords: photoPage[0].keywords,
  };
}

export default async function Page() {
  const galleries = await getGalleriesInfo();

  return (
    <>
      <Head>
        <title>Autodidack | Photo Galleries</title>
        <meta property="og:title" name="title" content="Autodidack | Photo Galleries" />
        <meta
          property="og:description"
          name="description"
          content="Photo galleries for Autodidack / Mark Satin."
        />
        <meta property="og:author" name="author" content="Mark Satin" />
      </Head>

      <section className="w-full h-full overflow-x-hidden overflow-y-scroll p-2 grid items-center justify-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {galleries.sort((a: GalleryType, b: GalleryType) => a.name.localeCompare(b.name)).map((g: GalleryType) => {
          return <CardTilt key={g.id}><Gallery gallery={g} /></CardTilt>;
        })}
      </section>
    </>
  );
}
