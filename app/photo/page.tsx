import { getPageMetadata, getGalleryMetadata } from "../lib/actions";
import { GalleryType } from "../lib/definitions";
import { Metadata } from "next";
import Gallery from "../ui/components/gallery";
import Head from "next/head";

export async function generateMetadata(): Promise<Metadata> {
  const photoPage = await getPageMetadata(19);

  return {
    title: `Autodidack | ${photoPage[0].name.replace("-", " ")}`,
    description: photoPage[0].description,
    keywords: photoPage[0].keywords,
  };
}

export default async function Page() {
  const galleries = await getGalleryMetadata();

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
      <section className="grid gap-y-6 w-full h-full overflow-x-hidden overflow-y-auto overscroll-y-contain snap-mandatory snap-y">
        {galleries.map((g: GalleryType) => {
          return <Gallery key={g.id} gallery={g} />;
        })}
      </section>
    </>
  );
}
