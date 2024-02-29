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
    <main className="relative h-screen overflow-hidden p-2">
      {homePhotos && <BackgroundCarousel images={homePhotos} />}
      <div className="absolute top-10 bottom-0 left-0 right-0 mx-auto w-3/4 h-5/6">
        <Image
          src="/Autodidack-Collage_stroke.webp"
          width={3583}
          height={2395}
          alt="Collage of people from street style photography"
          className="object-contain w-full h-full appear"
        />
      </div>
    </main>
  );
}
