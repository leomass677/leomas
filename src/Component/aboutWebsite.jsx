import React from "react";
import { motion } from "framer-motion";
const _motion = motion;
import about from "../data/about";
import { VscDash } from "react-icons/vsc";

const AboutWebsite = () => {
  /* ── Animation variants ── */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const dashVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.4, delay: 0.3, ease: "easeOut" },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="flex flex-col max-w-[1200px] mx-auto px-4 gap-2 md:px-6 lg:px-10 xl:px-20 w-full py-8"
    >
      {/* Title */}
      <motion.h6
        variants={itemVariants}
        className="text-lg md:text-xl font-semibold text-[#0F0E0E] tracking-tight"
      >
        {about.website.title}
      </motion.h6>

      {/* Info row */}
      <motion.div variants={itemVariants} className="flex flex-col gap-1">
        <motion.p
          variants={itemVariants}
          className="flex flex-wrap gap-0.5 items-center text-[#6B6B59] text-sm md:text-base"
        >
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {about.website.version}
          </motion.span>

          <motion.span variants={dashVariants} className="mx-1">
            <VscDash className="text-lg" />
          </motion.span>

          <motion.span variants={numberVariants} className="font-mono">
            {about.website.built.secondsInMaking()}
          </motion.span>

          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="ml-1"
          >
            {about.website.built.readableTime}
          </motion.span>
        </motion.p>

        {/* Design philosophy */}
        <motion.p
          variants={itemVariants}
          className="text-[#808080] text-sm md:text-base leading-relaxed"
        >
          {about.website.designPhilosophy}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default AboutWebsite;
