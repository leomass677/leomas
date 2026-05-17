import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import workDetails from "../data/workdetails";
import { MdArrowOutward } from "react-icons/md";

import {
  TbArrowLeft,
  TbArrowUpRight,
  TbArrowNarrowRight,
} from "react-icons/tb";
import {
  SiFigma,
  SiReact,
  SiGithub,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

/* ── Tool icon map ── */
const TOOL_ICONS = {
  Figma: <SiFigma className="text-[#F24E1E]" />,
  React: <SiReact className="text-[#61DAFB]" />,
  GitHub: <SiGithub className="text-[#333]" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
  Tailwind: <SiTailwindcss className="text-[#38BDF8]" />,
  TailwindCSS: <SiTailwindcss className="text-[#38BDF8]" />,
  Java: <FaJava className="text-[#ED8B00]" />,
};

const DesignDetails = () => {
  const { projectPath } = useParams();
  const navigate = useNavigate();

  const projects = workDetails.projects;
  const currentProject = projects.find((d) => d?.path === projectPath);

  /* ── 404 ── */
  if (!currentProject) {
    return (
      <div className="min-h-screen bg-[#FCFCFD] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-5xl font-bold text-[#6B6B59] mb-3">404</p>
          <p className="text-[#808080] text-base mb-6">Project not found.</p>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#6B6B59] border border-[#6B6B59]/30 rounded-full px-5 py-2 hover:bg-[#6B6B59]/[0.06] transition-all no-underline"
          >
            <TbArrowLeft size={14} /> Back to all work
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((d) => d?.path === projectPath);
  const nextProject = projects[currentIndex + 1];

  const handleNext = () => {
    navigate(`/work/${nextProject ? nextProject.path : projects[0].path}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#FCFCFD] pt-24 pb-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
        {/* ━━━ HEADER ━━━ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 mb-8 lg:mb-10">
          {/* Left: category + title + description */}
          <div className="flex flex-col gap-3">
            <div className="space-y-2">
              <MdArrowOutward
                size={38}
                className="scale-x-[-1] -translate-x-2"
              />
              <p
                className=" font-semibold text-[#878789] tracking-[-0.02em] leading-[1.12]
              text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px]"
              >
                Designing
              </p>
            </div>
            <h1
              className="
                font-bold text-[#0F0E0E] tracking-[-0.02em] leading-[1.12]
                text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px]
              "
            >
              {currentProject.title}
            </h1>
            <p className="text-[14px] sm:text-[16px] text-[#808080] leading-[1.7] max-w-[680px] ">
              {currentProject.overview}
            </p>
          </div>

          {/* Right: meta grid */}
          <div className="grid grid-cols-2 lg:self-end lg:pb-4 sm:grid-cols-3 gap-8 items-center lg:grid-cols-2  lg:min-w-[220px] h-fit  lg:pt-2">
            {currentProject.details.map((detail, idx) => (
              <div key={idx} className="flex flex-col gap-0.5">
                <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#9A9A82]">
                  {detail.label}
                </p>
                <p className="text-[16px] italic font-semibold text-dark">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ━━━ HERO IMAGE ━━━ */}
        {currentProject.cardImage && (
          <div className="w-full bg-[#F0EFE8] rounded-2xl sm:rounded-[24px] overflow-hidden mb-14 sm:mb-16">
            <img
              src={currentProject.cardImage}
              alt={currentProject.title}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* ━━━ BACKGROUND STORY ━━━ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 lg:gap-16 mb-14">
          {/* Story text */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#9A9A82] mb-4">
              Background Story
            </p>
            {currentProject.backgroundStory.map((para, idx) => (
              <p
                key={idx}
                className="text-[14px] sm:text-[15px] text-[#555] leading-[1.78] mb-3 last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Contribution sidebar */}
          <div className="lg:pt-8">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#9A9A82] mb-4">
              My Contribution
            </p>
            <ul className="flex flex-col gap-2">
              {currentProject.contribution.map((item, idx) => (
                <li
                  key={idx}
                  className="text-[13px] flex items-center gap-1 sm:text-[14px] text-[#555] leading-[1.6]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ━━━ DESIGN GOAL + OUTCOME — dark band ━━━ */}
        <div className="bg-[#0F0E0E] rounded-md shadow-2xs p-6 sm:p-8 lg:p-10 mb-14 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-gray-50/60 mb-3">
              Design Goal
            </p>
            <p className="text-[14px] sm:text-[15px] text-white/70 leading-[1.72]">
              {currentProject.designGoal}
            </p>
          </div>
          <div>
            <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-gray-50/60 mb-3">
              Outcome
            </p>
            <p className="text-[14px] sm:text-[15px] text-white/70 leading-[1.72]">
              {currentProject.outcome}
            </p>
          </div>
        </div>

        {/* ━━━ KEY SOLUTIONS + GENERATING IDEAS ━━━ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-14">
          {/* Solutions list */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#9A9A82] mb-4">
              Key Solution — Some prioritised features
            </p>
            <ol className="flex flex-col gap-2 list-none">
              {currentProject.keySolutions.map((s, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-[14px] text-[#555] leading-[1.65]"
                >
                  <span className="text-[#9A9A82] flex-shrink-0 font-medium tabular-nums mt-px">
                    {idx + 1}.
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </div>

          {/* Generating ideas */}
          {currentProject.generatingIdeas && (
            <div>
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#9A9A82] mb-4">
                Generating ideas from findings…
              </p>
              <p className="text-[14px] text-[#555] leading-[1.72]">
                {currentProject.generatingIdeas}
              </p>
            </div>
          )}
        </div>

        {/* ━━━ INFORMATION ARCHITECTURE ━━━ */}
        {currentProject.infoArchitecture && (
          <div className="mb-14">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#9A9A82] mb-4">
              Information Architecture
            </p>
            <p className="text-[14px] text-[#555] leading-[1.72] mb-6 max-w-[600px]">
              {currentProject.infoArchitecture.description}
            </p>
            {currentProject.infoArchitecture.image && (
              <div className="w-full border border-[#6B6B59]/[0.12] rounded-xl overflow-hidden">
                <img
                  src={currentProject.infoArchitecture.image}
                  alt="Information architecture diagram"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
        )}

        {/* ━━━ VISUAL IDENTITY & MOCKUPS ━━━ */}
        {currentProject.mockups?.length > 0 && (
          <div className="mb-14">
            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#0F0E0E] tracking-[-0.015em] text-center mb-8">
              Visual Identity &amp; Mockups
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentProject.mockups.map((img, idx) => (
                <div
                  key={idx}
                  className="w-full bg-[#F5F5F0] rounded-xl sm:rounded-2xl overflow-hidden border border-[#6B6B59]/[0.1]"
                >
                  <img
                    src={img}
                    alt={`Mockup ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ━━━ KEY INSIGHTS & GROWTH ━━━ */}
        {currentProject.keyInsights && (
          <div className="mb-14">
            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#0F0E0E] tracking-[-0.015em] mb-4">
              Key Insights &amp; Growth
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#808080] leading-[1.72] max-w-[680px]">
              {currentProject.keyInsights}
            </p>
          </div>
        )}

        {/* ━━━ NEXT PROJECT ━━━ */}
        {nextProject && (
          <div className="w-full border-t border-[#6B6B59]/[0.13] pt-10 mb-14 text-center">
            <button
              onClick={handleNext}
              className="group inline-flex flex-col items-center gap-2 cursor-pointer bg-transparent border-none"
            >
              <span className="text-[20px] sm:text-[24px] font-bold text-[#0F0E0E] tracking-[-0.015em] flex items-center gap-2 group-hover:text-[#6B6B59] transition-colors">
                Next Project
                <TbArrowUpRight
                  size={22}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </span>
            </button>
          </div>
        )}

        {/* ━━━ TOOLS I WORKED WITH ━━━ */}
        {currentProject.technologies?.length > 0 && (
          <div className="mb-16">
            <h2 className="text-[18px] sm:text-[22px] font-bold text-[#0F0E0E] tracking-[-0.01em] text-center mb-8">
              Some Tools I Worked With
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
              {currentProject.technologies.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 text-[#313130]"
                >
                  <span className="text-[28px] sm:text-[32px] flex items-center">
                    {TOOL_ICONS[tech] ?? null}
                  </span>
                  <span className="text-[14px] sm:text-[15px] font-semibold text-[#0F0E0E]">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default DesignDetails;
