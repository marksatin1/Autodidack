export default function FormInput({
  id,
  type,
  className,
}: {
  id: string;
  type: string;
  className: string;
}) {
  return (
    <input
      required
      type={type}
      name={id.toLowerCase()}
      placeholder={id}
      aria-label={id}
      className={`${className} p-1 sm:px-3 sm:py-2 shadow-input rounded`}
    />
  );
}
