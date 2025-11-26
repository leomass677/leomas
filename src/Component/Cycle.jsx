import React from "react";
import { FaGithub } from "react-icons/fa6";
const Cycle = ({ icon, link }) => {
  return (
    <a
      href={link}
      className="size-[50px] group cursor-pointer overflow-clip relative flex items-center justify-center bg-shade rounded-full border-2 border-crayola-400 text-3xl text-primary-700 shadow-lg"
    >
      <span className="z-10"> {icon ? icon : <FaGithub />}</span>
      <div className="w-full h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-crayola-400 scale-0 group-hover:scale-110 shadow-2xl rounded-full rotate-0 group-hover:rotate-180 transition-all duration-500 ease-in-out"></div>
    </a>
  );
};

export default Cycle;
