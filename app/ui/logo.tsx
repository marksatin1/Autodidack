import { Inconsolata } from "next/font/google";
import Link from "next/link";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Logo() {
  return (
    <Link href="/">
      <h1
        className={`${inconsolata.className} text-white text-3xl lg:text-4xl trackLetters logo-effect unblur hover:text-amber-500`}
      >
        Autodidack
      </h1>
    </Link>
  );
}
