import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("Hostinger build output", () => {
  it("keeps production artifacts under build/", async () => {
    const projectRoot = resolve(import.meta.dirname, "../..");
    const packageJson = JSON.parse(await readFile(resolve(projectRoot, "package.json"), "utf8")) as {
      scripts: { build: string; start: string };
    };
    const prerender = await readFile(resolve(projectRoot, "scripts/prerender.mjs"), "utf8");
    const server = await readFile(resolve(projectRoot, "server/index.ts"), "utf8");

    expect(packageJson.scripts.build).toContain("../build");
    expect(packageJson.scripts.build).toContain("--outdir=build");
    expect(packageJson.scripts.start).toContain("build/index.js");
    expect(prerender).toContain('"build/index.html"');
    expect(prerender).toContain('"build/ssr/entry-server.js"');
    expect(server).toContain('path.resolve(__dirname, "..", "build")');
    expect(server).toContain("? __dirname");
  });
});
