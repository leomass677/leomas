import React from "react";
import images from "../data/images";
import { VscDash } from "react-icons/vsc";

const Hero = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-4 py-8 mt-8 px-4 md:px-16">
      {/* top */}
      <div className="flex flex-col-reverse md:flex-row items-start lg:items-end gap-3.5 md:gap-16">
        {/* first section */}
        <div className="flex flex-col items-start gap-3 text-[16px] text-stone leading-6 flex-1">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] lg:leading-[127%] lg:tracking-[-1.26px] font-bold text-stone leading-[40px]">
            Architecting{" "}
            <span className="text-[#808080]">
              usable products from pixel to pipeline.
            </span>
          </h2>
          <p className="text-[14px] text-stone">
            I am a hybrid creator who bridges the gap between vision and
            reality. As both a Software Developer and Product Designer, I own
            the full journey from the initial concept to the final, functional
            product.
          </p>
        </div>
        {/* second section */}
        <div className="flex flex-col items-baseline  lg:pb-6 gap-1 text-[16px]  lg:min-w-[346px] text-stone">
          <span className="relative">
            <img
              src={images?.vector_curve}
              alt="curve"
              className="absolute -top-4.5 -left-1.5 w-[50px] h-[37px]"
            />
            <span className="font-medium text-primary">Hi, I'm Muktar,</span>
          </span>
          <div className="relative">
            <p className="text-[14px] text-stone">
              A Software Engineer and UI/UX Designer.
            </p>
            <img src={images.underline} alt="underline" />
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex  items-start justify-between w-full font-medium text-[14px] text-stone">
        <p>Selected Projects</p>
        <p className="flex items-center gap-0.5">
          <span>From 2025</span>
          <VscDash />
          <span>Present</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
