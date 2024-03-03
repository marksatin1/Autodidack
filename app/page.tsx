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
    <main className="relative w-screen h-screen p-4">
      <div className="relative z-0 w-full h-full">
        {homePhotos && <BackgroundCarousel images={homePhotos} />}
      </div>

      <div className="grid grid-rows-fixed-ends w-full h-full relative z-10 *:relative *:z-10">
        <div className="bsg">
          <Logo fontSize="1rem" />
        </div>

        <div className="bsr w-full h-full">
          <div className="bsp p-4 w-full h-full">
            <Image
              src="/Autodidack-Collage_stroke.webp"
              // width={2500}
              // height={1671}
              fill
              style={{
                objectFit: "contain",
                maxWidth: "1000px",
              }}
              alt="Collage of people taken from street style photographs"
              className="appear-small"
            />
          </div>
        </div>

        <footer className="bso w-full">
          <NavBar />
        </footer>
      </div>
    </main>
  );
}
