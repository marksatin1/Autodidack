import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="logo trackLetters text-white text-3xl lg:text-4xl hover:text-amber-500">Autodidack</h1>
    </Link>
  );
}
