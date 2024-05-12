export default function FormDropdown({
  id,
  options,
  className,
}: {
  id: string;
  options: string[];
  className: string;
}) {
  return (
    <select
      required
      name={id.toLowerCase()}
      defaultValue={options[0]}
      aria-label={id}
      className={`${className} p-1 sm:px-3 sm:py-2 shadow-input rounded text-black`}
    >
      {options.map((value: string, i: number) => (
        <option key={i} disabled={i === 0} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
