import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { PrivacyPolicy } from "./PrivacyPolicy.jsx";
import "./styles.css";

const root = document.getElementById("root");
const tree = (
  <React.StrictMode>
    <PrivacyPolicy />
  </React.StrictMode>
);

if (import.meta.env.DEV) createRoot(root).render(tree);
else hydrateRoot(root, tree);
