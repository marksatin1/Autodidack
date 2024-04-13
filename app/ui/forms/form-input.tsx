export default function FormInput({ name, type }: { name: string; type: string }) {
  return (
    <input
      type={type}
      name={name.toLowerCase()}
      placeholder={name}
      className="px-3 py-2 shadow-input rounded text-black"
    />
  );
}
