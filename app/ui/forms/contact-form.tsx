import FormInput from "./form-input";
import FormDropdown from "./form-dropdown";
import FormTextarea from "./form-textarea";
import Button from "./button";
import { icons } from "../../lib/data";
import addVisitorData from "../../lib/actions";

export default function ContactForm({ className }: { className: string }) {
  return (
    <form action={addVisitorData} className="flex flex-col justify-center items-center py-4 gap-4">
      <section className="w-full h-full flex flex-col justify-center gap-3">
        <FormInput id="Name" type="text" className={className} />
        <FormInput id="Email" type="email" className={className} />
        <FormDropdown
          id="Reason"
          options={["-- Reason --", "Web Dev", "Design", "Photography", "Retouching", "Other"]}
          className={className}
        />
        <FormTextarea id="Message" rows={4} cols={4} className={className} />
      </section>
      <Button id="Let's Connect" type="submit" icon={icons.handshake} disabled={false} />
    </form>
  );
}
