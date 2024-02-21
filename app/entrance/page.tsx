import ImageReveal from "../ui/reveal";
import { getEntrancePhoto } from "../lib/actions";

export default async function Page() {
  const entrancePhoto = await getEntrancePhoto();

  return <>{entrancePhoto && <ImageReveal image={entrancePhoto} />}</>;
}
