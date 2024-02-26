import { Inconsolata } from "next/font/google";
import Link from "next/link";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function Logo({ fontSize }: { fontSize: string }) {
  return (
    <Link href="/">
      <p
        className={`${inconsolata.className} text-white logo-effect unblur hover:text-amber-500`}
        style={{ fontSize }}
      >
        Autodidack
      </p>
    </Link>
  );
}
