import { CollageImage } from "../lib/definitions";

export default function Collage({ images }: { images: CollageImage[] }) {
  return (
    <svg
      viewBox="0 0 2700 1900"
      xmlns="http://www.w3.org/2000/svg"
      className="object-contain w-1/2 h-full m-auto"
    >
      {images.map((i: CollageImage) => {
        return (
          <image
            key={i.id}
            href={i.path}
            x={i.xCoord}
            y={i.yCoord}
            width={i.width}
            height={i.height}
          />
        );
      })}
    </svg>
  );
}
