export default function FormTextarea({
  name,
  rows,
  cols,
}: {
  name: string;
  rows: number;
  cols: number;
}) {
  return (
    <textarea
      name={name.toLowerCase()}
      placeholder={name}
      rows={rows}
      cols={cols}
      className="px-3 py-2 shadow-input rounded text-black"
    />
  );
}
