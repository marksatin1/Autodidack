import { getOnePhoto, getPageMetadata } from "../lib/actions";
import CardTilt from "../ui/components/card-tilt";
import { Metadata } from "next";
import AboutCard from "../ui/components/about-card";
import ContactCard from "../ui/components/contact-card";

export async function generateMetadata(): Promise<Metadata> {
  const infoPage = await getPageMetadata(18);

  return {
    title: `Autodidack | ${infoPage[0].name.replace("-", " ")}`,
    description: infoPage[0].description,
    keywords: infoPage[0].keywords,
  };
}

export default async function Page() {
  const waterfallReversed = await getOnePhoto(299);
  const waterfallOriginal = await getOnePhoto(298);
  const profileBanner = await getOnePhoto(300);

  return (
    <section className="w-full h-full px-4 sm:px-8 ld:px-16 flex justify-center items-center gap-x-4 sm:gap-x-12 md:gap-x-24">
      <CardTilt>{waterfallReversed && <AboutCard bgImage={waterfallReversed} />}</CardTilt>
      <CardTilt>
        {waterfallOriginal && profileBanner && (
          <ContactCard bgImage={waterfallOriginal} bannerImage={profileBanner} />
        )}
      </CardTilt>
    </section>
  );
}
