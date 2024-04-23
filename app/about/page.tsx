import { getOnePhoto, getPageMetadata } from "../lib/actions";
import CardTilt from "../ui/card-tilt";
import Image from "next/image";
import ContactForm from "../ui/forms/contact-form";
import AboutSummary from "../ui/about-summary";
import { Metadata } from "next";

// export async function generateMetadata(): Promise<Metadata> {
//   const aboutPage = await getPageMetadata(18);

//   return {
//     title: `Autodidack | ${aboutPage[0].name.toUpperCase().replace("-", " ")}`,
//     description: aboutPage[0].description,
//     keywords: aboutPage[0].keywords,
//     metadataBase: new URL("https://autodidack.com"),
//   };
// }

export default async function Page() {
  const waterfallOriginal = await getOnePhoto(298);
  const waterfallReversed = await getOnePhoto(299);
  const profileBanner = await getOnePhoto(300);

  return (
    <div className="w-full h-full flex justify-center px-16">
      <section className="relative w-full h-full flex justify-center items-center gap-x-24">
        <CardTilt className="relative">
          {waterfallReversed && (
            <Image
              src={waterfallReversed.path}
              width={waterfallReversed.width}
              height={waterfallReversed.height}
              alt={waterfallReversed.description}
              className="w-auto max-h-[675px] hue-rotate-180 rounded-lg"
            />
          )}
          <div className="absolute top-0 w-full h-full p-8 overflow-hidden">
            <div className="overflow-scroll w-full h-full text-2xl text-slate-200 text-content-shadow">
              <AboutSummary />
            </div>
          </div>
        </CardTilt>
        <CardTilt className="relative">
          {waterfallOriginal && (
            <Image
              src={waterfallOriginal.path}
              width={waterfallOriginal.width}
              height={waterfallOriginal.height}
              alt={waterfallOriginal.description}
              className="w-auto max-h-[675px] grayscale-[75%] opacity-75 rounded-lg"
            />
          )}

          <div className="absolute top-0 w-full h-full p-8 overflow-hidden grid grid-rows-[auto_1fr] occupation-shadow">
            <article className="flex flex-col">
              <div className="flex justify-between">
                <h3 className="text-3xl font-extrabold">Mark Satin</h3>
                <a href="/Software-Engineer-Resume_Mark-Satin.pdf" download="Mark-Satin-SWE-Resume">
                  <small className="underline cursor-pointer">Download Resume</small>
                </a>
              </div>
              <div className="border-4 border-[#800080] w-full h-[130px] overflow-clip">
                {profileBanner && (
                  <Image
                    src={profileBanner.path}
                    width={profileBanner.width}
                    height={profileBanner.height}
                    alt={profileBanner.description}
                    className="relative top-[-5rem]"
                  />
                )}
              </div>
              <div className="text-3xl text-center p-2 flex flex-col justify-center scale-y-[1.5]">
                <h4>
                  Web Developer <span className="text-4xl">&#x2022;</span> Photographer
                </h4>
              </div>
            </article>
            <ContactForm className="bg-slate-200" />
          </div>
        </CardTilt>
      </section>
    </div>
  );
}
