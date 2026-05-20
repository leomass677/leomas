import React from "react";
import { motion } from "framer-motion";
const _motion = motion;
import IconMapper from "../Component/IconMapper";
import about from "../data/about";
import images from "../data/images";
import BeyondTheScreen from "../Component/beyondTheScreen";
import ImageWithSkeleton from "../Component/ImageWithSkeleton";
import AboutWebsite from "../Component/aboutWebsite";
import WorkExperience from "../Component/workExperience";
import { useEffect } from "react";

/* ── Animation variants for container staggering ── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

const slideInLeftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideInRightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ── Tiny reusable atoms ── */

const SectionHeading = ({ children }) => (
  <div className="flex items-center gap-3 mb-5">
    <h2 className="font-playfair text-[22px] font-bold text-[#0F0E0E] tracking-tight whitespace-nowrap">
      {children}
    </h2>
    <div className="flex-1 h-px bg-[#6B6B59]/[0.15]" />
  </div>
);

const Pill = ({ children, variant = "default" }) => {
  const styles = {
    default: "text-[#6B6B59] bg-[#6B6B59]/[0.07] border-[#6B6B59]/[0.18]",
    tech: "text-[#6B6B59] bg-[#6B6B59]/[0.07] border-[#6B6B59]/[0.18]",
    website: "text-[#6B6B59] bg-[#6B6B59]/[0.07] border-[#6B6B59]/[0.18]",
  };
  return (
    <span
      className={`inline-block text-[12px] font-medium border rounded-full px-[11px] py-[3px] ${styles[variant]}`}
    >
      {children}
    </span>
  );
};

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-5 justify-center my-10 mb-24"
    >
      {/* ── About section ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col max-w-[1200px] mx-auto px-4 gap-7 md:gap-6 md:px-6 lg:px-10 xl:px-20 w-full"
      >
        {/* Title with fade in up animation */}
        <motion.div
          variants={fadeInUpVariants}
          className="flex-1 flex flex-col xl:pr-4"
        >
          <h3 className="text-4xl md:text-5xl italic font-medium break-words">
            {about.bio.title.split(" ")[0]}
            <span className="text-grey-600">
              {" "}
              {about.bio.title.split(" ")[1]}
            </span>
          </h3>
        </motion.div>

        {/* Content row: bio text left, image right */}
        <div className="flex flex-col-reverse lg:justify-between lg:flex-row gap-6">
          {/* Bio sections — min-w-0 prevents flex child from overflowing */}
          <motion.div
            variants={slideInLeftVariants}
            className="w-full lg:w-1/2 xl:w-7/12 flex flex-col gap-5 min-w-0"
          >
            {about.bio.sections.map((section, index) => (
              <motion.div
                key={section.id}
                variants={itemVariants}
                custom={index}
                className="flex flex-col gap-1"
              >
                {/* Section heading — allow long highlights to wrap */}
                <motion.h6
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="text-xl break-words"
                >
                  {section.header}{" "}
                  <span className="text-grey-700">{section.highlight}</span>
                </motion.h6>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  className="flex flex-col gap-2"
                >
                  {section.content.map((item, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + 0.6 + idx * 0.1,
                      }}
                      lang="en"
                      className="
                        text-sm sm:text-base
                        leading-relaxed
                        text-left
                        break-words
                        hyphens-auto
                        [overflow-wrap:anywhere]
                      "
                    >
                      {item}
                    </motion.p>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image — constrained so it never pushes layout */}
          <motion.div
            variants={slideInRightVariants}
            className="w-full lg:w-5/12 flex lg:justify-end h-fit flex-shrink-0"
          >
            <ImageWithSkeleton
              src={images.about_image}
              alt={about.bio.title}
              loading="eager"
              wrapperClassName="w-full lg:max-w-[420px]"
              imgClassName="object-cover w-full h-auto transition-all duration-300"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <BeyondTheScreen />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <AboutWebsite />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <WorkExperience />
      </motion.div>
    </motion.section>
  );
};

export default About;
