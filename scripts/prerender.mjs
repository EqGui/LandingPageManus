import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = resolve(import.meta.dirname, "..");
const indexPath = resolve(projectRoot, "dist/public/index.html");
const serverEntry = resolve(projectRoot, "dist/ssr/entry-server.js");

const html = await readFile(indexPath, "utf8");
const { renderApp } = await import(pathToFileURL(serverEntry).href);
const markup = renderApp();

if (!markup || !html.includes('<div id="root"></div>')) {
  throw new Error("Não foi possível inserir o HTML pré-renderizado no documento de produção.");
}

const prerendered = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
await writeFile(indexPath, prerendered, "utf8");
