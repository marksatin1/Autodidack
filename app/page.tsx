import BackgroundCarousel from "./ui/bg-carousel";
import { getHomePhotos } from "./lib/actions";

export default async function Home() {
  const homePhotos = await getHomePhotos();

  return (
    <main>
      <div className="h-screen overflow-hidden px-1 py-2">
        {homePhotos && <BackgroundCarousel images={homePhotos} />}
      </div>
    </main>
  );
}
