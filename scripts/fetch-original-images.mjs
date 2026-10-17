/**
 * Download the exact project preview images from Sahil Kumar's previous
 * portfolio repository into Next.js public/ so the new site serves them locally.
 * Run automatically before dev/build, or with `npm run fetch:images`.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
const files = [
  "divine-events-tours-preview.jpg",
  "myastrotell.jpg",
  "chanteur-designs.jpg",
];
const outputDir = join(process.cwd(), "public", "projects", "original");
const sourceRoot =
  "https://raw.githubusercontent.com/SahilSingh-kk/sahil-kumar-portfolio/main/public/assets/projects/";

await mkdir(outputDir, { recursive: true });
let failures = 0;
for (const file of files) {
  const path = join(outputDir, file);
  try {
    const existing = await readFile(path).catch(() => null);
    if (existing?.[0] === 0xff && existing?.[1] === 0xd8) {
      console.log(`[portfolio] Using original image: ${file}`);
      continue;
    }
    const response = await fetch(sourceRoot + file, { signal: AbortSignal.timeout(25000) });
    if (!response.ok) throw Error(`HTTP ${response.status}`);
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length < 5000 || bytes[0] !== 0xff || bytes[1] !== 0xd8) {
      throw Error("Unexpected image file");
    }
    await writeFile(path, bytes);
    console.log(`[portfolio] Saved original ${file} (${bytes.length} bytes)`);
  } catch (error) {
    failures++;
    console.warn(`[portfolio] Can't fetch ${file}: ${error.message}`);
    console.warn("[portfolio] Browser will load original image from GitHub if available.");
  }
}
if (failures) {
  console.warn(`[portfolio] ${failures} images not cached. Verify your internet connection.`);
}
