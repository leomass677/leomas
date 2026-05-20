import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
const _motion = motion;
import { useSafeReducedMotion, item } from "../utils/motionVariants";
import ImageWithSkeleton from "./ImageWithSkeleton";
import images from "../data/images";
import { Link } from "react-router-dom";
import workDetails from "../data/workdetails";
import { LuChevronRight } from "react-icons/lu";

const WorkDetailCard = ({ image = null, imageAlt = "Images not found" }) => {
  const reduce = useSafeReducedMotion();
  const basicinfo = workDetails.projects;

  return (
    <div
      id="work"
      className="flex flex-col max-w-[1200px] mx-auto px-4 gap-9 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-20 md:px-6 lg:px-10 xl:px-20 w-full"
    >
      {basicinfo.map((project, index) => (
        <motion.div
          key={project.id}
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
          whileInView={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px", amount: 0.2 }}
          transition={
            reduce ? { duration: 0 } : { duration: 0.48, delay: index * 0.08 }
          }
          variants={reduce ? undefined : item}
        >
          <Link
            to={`/work/${project.path}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col gap-4 sm:gap-5 lg:gap-6"
          >
            {/* ── Image card ── */}
            <div
              className={`w-full overflow-hidden
              liner
              lg:rounded-[32px]
              p-4 sm:p-6 lg:p-10 xl:p-12
              flex items-center justify-center
              transition-all duration-300 ease-out
              ${parseInt(project.id) % 2 === 0 ? "rounded-tr-4xl rounded-bl-4xl" : "rounded-tl-4xl rounded-br-4xl"}
              `}
            >
              <div className="w-full overflow-hidden">
                <ImageWithSkeleton
                  src={project.cardImage || image}
                  alt={project.cardImageAlt || imageAlt}
                  loading={index < 2 ? "eager" : "lazy"}
                  wrapperClassName="w-full max-w-[852px] mx-auto"
                  imgClassName="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* ── Meta row ── */}
            <div className="flex flex-col px-1">
              {/* Title row */}
              <div className="flex items-start justify-between">
                <h6
                  className="
                  font-bold tracking-[-0.015em]        
                  md:text-[18px]
                  text-[16px]
                  leading-[32px]
                  font-semibold
                  text-gray-700
                  flex items-center gap-1.5 flex-wrap
                "
                >
                  {project.title}
                  <MdArrowOutward
                    size={20}
                    className="
                    text-gray-700 flex-shrink-0
                    text-[16px] sm:text-[18px] lg:text-[20px]
                    transition-transform duration-200
                    group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                  "
                    aria-hidden="true"
                  />
                </h6>

                <span
                  className="
                  text-gray-500 font-normal flex-shrink-0
                  text-[16px]
                  leading-[32px]
                  font-[350] 
                "
                >
                  ©{project.year}
                </span>
              </div>

              {/* Description */}
              <p
                className="
                text-gray-500
                text-[14px] sm:text-[16px]
                sm:leading-[24px]
                font-normal 
              "
              >
                {project.description.split(". ").slice(0, 1).join(". ")}.
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default React.memo(WorkDetailCard);
