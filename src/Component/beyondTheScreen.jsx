import React from "react";
import { motion } from "framer-motion";
const _motion = motion;
import images from "../data/images";

const BeyondTheScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12 xl:px-20 mt-16 sm:mt-20 flex flex-col gap-5 md:gap-6 lg:gap-7 xl:gap-8"
    >
      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#0F0E0E]"
      >
        Beyond the Screen
      </motion.h3>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full overflow-hidden"
        >
          <img
            src={images.screen2}
            alt="Beyond the screen — photo one"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover aspect-[4/3] sm:aspect-auto sm:h-[320px] md:h-[360px] lg:h-[420px] xl:h-[480px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full overflow-hidden"
        >
          <img
            src={images.screen1}
            alt="Beyond the screen — photo two"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover aspect-[4/3] sm:aspect-auto sm:h-[320px] md:h-[360px] lg:h-[420px] xl:h-[480px]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BeyondTheScreen;
