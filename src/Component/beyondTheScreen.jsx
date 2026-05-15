import React from "react";
import images from "../data/images";

const beyondTheScreen = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12 xl:px-20 mt-20 flex flex-col gap-5 md:gap-6  lg:gap-7 xl:gap-8">
      <h3>Beyond the Screen</h3>
      <div className="flex flex-col lg:flex-row gap-6">
        <img src={images.screen2} alt="" className="flex-1" />
        <img src={images.screen1} alt="" className="flex-1" />
      </div>
    </div>
  );
};

export default beyondTheScreen;
