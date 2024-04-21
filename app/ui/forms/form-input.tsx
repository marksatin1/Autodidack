export default function FormInput({ name, type, className }: { name: string; type: string, className: string }) {
  return (
    <input
      type={type}
      name={name.toLowerCase()}
      placeholder={name}
      className={`${className} px-3 py-2 shadow-input rounded`}
    />
  );
}
