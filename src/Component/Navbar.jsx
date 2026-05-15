import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserCard from "./UserCard";
import { VscDash } from "react-icons/vsc";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigateTo = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
  ];

  // Only these styles can't be done purely in Tailwind:
  // 1. Custom gradient for CTA (complex rgba linear-gradient)
  // 2. Pseudo-element underline animation (::after)
  // 3. Custom font imports
  const ctaGradient = {
    background:
      "linear-gradient(211deg, rgba(228,228,203,0.25) 6.8%, rgba(241,241,229,0.38) 30.24%, rgba(228,228,203,0.25) 77.12%, rgba(241,241,229,0.50) 100.55%)",
  };
  const ctaGradientHover = {
    background:
      "linear-gradient(211deg, rgba(228,228,203,0.45) 6.8%, rgba(241,241,229,0.60) 30.24%, rgba(228,228,203,0.45) 77.12%, rgba(241,241,229,0.65) 100.55%)",
  };
  const logoGradient = {
    background: "linear-gradient(135deg, #6B6B59 0%, #9A9A82 100%)",
  };

  const [ctaHovered, setCtaHovered] = useState(false);
  const [mobilCtaHovered, setMobileCtaHovered] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap');

        .font-playfair { font-family: 'Playfair Display', Georgia, serif; }
        .font-dm       { font-family: 'DM Sans', system-ui, sans-serif; }

        /* Animated underline via ::after pseudo-element */
        .nav-link-line {
          position: relative;
        }
        .nav-link-line::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 14px;
          right: 14px;
          height: 1.5px;
          background: #6B6B59;
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
       

        /* Pulsing availability dot */
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.75); }
        }
        .pulse-dot {
          animation: pulse-dot 2.5s ease-in-out infinite;
        }

        /* Logo hover */
        .logo-mark {
          transition: transform 0.25s ease;
        }
        .logo-mark:hover {
          transform: scale(1.08) rotate(-3deg);
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#FCFCFD] ${
          scrolled ? "" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between  sm:px-6 lg:px-8 xl:px-[80px]">
          <div className="flex items-center justify-between h-16 w-full">
            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-2.5 no-underline">
              <UserCard />
            </Link>

            <div className="gap-6 flex">
              {/* ── Desktop Nav Links ── */}
              <div className="hidden md:flex items-center relative">
                <VscDash className="absolute  rotate-90 left-1/2 -translate-x-1/2 text-3xl translate-y-" />
                {navigation.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`nav-link-line font-dm relative px-[14px] py-1.5 text-[13.5px] font-medium tracking-[0.01em] no-underline transition-colors duration-200`}
                    >
                      <span className="flex flex-col relative h-6 overflow-hidden group px-1 p-0.5">
                        <p
                          className={`text-gray-600 group-hover:-translate-y-5  transition-all duration-200 ease-in ${
                            isActive
                              ? "text-[#6B6B59] text-dark font-bold -translate-y-6"
                              : "text-[#808080] hover:text-[#6B6B59]"
                          } `}
                        >
                          {" "}
                          {item.name}
                        </p>
                        <p
                          className={`text-stone group-hover:-translate-y-6 transition-all duration-300 ease-out font-bold  ${
                            isActive
                              ? "text-[#6B6B59] text-dark font-bold -translate-y-6"
                              : "text-[#808080] hover:text-[#6B6B59]"
                          }`}
                        >
                          {" "}
                          {item.name}
                        </p>
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* ── Desktop Right: Badge + CTA ── */}
              <div className="hidden md:flex items-center gap-4">
                {/* CTA Button */}
                <button
                  onMouseEnter={() => setCtaHovered(true)}
                  onMouseLeave={() => setCtaHovered(false)}
                  onClick={() => navigateTo("/contact")}
                  className="font-dm text-white rounded-full  !bg-stone/60 backdrop-blur-2xl cursor-pointer hover:scale-105  scale-95 transition-all duration-150 pl-[22px] shadow-xs hover:shadow-md py-3 pr-[24px]"
                >
                  Let's Talk
                </button>
              </div>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-[8px] border border-[#6B6B59]/20 text-[#6B6B59] transition-all duration-200 hover:bg-[#6B6B59]/[0.06] hover:border-[#6B6B59]/35"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                {isOpen ? (
                  <>
                    <path d="M4 4L14 14" />
                    <path d="M14 4L4 14" />
                  </>
                ) : (
                  <>
                    <path d="M3 5H15" />
                    <path d="M3 9H15" />
                    <path d="M3 13H10" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* ── Mobile Menu Panel ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#FCFCFD]/97 backdrop-blur-xl border-t border-[#6B6B59]/[0.08] ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pt-3 pb-5 flex flex-col gap-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-dm text-[14px] font-medium tracking-[0.01em] px-3.5 py-2.5 rounded-[10px] no-underline transition-all duration-200 ${
                    isActive
                      ? "text-[#6B6B59] bg-[#6B6B59]/[0.08]"
                      : "text-[#808080] hover:text-[#6B6B59] hover:bg-[#6B6B59]/[0.05]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile footer */}
            <div className="mt-3 pt-3 border-t border-[#6B6B59]/10 flex flex-col gap-3">
              <div className="font-dm flex items-center gap-2 text-[12px] text-[#808080]">
                <span className="pulse-dot inline-block w-1.5 h-1.5 rounded-full bg-[#6B6B59] flex-shrink-0" />
                Available for work
              </div>
              <button
                onMouseEnter={() => setMobileCtaHovered(true)}
                onMouseLeave={() => setMobileCtaHovered(false)}
                style={mobilCtaHovered ? ctaGradientHover : ctaGradient}
                className="font-dm w-full text-[14px] font-semibold tracking-[0.03em] text-[#6B6B59] border border-[#6B6B59]/35 rounded-xl py-2.5 transition-all duration-200 hover:border-[#6B6B59]/55 cursor-pointer"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
