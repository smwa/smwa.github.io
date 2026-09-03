/* ============================================================
   Server entry — used only at build time by scripts/prerender.js
   to render static HTML into dist/. The browser never loads this.
   ============================================================ */
import React from "react";
import { renderToString } from "react-dom/server";
import { App } from "./App.jsx";
import { PrivacyPolicy } from "./PrivacyPolicy.jsx";

export const renderHome    = () => renderToString(<App />);
export const renderPrivacy = () => renderToString(<PrivacyPolicy />);
