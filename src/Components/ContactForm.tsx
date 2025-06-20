import { useState, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { BsCheckCircle, BsExclamationCircle } from "react-icons/bs";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      if (form.current) {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      className="mt-20"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}>
      <h1 className="text-4xl md:text-5xl font-bold text-center py-16 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">
        CONTACT ME
      </h1>

      <form ref={form} onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <motion.div
            className="w-full"
            variants={inputVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full bg-gray-800 text-white text-lg px-6 py-4 rounded-lg border-2 border-gray-700 focus:border-teal-400 outline-none transition-all duration-300 hover:border-gray-600"
            />
          </motion.div>

          <motion.div
            className="w-full"
            variants={inputVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              name="user_email"
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-800 text-white text-lg px-6 py-4 rounded-lg border-2 border-gray-700 focus:border-teal-400 outline-none transition-all duration-300 hover:border-gray-600"
            />
          </motion.div>
        </div>

        <motion.div
          variants={inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            required
            value={message}
            name="message"
            placeholder="Your Message"
            className="w-full min-h-[200px] bg-gray-800 text-white text-lg px-6 py-4 rounded-lg border-2 border-gray-700 focus:border-teal-400 outline-none transition-all duration-300 hover:border-gray-600"
          />
        </motion.div>

        <motion.div
          className="flex justify-center mt-10"
          variants={inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}>
          <motion.button
            type="submit"
            disabled={status === "sending"}
            className={`flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
              status === "sending"
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 shadow-lg hover:shadow-xl"
            }`}
            whileHover={status !== "sending" ? { scale: 1.05 } : undefined}
            whileTap={status !== "sending" ? { scale: 0.95 } : undefined}>
            {status === "sending" ? (
              "Sending..."
            ) : status === "success" ? (
              <>
                <BsCheckCircle className="text-xl" /> Sent!
              </>
            ) : status === "error" ? (
              <>
                <BsExclamationCircle className="text-xl" /> Try Again
              </>
            ) : (
              <>
                <FiSend className="text-xl" /> Send Message
              </>
            )}
          </motion.button>
        </motion.div>

        {status === "success" && (
          <motion.div
            className="mt-6 p-4 bg-green-500/10 text-green-400 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}>
            Message sent successfully! I'll get back to you soon.
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            className="mt-6 p-4 bg-red-500/10 text-red-400 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}>
            Failed to send message. Please try again later.
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
