import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import images from "../data/images";
import { Link } from "react-router-dom";
import workDetails from "../data/workdetails";

const WorkDetailCard = ({
  image = images?.ai_resume_image,
  imageAlt = "AI Resume and Cover Letter",
}) => {
  const [hovered, setHovered] = useState(false);

  const basicinfo = workDetails.projects;

  return (
    <div className="flex flex-col max-w-[1200px] mx-auto px-4 gap-4 sm:gap-5 md:px-6 lg:px-10 xl:px-20 w-full">
      {basicinfo.map((project) => (
        <Link
          to={`/work/${project.path}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8"
          key={project.id}
        >
          {/* ── Image card ── */}
          <div
            className="
            w-full overflow-hidden
            liner
            rounded-2xl sm:rounded-[24px] lg:rounded-[32px]
            rounded-tr-[32px] sm:rounded-tr-[40px] lg:rounded-tr-[48px]
            rounded-bl-[32px] sm:rounded-bl-[40px] lg:rounded-bl-[48px]
            p-4 sm:p-6 lg:p-10 xl:p-12
            flex items-center justify-center
            transition-all duration-300 ease-out
            ]
          "
          >
            <div className="w-full overflow-hidden rounded-xl sm:rounded-2xl">
              <img
                src={image}
                alt={imageAlt}
                className="
                w-full max-w-[852px] mx-auto block
                object-cover
                transition-transform duration-300 ease-out
                group-hover:scale-[1.02]
              "
              />
            </div>
          </div>

          {/* ── Meta row ── */}
          <div className="flex flex-col gap-2 px-1">
            {/* Title row */}
            <div className="flex items-start justify-between gap-3">
              <h6
                className="
                font-bold text-[#0F0E0E] tracking-[-0.015em]
                text-[15px] leading-[1.35]
                sm:text-[16px]
                md:text-[17px]
                lg:text-[18px]
                flex items-center gap-1.5 flex-wrap
              "
              >
                {project.title}
                <MdArrowOutward
                  className="
                  text-[#6B6B59] flex-shrink-0
                  text-[16px] sm:text-[18px] lg:text-[20px]
                  transition-transform duration-200
                  group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                "
                  aria-hidden="true"
                />
              </h6>

              <span
                className="
                text-[#9A9A82] font-normal flex-shrink-0
                text-[12px] sm:text-[13px] lg:text-[14px]
                leading-[1.35] pt-0.5
              "
              >
                © {project.year}
              </span>
            </div>

            {/* Description */}
            <p
              className="
              text-[#808080]
              text-[13px] leading-[1.6]
              sm:text-[14px] sm:leading-[1.65]
              lg:text-[14px] lg:leading-[1.68]
              max-w-[680px]
            "
            >
              {project.description.split(". ").slice(0, 1).join(". ")}.
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default WorkDetailCard;
