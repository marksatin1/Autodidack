import AutoCarousel from "../ui/auto-carousel";
import { getHomePhotos } from "../lib/actions";
import LowerDiv from "../ui/lower-div";

export default async function Page() {
  const homePhotos = await getHomePhotos();

  return (
    <div className="bsr w-full h-full overflow-hidden">
      <div className="bso w-full h-full">UPPER DIV</div>
      <LowerDiv />
    </div>
  );
}
