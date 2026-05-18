import { useReducedMotion } from "framer-motion";

// Shared variants used across components to reduce duplication
export const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: "easeOut" },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.44, ease: "easeOut" },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.44, ease: "easeOut" },
  },
};

// Hook helper to quickly check reduced motion preference
export function useSafeReducedMotion() {
  return useReducedMotion();
}

export default { container, item, fadeInLeft, fadeInRight, fadeInUp, scaleIn };
