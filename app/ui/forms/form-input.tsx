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
      type={type}
      name={id.toLowerCase()}
      placeholder={id}
      className={`${className} px-3 py-2 shadow-input rounded`}
    />
  );
}
