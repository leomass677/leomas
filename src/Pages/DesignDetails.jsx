import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import workDetails from "../data/workdetails";

const ArrowLeft = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 2L4 7l5 5" />
  </svg>
);

const ArrowRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 2l5 5-5 5" />
  </svg>
);

const DesignDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = workDetails.projects;
  const currentProject = projects.find((d) => d?.id === parseInt(id));

  if (!currentProject) {
    return (
      <div className="min-h-screen bg-[#FCFCFD] flex items-center justify-center">
        <div className="text-center">
          <p className="text-5xl font-bold text-[#6B6B59] mb-3">404</p>
          <p className="text-[#808080] text-base mb-6">Project not found.</p>
          <Link
            to="/design"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#6B6B59] border border-[#6B6B59]/30 rounded-full px-5 py-2 hover:bg-[#6B6B59]/[0.06] transition-all no-underline"
          >
            <ArrowLeft /> Back to all work
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((d) => d?.id === parseInt(id));
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  const handlePrev = () =>
    navigate(
      `/work/${prevProject ? prevProject.id : projects[projects.length - 1].id}`,
    );
  const handleNext = () =>
    navigate(`/work/${nextProject ? nextProject.id : projects[0].id}`);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap');
        .font-playfair { font-family: 'Playfair Display', Georgia, serif; }
        .font-dm       { font-family: 'DM Sans', system-ui, sans-serif; }
        .section-rule::after {
          content: '';
          flex: 1;
          height: 0.5px;
          background: rgba(107,107,89,0.15);
        }
      `}</style>

      <main className="font-dm min-h-screen bg-[#FCFCFD] px-5 sm:px-8 lg:px-0">
        <div className="max-w-[760px] mx-auto py-12 lg:py-16">
          {/* ── Back link ── */}
          <Link
            to="/design"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.1em] uppercase text-[#808080] hover:text-[#6B6B59] transition-colors mb-10 no-underline group"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform">
              <ArrowLeft />
            </span>
            Back to work
          </Link>

          {/* ── Header ── */}
          <header className="mb-9">
            <span className="inline-block text-[11px] font-semibold tracking-[0.12em] uppercase text-[#9A9A82] bg-[#6B6B59]/[0.07] rounded-full px-3 py-1 mb-4">
              Case Study
            </span>
            <h1 className="font-playfair text-[34px] sm:text-[40px] font-bold text-[#0F0E0E] leading-[1.15] tracking-tight mb-3">
              {currentProject.title}
            </h1>
            <p className="text-[15.5px] text-[#808080] leading-relaxed max-w-[580px]">
              {currentProject.description}
            </p>
          </header>

          {/* ── Meta strip ── */}
          <div className="flex flex-wrap border-t border-b border-[#6B6B59]/[0.13] mb-12">
            {currentProject.details.map((detail, idx) => (
              <div
                key={idx}
                className="flex-1 min-w-[110px] px-5 py-4 border-r border-[#6B6B59]/[0.10] last:border-r-0"
              >
                <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#9A9A82] mb-1">
                  {detail.label}
                </p>
                <p className="text-[13.5px] font-medium text-[#0F0E0E]">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>

          {/* ── Background Story ── */}
          <section className="mb-11">
            <div className="flex items-center gap-3 mb-4 section-rule">
              <span className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-[#9A9A82] whitespace-nowrap">
                Background
              </span>
            </div>
            {currentProject.backgroundStory.map((para, idx) => (
              <p
                key={idx}
                className="text-[15px] text-[#555] leading-[1.78] mb-3 last:mb-0"
              >
                {para}
              </p>
            ))}
          </section>

          {/* ── My Contribution ── */}
          <section className="mb-11">
            <div className="flex items-center gap-3 mb-4 section-rule">
              <span className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-[#9A9A82] whitespace-nowrap">
                My Contribution
              </span>
            </div>
            <ul className="flex flex-col gap-2.5 list-none">
              {currentProject.contribution.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[14.5px] text-[#555] leading-[1.65]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6B6B59] flex-shrink-0 mt-[7px]" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* ── Design Goal + Outcome ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-11">
            <div className="bg-white border border-[#6B6B59]/[0.13] rounded-2xl p-6">
              <p className="text-[10.5px] font-semibold tracking-[0.1em] uppercase text-[#9A9A82] mb-2.5">
                Design Goal
              </p>
              <p className="text-[14px] text-[#555] leading-[1.72]">
                {currentProject.designGoal}
              </p>
            </div>
            <div className="bg-white border border-[#6B6B59]/[0.13] rounded-2xl p-6">
              <p className="text-[10.5px] font-semibold tracking-[0.1em] uppercase text-[#9A9A82] mb-2.5">
                Outcome
              </p>
              <p className="text-[14px] text-[#555] leading-[1.72]">
                {currentProject.outcome}
              </p>
            </div>
          </div>

          {/* ── Key Solutions ── */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4 section-rule">
              <span className="text-[10.5px] font-semibold tracking-[0.12em] uppercase text-[#9A9A82] whitespace-nowrap">
                Key Solutions
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentProject.keySolutions.map((solution, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#6B6B59]/[0.13] rounded-xl px-5 py-3.5 text-[13.5px] text-[#6B6B59] font-medium leading-snug before:content-['→_'] before:text-[#9A9A82]"
                >
                  {solution}
                </div>
              ))}
            </div>
          </section>

          {/* ── Navigation ── */}
          <div className="flex items-center justify-between gap-4 border-t border-[#6B6B59]/[0.13] pt-7">
            <button
              onClick={handlePrev}
              disabled={!prevProject && currentIndex === 0}
              className="inline-flex items-center gap-2 text-[13px] font-medium text-[#6B6B59] border border-[#6B6B59]/30 rounded-full px-[18px] py-2 hover:bg-[#6B6B59]/[0.06] hover:border-[#6B6B59]/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer bg-transparent"
            >
              <ArrowLeft />
              Previous
            </button>

            <Link
              to="/design"
              className="text-[11.5px] font-semibold tracking-[0.1em] uppercase text-[#9A9A82] hover:text-[#6B6B59] transition-colors no-underline"
            >
              All Projects
            </Link>

            <button
              onClick={handleNext}
              disabled={!nextProject && currentIndex === projects.length - 1}
              className="inline-flex items-center gap-2 text-[13px] font-medium text-[#6B6B59] border border-[#6B6B59]/30 rounded-full px-[18px] py-2 hover:bg-[#6B6B59]/[0.06] hover:border-[#6B6B59]/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer bg-transparent"
            >
              Next
              <ArrowRight />
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default DesignDetails;
