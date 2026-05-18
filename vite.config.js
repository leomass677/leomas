import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";
import viteImagemin from "vite-plugin-imagemin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // enable image transforms in imports (e.g. ?w=800&format=webp)
    imagetools(),
    // compress images at build time
    viteImagemin({
      gifsicle: {
        optimizationLevel: 3,
        interlaced: false,
      },
      mozjpeg: {
        quality: 75,
      },
      pngquant: {
        quality: [0.7, 0.9],
      },
      svgo: {
        plugins: [
          {
            name: "preset-default",
            params: { overrides: { removeViewBox: false } },
          },
        ],
      },
      webp: {
        quality: 75,
      },
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 5177,
  },
});
