import React, { useRef, useState, useEffect, useCallback } from "react";
import about from "../data/about";
import { MdArrowOutward, MdClose } from "react-icons/md";

/* ════════════════════════════════════════════
   Certificate Dialog
   ════════════════════════════════════════════ */
const CertificateDialog = ({ item, onClose }) => {
  /* Close on Escape key */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  /* Prevent body scroll while open */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    /* Backdrop */
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.role} certificate`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10"
      onClick={onClose}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-[#0F0E0E]/60 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="
          relative z-10 w-full max-w-[560px] sm:max-w-[640px] lg:max-w-[720px]
          bg-white rounded-2xl sm:rounded-[24px]
          shadow-[0_24px_64px_rgba(0,0,0,0.18)]
          flex flex-col overflow-hidden
          animate-[fadeSlideUp_0.25s_ease-out]
        "
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "fadeSlideUp 0.25s ease-out both" }}
      >
        {/* ── Dialog header ── */}
        <div className="flex items-start justify-between gap-4 px-5 sm:px-7 pt-5 sm:pt-6 pb-4 border-b border-[#6B6B59]/10">
          <div className="flex flex-col gap-0.5">
            <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#9A9A82]">
              Certificate
            </p>
            <h3 className="text-[16px] sm:text-[18px] font-bold text-[#0F0E0E] tracking-[-0.015em] leading-[1.25]">
              {item.role}
            </h3>
            <p className="text-[13px] text-[#808080] font-medium mt-0.5">
              {item.company} · {item.dateDisplay}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="
              flex-shrink-0 w-8 h-8 rounded-full
              flex items-center justify-center
              text-[#808080] bg-[#6B6B59]/[0.07]
              hover:bg-[#6B6B59]/[0.14] hover:text-[#0F0E0E]
              transition-all duration-200 cursor-pointer
              border border-[#6B6B59]/[0.15]
            "
          >
            <MdClose className="text-[16px]" />
          </button>
        </div>

        {/* ── Certificate image area ── */}
        <div className="px-5 sm:px-7 py-5 sm:py-6 flex flex-col gap-4">
          <div className="w-full bg-[#FCFCFD] border border-[#6B6B59]/[0.12] rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center min-h-[220px] sm:min-h-[280px]">
            {item.certificateImage ? (
              <img
                src={item.certificateImage}
                alt={`${item.role} certificate`}
                className="w-full h-full object-contain"
              />
            ) : (
              /* Placeholder when no image URL is provided */
              <div className="flex flex-col items-center gap-3 py-10 px-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#6B6B59]/[0.08] border border-[#6B6B59]/[0.15] flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6B6B59"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.6"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <p className="text-[13px] text-[#9A9A82] font-medium leading-[1.5]">
                  Certificate image not available.
                  <br />
                  View the original below.
                </p>
              </div>
            )}
          </div>

          {/* ── Footer actions ── */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex flex-wrap gap-1.5">
              {item.technologies.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[#6B6B59] bg-[rgba(107,107,89,0.07)] border border-[rgba(107,107,89,0.18)] rounded-full px-2.5 py-[3px]"
                >
                  {t}
                </span>
              ))}
            </div>

            {item.certificateUrl && (
              <a
                href={item.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-semibold text-white bg-[#6B6B59] rounded-full px-4 py-2 hover:bg-[#5a5a4a] transition-colors no-underline"
              >
                Open Original
                <MdArrowOutward className="text-[14px]" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(12px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
      `}</style>
    </div>
  );
};

/* ════════════════════════════════════════════
   Mobile Card
   ════════════════════════════════════════════ */
