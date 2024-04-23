import FormInput from "./form-input";
import FormDropdown from "./form-dropdown";
import FormTextarea from "./form-textarea";
import Button from "./button";
import { icons } from "../../lib/data";

export default function ContactForm({ className }: { className: string }) {
  return (
    <article className="flex flex-col justify-center items-center py-4 gap-4">
      <div className="w-full h-full flex flex-col justify-center gap-3">
        <FormInput name="Name" type="text" className={className} />
        <FormInput name="Email" type="email" className={className} />
        <FormDropdown
          name="Reason"
          options={["-- Reason --", "Web Dev", "Design", "Photography", "Retouching", "Other"]}
          className={className}
        />
        <FormTextarea name="Message" rows={4} cols={4} className={className} />
      </div>
      <Button name="Let's Connect" icon={icons.handshake} disabled />
    </article>
  );
}
