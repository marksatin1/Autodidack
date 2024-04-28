export default function FormTextarea({
  id,
  rows,
  cols,
  className,
}: {
  id: string;
  rows: number;
  cols: number;
  className: string;
}) {
  return (
    <textarea
      name={id.toLowerCase()}
      placeholder={id}
      rows={rows}
      cols={cols}
      className={`${className} px-3 py-2 shadow-input rounded text-black`}
    />
  );
}
