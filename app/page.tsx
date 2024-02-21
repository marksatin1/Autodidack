import BackgroundCarousel from "./ui/bg-carousel";
import { getHomePhotos } from "./lib/actions";

export default async function Home() {
  const homePhotos = await getHomePhotos();

  return (
    <main>
      <div className="h-screen overflow-hidden px-12 py-8">
        {homePhotos && <BackgroundCarousel images={homePhotos} />}
      </div>
    </main>
  );
}
