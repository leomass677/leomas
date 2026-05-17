import React, { useState } from "react";
import { motion } from "framer-motion";
const _motion = motion;
import images from "../data/images";

const UserCard = () => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex gap-2 justify-center items-center"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full relative overflow-hidden liner">
        <motion.img
          src={images.Profiler1}
          alt="profile image"
          className="absolute scale-101 translate-y-1 top-0 left-0 transition-transform duration-300 ease-out"
          animate={hover ? { scale: 1.25, y: "10%" } : { scale: 1, y: "10%" }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
        />
      </div>
      <div className="flex flex-col">
        <motion.h6
          className="text-dark text-[15px] font-semibold sm:text-[16px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          Muktar Adamu
        </motion.h6>
        <motion.p
          className="text-xs text-[#959595] flex gap-0.5 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <motion.span
            className="w-3 h-3 rounded-full bg-[#089F3E] pulse-dot"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          Available at Work{" "}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default UserCard;
