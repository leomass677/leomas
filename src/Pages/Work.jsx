import React from "react";
import workDetails from "../data/workdetails";
import WorkDetailCard from "../Component/WorkDetailCard";

const Work = () => {
  const projects = workDetails.projects;

  return (
    <main className="min-h-screen bg-[#FCFCFD]">
      <div className="flex flex-col max-w-[1200px] mx-auto px-4 gap-9 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-20 md:px-6 lg:px-10 xl:px-20 w-full pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 lg:pb-16 ">
        {/* ── Header ── */}
        <header className="flex flex-col gap-3 max-w-[640px]">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#878789]">
            Selected work · {new Date().getFullYear()}
          </p>
          <h1
            className="
              font-bold text-[#0F0E0E] tracking-[-0.028em] leading-[1.08] md:leading-[1.12]
              text-[32px] sm:text-[42px] md:text-[50px]
            "
          >
            Things I've <span className="text-[#878789]">designed</span>
            <br />
            &amp; built.
          </h1>
          <p className="text-[14px] sm:text-[15px] text-[#808080] leading-[1.72] max-w-[480px]">
            A collection of product design and development work from early
            concepts to shipped experiences.
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
