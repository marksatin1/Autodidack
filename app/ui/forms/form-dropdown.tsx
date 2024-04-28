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
      name={id.toLowerCase()}
      defaultValue={options[0]}
      className={`${className} px-3 py-2 shadow-input rounded text-black`}
    >
      {options.map((value: string, i: number) => (
        <option key={i} disabled={i === 0} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
