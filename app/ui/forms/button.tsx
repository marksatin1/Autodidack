import Image from "next/image";
import { FormButton, ImageType } from "../../lib/definitions";

export default function Button({ id, type, icon, disabled }: FormButton) {
  return (
    <button
      id={id}
      type={type}
      className={`${
        disabled ? "hover:cursor-help" : "cursor-pointer"
      } button-shadow px-5 py-2 flex justify-around items-center font-black text-2xl gap-3 rounded-full border-black border hover:bg-slate-400 duration-500`}
    >
      <p>{id}</p>
      <Image
        src={icon.path}
        width={icon.width}
        height={icon.height}
        alt={icon.description}
        className="w-[32px] h-[32px]"
      />
    </button>
  );
}
