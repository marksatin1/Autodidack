import LowerDiv from "../ui/lower-div";

export default async function Page() {

  return (
    <div className="bsr w-full h-full overflow-hidden">
      <div className="bso w-full h-full">UPPER DIV</div>
      <LowerDiv />
    </div>
  );
}
