import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import images from "./data/images";

// Preload critical images to improve LCP
const preloadImages = [images.about_image, images.screen1];
const setPreload = (url) => {
  try {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = url;
    document.head.appendChild(link);
  } catch (e) {
    // ignore
  }
};
preloadImages.forEach(setPreload);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
