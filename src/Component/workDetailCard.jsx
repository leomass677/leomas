import React from "react";
import { MdArrowOutward } from "react-icons/md";
import images from "../data/images";
import { Link } from "react-router-dom";

const WorkDetailCard = () => {
  return (
    <Link to="/work/ai-resume-cover-letter">
      {" "}
      <div className="flex flex-col max-w-[1440px] mx-auto gap-6  px-5  md:px-6 lg:px-7 rounded-2xl">
        <div className="w-full liner shadow-2xs max-w-[1440px] p-4 md:p-6 lg:p-12 mx-auto  rounded-2xl flex items-center justify-center">
          {" "}
          <img src={images?.ai_resume_image} alt="" />
        </div>
        <div>
          <div className="flex items-center justify-between mb-3">
            <h6 className="text-[16px] md:text-[18px] font-semibold text-dark tracking-[-0.01em] leading-snug  flex items-center gap-1.5">
              AI Resume and Cover Letter{" "}
              <MdArrowOutward className="font-bold text-xl" />
            </h6>
            <p className="text-primary">©2025</p>
          </div>
          <p className="text-[14px] text-primary leading-[1.65]">
            Create tailored resumes and compelling cover letters in minutes.
            Powered by AI to highlight your strengths and match job descriptions
            perfectly.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default WorkDetailCard;
