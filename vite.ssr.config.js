/* Build config for the prerender entry only. Produces a plain Node
   bundle in .prerender/ that scripts/prerender.js imports. */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    ssr: resolve(process.cwd(), "src/entry-server.jsx"),
    outDir: ".prerender",
    emptyOutDir: true,
    minify: false,
    rollupOptions: { output: { entryFileNames: "entry-server.js" } },
  },
});
