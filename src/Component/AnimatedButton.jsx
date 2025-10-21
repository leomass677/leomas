import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedButton = ({ children, icon, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 600);
    if (onClick) onClick();
  };

  return (
    <div className="flex items-center justify-center">
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center gap-3 px-6 py-3 rounded-full text-white font-semibold overflow-hidden cursor-pointer"
        style={{
          backgroundImage: "linear-gradient(135deg, #e59f1a, #98a499, #768678)",
        }}
      >
        {/* Ripple effect */}
        <AnimatePresence>
          {clicked && (
            <motion.span
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 bg-white rounded-full"
            />
          )}
        </AnimatePresence>

        {/* Label */}
        <motion.span
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative z-10"
        >
          {children}
        </motion.span>

        {/* Icon */}
        {icon && (
          <motion.span
            initial={{ x: 10, rotate: 0 }}
            animate={{ x: 0, rotate: 90 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 text-xl"
          >
            {icon}
          </motion.span>
        )}
      </motion.button>
    </div>
  );
};

export default AnimatedButton;
