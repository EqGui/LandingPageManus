import express from "express";
import { createServer } from "http";
import { existsSync } from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // A Hostinger executa build/index.js; a publicação automática executa dist/index.js
  // e disponibiliza os arquivos do frontend em dist/public.
  const autoPublishedStaticPath = path.resolve(__dirname, "public");
  const staticPath =
    process.env.NODE_ENV === "production"
      ? (existsSync(path.join(autoPublishedStaticPath, "index.html")) ? autoPublishedStaticPath : __dirname)
      : path.resolve(__dirname, "..", "build");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
