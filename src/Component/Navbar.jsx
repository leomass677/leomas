import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const _motion = motion;
import UserCard from "./UserCard";
import { VscDash } from "react-icons/vsc";
import { LuText, LuX } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigateTo = useNavigate();

  /* ── Close mobile menu on route change ── */
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* ── Scroll to top helper function ── */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ── Handle navigation with scroll to top ── */
  const handleNavigation = (path) => {
    navigateTo(path);
    scrollToTop();
  };

  const navigation = [
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <style>{`
        .font-dm { font-family: 'DM Sans', system-ui, sans-serif; }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.75); }
        }
        .pulse-dot { animation: pulse-dot 2.5s ease-in-out infinite; }
      `}</style>

      {/* ── Fixed nav wrapper ── */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 w-full z-50 bg-[#FCFCFD] transition-shadow duration-300"
      >
        {/* ── Inner bar ── */}
        {/* h-16 on mobile (64px), h-20 on md+ */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[80px] h-16 md:h-20 flex items-center justify-between">
          {/* Logo / UserCard */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="no-underline flex-shrink-0"
          >
            <Link to="/" onClick={scrollToTop} className="no-underline">
              <UserCard />
            </Link>
          </motion.div>

          {/* Desktop: nav links + CTA */}
          <div className="hidden md:flex items-center gap-6">
            {/* Nav links with scroll-flip animation */}
            <div className="flex items-center relative">
              {/* Vertical divider between links */}
              <VscDash className="absolute left-1/2 -translate-x-1/2 rotate-90 text-3xl text-[#9A9A82] pointer-events-none" />

              {navigation.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                    className="flex gap-5 items-center"
                  >
                    <div
                      onClick={() => handleNavigation(item.path)}
                      className="relative px-[16px] py-1.5 no-underline font-dm cursor-pointer"
                    >
                      {/* Flip container: normal → bold on hover / active */}
                      <span className="flex flex-col h-6 overflow-hidden group">
                        {/* Line 1 — default */}
                        <p
                          className={`px-1 transition-all duration-200 ease-in leading-6 ${
                            isActive
                              ? "text-[#6B6B59] font-bold -translate-y-6"
                              : "text-[#808080] group-hover:-translate-y-6"
                          }`}
                        >
                          {item.name}
                        </p>
                        {/* Line 2 — hovered / active (bold) */}
                        <p
                          className={`px-1 font-bold transition-all duration-300 ease-out leading-6 ${
                            isActive
                              ? "text-[#6B6B59] -translate-y-6"
                              : "text-[#313130] group-hover:-translate-y-6"
                          }`}
                        >
                          {item.name}
                        </p>
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Let's Talk CTA */}
            <motion.button
              onClick={() => handleNavigation("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="
                font-dm text-white bg-dark shadow-md backdrop-blur-2xl
                rounded-full px-6 pl-[26px] py-4 pb-[18px]
                text-[14px] font-medium
                tracking-wide
                scale-95 hover:scale-105
                hover:shadow-md
                transition-all duration-150 cursor-pointer
              "
            >
              Let's Talk
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-[28px] text-[#0F0E0E] p-1 flex items-center justify-center"
          >
            {isOpen ? <LuX /> : <LuText />}
          </motion.button>
        </div>

        {/* ── Mobile menu panel ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-[#FCFCFD]/97 backdrop-blur-xl border-t border-[#6B6B59]/[0.08]"
            >
              <motion.div
                className="px-5 pt-4 pb-6 flex flex-col gap-1"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                {/* Nav links */}
                {navigation.map((item, idx) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.1, duration: 0.3 }}
                      className="flex"
                    >
                      <div
                        onClick={() => {
                          handleNavigation(item.path);
                          setIsOpen(false);
                        }}
                        className={`
                          font-dm text-[16px] w-full font-medium tracking-[0.01em]
                          px-3.5 py-2.5 rounded-[10px] no-underline
                          transition-all duration-200 cursor-pointer
                          ${isActive ? "text-dark italic font-bold" : "text-gray-500 italic"}
                        `}
                      >
                        {item.name}
                      </div>
                    </motion.div>
                  );
                })}

                {/* Availability + action buttons */}
                <motion.div
                  className="mt-3 pt-3 border-t border-[#6B6B59]/10 flex flex-col gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <div className="flex flex-col gap-3 mt-2">
                    {/* Let's Talk */}
                    <motion.button
                      onClick={() => {
                        handleNavigation("/contact");
                        setIsOpen(false);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: -1, scale: 0 }}
                      animate={{ opacity: 1, y: 1, scale: 1 }}
                      transition={{ delay: 0.1, duration: 0.2 }}
                      className="
                        w-full text-center px-8 py-4
                        bg-[#0F0E0E] text-[#f8f8f5]
                        font-dm text-[14px] font-medium
                        rounded-[32px]
                        active:scale-95 transition-all ease-in-out duration-200
                        cursor-pointer border-none
                      "
                    >
                      Drop me a massage
                    </motion.button>

                    {/* Download CV */}
                    <motion.button
                      onClick={() => {
                        window.open("/files/cv.pdf", "_blank");
                        setIsOpen(false);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="
                        w-full text-center px-8 py-4
                        bg-[#878789] text-[#f8f8f5]
                        font-dm text-[14px] font-medium
                        rounded-[32px]
                        active:scale-95 transition-all ease-in-out duration-200
                        cursor-pointer border-none
                      "
                    >
                      Download CV
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ── Mobile backdrop ── */}
      {/* Dim the page behind the open menu; click to close */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0F0E0E]/40 backdrop-blur-[2px] md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
