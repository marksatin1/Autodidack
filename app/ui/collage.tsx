import { CollageImage } from "../lib/definitions";

export default function Collage({ images }: { images: CollageImage[] }) {
  return (
    <section className="w-[60%]">
      <svg className="w-full h-full" viewBox="0 0 2700 1900" xmlns="http://www.w3.org/2000/svg">
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
    </section>
  );
}
