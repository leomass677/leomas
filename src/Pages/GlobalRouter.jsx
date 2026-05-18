import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const NotFound = lazy(() => import("./NotFound"));
const Work = lazy(() => import("./Work"));
const DesignDetails = lazy(() => import("./DesignDetails"));

const GlobalRouter = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 2,
      syncTouch: true,
      wheelMultiplier: 1,
      lerp: 0.1,
      overscroll: true,
      allowNestedScroll: true,
      anchors: true,
    });

    // Lightweight RAF loop to drive Lenis only when page is visible
    let rafId = null;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        rafId = requestAnimationFrame(raf);
      } else if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    // start when visible
    if (document.visibilityState === "visible")
      rafId = requestAnimationFrame(raf);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Suspense fallback={<div aria-hidden="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:projectPath" element={<DesignDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default GlobalRouter;
