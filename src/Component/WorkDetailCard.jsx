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
    <div className="flex flex-col max-w-[1200px] mx-auto px-4 gap-9  sm:gap-10 md:gap-12 lg:gap-14 xl:gap-20 md:px-6 lg:px-10 xl:px-20 w-full">
      {basicinfo.map((project) => (
        <Link
          to={`/work/${project.path}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex flex-col gap-4 sm:gap-5 lg:gap-6"
          key={project.id}
        >
          {/* ── Image card ── */}
          <div
            className="
            w-full overflow-hidden
            liner
            rounded-2xl lg:rounded-[32px]
            p-4 sm:p-6 lg:p-10 xl:p-12
            flex items-center justify-center
            transition-all duration-300 ease-out
            ]
          "
          >
            <div className="w-full overflow-hidden">
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
          <div className="flex flex-col px-1">
            {/* Title row */}
            <div className="flex items-start justify-between">
              <h6
                className="
                font-bold text-[#0F0E0E] tracking-[-0.015em]        
                md:text-[18px]
                text-[16px]
                leading-[32px]
                font-[350] 
      
                flex items-center gap-1.5 flex-wrap
              "
              >
                {project.title}
                <MdArrowOutward
                  className="
                  text-dark flex-shrink-0
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
                  text-[16px]
                leading-[32px]
                font-[350] 
              "
              >
                © {project.year}
              </span>
            </div>

            {/* Description */}
            <p
              className="
              text-[#808080]
                text-[16px]
                leading-[32px]
                font-[350] 
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
