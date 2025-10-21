import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NotFound from "./NotFound";
import Design from "./Design";

import DesignDetails from "./DesignDetails"; // Assume you have this
import { div } from "framer-motion/client";

const GlobalRouter = () => {
  return (
    <div>
      <Navbar />;
      <Router className="max-w-[1440px] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/design/:id" element={<DesignDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default GlobalRouter;
