import { Inconsolata } from "next/font/google";
import Link from "next/link";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Logo({ fontSize }: { fontSize: string }) {
  return (
    <Link href="/">
      <h1
        className={`${inconsolata.className} text-white trackLetters logo-effect unblur hover:text-amber-500`}
        style={{ fontSize, width: "full" }}
      >
        Autodidack
      </h1>
    </Link>
  );
}
