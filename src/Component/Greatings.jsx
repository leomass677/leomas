import React from "react";

const Greatings = ({ children }) => {
  return (
    <div className="relative w-fit sca">
      <div className="w-[14px] h-[8px] bg-crayola-600 absolute top-9 right-20 shadow-2xl shadow-crayola-200 rounded-bl-2xl rounded-sm border"></div>
      <div className="w-[14px] h-[8px] bg-crayola-600 absolute left-20 -top-1 shadow-2xl shadow-crayola-200 rounded-tr-2xl rounded-sm border-dark border"></div>
      <div className="w-[14px] h-[8px] bg-crayola-600 absolute left-20 top-9 shadow-2xl shadow-crayola-200 rounded-br-2xl rounded-sm border-dark border"></div>
      <div className="w-[14px] h-[8px] bg-crayola-600 absolute bottom-9.5 right-20 shadow-2xl shadow-crayola-200 rounded-tl-2xl border border-dark   rounded-sm"></div>
      <button className="border border-dark bg-transparent text-dark px-[12px] py-[8px]">
        Hi There!
      </button>
    </div>
  );
};

export default Greatings;
