import React from "react";
import { motion } from "framer-motion";
const _motion = motion;
import images from "../data/images";
import { VscDash } from "react-icons/vsc";
import { LuChevronRight } from "react-icons/lu";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInLeftVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeInRightVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      aria-label="Hero"
      className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 xl:px-16 pt-1 sm:pt-8 lg:pt-10 pb-6 sm:pb-7 lg:pb-8 mt-16 flex flex-col gap-5 sm:gap-6 lg:gap-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Top */}
      <div className="flex flex-col-reverse gap-1 sm:gap-5 md:flex-row md:items-end md:justify-between md:gap-10 lg:gap-14 xl:gap-20">
        {/* Left — headline + description */}
        <motion.div
          className="flex flex-col gap-3 sm:gap-4 flex-1"
          variants={fadeInLeftVariants}
        >
          <motion.h1
            className="
              font-semibold font-display text-[#0F0E0E]
              md:text-[48px]
              sm:text-[40px]
              text-[32px]
              tracking-normal
              font-semibold
              md:leading-[64px] 
              leading-[43.2px]
              text-grey w-full
            "
            variants={itemVariants}
          >
            Architecting{" "}
            <span className="text-[#808080]">
              Usable Products From Pixel To <br className="sm:hidden" />
              Pipeline.
            </span>
          </motion.h1>

          <motion.p
            className="
              text-[#313130] max-w-[560px]
              text-[14px]
              sm:text-[16px]
              leading-[22px]
              xl:leading-[1.75]
              tracking-[0.28px]
            "
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            I am a hybrid creator who bridges the gap between vision and
            reality. As both a Software Developer and Product Designer, I own
            the full journey from the initial concept to the final, functional
            product.
          </motion.p>
        </motion.div>

        {/* Right — greeting + role */}
        <motion.div
          className="flex flex-col gap-1 flex-shrink-0 md:pb-4 md:min-w-[240px] lg:pb-6 lg:min-w-[300px] xl:min-w-[340px]"
          variants={fadeInRightVariants}
        >
          {/* "Hi, I'm Muktar" with curve decoration */}
          <motion.span
            className="relative inline-block self-start"
            variants={scaleInVariants}
          >
            {images?.vector_curve && (
              <motion.img
                src={images.vector_curve}
                alt=""
                aria-hidden="true"
                decoding="async"
                className="absolute pointer-events-none -top-[18px] -left-[6px] w-[44px] h-[33px] sm:w-[50px] sm:h-[37px] sm:-top-[20px]"
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            )}
            <motion.span
              className="
                font-medium text-gray-800
                text-[16px]
              "
              variants={itemVariants}
            >
              Hi there, I'm{" "}
              <motion.span
                className="font-medium text-[#878789] underline-offset-4 decoration-[0.1em] decoration-gray-500/40 underline"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Muktar
              </motion.span>
              ,
            </motion.span>
          </motion.span>

          {/* Role + underline */}
          <motion.div
            className="relative mt-1 self-start"
            variants={itemVariants}
          >
            <motion.p
              className="
                text-[#313130] leading-[1.5]
                text-[16px]
              "
            >
              A{" "}
              <motion.span
                className="font-[600] text-[#878789]"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Software Engineer
              </motion.span>{" "}
              and{" "}
              <motion.span
                className="font-medium text-[#878789]"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                UI/UX Designer
              </motion.span>
              .
            </motion.p>
            {images?.underline && (
              <motion.img
                src={images.underline}
                alt=""
                aria-hidden="true"
                decoding="async"
                className="block w-40 h-5 pl-3 -translate-y-1"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "10rem" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Hairline divider */}
      <motion.div
        className="w-full h-px bg-[#878789]/6"
        variants={scaleInVariants}
      />

      {/* Bottom — project meta */}
      <motion.div
        className="
          flex items-center justify-between w-full font-semibold text-gray-800
          text-[14px]
          sm:text-[16px]
        "
        variants={fadeInUpVariants}
      >
        <motion.p
          className="
            flex items-center gap-0.5
            text-[14px]
            sm:text-[16px]
            leading-[32px]
            font-[500] 
            sm:font-semibold cursor-pointer
          "
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => {
            document
              .getElementById("work")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Selected Projects{" "}
          <motion.div>
            <LuChevronRight size={20} className="translate-y-[2.5px]" />
          </motion.div>
        </motion.p>
        <motion.p className="flex items-center gap-0.5" variants={itemVariants}>
          <motion.span
            className="
              text-[#878789] 
              text-[14px]
              sm:text-[16px]
              leading-[32px]
              font-[500] 
              sm:font-semibold
            "
          >
            From 2025
          </motion.span>
          <VscDash className="text-[#878789]" />
          <motion.span
            className="
              text-gray-800
              text-[14px]
              sm:text-[16px]
              leading-[32px]
              font-[500] 
              sm:font-semibold
            "
          >
            Present
          </motion.span>
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
