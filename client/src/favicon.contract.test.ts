import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const projectRoot = resolve(import.meta.dirname, "..", "..");
const htmlPath = resolve(projectRoot, "client", "index.html");
const faviconPath = resolve(projectRoot, "client", "public", "assets", "casamento-inteligente-favicon.png");

const html = await readFile(htmlPath, "utf8");

describe("favicon oficial", () => {
  it("referencia a imagem enviada e o arquivo público existe", async () => {
    expect(html).toContain('href="/assets/casamento-inteligente-favicon.png"');
    await expect(access(faviconPath)).resolves.toBeUndefined();
  });
});
