import ImageReveal from "../ui/image-reveal";
import { getOnePhoto } from "../lib/actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autodidack | ENTER",
  description:
    "The one and only way into Autodidack, the photography and webdev portfolio of Mark Satin.",
  metadataBase: new URL("https://autodidack.com"),
};

export default async function Page() {
  const entrancePhoto = await getOnePhoto(283);

  return (
    <div className="w-full h-full">
      {entrancePhoto && <ImageReveal image={entrancePhoto} eraserSizeFactor={0.3} />}
    </div>
  );
}
