import React from "react";
import { motion } from "framer-motion";
const _motion = motion;
import SafeMotion from "../utils/SafeMotion";
import images from "../data/images";
import { VscDash } from "react-icons/vsc";
import { LuChevronRight } from "react-icons/lu";
import {
  container,
  item,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
  useSafeReducedMotion,
} from "../utils/motionVariants";

const Hero = () => {
  const reduce = useSafeReducedMotion();

  return (
    <SafeMotion
      as="section"
      motionProps={{
        ariaLabel: "Hero",
        initial: reduce ? undefined : "hidden",
        animate: reduce ? undefined : "visible",
        variants: container,
      }}
      aria-label="Hero"
      className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 xl:px-16 pt-1 sm:pt-8 lg:pt-10 pb-6 sm:pb-7 lg:pb-8 mt-16 flex flex-col gap-5 sm:gap-6 lg:gap-8"
    >
      {/* Top */}
      <div className="flex flex-col-reverse gap-1 sm:gap-5 md:flex-row md:items-end md:justify-between md:gap-10 lg:gap-14 xl:gap-20">
        {/* Left — headline + description */}
        <motion.div
          className="flex flex-col gap-3 sm:gap-4 flex-1"
          variants={reduce ? undefined : fadeInLeft}
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
            variants={reduce ? undefined : item}
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
            variants={reduce ? undefined : item}
            transition={reduce ? { duration: 0 } : { delay: 0.18 }}
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
          variants={reduce ? undefined : fadeInRight}
        >
          {/* "Hi, I'm Muktar" with curve decoration */}
          <motion.span
            className="relative inline-block self-start"
            variants={reduce ? undefined : scaleIn}
          >
            {images?.vector_curve && (
              <img
                src={images.vector_curve}
                alt=""
                aria-hidden="true"
                decoding="async"
                loading="lazy"
                className="absolute pointer-events-none -top-[18px] -left-[6px] w-[44px] h-[33px] sm:w-[50px] sm:h-[37px] sm:-top-[20px]"
              />
            )}
            <motion.span
              className="
                font-medium text-gray-800
                text-[16px]
              "
              variants={reduce ? undefined : item}
            >
              Hi there, I'm{" "}
              <motion.span
                className="font-medium text-[#878789] underline-offset-4 decoration-[0.1em] decoration-gray-500/40 underline"
                whileHover={reduce ? {} : { scale: 1.05 }}
                transition={
                  reduce ? { duration: 0 } : { type: "spring", stiffness: 400 }
                }
              >
                Muktar
              </motion.span>
              ,
            </motion.span>
          </motion.span>

          {/* Role + underline */}
          <motion.div
            className="relative mt-1 self-start"
            variants={reduce ? undefined : item}
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
                whileHover={reduce ? undefined : { scale: 1.02 }}
                transition={
                  reduce ? undefined : { type: "spring", stiffness: 400 }
                }
              >
                Software Engineer
              </motion.span>{" "}
              and{" "}
              <motion.span
                className="font-medium text-[#878789]"
                whileHover={reduce ? undefined : { scale: 1.02 }}
                transition={
                  reduce ? undefined : { type: "spring", stiffness: 400 }
                }
              >
                UI/UX Designer
              </motion.span>
              .
            </motion.p>
            {images?.underline && (
              <img
                src={images.underline}
                alt=""
                aria-hidden="true"
                decoding="async"
                loading="lazy"
                className="block w-40 h-5 pl-3 -translate-y-1"
              />
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Hairline divider */}
      <div className="w-full h-px bg-[#878789]/6" />

      {/* Bottom — project meta */}
      <motion.div
        className="
          flex items-center justify-between w-full font-semibold text-gray-800
          text-[14px]
          sm:text-[16px]
        "
        variants={reduce ? undefined : fadeInUp}
      >
        <motion.p
          className="
            flex items-center 
            text-[14px]
            sm:text-[16px]
            leading-[32px]
            font-[500] 
            sm:font-semibold cursor-pointer
          "
          whileHover={reduce ? {} : { x: 5 }}
          transition={
            reduce ? { duration: 0 } : { type: "spring", stiffness: 300 }
          }
          onClick={() => {
            const workSection = document.getElementById("work");
            const offset = 100; // Adjust this value based on your header height
            const top =
              workSection.getBoundingClientRect().top +
              window.pageYOffset -
              offset;
            window.scrollTo({ top, behavior: "smooth" });
          }}
        >
          Selected Projects{" "}
          <motion.div>
            <LuChevronRight size={20} className="" />
          </motion.div>
        </motion.p>
        <motion.p
          className="flex items-center gap-0.5"
          variants={reduce ? undefined : item}
        >
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
    </SafeMotion>
  );
};

export default React.memo(Hero);
