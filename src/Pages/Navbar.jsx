import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdAddIcCall } from "react-icons/md";
import icons from "../assets/icons";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "../Component/AnimatedButton";
import { MdCall } from "react-icons/md";

const Navbar = () => {
  const [open, isOpen] = useState(false);

  const my_navLink = [
    { path: "/home", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/skills", name: "Skills" },
    { path: "/design", name: "Design" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <div className="bg-primary-700 py-[25px] h-[80px] lg:h-[120px] px-4 md:px-[14px] lg:px-[32px] mt-8 flex justify-between items-center rounded-full relative">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center w-full">
        <div className="text-2xl font-space-grotesk">
          <img src={icons.logo} alt="logo" />
        </div>

        <div className="flex gap-2 lg:gap-8 text-[16px] lg:text-[18px] text-white uppercase font-bold font-space-grotesk">
          {my_navLink.map((item, index) => (
            <NavLink key={index} to={item.path} className="flex p-[10px] gap-5">
              {item.name}
            </NavLink>
          ))}
        </div>

        <div>
          <AnimatedButton
            icon={<MdCall className="-rotate-80" />}
            onClick={() => alert("Clicked!")}
          >
            Let’s Go!
          </AnimatedButton>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="w-full px-2 bg-primary-700 md:hidden relative">
        <header className="flex justify-between items-center w-full py-2">
          <img src={icons.logo} alt="logo" className="h-8" />
          <AiOutlineMenuUnfold
            className="text-3xl text-white cursor-pointer"
            onClick={() => isOpen((prev) => !prev)}
          />
        </header>

        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute left-2 right-2 top-[70px] z-50 bg-primary-700 backdrop-blur-md rounded-xl shadow-lg p-4 flex flex-col gap-4"
            >
              {my_navLink.map((item, key) => (
                <NavLink
                  key={key}
                  to={item.path}
                  className="flex justify-between items-center text-white py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#e59f1a] hover:via-[#98a499] hover:to-[#768678] transition-all duration-300"
                >
                  <span className="font-semibold">{item.name}</span>
                  <IoIosArrowForward />
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
