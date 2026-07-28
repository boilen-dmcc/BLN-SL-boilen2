import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "static",
  // Relative base so the built site works whether it's hosted at the
  // domain root (custom domain) OR under a GitHub Pages sub-path like
  // https://boilen-dmcc.github.io/BLN-SL-boilen2/ — no hardcoded repo
  // name needed, and nothing to change later if a custom domain is added.
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
