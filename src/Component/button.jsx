import React from "react";
import classNames from "classnames";
import { div, img } from "framer-motion/client";

const Button = ({
  type = "Primary",
  size = "md",
  children,
  onClick,
  isLoading = false,
  disabled = false,
  icon,
}) => {
  const baseStyles =
    "rounded-md font-semibold transition-all duration-300 focus:outline-none";

  const typeStyles = {
    Primary:
      "text-white bg-gradient-to-r from-[#e59f1a] via-[#98a499] to-[#768678] hover:opacity-90",
    Ghost:
      "border border-[#2a3d2b] text-[#2a3d2b] bg-transparent hover:bg-[#e6e6e6]",
    Disabled: "bg-[#bfbfbf] text-white cursor-not-allowed opacity-60",
    Loading: "bg-[#959595] text-white cursor-wait",
  };

  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
    xl: "text-xl px-8 py-4",
  };

  const currentType = isLoading ? "Loading" : disabled ? "Disabled" : type;

  return (
    <button
      onClick={onClick}
      className={classNames(
        baseStyles,
        typeStyles[currentType],
        sizeStyles[size]
      )}
      disabled={disabled || isLoading}
    >
      {isLoading ? "Loading..." : children}
      {Primary && (
        <div className="rounded-full bg-shade ">
          <img src={icon} alt={icon} className="size-10 object-cover" />
        </div>
      )}
    </button>
  );
};

export default Button;
