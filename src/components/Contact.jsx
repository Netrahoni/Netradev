import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Check if EmailJS environment variables are configured
const EMAILJS_CONFIGURED =
  import.meta.env.VITE_APP_EMAILJS_SERVICE_ID &&
  import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID &&
  import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const sendViaMailto = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:netramanipkr@gmail.com?subject=${subject}&body=${body}`;
    setLoading(false);
    setStatus({
      type: "success",
      message: "✅ Your email client has opened! Please hit Send in your mail app.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "⚠️ Please fill in all fields before sending." });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    if (!EMAILJS_CONFIGURED) {
      // EmailJS not set up — use mailto fallback immediately
      sendViaMailto();
      return;
    }

    // EmailJS is configured — use it
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Netra Mani Pokhrel",
          from_email: form.email,
          to_email: "netramanipkr@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: "success",
            message: "✅ Message sent! I'll get back to you as soon as possible.",
          });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS error:", error);
          // EmailJS failed — fall back to mailto
          sendViaMailto();
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What would you like to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Status message */}
          {status.message && (
            <p
              className={`text-sm font-medium px-4 py-3 rounded-lg ${
                status.type === "success"
                  ? "bg-green-900 text-green-300"
                  : "bg-red-900 text-red-300"
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type='submit'
            disabled={loading}
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#915EFF] transition-colors duration-300 disabled:opacity-60'
          >
            {loading ? "Opening..." : "Send Message"}
          </button>

          {!EMAILJS_CONFIGURED && (
            <p className='text-secondary text-xs mt-[-16px]'>
              💡 Tip: Clicking Send will open your default email app (Gmail, Outlook, etc.)
            </p>
          )}
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
