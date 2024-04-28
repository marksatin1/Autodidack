import { getOnePhoto } from "../lib/actions";
import CardTilt from "../ui/card-tilt";
import Image from "next/image";
import ContactForm from "../ui/forms/contact-form";

export default async function Page() {
  const waterfallOriginal = await getOnePhoto(298);
  const waterfallReversed = await getOnePhoto(299);
  const profileBanner = await getOnePhoto(300);

  return (
    <div className="w-full h-full flex justify-center px-16">
      <section className="w-full h-full flex justify-center items-center gap-x-24">
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
            <div className="overflow-y-scroll w-full h-full text-2xl text-slate-200 text-content-shadow">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi pariatur cumque,
                harum voluptatum delectus nihil, ex animi laudantium error doloremque magni modi
                vitae perspiciatis. Hic facilis earum molestias maxime veritatis!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi pariatur cumque,
                harum voluptatum delectus nihil, ex animi laudantium error doloremque magni modi
                vitae perspiciatis. Hic facilis earum molestias maxime veritatis!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi pariatur cumque,
                harum voluptatum delectus nihil, ex animi laudantium error doloremque magni modi
                vitae perspiciatis. Hic facilis earum molestias maxime veritatis!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi pariatur cumque,
                harum voluptatum delectus nihil, ex animi laudantium error doloremque magni modi
                vitae perspiciatis. Hic facilis earum molestias maxime veritatis!
              </p>
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

          <div className="absolute top-0 w-full h-full p-8 overflow-hidden grid grid-rows-[auto_1fr]">
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
              <div className="text-4xl text-center scale-y-85 flex flex-col justify-center">
                <h4>
                  Web Developer <span className="text-5xl">&#x2022;</span> Designer
                </h4>
                <h4>Fine Art Photographer</h4>
              </div>
            </article>
            <ContactForm className="bg-slate-200" />
          </div>
        </CardTilt>
      </section>
    </div>
  );
}
