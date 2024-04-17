import { externalNavLinks, internalNavLinks } from "../../lib/data";
import AudioPlayer from "./audio-player";
import ExternalNavbar from "./external-navbar";
import InternalNavbar from "./internal-navbar";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center space-y-3 px-6 py-4">
      <InternalNavbar links={internalNavLinks} />
      <hr className="w-1/4 border-slate-500" />
      <div className="w-full grid grid-cols-3">
        <div className="justify-self-start self-end">
          <ExternalNavbar links={externalNavLinks} />
        </div>
        <div className="flex flex-col justify-center items-center text-slate-500">
          <small>Designed by Mark Satin</small>
          <small>&copy; 2024</small>
        </div>
        <div className="justify-self-end self-end">
          <AudioPlayer />
        </div>
      </div>
    </footer>
  );
}
