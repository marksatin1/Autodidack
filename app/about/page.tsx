import Button from "../ui/forms/button";
import Image from "next/image";
import { icons } from "../lib/data";
import FormInput from "../ui/forms/form-input";
import FormTextarea from "../ui/forms/form-textarea";
import FormDropdown from "../ui/forms/form-dropdown";
import AboutSummary from "../ui/about-summary";

export default function Page() {
  return (
    <section className="w-full h-full grid grid-cols-[1fr_auto_1fr] justify-between items-center px-8">
      <div className="flex flex-col justify-center items-center gap-7">
        <h2 className="text-2xl underline underline-offset-4">Hi, and welcome to my site!</h2>
        <Image
          src="/Profile-Pic.jpg"
          width={1367}
          height={1367}
          alt="Profile Picture of Mark Satin looking directly at the viewer"
          className="rounded-full"
          style={{
            width: 200,
            height: 200,
            boxShadow: "0 4px 4px rgba(0, 0, 0, 0.75)",
          }}
        />
        <h3 className="text-3xl">Mark Satin</h3>
        <div className="flex flex-col justify-center items-center gap-3">
          <h4 className="text-2xl">Full-Stack Web Developer</h4>
          <hr className="w-[200px] border-black" />
          <h4 className="text-2xl">Fine Art Photographer</h4>
        </div>
        <Button name="Download Resume" icon={icons.download} />
      </div>
      <div className="relative">
        <Image
          src="/about-images/2x/about-1.png"
          width={1200}
          height={1788}
          alt="TBA"
          priority
          className="shadow-galleryLg"
          style={{
            width: 500,
            height: "auto",
          }}
        />
        <AboutSummary />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <div className="text-center">
            <h3 className="text-lg">Have a question about my work?</h3>
            <h3 className="text-lg">Want to commission a project?</h3>
          </div>
          <h4 className="text-3xl">Drop me a line!</h4>
        </div>
        <div className="w-1/2 flex flex-col justify-center gap-3">
          <FormInput name="Name" type="text" />
          <FormInput name="Email" type="email" />
          <FormDropdown
            name="Reason"
            options={[
              "-- Reason --",
              "Web Design / Development",
              "Photography / Retouching",
              "Other",
            ]}
          />
          <FormTextarea name="Message" rows={4} cols={4} />
        </div>
        <Button name="Submit" icon={icons.submit} />
      </div>
    </section>
  );
}
