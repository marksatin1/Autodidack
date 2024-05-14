import Carousel from "../../../ui/components/carousel";
import { getGalleryMetadata, getImagesInRandomOrder } from "../../../lib/actions";
import { Metadata } from "next";
import Head from "next/head";

export async function generateMetadata({
  params,
}: {
  params: { id: number; name: string };
}): Promise<Metadata> {
  const { id: galleryID, name: galleryName } = params;
  const gallery = await getGalleryMetadata(Number(galleryID));

  return (
    gallery && {
      title: `Autodidack | ${galleryName.replace("-", " ")}`,
      description: gallery[0].description,
      keywords: gallery[0].keywords,
    }
  );
}

export default async function Page({ params }: { params: { id: number; name: string } }) {
  const photos = await getImagesInRandomOrder(params.id);

  return (
    <>
      <Head>
        <title>Autodidack | {params.name}</title>
        <meta property="og:title" name="title" content={`Autodidack | ${params.name}`} />
        <meta
          property="og:description"
          name="description"
          content={`${params.name} photo gallery on Autodidack.`}
        />
        <meta property="og:author" name="author" content="Mark Satin" />
      </Head>

      <section className="w-full h-full px-4 oveflow-y-scroll">
        {photos && <Carousel slides={photos} />}
      </section>
    </>
  );
}
