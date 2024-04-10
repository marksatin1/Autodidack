import { externalNavLinks, internalNavLinks } from "../lib/data";
import ExternalNavbar from "./external-navbar";
import InternalNavbar from "./internal-navbar";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center space-y-3 px-8 py-4">
      <InternalNavbar links={internalNavLinks} />
      <hr className="w-1/4 border-slate-500 " />
      <div className="w-full grid grid-cols-3">
        <div className="justify-self-start">
          <ExternalNavbar links={externalNavLinks} />
        </div>
        <div className="flex flex-col justify-center items-center space-y-0.5 text-slate-500">
          <small>Designed by Mark Satin</small>
          <small>&copy; 2024</small>
        </div>
        <div className="justify-self-end">
          <Image
            src="/icons/2x/128/Listening.png"
            alt="Black and white icon of a person listening to noise signaling sound is on"
            width={32}
            height={32}
          />
        </div>
      </div>
    </footer>
  );
}
