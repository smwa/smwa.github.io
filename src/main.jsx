import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./styles.css";

const root = document.getElementById("root");
const tree = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Production HTML is prerendered at build time (scripts/prerender.js), so
// hydrate it. The dev server serves an empty shell — plain render there.
if (import.meta.env.DEV) createRoot(root).render(tree);
else hydrateRoot(root, tree);
