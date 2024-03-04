import { submitContactForm } from "../lib/actions";

export default function ContactForm() {
  return (
    <form
      action={submitContactForm}
      className="border-2 border-amber-500 rounded-lg mt-6 p-6 text-lg text-center"
    >
      <h3 className="text-3xl font-bold text-green-700 m-4">Get In Touch!</h3>
      <p>
        Have a question about the site? <br /> Interested in working together? <br /> Just want to
        connect? <br />
        <br /> <span className="font-bold">I&apos;d love to hear from you!</span> <br />
        <br />
      </p>
      <div className="flex flex-col items-center">
        <label htmlFor="name" />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="border-2 border-green-700 rounded-xl p-2 mb-4 shadow-xl"
        />
        <label htmlFor="email" />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="border-2 border-green-700 rounded-xl p-2 mb-4 shadow-xl"
        />
        <textarea
          name="message"
          id="message"
          placeholder="Your Message"
          cols={30}
          rows={10}
          className="border-2 border-green-700 rounded-2xl p-2 mb-4 shadow-xl"
        />
        <button type="submit" className="border-2 shadow-xl border-amber-500 rounded-lg p-2">
          Send!
        </button>
      </div>
    </form>
  );
}
