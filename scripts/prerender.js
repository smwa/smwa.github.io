/* ============================================================
   Injects statically rendered HTML into the built pages so the
   site has real content without JavaScript — crawlers, link
   previews, and no-JS readers see the whole page. The client
   bundle then hydrates it.
   ============================================================ */
import { readFile, writeFile } from "node:fs/promises";
import { renderHome, renderPrivacy } from "../.prerender/entry-server.js";

const PLACEHOLDER = '<div id="root"></div>';

const pages = [
  ["dist/index.html",                renderHome],
  ["dist/privacy-policy/index.html", renderPrivacy],
];

for (const [file, render] of pages) {
  const shell = await readFile(file, "utf8");
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(`prerender: ${file} has no empty ${PLACEHOLDER} to fill`);
  }
  const markup = render();
  await writeFile(file, shell.replace(PLACEHOLDER, `<div id="root">${markup}</div>`));
  console.log(`prerendered ${file} (${markup.length} bytes of markup)`);
}
