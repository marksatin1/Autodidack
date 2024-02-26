import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Logo({ fontSize }: { fontSize: string }) {
  return (
    <span className={`${inconsolata.className} text-[${fontSize}] text-white logo-effect unblur hover:text-amber-500`}>
      Autodidack
    </span>
  );
}
