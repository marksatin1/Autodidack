export default function Header({ title }: { title: string }) {
  return (
    <header className="w-full py-4">
      <h1 className="text-5xl text-center">{title}</h1>
    </header>
  );
}
