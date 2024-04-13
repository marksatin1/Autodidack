export default function FormDropdown({ name, options }: { name: string; options: string[] }) {
  return (
    <select name={name.toLowerCase()} className="px-3 py-2 shadow-input rounded text-black">
      {options.map((value: string, i: number) => (
        <option key={i} selected={i === 0} disabled={i === 0} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
