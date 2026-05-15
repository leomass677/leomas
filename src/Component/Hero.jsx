import React from "react";
import images from "../data/images";
import { VscDash } from "react-icons/vsc";

const Hero = () => {
  return (
    <section
      aria-label="Hero"
      className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 xl:px-16 pt-10 sm:pt-12 lg:pt-16 pb-6 sm:pb-7 lg:pb-8 mt-16 flex flex-col gap-5 sm:gap-6 lg:gap-8"
    >
      {/* ── Top ── */}
      <div className="flex flex-col-reverse gap-4 sm:gap-5 md:flex-row md:items-end md:justify-between md:gap-10 lg:gap-14 xl:gap-20">
        {/* Left — headline + description */}
        <div className="flex flex-col gap-3 sm:gap-4 flex-1 min-w-0">
          <h1
            className="
              font-bold text-[#0F0E0E]
              text-[26px]    leading-[1.25]  tracking-[-0.02em]
              sm:text-[30px] sm:leading-[1.22] sm:tracking-[-0.022em]
              md:text-[36px] md:leading-[1.18] md:tracking-[-0.025em]
              lg:text-[44px] lg:leading-[1.12] lg:tracking-[-0.028em]
              xl:text-[50px] xl:leading-[1.1]  xl:tracking-[-0.03em]
              2xl:text-[54px] 2xl:leading-[1.08] 2xl:tracking-[-0.032em]
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
              text-[13px] leading-[1.65]
              sm:text-[14px] sm:leading-[1.7]
              md:text-[15px] md:leading-[1.72]
              lg:text-[16px] lg:leading-[1.72]
              xl:leading-[1.75]
            "
          >
            I am a hybrid creator who bridges the gap between vision and
            reality. As both a Software Developer and Product Designer, I own
            the full journey — from the initial concept to the final, functional
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
                font-medium text-[#808080]
                text-[14px]
                sm:text-[15px]
                md:text-[16px]
                xl:text-[17px]
              "
            >
              Hi, I'm Muktar,
            </span>
          </span>

          {/* Role + underline */}
          <div className="relative self-start">
            <p
              className="
                text-[#313130] leading-[1.5]
                text-[13px]
                sm:text-[14px]
                md:text-[15px]
                lg:text-[16px]
              "
            >
              A Software Engineer and UI/UX Designer.
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
      <div className="w-full h-px bg-[#6B6B59]/20" />

      {/* ── Bottom — project meta ── */}
      <div
        className="
          flex items-center justify-between w-full font-medium text-[#313130]
          text-[12px]
          sm:text-[13px]
          md:text-[14px]
          lg:text-[15px]
          xl:text-[16px]
        "
      >
        <p>Selected Projects</p>
        <p className="flex items-center gap-0.5">
          <span>From 2025</span>
          <VscDash className="text-[#808080]" />
          <span>Present</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
