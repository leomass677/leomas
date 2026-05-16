import React from "react";
import images from "../data/images";

const BeyondTheScreen = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12 xl:px-20 mt-16 sm:mt-20 flex flex-col gap-5 md:gap-6 lg:gap-7 xl:gap-8">
      {/* Heading */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#0F0E0E]">
        Beyond the Screen
      </h3>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        <div className="w-full overflow-hidden ">
          <img
            src={images.screen2}
            alt="Beyond the screen — photo one"
            className="w-full h-full object-cover aspect-[4/3] sm:aspect-auto sm:h-[320px] md:h-[360px] lg:h-[420px] xl:h-[480px]"
          />
        </div>
        <div className="w-full overflow-hidden ">
          <img
            src={images.screen1}
            alt="Beyond the screen — photo two"
            className="w-full h-full object-cover aspect-[4/3] sm:aspect-auto sm:h-[320px] md:h-[360px] lg:h-[420px] xl:h-[480px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BeyondTheScreen;
