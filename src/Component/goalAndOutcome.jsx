import React from "react";
import { motion } from "framer-motion";

const goalAndOutcome = () => {
  return (
    <div className="flex flex-col max-w-[1200px] mx-auto px-4 gap-9 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-20 md:px-6 lg:px-10 xl:px-20 w-full">
      <motion.div
        className="bg-dark rounded-md p-6 sm:p-8 lg:p-10 mb-14 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#878789] mb-3">
            My Goal
          </p>
          <p className="text-[14px] sm:text-[15px] text-white/70 leading-[1.72]">
            To craft modern, intuitive, and impactful digital experiences by
            combining software engineering, frontend development, and UI/UX
            design to solve real-world problems with clean and user-centered
            solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#878789] mb-3">
            Outcome
          </p>
          <p className="text-[14px] sm:text-[15px] text-white/70 leading-[1.72]">
            Designed and developed responsive web and mobile experiences with a
            strong focus on usability, scalability, and visual consistency while
            continuously improving my skills in frontend engineering, product
            thinking, and modern UI systems.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default goalAndOutcome;
