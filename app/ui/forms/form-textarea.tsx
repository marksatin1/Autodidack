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
      aria-label={id}
      className={`${className} p-1 sm:px-3 sm:py-2 shadow-input rounded text-black`}
    />
  );
}
