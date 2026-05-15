import React, { useState } from "react";
import images from "../data/images";

const UserCard = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      className="flex gap-2 justify-center items-center"
    >
      <div className="h-14 w-14 rounded-full relative overflow-hidden liner">
        <img
          src={images.Profiler1}
          alt="profile image"
          className={`absolute  top-0 left-0 translate-y-[10%]  ${hover ? "hover:scale-125 ease-in-out duration-150 transition-transform hover:translate-y-[20%]" : ""}`}
        />
      </div>
      <div>
        <h6 className="text-[#0F0E0E] font-semibold text-[16px]">
          Muktar Adamu
        </h6>
        <p className="text-xs text-[#959595] flex gap-0.5 items-center">
          <span className="w-3 h-3 rounded-full bg-[#089F3E] pulse-dot "></span>
          Available at Work{" "}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
