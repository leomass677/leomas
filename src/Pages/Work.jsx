import React from "react";
import workDetails from "../data/workdetails";
import WorkDetailCard from "../Component/WorkDetailCard";

const Work = () => {
  const projects = workDetails.projects;

  return (
    <main
      onLoad={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="min-h-screen bg-[#FCFCFD]"
    >
      <div className="flex flex-col max-w-[1200px] mx-auto px-4 gap-9 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-20 md:px-6 lg:px-10 xl:px-20 w-full pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 lg:pb-16 ">
        {/* ── Header ── */}
        <header className="flex flex-col gap-3 max-w-[640px]">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#878789]">
            Selected work ·{" "}
            <span className="text-gray-600 font-bold">From 2025</span>{" "}
            <span className="">- Present</span>
          </p>
          <h1
            className="
              font-semibold font-display text-[#0F0E0E]
              md:text-[48px]
              sm:text-[40px]
              text-[32px]
              tracking-normal
              font-semibold
              md:leading-[64px] 
              leading-[43.2px]
              text-grey w-full
              tracking-normal
              
              lg:tracking-normal
              xl:tracking-wide
            "
          >
            Projects <br />
            <span className="text-[#808080]">Crafted with Purpose.</span>
          </h1>
          <p className="text-[14px] sm:text-[15px] text-[#808080] leading-[1.72] max-w-[480px]">
            Navigater to explore each project in details.
          </p>
        </header>

        {/* ── Project list ── */}
      </div>
      <div className="flex flex-col gap-10 sm:gap-14">
        {projects.map((project) => (
          <WorkDetailCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
};

export default Work;
