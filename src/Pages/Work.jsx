import React, { useState } from "react";
import { Link } from "react-router-dom";
import workDetails from "../data/workdetails";

/* ── Arrow icons ── */
const ArrowRight = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 6h8M6 2l4 4-4 4" />
  </svg>
);

const ArrowUpRight = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 10L10 3M10 3H5M10 3v5" />
  </svg>
);

/* ── Image placeholder ── */
const ImagePlaceholder = () => (
  <div className="flex flex-col items-center gap-2">
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6B6B59"
      strokeWidth="1.4"
      opacity="0.35"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="2.5" />
      <path d="M21 15L16 10L5 21" />
    </svg>
    <span className="text-[11px] text-[#9A9A82] tracking-[0.05em]">
      Cover image
    </span>
  </div>
);

/* ── Project Card ── */
const ProjectCard = ({ project, index }) => (
  <Link
    to={`/work/${project.id}`}
    className="group bg-white border border-[#6B6B59]/[0.13] rounded-[18px] overflow-hidden no-underline flex flex-col transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(107,107,89,0.12)] hover:border-[#6B6B59]/[0.28]"
  >
    {/* Image */}
    <div className="h-[200px] bg-[#f0efe8] relative overflow-hidden flex items-center justify-center flex-shrink-0">
      {/* Index badge */}
      <span className="absolute top-3 left-3.5 z-10 text-[10.5px] font-semibold tracking-[0.06em] text-[#9A9A82] bg-[#FCFCFD]/90 border border-[#6B6B59]/[0.18] rounded-full px-2.5 py-[3px] backdrop-blur-sm">
        {String(index + 1).padStart(2, "0")}
      </span>

      {project.cardImage ? (
        <img
          src={project.cardImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.04]"
        />
      ) : (
        <ImagePlaceholder />
      )}
    </div>

    {/* Body */}
    <div className="px-5 py-[18px] flex flex-col flex-1">
      <h3 className="text-[15.5px] font-semibold text-[#0F0E0E] tracking-[-0.01em] leading-snug mb-1.5 line-clamp-1 transition-colors duration-200 group-hover:text-[#6B6B59]">
        {project.title}
      </h3>
      <p className="text-[13px] text-[#808080] leading-[1.65] line-clamp-2 mb-3.5">
        {project.description}
      </p>

      {/* Detail tags */}
      {project.details?.length > 0 && (
        <div className="flex flex-wrap gap-[5px] mb-4">
          {project.details.slice(0, 3).map((detail, i) => (
            <span
              key={i}
              className="text-[11px] font-medium text-[#6B6B59] bg-[#6B6B59]/[0.07] border border-[#6B6B59]/[0.18] rounded-full px-2.5 py-[3px]"
            >
              {detail.value}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="mt-auto pt-3.5 border-t border-[#6B6B59]/[0.10] flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#6B6B59] tracking-[0.02em] transition-[gap] duration-200 group-hover:gap-2.5">
          View Project <ArrowRight />
        </span>

        <div className="w-7 h-7 rounded-full border border-[#6B6B59]/25 flex items-center justify-center text-[#6B6B59] transition-all duration-200 group-hover:bg-[#6B6B59] group-hover:border-[#6B6B59] group-hover:text-white">
          <ArrowUpRight />
        </div>
      </div>
    </div>
  </Link>
);

/* ── Main Page ── */
const Work = () => {
  const projects = workDetails.projects;

  // Collect unique filter values from project details
  const allFilters = [
    "All",
    ...new Set(
      projects.flatMap((p) => p.details?.slice(0, 1).map((d) => d.value) ?? []),
    ),
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) =>
          p.details?.some((d) => d.value === activeFilter),
        );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap');
        .font-playfair { font-family: 'Playfair Display', Georgia, serif; }
        .font-dm       { font-family: 'DM Sans', system-ui, sans-serif; }
        .duration-400  { transition-duration: 400ms; }
        .duration-250  { transition-duration: 250ms; }
      `}</style>

      <main className="font-dm bg-[#FCFCFD] min-h-screen px-5 sm:px-8 lg:px-0">
        <div className="max-w-6xl mx-auto py-14 lg:py-20 mt-10">
          {/* ── Header ── */}
          <header className="text-center mb-10">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9A9A82] mb-3">
              Portfolio
            </p>
            <h1 className="font-playfair text-[40px] sm:text-[48px] font-bold text-[#0F0E0E] tracking-[-0.025em] leading-[1.1] mb-3">
              Selected Work
            </h1>
            <p className="text-[15px] text-[#808080] leading-[1.65] max-w-[460px] mx-auto">
              A curated collection of design and development projects — from
              product UI to brand systems.
            </p>
          </header>

          {/* ── Filter pills ── */}
          {allFilters.length > 1 && (
            <div className="flex justify-center flex-wrap gap-2 mb-10">
              {allFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`font-dm text-[12px] font-medium rounded-full px-4 py-1.5 border transition-all duration-200 cursor-pointer ${
                    activeFilter === f
                      ? "text-[#6B6B59] border-[#6B6B59] bg-[#6B6B59]/[0.07]"
                      : "text-[#808080] border-[#6B6B59]/25 bg-transparent hover:text-[#6B6B59] hover:border-[#6B6B59] hover:bg-[#6B6B59]/[0.05]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          )}

          {/* ── Project Grid ── */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-[#9A9A82] text-[14px]">
              No projects match this filter.
            </div>
          )}

          {/* ── Footer count ── */}
          <p className="text-center text-[12px] text-[#9A9A82] mt-10 tracking-[0.03em]">
            Showing {filtered.length} of {projects.length} projects
          </p>
        </div>
      </main>
    </>
  );
};

export default Work;
