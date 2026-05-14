import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Work from "./Work";
import DesignDetails from "./DesignDetails";

const GlobalRouter = () => {
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
