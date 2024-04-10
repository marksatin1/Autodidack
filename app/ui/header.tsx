export default function Header({ title }: { title: string }) {
  return (
    <header className="w-full py-4">
      <h1 className="drop-shadow-md">{title}</h1>
    </header>
  );
}
