import BackgroundCarousel from "./ui/bg-carousel";
import { getHomePhotos } from "./lib/actions";
import Image from "next/image";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMusic,
  faDrumSteelpan,
  faMicrophone,
  faMicrophoneSlash,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./ui/logo";
import NavBar from "./ui/nav-bar";

library.add(faMusic, faDrumSteelpan, faMicrophone, faMicrophoneSlash, faAngleUp, faAngleDown);

export default async function Home() {
  const homePhotos = await getHomePhotos();

  return (
    <main className="relative w-screen h-screen">
      <div className="absolute top-0 left-0 z-0 w-full h-full p-2">
        {homePhotos && <BackgroundCarousel images={homePhotos} />}
      </div>

      <div className="grid grid-rows-fixed-ends w-full h-full absolute top-0 left-0 z-10 overflow-hidden lg:grid-rows-layout-3">
        <div className="grid justify-center items-end lg:items-center appear-out">
          <Logo />
        </div>

        <div className="w-full h-full p-4">
          <div className="w-full h-full flex justify-center items-center appear-in">
            <Image
              src="/Autodidack-Collage_stroke.webp"
              width={2500}
              height={1671}
              alt="Collage of people taken from street style photographs"
              className="w-full h-full object-contain sm:max-w-[90%] md:max-w-[80%] lg:max-w-[80%] xl:max-w-[65%]"
            />
          </div>
        </div>

        <footer className="w-full appear-out">
          <NavBar />
        </footer>
      </div>
    </main>
  );
}
