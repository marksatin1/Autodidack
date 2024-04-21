export default function FormTextarea({
  name,
  rows,
  cols,
  className,
}: {
  name: string;
  rows: number;
  cols: number;
  className: string;
}) {
  return (
    <textarea
      name={name.toLowerCase()}
      placeholder={name}
      rows={rows}
      cols={cols}
      className={`${className} px-3 py-2 shadow-input rounded text-black`}
    />
  );
}
