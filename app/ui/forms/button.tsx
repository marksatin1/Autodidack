import Image from "next/image";
import { ImageType } from "../../lib/definitions";

export default function Button({ name, icon }: { name: string; icon: ImageType }) {
  return (
    <div className="px-5 py-2 flex justify-around items-center font-black text-2xl gap-3 rounded-full border-black border cursor-pointer hover:bg-slate-400 duration-500">
      <p>{name}</p>
      <Image
        src={icon.path}
        width={icon.width}
        height={icon.height}
        alt={icon.description}
        className="w-[32px] h-[32px]"
      />
    </div>
  );
}
