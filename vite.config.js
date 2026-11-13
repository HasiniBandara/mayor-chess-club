import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcImages = path.join(__dirname, "src", "images");
const publicDir = path.join(__dirname, "public");
const publicImages = path.join(publicDir, "images");
const mayorLogo = path.join(srcImages, "logo", "mayor.jpeg");
const publicFavicon = path.join(publicDir, "favicon.ico");

try {
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  if (fs.existsSync(srcImages)) {
    fs.cpSync(srcImages, publicImages, { recursive: true });
  }

  if (fs.existsSync(mayorLogo) && !fs.existsSync(publicFavicon)) {
    fs.copyFileSync(mayorLogo, publicFavicon);
  }
} catch (err) {
  console.warn("Notice: Asset sync helper encountered:", err);
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: "serve-src-images-fallback",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.startsWith("/images/")) {
            const cleanUrl = req.url.split("?")[0];
            const candidatePaths = [
              path.join(publicDir, cleanUrl),
              path.join(srcImages, cleanUrl.replace(/^\/images\//, "")),
            ];

            for (const filePath of candidatePaths) {
              if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
                const ext = path.extname(filePath).toLowerCase();
                const mimeTypes = {
                  ".jpg": "image/jpeg",
                  ".jpeg": "image/jpeg",
                  ".png": "image/png",
                  ".svg": "image/svg+xml",
                  ".webp": "image/webp",
                  ".gif": "image/gif",
                  ".ico": "image/x-icon",
                };
                res.setHeader("Content-Type", mimeTypes[ext] || "application/octet-stream");
                return fs.createReadStream(filePath).pipe(res);
              }
            }
          }
          next();
        });
      },
    },
  ],
});
