import ImageReveal from "../ui/image-reveal";
import { getOnePhoto } from "../lib/actions";

export default async function Page() {
  const entrancePhoto = await getOnePhoto(283);

  return <div className="w-full h-full">{entrancePhoto && <ImageReveal image={entrancePhoto} eraserSizeFactor={0.5} />}</div>;
}
