import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const MainButton = ({ icon, label, classname, onClick }) => {
  return (
    <button className="flex items-center justify-start gap-2 rounded-full bg-primary-500 max-w-fit px- text-shade font-semibold">
      <span className="pl-4">View My Portfolio</span>
      <span className="p-4 rounded-full text-dark bg-crayola-400">
        <IoIosArrowForward />
      </span>
    </button>
  );
};

export default MainButton;
