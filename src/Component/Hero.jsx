import React from "react";
import images from "../data/images";
import { VscDash } from "react-icons/vsc";
import { LuChevronRight } from "react-icons/lu";
const Hero = () => {
  return (
    <section
      aria-label="Hero"
      className="w-full max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 xl:px-16 pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-7 lg:pb-8 mt-16 flex flex-col gap-5 sm:gap-6 lg:gap-8"
    >
      {/* ── Top ── */}
      <div className="flex flex-col-reverse gap-4 sm:gap-5 md:flex-row md:items-end md:justify-between md:gap-10 lg:gap-14 xl:gap-20">
        {/* Left — headline + description */}
        <div className="flex flex-col gap-3 sm:gap-4 flex-1 min-w-0">
          <h1
            className="
              font-semibold font-display text-[#0F0E0E]
              md:text-[48px]
              text-[40px]
              font-semibold
              md:leading-[64px] 
              leading-[48px]
              text-grey max-w-[353px] md:max-w-[640px]
            "
          >
            Architecting{" "}
            <span className="text-[#808080]">
              usable products from pixel to pipeline.
            </span>
          </h1>

          <p
            className="
              text-[#313130] max-w-[560px]
              text-[16px] leading-[1.72]
              xl:leading-[1.75]
            "
          >
            I am a hybrid creator who bridges the gap between vision and
            reality. As both a Software Developer and Product Designer, I own
            the full journey from the initial concept to the final, functional
            product.
          </p>
        </div>

        {/* Right — greeting + role */}
        <div className="flex flex-col gap-1 flex-shrink-0 md:pb-4 md:min-w-[240px] lg:pb-6 lg:min-w-[300px] xl:min-w-[340px]">
          {/* "Hi, I'm Muktar" with curve decoration */}
          <span className="relative inline-block self-start">
            {images?.vector_curve && (
              <img
                src={images.vector_curve}
                alt=""
                aria-hidden="true"
                className="absolute pointer-events-none -top-[18px] -left-[6px] w-[44px] h-[33px] sm:w-[50px] sm:h-[37px] sm:-top-[20px]"
              />
            )}
            <span
              className="
                font-medium text-gray-800
                text-[16px]
                
              "
            >
              Hi, I'm{" "}
              <span className="font-medium text-[#878789] underline-offset-4 decoration-[0.1em] decoration-gray-500/40 underline">
                Muktar
              </span>
              ,
            </span>
          </span>

          {/* Role + underline */}
          <div className="relative mt-1 self-start">
            <p
              className="
                text-[#313130] leading-[1.5]
                  text-[16px]
                  
              "
            >
              A{" "}
              <span className="font-[600] text-[#878789] underline-offset-4 decoration-[0.1em] decoration-gray-500/40 underline">
                Software Engineer
              </span>{" "}
              and{" "}
              <span className="font-medium text-[#878789] underline-offset-4 decoration-[0.1em] decoration-gray-500/40 underline">
                UI/UX Designer
              </span>
              .
            </p>
            {images?.underline && (
              <img
                src={images.underline}
                alt=""
                aria-hidden="true"
                className="block w-full mt-[2px]"
              />
            )}
          </div>
        </div>
      </div>

      {/* ── Hairline divider ── */}
      <div className="w-full h-px bg-[#878789]/6" />

      {/* ── Bottom — project meta ── */}
      <div
        className="
          flex items-center justify-between w-full font-semibold text-gray-800
         text-[16px] 
        "
      >
        <p
          className="
          flex items-center gap-0.5
          text-[16px]
          leading-[32px]
          font-[600] "
        >
          Selected Projects <LuChevronRight className="text-lg translate-y-" />
        </p>
        <p className="flex items-center gap-0.5">
          <span
            className="
            text-[#878789] 
            text-[16px]
            leading-[32px]
            font-[600]"
          >
            From 2025
          </span>
          <VscDash className="  text-[#878789]" />
          <span
            className="
            text-gray-800
            text-[16px]
            leading-[32px]
            font-[600] "
          >
            Present
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
