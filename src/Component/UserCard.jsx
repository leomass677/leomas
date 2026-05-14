import React from "react";
import images from "../data/images";

const UserCard = () => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <div className="h-16 w-16 rounded-full relative overflow-hidden liner">
        <img
          src={images.Profiler1}
          alt="profile image"
          className="absolute top-0 left-0 translate-y-[10%]  "
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
