import React, { use, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdAddIcCall } from "react-icons/md";
import icons from "../assets/icons";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { div } from "framer-motion/client";
import { IoIosArrowForward } from "react-icons/io";
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
    <div className="bg-primary-700 py-[25px] h-[80px] lg:h-[120px] px-4 md:px-[14px] lg:px-[32px] mt-8 flex justify-between items-center rounded-full ">
      {/* img */}
      {/* desktop */}
      <div className="hidden md:flex justify-between items-center w-full ">
        {" "}
        <div className="text-2xl font-space-grotesk">
          <img src={icons.logo} alt="logo" />
        </div>
        {/* Nav Links */}
        <div className="flex gap-2 lg:gap-8 text-[16px] lg:text-[18px] text-white uppercase font-bold font-space-grotesk">
          {my_navLink.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={`flex p-[10px] flex-row gap-5`}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div>
          <button className="py-[14px] px-[22px]  lg:py-[16px] lg:px-[24px] text-[16px] lg:text-[18px] font-semibold hover:scale-105 transition-transform duration-500 cursor-pointer shadow-2xls shadow-white rounded-full flex items-center gap-3 text-white bg-gradient-to-r from-[#e59f1a] via-[#98a499] to-[#768678]">
            <span>Here Me</span>
            <MdAddIcCall />
          </button>
        </div>
      </div>
      {/* mobile */}
      <div className="w-full px-[8px] bg-primary-700">
        <header className="flex justify-between items-center w-full">
          <img src={icons.logo} alt="logo" />
          <AiOutlineMenuUnfold
            className="text-2xl text-white"
            onClick={() => (s = isOpen((prev) => !prev))}
          />
        </header>
        <div
          className={`absolute w-[85%] top-[14%] flex flex-col gap-4 transition-all bg-primary-700 text-white duration-300 ease-in-out ${
            open
              ? "-translate-y-100 opacity-0 -z-10"
              : "translate-y-1 opacity-100"
          }`}
        >
          {my_navLink.map((item, key) => (
            <NavLink
              key={key}
              to={item.path}
              className={`flex w-full justify-between items-center border-b border-white`}
            >
              <span>{item.name}</span>
              <IoIosArrowForward />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
