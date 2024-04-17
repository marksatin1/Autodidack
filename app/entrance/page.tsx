import ImageReveal from "../ui/reveal";
import { getOnePhoto } from "../lib/actions";

export default async function Page() {
  const entrancePhoto = await getOnePhoto(57);

  return <div>{entrancePhoto && <ImageReveal image={entrancePhoto} />}</div>;
}
