import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const prerenderPath = resolve(import.meta.dirname, "..", "..", "scripts", "prerender.mjs");
const source = await readFile(prerenderPath, "utf8");

describe("sitemap canônico", () => {
  it("gera somente a URL principal do domínio oficial", () => {
    expect(source).toContain('const canonicalOrigin = "https://casamento-inteligente.com"');
    expect(source).toContain("<loc>${canonicalOrigin}/</loc>");
    expect(source).not.toContain("manus.space");
  });
});
