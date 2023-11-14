import { useState, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement | null>(null);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form?.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log("Not sent!");
    }
    setEmail("");
    setMessage("");
    setName("");
  };
  return (
    <div className="mt-[2rem]" id="contact">
      <h1 className="edu font-bold text-3xl md:text-5xl text-center py-[5rem] md:py-[8rem]">
        CONTACT ME{" "}
      </h1>
      <form ref={form} onSubmit={handleSubmit} className="w-[90%] md:w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-10 mb-5">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            name="user_name"
            required
            placeholder="Name"
            className="text-white text-xl bg-transparent border-b-[2px] border-slate-300 focus:border-[#02cfb4] py-4 px-0 outline-none w-full"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            name="user_email"
            type="email"
            placeholder="Email"
            className="text-white text-xl bg-transparent focus:bg-[#22252c] border-b-[2px] border-slate-300 focus:border-[#02cfb4] py-4 px-0 outline-none w-full"
          />
        </div>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          required
          value={message}
          name="message"
          placeholder="MESSAGE"
          className="text-white text-xl w-full h-[30vh] bg-transparent border-b-[2px] border-slate-300 focus:border-[#02cfb4] py-4 px-0 outline-none"></textarea>
        <div className="flex justify-center">
          <button className="send-btn" type="submit">
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
