import React, { useState } from "react";
import { TbSend2 } from "react-icons/tb";
import { FaCheck } from "react-icons/fa";
import emailjs from "@emailjs/browser";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const inputBase =
  "w-full bg-transparent border-none outline-none font-[inherit] resize-none";

const Field = ({ label, children, delay = 0 }) => (
  <motion.div
    className="flex flex-col gap-0 border-b border-[#6B6B59]/[0.15]"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
  >
    <label className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-[#9A9A82] pt-5 pb-1.5">
      {label}
    </label>
    {children}
  </motion.div>
);

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  // Load EmailJS credentials from environment (Vite requires VITE_ prefix)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const AUTO_REPLY_TEMPLATE_ID = import.meta.env
    .VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // EmailJS configuration is read from environment variables.
    // Create a local `.env.local` with the following keys (do NOT commit it):
    // VITE_EMAILJS_SERVICE_ID=your_service_id
    // VITE_EMAILJS_TEMPLATE_ID=your_template_id
    // VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=your_auto_reply_template_id
    // VITE_EMAILJS_PUBLIC_KEY=your_public_key
    6;
    if (!SERVICE_ID || !TEMPLATE_ID || !AUTO_REPLY_TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn(
        "EmailJS env vars missing. Please set VITE_EMAILJS_* in .env.local",
      );
      setStatus("error");
      setTimeout(() => setStatus(null), 3000);
      return;
    }

    // Template params for admin notification
    const adminTemplateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
      to_name: "Your Name",
      reply_to: form.email,
    };

    // Template params for auto-reply to user
    const autoReplyParams = {
      to_name: form.name,
      to_email: form.email,
      user_message: form.message,
      user_subject: form.subject,
      reply_to: "muktaradamu677@email.com",
      current_year: new Date().getFullYear(),
    };

    try {
      const [adminResponse, autoReplyResponse] = await Promise.all([
        emailjs.send(SERVICE_ID, TEMPLATE_ID, adminTemplateParams, PUBLIC_KEY),
        emailjs.send(
          SERVICE_ID,
          AUTO_REPLY_TEMPLATE_ID,
          autoReplyParams,
          PUBLIC_KEY,
        ),
      ]);

      if (adminResponse.status === 200 && autoReplyResponse.status === 200) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(null), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(null), 3000);
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus(null), 3000);
    }
  };

  const getButtonText = () => {
    if (status === "sending") return "Sending...";
    if (status === "sent") return "Message Sent";
    if (status === "error") return "Failed to Send";
    return "Send Message";
  };

  const getButtonIcon = () => {
    if (status === "sent") {
      return (
        <motion.span
          className="w-8 h-8 rounded-[9px] bg-white/10 flex items-center justify-center flex-shrink-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <FaCheck size={15} />
        </motion.span>
      );
    }
    if (status === "error") {
      return (
        <motion.span
          className="w-8 h-8 rounded-[9px] bg-white/10 flex items-center justify-center flex-shrink-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <span className="text-red-400 text-xl">!</span>
        </motion.span>
      );
    }
    return (
      <motion.span
        className="w-8 h-8 rounded-[9px] bg-white/10 flex items-center justify-center flex-shrink-0"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <TbSend2
          size={15}
          className={status === "sending" ? "animate-pulse" : ""}
        />
      </motion.span>
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen bg-[#FCFCFD] flex items-center justify-center pt-8 sm:pt-24 pb-20 px-4 sm:px-6 overflow-hidden">
      <motion.div
        className="w-full max-w-[560px] flex flex-col gap-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.div className="flex flex-col gap-3" variants={itemVariants}>
          <motion.h1
            className="
              font-bold text-[#0F0E0E] tracking-[-0.028em] leading-snug
              text-[32px] sm:text-[38px] md:text-[48px]
            "
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Got a project?
            <br />
            Let's make it happen.
          </motion.h1>
          <motion.p
            className="text-[14px] sm:text-[15px] text-[#9A9A82] leading-[1.7]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Fill out the form and I'll get back to you within 24 hours.
          </motion.p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-0 border-t border-[#6B6B59]/[0.15]"
          variants={itemVariants}
        >
          <Field label="Name" delay={0.1}>
            <input
              name="name"
              type="text"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              required
              className={`${inputBase} text-[16px] text-[#0F0E0E] placeholder:text-[#C8C7C1] pb-4`}
            />
          </Field>

          <Field label="Email" delay={0.2}>
            <input
              name="email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              required
              className={`${inputBase} text-[16px] text-[#0F0E0E] placeholder:text-[#C8C7C1] pb-4`}
            />
          </Field>

          <Field label="Subject" delay={0.3}>
            <input
              name="subject"
              type="text"
              placeholder="What's this about?"
              value={form.subject}
              onChange={handleChange}
              required
              className={`${inputBase} text-[16px] text-[#0F0E0E] placeholder:text-[#C8C7C1] pb-4`}
            />
          </Field>

          <Field label="Message" delay={0.4}>
            <textarea
              name="message"
              placeholder="Tell me about your project or idea..."
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className={`${inputBase} text-[16px] text-[#0F0E0E] placeholder:text-[#C8C7C1] pb-5 leading-[1.7]`}
            />
          </Field>

          {/* Submit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.button
              type="submit"
              disabled={status === "sending"}
              className="
                mt-8 w-full flex items-center justify-between
                bg-[#0F0E0E] text-white
                rounded-[14px] px-5 py-4
                text-[14px] font-semibold tracking-[0.01em]
                hover:bg-[#313130]
                transition-all duration-200
                disabled:opacity-50 disabled:cursor-not-allowed
                cursor-pointer border-none font-[inherit]
              "
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.span
                key={getButtonText()}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {getButtonText()}
              </motion.span>
              {getButtonIcon()}
            </motion.button>
          </motion.div>

          {/* Status Message Animation */}
          <AnimatePresence>
            {status === "sent" && (
              <motion.div
                className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg overflow-hidden"
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.p
                  className="text-green-800 text-sm font-medium"
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Thanks for reaching out! I'll get back to you within 24 hours.
                </motion.p>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg overflow-hidden"
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.p
                  className="text-red-800 text-sm font-medium"
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Something went wrong. Please try again or contact me directly.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </motion.div>
    </main>
  );
};

export default Contact;
