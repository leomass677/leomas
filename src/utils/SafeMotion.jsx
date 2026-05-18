import React from "react";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "./motionVariants";

// A small helper that renders a motion component when reduced-motion is false,
// otherwise renders the plain HTML element. Usage: <SafeMotion as="div" motionProps={{...}}>...</SafeMotion>
export default function SafeMotion({
  as = "div",
  motionProps = {},
  children,
  ...props
}) {
  const reduce = useSafeReducedMotion();
  const Tag = reduce ? as : motion[as] || motion.div;
  // If reduced, pass only regular props; otherwise merge motionProps
  const combinedProps = reduce ? props : { ...props, ...motionProps };
  return React.createElement(Tag, combinedProps, children);
}
