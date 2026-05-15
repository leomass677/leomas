import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Work from "./Work";
import DesignDetails from "./DesignDetails";

const GlobalRouter = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.8,
      easing: (t) => 1 - Math.pow(1 - t, 3),

      // Mobile-specific optimizations
      smoothWheel: true,
      smoothTouch: true, // CRITICAL for mobile
      touchMultiplier: 2.5, // Makes touch scrolling feel natural
      touchInertiaExponent: 1.7, // Controls momentum on mobile
      syncTouch: false, // Better performance on iOS

      wheelMultiplier: 1.2,
      lerp: 0.08,
      overscroll: true,
      allowNestedScroll: true, // Important for mobile menus/modals
      anchors: true,
    });

    // Optional: Log to confirm Lenis is working on mobile
    lenis.on("scroll", (e) => {
      // Remove this log in production
      // console.log('Smooth scroll active:', e.animatedScroll);
    });

    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<DesignDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default GlobalRouter;
