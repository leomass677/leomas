import React from "react";

const Greatings = ({ children }) => {
  return (
    <div className="relative w-fit  font-semibold group cursor-pointer ">
      <div className="w-[16px] h-[10px] bg-crayola-600 absolute -bottom-1 -left-1 shadow-2xl shadow-crayola-200 rounded-bl-2xl rounded-sm  "></div>
      <div className="w-[16px] h-[10px] bg-crayola-600 absolute -right-1 -top-1 shadow-2xl shadow-crayola-200 rounded-tr-2xl rounded-sm "></div>
      <div className="w-[16px] h-[10px] bg-crayola-600 absolute -right-1 -bottom-1 shadow-2xl shadow-crayola-200 rounded-br-2xl rounded-sm  "></div>
      <div
        className="w-[16px] h-[10px] bg-crayola-600 absolute -top-1 
      -left-1 shadow-2xl shadow-crayola-200 rounded-tl-2xl     rounded-sm"
      ></div>
      <button className="border cursor-pointer border-dark text-2xl h-16 font-semibold group-hover:border-crayola-500 group-hover:text-gray-800   transition-all duration-700 ease-in-out  bg-transparent text-dark px-[12px] py-[8px]">
        Hi There!
      </button>
      <div className="w-full h-full bg-shade scale-0 group-hover:scale-100 cursor-pointer group-hover:bg-crayola-600 absolute left-0 top-0 -z-10  group-hover:translate-0 transition-all duration-700 ease-in-out"></div>
    </div>
  );
};

export default Greatings;
