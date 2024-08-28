import Image from "next/image";
import { FormButton } from "../../lib/definitions";

export default function Button({ id, type, ariaLabel, icon, disabled }: FormButton) {
  return (
    <button
      id={id}
      type={type}
      aria-label={ariaLabel}
      className={`${disabled ? "hover:cursor-help" : "cursor-pointer"
        } hover:shadow-[0_3px_2px] hover:shadow-black/50 px-3 py-1 sm:px-5 sm:py-2 flex justify-around items-center gap-2 rounded-full border-black border hover:bg-slate-200 duration-500`}
    >
      <p className="font-black text-xs sm:text-lg lg:text-xl hover:text-accent-dark duration-500">
        {id}
      </p>
      <Image
        src={icon.url}
        width={icon.width}
        height={icon.height}
        alt={icon.description}
        className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px]"
      />
    </button>
  );
}
