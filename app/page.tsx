import BackgroundCarousel from "./ui/bg-carousel";
import { getHomePhotos } from "./lib/actions";
import Image from "next/image";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMusic,
  faDrumSteelpan,
  faMicrophone,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";

library.add(faMusic, faDrumSteelpan, faMicrophone, faMicrophoneSlash);

export default async function Home() {
  const homePhotos = await getHomePhotos();

  return (
    <main className="grid-stack-outer w-full h-full">
      <div className="grid-stack-inner z-0 w-full h-full">
        {homePhotos && <BackgroundCarousel images={homePhotos} />}
      </div>
      <div className="relative w-full h-full grid-stack-inner z-10 p-6 appear">
        <div className="relative w-full h-full">
          <Image
            src="/Autodidack-Collage_stroke.webp"
            layout="fill"
            objectFit="contain"
            alt="Collage of people taken from street style photographs"
          />
        </div>
      </div>
    </main>
  );
}
