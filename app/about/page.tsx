import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-2 p-6 text-center border-2 border-orange-500">
        <Image src="/Profile-Pic_Square.jpeg" width={250} height={250} alt="" className="mx-auto" />
        <p className="text-3xl font-extrabold">Mark Satin</p>
        <p>Photographer | Full-Stack Web Developer</p>
        <form className="border-2 border-black min-h-[300px] mt-6">Contact Form</form>
      </div>
      <div className="col-span-4 p-6 border-2 border-green-500">
        <div>
          <h2 className="text-3xl font-extrabold">About Me</h2>
          <p className="min-h-[200px]">Description about me</p>
          <h2 className="text-3xl font-extrabold">About The Photography</h2>
          <p className="min-h-[200px]">Description about the photography</p>
          <h2 className="text-3xl font-extrabold">About The Site</h2>
          <p className="min-h-[200px]">Description about the web site</p>
        </div>
      </div>
    </div>
  );
}
