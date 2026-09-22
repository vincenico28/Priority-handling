import fs from "node:fs";
import path from "node:path";

const distClient = path.resolve("dist/client");
const dist = path.resolve("dist");

if (fs.existsSync(distClient)) {
  fs.cpSync(distClient, dist, { recursive: true });
  console.log("[postbuild] Copied dist/client files to dist root for static hosting");
}