const MobileCard = ({ item, index, total, onViewCert }) => (
  <>
    <div className="flex items-start justify-between gap-2">
      <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#9A9A82]">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <span className="text-[11px] text-[#9A9A82] font-medium">
        {item.dateDisplay}
      </span>
    </div>

    <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0F0E0E] leading-[1.2] tracking-[-0.015em]">
      {item.role}
    </h3>

    <p className="text-[13px] sm:text-[14px] text-[#808080] font-medium">
      {item.company} · {item.location}
    </p>

    <ul className="flex flex-col gap-1.5 mt-1">
      {item.highlights.map((h, i) => (
        <li
          key={i}
          className="flex items-start gap-2 text-[13px] sm:text-[14px] text-[#808080] leading-[1.6]"
        >
          <span className="w-1 h-1 rounded-full bg-[#6B6B59] flex-shrink-0 mt-[7px]" />
          {h}
        </li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-1.5 mt-1">
      {item.technologies.map((t) => (
        <span
          key={t}
          className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[#6B6B59] bg-[rgba(107,107,89,0.07)] border border-[rgba(107,107,89,0.18)] rounded-full px-2.5 py-[3px]"
        >
          {t}
        </span>
      ))}
    </div>

    {item.certificateUrl && (
      <button
        onClick={() => onViewCert(item)}
        className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#6B6B59] hover:opacity-70 transition-opacity mt-1 cursor-pointer bg-transparent border-none p-0"
      >
        View Certificate
        <MdArrowOutward className="text-[14px]" aria-hidden="true" />
      </button>
    )}
  </>
);

/* ════════════════════════════════════════════
   Desktop Card
   ════════════════════════════════════════════ */
const DesktopCard = ({ item, isActive, onViewCert }) => (
  <div
    className={`
      w-full flex flex-col gap-5 py-10
      transition-all duration-500 ease-out
      ${isActive ? "opacity-100 translate-y-0" : "opacity-30 translate-y-2"}
    `}
  >
    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#9A9A82]">
      {item.dateDisplay}
    </p>

    <h3 className="font-bold text-[#0F0E0E] tracking-[-0.02em] text-[26px] leading-[1.18] lg:text-[32px] lg:leading-[1.15] xl:text-[36px] xl:leading-[1.12]">
      {item.role}
    </h3>

    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-[15px] lg:text-[16px] text-[#0F0E0E] font-semibold">
        {item.company}
      </span>
      <span className="w-1 h-1 rounded-full bg-[#9A9A82]" aria-hidden="true" />
      <span className="text-[14px] lg:text-[15px] text-[#808080]">
        {item.location}
      </span>
    </div>

    <div className="w-full h-px bg-[#6B6B59]/10" />

    <ul className="flex flex-col gap-2.5">
      {item.highlights.map((h, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-[14px] lg:text-[15px] text-[#808080] leading-[1.65]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#6B6B59] flex-shrink-0 mt-[7px]" />
          {h}
        </li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2">
      {item.technologies.map((t) => (
        <span
          key={t}
          className="text-[10px] lg:text-[11px] font-semibold tracking-[0.1em] uppercase text-[#6B6B59] bg-[rgba(107,107,89,0.07)] border border-[rgba(107,107,89,0.18)] rounded-full px-3 py-1"
        >
          {t}
        </span>
      ))}
    </div>

    {item.certificateUrl && (
      <button
        onClick={() => onViewCert(item)}
        className="inline-flex items-center gap-1.5 text-[13px] lg:text-[14px] font-semibold text-[#6B6B59] hover:opacity-70 transition-opacity cursor-pointer bg-transparent border-none p-0 self-start"
      >
        View Certificate
        <MdArrowOutward className="text-[15px]" aria-hidden="true" />
      </button>
    )}
  </div>
);

/* ════════════════════════════════════════════
   Main Component
   ════════════════════════════════════════════ */
const WorkExperience = () => {
  const experience = about.experience;
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);

  const openCert = useCallback((item) => setSelectedCert(item), []);
  const closeCert = useCallback(() => setSelectedCert(null), []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const cards = container.querySelectorAll("[data-card]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActiveIndex(Number(entry.target.dataset.card));
        });
      },
      { root: container, rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        aria-label="Work Experience"
        className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16"
      >
        {/* ── Mobile (< md) ── */}
        <div className="md:hidden flex flex-col gap-0">
          <div className="py-10 border-b border-[#6B6B59]/15">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#9A9A82] mb-2">
              Career
            </p>
            <h2 className="text-[28px] sm:text-[32px] font-bold text-[#0F0E0E] leading-[1.15] tracking-[-0.02em]">
              {experience?.title}
            </h2>
          </div>
          {experience.items.map((item, idx) => (
            <div
              key={item.id}
              className="flex flex-col gap-3 py-8 border-b border-[#6B6B59]/10 last:border-none"
            >
              <MobileCard
                item={item}
                index={idx}
                total={experience.items.length}
                onViewCert={openCert}
              />
            </div>
          ))}
        </div>

        {/* ── Desktop (≥ md) ── */}
        <div
          ref={containerRef}
          className="hidden md:flex gap-8 lg:gap-12 xl:gap-16 h-screen overflow-y-scroll relative scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {/* Left sticky */}
          <div className="sticky top-0 h-screen flex flex-col justify-center gap-8 w-[200px] lg:w-[260px] xl:w-[300px] flex-shrink-0 py-16">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#9A9A82] mb-3">
                Career
              </p>
              <h2 className="font-bold text-[#0F0E0E] tracking-[-0.02em] text-[22px] leading-[1.2] lg:text-[26px] lg:leading-[1.15] xl:text-[30px] xl:leading-[1.1]">
                {experience?.title}
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {experience.items.map((item, idx) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 transition-all duration-300 ${activeIndex === idx ? "opacity-100" : "opacity-35"}`}
                >
                  <div
                    className={`h-px transition-all duration-300 ${activeIndex === idx ? "w-6 bg-[#6B6B59]" : "w-3 bg-[#9A9A82]"}`}
                  />
                  <span
                    className={`text-[11px] font-medium tracking-[0.01em] transition-colors duration-300 ${activeIndex === idx ? "text-[#6B6B59]" : "text-[#9A9A82]"}`}
                  >
                    {item.role.split(" ").slice(0, 2).join(" ")}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#9A9A82] font-medium tracking-[0.06em]">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(experience.items.length).padStart(2, "0")}
            </p>
          </div>

          {/* Right scrolling */}
          <div className="flex-1 flex flex-col py-16">
            <div className="h-[20vh] flex-shrink-0" />
            {experience.items.map((item, idx) => (
              <div
                key={item.id}
                data-card={idx}
                className="min-h-[70vh] flex items-center border-t border-[#6B6B59]/10 first:border-t-0"
              >
                <DesktopCard
                  item={item}
                  index={idx}
                  isActive={activeIndex === idx}
                  onViewCert={openCert}
                />
              </div>
            ))}
            <div className="h-[20vh] flex-shrink-0" />
          </div>
        </div>
      </section>

      {/* ── Certificate Dialog (rendered in portal-like fixed position) ── */}
      {selectedCert && (
        <CertificateDialog item={selectedCert} onClose={closeCert} />
      )}
    </>
  );
};

export default WorkExperience;
