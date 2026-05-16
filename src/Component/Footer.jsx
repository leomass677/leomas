import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import workdetails from "../data/workdetails";
import IconMapper from "../Component/IconMapper";
import { MdArrowOutward, MdFileDownload } from "react-icons/md";

const Footer = () => {
  const footer = workdetails.footer;
  const [time, setTime] = useState("");

  /* Live clock — ticks every second */
  useEffect(() => {
    const tick = () => setTime(footer.getTime12Hour());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [footer]);

  return (
    <footer className="w-full mt-24 lg:mt-32 bg-[#0F0E0E] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 pt-14 sm:pt-16 lg:pt-20 pb-8 flex flex-col gap-12 sm:gap-14 lg:gap-16">
        {/* ━━━ TOP ━━━ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 sm:gap-10"
        >
          {/* Headline */}
          <h2
            className="
              font-bold tracking-[-0.025em] text-white text-wrap-balance
              text-[28px] leading-[1.15]
              sm:text-[36px] sm:leading-[1.12]
              md:text-[42px] md:leading-[1.1]
              lg:text-[48px] lg:leading-[1.08]
              max-w-[720px]
            "
          >
            {footer.header.replace("🧱", "").trim()}{" "}
            <span className="text-[#9A9A82]">🧱</span>
          </h2>

          {/* Two columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
            {/* Left — description + CV download */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <p className="text-[13px] sm:text-[14px] leading-[1.72] text-white/50 max-w-[380px]">
                {footer.description}
              </p>

              <motion.a
                href={footer.downloads.cv.url}
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                  flex border-white border w-fit justify-center px-12 pr-14 hover:bg-white hover:text-dark py-6 rounded-full items-center gap-2 text-[16px] font-medium text-white/60 hover:scale-105 transition-all uppercase text-shadow-2xs -tracking-tighter text-shadow-gray-50 ease-in-out  duration-200
                  no-underline
                "
              >
                <MdFileDownload size={24} />
                {footer.downloads.cv.title}
              </motion.a>
            </motion.div>

            {/* Right — email + socials */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-5 sm:items-end"
            >
              {/* Email with availability dot */}
              <motion.a
                href={`mailto:${footer.email}`}
                whileHover={{ x: -2 }}
                className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-medium text-white/60 hover:text-white transition-colors duration-200 no-underline"
              >
                <span
                  className="w-[7px] h-[7px] rounded-full bg-[#089F3E] flex-shrink-0"
                  style={{ animation: "pulse-dot 2.5s ease-in-out infinite" }}
                />
                {footer.email}
              </motion.a>

              {/* Social links */}
              <div className="flex items-center gap-2">
                {footer.social.map((s, idx) => (
                  <motion.a
                    key={s.platform}
                    href={s.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.platform}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="
                      w-9 h-9 rounded-full
                      border border-white/[0.12]
                      flex items-center justify-center
                      text-white/50
                      hover:bg-white/[0.08] hover:text-white hover:border-white/25
                      transition-all duration-200
                    "
                  >
                    <IconMapper name={s.icon} size={14} />
                  </motion.a>
                ))}
              </div>

              {/* Location pill group */}
              <div className="flex items-center gap-2 flex-wrap sm:justify-end">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-[11px] font-medium text-white/35 border border-white/[0.1] rounded-full px-3 py-1"
                >
                  {footer.location}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                  viewport={{ once: true }}
                  className="text-[11px] font-medium text-white/35 border border-white/[0.1] rounded-full px-3 py-1"
                >
                  {footer.timezone}
                </motion.span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ━━━ DIVIDER ━━━ */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full h-px bg-white/[0.08] origin-left"
        />

        {/* ━━━ BOTTOM BAR ━━━ */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-3"
        >
          {/* Copyright */}
          <p className="text-[12px] text-white/30 tracking-[0.01em]">
            {footer.text}
          </p>

          {/* Nav links */}
          <nav
            className="hidden md:flex items-center gap-5"
            aria-label="Footer navigation"
          >
            {[
              { label: "Work", to: "/design" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" },
            ].map((link) => (
              <motion.div
                key={link.label}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={link.to}
                  className="text-[12px] font-medium text-white/35 hover:text-white/70 transition-colors duration-200 no-underline"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Live clock + builder credit */}
          <div className="flex items-center gap-3 flex-wrap">
            {time && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-[11px] font-medium text-white/50 border border-white/[0.16] rounded-full px-3 py-1 tabular-nums"
              >
                {time}
              </motion.span>
            )}
            <span className="text-[11px] text-white/20 tracking-[0.03em]">
              {footer.developer}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Pulse animation for availability dot */}
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.75); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
