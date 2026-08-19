import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("Google Tag Manager", () => {
  const html = readFileSync(resolve(process.cwd(), "client/index.html"), "utf8");

  it("instala um único snippet no head e um fallback noscript logo após body", () => {
    expect((html.match(/googletagmanager\.com\/gtm\.js/g) ?? [])).toHaveLength(1);
    expect((html.match(/googletagmanager\.com\/ns\.html/g) ?? [])).toHaveLength(1);
    expect(html).toContain("GTM-5ST33C22");
    expect(html.indexOf("googletagmanager.com/gtm.js")).toBeGreaterThan(html.indexOf("<head>"));
    expect(html.indexOf("googletagmanager.com/gtm.js")).toBeLessThan(html.indexOf("</head>"));
    expect(html.indexOf("<noscript>")).toBeGreaterThan(html.indexOf("<body>"));
    expect(html.indexOf("<noscript>")).toBeLessThan(html.indexOf('<div id="root">'));
  });
});
