import Image from "next/image";
import { FormButton } from "../../lib/definitions";

export default function Button({ id, type, ariaLabel, icon, disabled }: FormButton) {
  return (
    <button
      id={id}
      type={type}
      aria-label={ariaLabel}
      className={`${
        disabled ? "hover:cursor-help" : "cursor-pointer"
      } button-shadow px-3 py-2 sm:px-5 sm:py-2 flex justify-around items-center font-black text-xs sm:text-2xl gap-3 rounded-full border-black border hover:bg-slate-400 hover:text-accent-dark duration-500`}
    >
      <p>{id}</p>
      <Image
        src={icon.path}
        width={icon.width}
        height={icon.height}
        alt={icon.description}
        className="w-[16px] h-[16px] sm:w-[32px] sm:h-[32px]"
      />
    </button>
  );
}
