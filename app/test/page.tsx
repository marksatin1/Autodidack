import { collageImages } from "../lib/data";
import Collage from "../ui/collage";

export default function Test() {
  return (
    <>
      <Collage images={collageImages} />
      {/* <div className="grid justify-center items-end lg:items-center lg:mt-8 appear-out">
          <Logo />
        </div> */}
    </>
  );
}
