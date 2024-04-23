import ImageReveal from "../ui/image-reveal";
import { getOnePhoto, getPageMetadata } from "../lib/actions";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const entrancePage = await getPageMetadata(16);

  return {
    title: `Autodidack | ${entrancePage[0].name.replace("-", " ")}`,
    description: entrancePage[0].description,
    keywords: entrancePage[0].keywords,
    metadataBase: new URL("https://autodidack.com"),
  };
}

export default async function Page() {
  const entrancePhoto = await getOnePhoto(283);

  return (
    <div className="w-full h-full">
      <ImageReveal image={entrancePhoto!} eraserSizeFactor={0.2} />
    </div>
  );
}
