import { Inconsolata } from "next/font/google";
import Link from "next/link";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Logo() {
  return (
    <h1
      className={`${inconsolata.className} text-white text-4xl trackLetters logo-effect unblur hover:text-amber-500`}
    >
      <Link href="/">Autodidack</Link>
    </h1>
  );
}
