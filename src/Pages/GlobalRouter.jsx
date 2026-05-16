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
