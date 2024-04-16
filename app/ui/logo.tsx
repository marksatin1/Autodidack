import Link from "next/link";

export default function Logo() {
  return (
    <h1 className="text-white text-4xl trackLetters logo-effect unblur hover:text-amber-500">
      <Link href="/">Autodidack</Link>
    </h1>
  );
}
