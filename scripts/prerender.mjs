import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = resolve(import.meta.dirname, "..");
const indexPath = resolve(projectRoot, "build/index.html");
const serverEntry = resolve(projectRoot, "build/ssr/entry-server.js");

const html = await readFile(indexPath, "utf8");
const { renderApp } = await import(pathToFileURL(serverEntry).href);
const markup = renderApp();

if (!markup || !html.includes('<div id="root"></div>')) {
  throw new Error("Não foi possível inserir o HTML pré-renderizado no documento de produção.");
}

const prerendered = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
await writeFile(indexPath, prerendered, "utf8");

const canonicalOrigin = "https://casamento-inteligente.com";
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${canonicalOrigin}/</loc>
  </url>
</urlset>
`;
const robots = `User-agent: *
Allow: /

Sitemap: ${canonicalOrigin}/sitemap.xml
`;

await writeFile(resolve(projectRoot, "build", "sitemap.xml"), sitemap, "utf8");
await writeFile(resolve(projectRoot, "build", "robots.txt"), robots, "utf8");
