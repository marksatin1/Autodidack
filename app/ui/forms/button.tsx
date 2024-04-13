import Image from "next/image";
import { ImageType } from "../../lib/definitions";

export default function Button({ name, icon }: { name: string; icon: ImageType }) {
  return (
    <div className="px-5 py-2 flex justify-around items-center gap-2 rounded-full border-black border shadow-lg cursor-pointer hover:bg-slate-400">
      <p>{name}</p>
      <Image
        src={icon.path}
        width={icon.width}
        height={icon.height}
        alt={icon.description}
        style={{
          width: 32,
          height: 32,
        }}
      />
    </div>
  );
}
