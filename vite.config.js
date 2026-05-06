import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Base path for assets. The GitHub Action passes VITE_BASE="/REPO/" so
  // project-page deploys (https://USER.github.io/REPO/) resolve correctly.
  // For local dev and custom-domain deploys, "/" is right.
  base: process.env.VITE_BASE || "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    // Inline anything < 4kb to reduce request count.
    assetsInlineLimit: 4096,
  },
  server: {
    port: 5173,
    open: true,
  },
});
